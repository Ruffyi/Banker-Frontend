import Content from '../../components/UI/Content/Content';
import Main from '../../components/UI/Main/Main';
import Wrapper from '../../components/UI/Wrapper/Wrapper';

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
