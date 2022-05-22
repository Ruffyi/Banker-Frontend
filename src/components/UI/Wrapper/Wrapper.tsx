import { default as bemCssModules } from 'bem-css-modules';
import { default as WrapperStyles } from './Wrapper.module.scss';

import { TChildrenRoot } from '../../../@types/shared/shared.types';

const styled = bemCssModules(WrapperStyles);

const Wrapper = ({ children }: TChildrenRoot) => {
	return (
		<div className={styled('')} data-testid='wrapper'>
			{children}
		</div>
	);
};

export default Wrapper;
