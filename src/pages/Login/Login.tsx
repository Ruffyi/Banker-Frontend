import Content from '../../components/UI/Content/Content';
import Main from '../../components/UI/Main/Main';
import Wrapper from '../../components/UI/Wrapper/Wrapper';

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
