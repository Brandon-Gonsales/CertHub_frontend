export interface User {
	id: string;
	email: string;
}

export interface UserCreate {
	full_name: string;
	email: string;
	password: string;
}
