import { apiCertHub } from '$lib/config/apiCertHub.config';
import type { LoginCredentials, LoginResponse, User } from '$lib/interfaces';

export class AuthService {
	private static readonly TOKEN_KEY = 'auth_token';
	private static readonly USER_KEY = 'user_data';

	static getToken(): string | null {
		try {
			const token = localStorage.getItem(this.TOKEN_KEY);

			if (!token) {
				return null;
			}

			return token;
		} catch (error) {
			console.warn('Error accediendo al localStorage:', error);
			return null;
		}
	}

	static setToken(token: string): void {
		try {
			localStorage.setItem(this.TOKEN_KEY, token);
		} catch (error) {
			console.warn('Error guardando token en localStorage:', error);
		}
	}

	static getUser(): User | null {
		try {
			const userData = localStorage.getItem(this.USER_KEY);
			return userData ? JSON.parse(userData) : null;
		} catch (error) {
			console.warn('Error obteniendo datos del usuario:', error);
			return null;
		}
	}

	static setUser(user: User): void {
		try {
			localStorage.setItem(this.USER_KEY, JSON.stringify(user));
		} catch (error) {
			console.warn('Error guardando datos del usuario:', error);
		}
	}

	static clearToken(): void {
		try {
			localStorage.removeItem(this.TOKEN_KEY);
			localStorage.removeItem(this.USER_KEY);
		} catch (error) {
			console.warn('Error limpiando datos de autenticación:', error);
		}
	}

	static isAuthenticated(): boolean {
		return this.getToken() !== null;
	}

	// Método para login
	static async login(credentials: LoginCredentials): Promise<LoginResponse> {
		try {
			const response = await apiCertHub.postPublic<LoginResponse>('/auth/login', credentials);

			// Guardar token y datos del usuario
			this.setToken(response.accessToken);
			const user = await apiCertHub.get<User>('/auth/login');
			this.setUser(user);

			return response;
		} catch (error) {
			// Asegurar que no queden datos residuales en caso de error
			this.clearToken();
			throw error;
		}
	}

	// Método para logout
	static async logout(): Promise<void> {
		try {
			// Si tienes un endpoint de logout en el backend, puedes llamarlo aquí
			// await apiAvicor.post('/auth/logout', {});

			this.clearToken();
		} catch (error) {
			// Limpiar datos locales incluso si falla la llamada al backend
			this.clearToken();
			console.warn('Error durante el logout:', error);
		}
	}
}
