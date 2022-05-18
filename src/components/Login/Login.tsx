import Content from '../UI/Content/Content';
import Main from '../UI/Main/Main';
import Wrapper from '../UI/Wrapper/Wrapper';

import LoginContent from './LoginContent/LoginContent';

const Login = () => {
	return (
		<Main>
			<Wrapper>
				<Content>
					<LoginContent />
				</Content>
			</Wrapper>
		</Main>
	);
};

export default Login;
