import { default as bemCssModules } from 'bem-css-modules';
import { default as ProfileStyles } from './Profile.module.scss';

import Content from '../../components/UI/Content/Content';
import Main from '../../components/UI/Main/Main';
import Wrapper from '../../components/UI/Wrapper/Wrapper';
import Navigation from '../../layout/Navigation/Navigation';
import UserProfile from '../../components/UserProfile/UserProfile';

const styled = bemCssModules(ProfileStyles);

const Profile = () => {
	return (
		<Main>
			<Wrapper>
				<Content>
					<section className={styled()}>
						<div className={styled('container')}>
							<Navigation />
							<UserProfile />
						</div>
					</section>
				</Content>
			</Wrapper>
		</Main>
	);
};

export default Profile;
