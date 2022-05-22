import { ReactNode } from 'react';

type TChildrenRoot = {
	children: ReactNode;
};

type TForm = {
	email: string;
	password: string;
	passwordConfirm: string;
};

export type { TChildrenRoot, TForm };
