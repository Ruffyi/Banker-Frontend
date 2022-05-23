import { default as bemCssModules } from 'bem-css-modules';
import { default as NavigationStyles } from './Navigation.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faDashboard,
	faWallet,
	faCircle,
	faUser,
	faSignOut,
	faHamburger,
	faClose,
} from '@fortawesome/free-solid-svg-icons';

import BankerLogo from './../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const styled = bemCssModules(NavigationStyles);

bemCssModules.setSettings({
	modifierDelimiter: '--',
});

const Navigation = () => {
	const [mobile, setMobile] = useState(false);

	const handleMobileViewChange = () => {
		setMobile(mobile => !mobile);
	};

	return (
		<>
			<nav className={styled('', { mobile })}>
				<div className={styled('logo')}>
					<img src={BankerLogo} alt='Banker home' />
				</div>
				<ul className={styled('list')}>
					<li className={styled('item')}>
						<Link to='/dashboard' className={styled('link')}>
							<FontAwesomeIcon icon={faDashboard} className={styled('icon')} />
							Dashboard
						</Link>
					</li>
					<li className={styled('item')}>
						<Link to='/wallet' className={styled('link')}>
							<FontAwesomeIcon icon={faWallet} className={styled('icon')} />
							Wallet
						</Link>
					</li>
					<li className={styled('item')}>
						<Link to='/statistics' className={styled('link')}>
							<FontAwesomeIcon icon={faCircle} className={styled('icon')} />
							Statistics
						</Link>
					</li>
					<li className={styled('item')}>
						<Link to='/profile' className={styled('link')}>
							<FontAwesomeIcon icon={faUser} className={styled('icon')} />
							User
						</Link>
					</li>
				</ul>
				<div className={styled('signout')}>
					<Link to='/login' className={styled('link')}>
						<FontAwesomeIcon icon={faSignOut} className={styled('icon')} />
						Log out
					</Link>
				</div>
			</nav>
			<button className={styled('hamburger')} onClick={handleMobileViewChange}>
				<FontAwesomeIcon
					icon={mobile ? faClose : faHamburger}
					className={styled('burger')}
				/>
			</button>
		</>
	);
};

export default Navigation;
