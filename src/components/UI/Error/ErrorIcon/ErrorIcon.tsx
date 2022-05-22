import { default as bemCssModules } from 'bem-css-modules';
import { default as ErrorIconStyles } from './../Error.module.scss';

import { TErrorIcon } from '../types/ErrorIcon.types';

const styled = bemCssModules(ErrorIconStyles);

const ErrorIcon = ({ icon }: TErrorIcon) => {
	return <div className={styled('icon')} data-testid='erroricon'>{icon}</div>;
};

export default ErrorIcon;
