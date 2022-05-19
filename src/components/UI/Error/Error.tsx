import { default as bemCssModules } from 'bem-css-modules';
import { default as ErrorStyles } from './Error.module.scss';

import { TError } from './Error.types';

const styled = bemCssModules(ErrorStyles);

const Error = ({ message }: TError) => {
	return (
		<p aria-label='Error' className={styled('')}>
			{message}
		</p>
	);
};

export default Error;
