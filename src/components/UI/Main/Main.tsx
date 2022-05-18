import { default as bemCssModules } from 'bem-css-modules';
import { default as MainStyles } from './Main.module.scss';

import { TChildrenRoot } from '../../../@types/shared/shared.types';

const styled = bemCssModules(MainStyles);

const Main = ({ children }: TChildrenRoot) => {
	return <main className={styled('')}>{children}</main>;
};

export default Main;
