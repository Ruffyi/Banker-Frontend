import Cookies from 'universal-cookie';

const saveCookie = <T>(cookieName: string, value: T) => {
	const cookies = new Cookies();
	cookies.set(cookieName, value);
};

const deleteCookie = (cookieName: string) => {
	const cookies = new Cookies();
	cookies.remove(cookieName);
};

export { saveCookie, deleteCookie };
