import { default as bemCssModules } from 'bem-css-modules';
import { default as DashboardStyles } from './Dashboard.module.scss';

import Content from '../../components/UI/Content/Content';
import Main from '../../components/UI/Main/Main';
import Wrapper from '../../components/UI/Wrapper/Wrapper';
import Navigation from './../../layout/Navigation/Navigation';

const styled = bemCssModules(DashboardStyles);

const Dashboard = () => {
	return (
		<Main>
			<Wrapper>
				<Content>
					<section className={styled()}>
						<div className={styled('container')}>
							<Navigation />
						</div>
					</section>
				</Content>
			</Wrapper>
		</Main>
	);
};

export default Dashboard;
