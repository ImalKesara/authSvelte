import type { PageServerLoad } from './$types.js';
import { setError, superValidate } from 'sveltekit-superforms';
import { formSchema } from './schema';
import { zod } from 'sveltekit-superforms/adapters';
import type { Actions } from './$types.js';
import { fail, redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(formSchema))
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(formSchema));
		if (!form.valid) {
			return fail(400, {
				form
			});
		}
		//login account with supabase
		const supabase = event.locals.supabase;
		const { email, password } = form.data;
		const { error } = await supabase.auth.signInWithPassword({ email, password });
		if (error) {
			return setError(form, 'password', 'Invalid email or password');
		} else {
			return redirect(303, '/');
		}
	}
};
