import { default as bemCssModules } from 'bem-css-modules';
import { default as ContentStyles } from './Content.module.scss';

import { TChildrenRoot } from '../../../@types/shared/shared.types';

const styled = bemCssModules(ContentStyles);

const Content = ({ children }: TChildrenRoot) => {
	return (
		<div className={styled('')} data-testid='content'>
			{children}
		</div>
	);
};

export default Content;
