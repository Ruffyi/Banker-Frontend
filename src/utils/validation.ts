import { TForm } from '../@types/shared/shared.types';

const emailValidation = (email: string) => {
	const emailRegExp =
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	if (!email.trim()) {
		return { status: true, message: "Email Input can't be empty." };
	}

	if (!email.match(emailRegExp)) {
		return { status: true, message: 'Invalid Email Address.' };
	}

	return { status: false, message: '' };
};

const passwordValidation = (password: string) => {
	if (!password.trim()) {
		return { status: true, message: "Password Input can't be empty." };
	}

	if (password.length < 6) {
		return { status: true, message: 'Password must have minimum 6 letters.' };
	}

	return { status: false, message: '' };
};

const passwordConfirmValidation = (
	password: string,
	passwordConfirm: string
) => {
	if (!passwordConfirm.trim()) {
		return { status: true, message: "PasswordConfirm Input can't be empty." };
	}

	if (passwordConfirm.length < 6) {
		return { status: true, message: 'Password must have minimum 6 letters.' };
	}

	if (passwordConfirm !== password) {
		return { status: true, message: 'Passwords must be the same.' };
	}

	return { status: false, message: '' };
};

const validationFormData = (data: TForm) => {
	const { email, password, passwordConfirm } = data;

	const errorObject = {
		email: { status: true, message: '' },
		password: { status: true, message: '' },
		passwordConfirm: { status: true, message: '' },
	};

	errorObject.email = emailValidation(email);
	errorObject.password = passwordValidation(password);
	errorObject.passwordConfirm = passwordConfirmValidation(
		password,
		passwordConfirm
	);

	return errorObject;
};

export { validationFormData };
