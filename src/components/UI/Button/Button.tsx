import { default as bemCssModules } from 'bem-css-modules';
import { default as ButtonStyles } from './Button.module.scss';

import { TButton } from './Button.types';

const styled = bemCssModules(ButtonStyles);

bemCssModules.setSettings({
	modifierDelimiter: '--',
});

const Button = ({ title, modifier }: TButton) => {
	return <button className={styled('', { [modifier]: true })}>{title}</button>;
};

export default Button;
