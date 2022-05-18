import Content from '../UI/Content/Content';
import Main from '../UI/Main/Main';
import Wrapper from '../UI/Wrapper/Wrapper';

import RegisterContent from './RegisterContent/RegisterContent';

const Register = () => {
	return (
		<Main>
			<Wrapper>
				<Content>
					<RegisterContent />
				</Content>
			</Wrapper>
		</Main>
	);
};

export default Register;
