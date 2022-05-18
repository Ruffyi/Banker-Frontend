import { default as bemCssModules } from 'bem-css-modules';
import { default as WrapperStyles } from './Wrapper.module.scss';

import { TWrapper } from './Wrapper.types';

const styled = bemCssModules(WrapperStyles);

const Wrapper = ({ children }: TWrapper) => {
	return <div className={styled('')}>{children}</div>;
};

export default Wrapper;
