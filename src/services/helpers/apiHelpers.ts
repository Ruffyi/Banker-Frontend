import axios from 'axios';

const postAxios = async (url: string, userData: object) => {
	try {
		const { data } = await axios.post(url, {
			...userData,
			headers: {
				'Content-Type': 'application/json',
			},
		});

		return data;
	} catch (err: unknown) {
		if (err instanceof Error) {
			return err.message;
		}
	}
};

export { postAxios };
