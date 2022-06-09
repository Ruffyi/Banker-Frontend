import { default as bemCssModules } from 'bem-css-modules';
import { default as UserProfileStyles } from './UserProfile.module.scss';

const styled = bemCssModules(UserProfileStyles);

const UserProfile = () => {
	return (
		<div className={styled('')}>
			<h1 className={styled('title')}>Profile</h1>
		</div>
	);
};

export default UserProfile;
