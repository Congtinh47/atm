export const lastHusmanTransaction = (str: string) => {
	return str.length > 300
		? `...${str.substr(str.length - 300, str.length - 1)}`
		: str;
};
