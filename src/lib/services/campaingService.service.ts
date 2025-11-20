import type { TemplatePayload } from '$lib/interfaces/compaing.interface';
import { API_CONFIG } from '$lib/config/api.config';
class CampaignService {
	private readonly baseURL: string;

	constructor(baseURL: string = API_CONFIG.BASE_URL) {
		this.baseURL = baseURL;
	}

	async updateTemplate(campaignId: string, payload: TemplatePayload): Promise<string> {
		console.log('Updating template...', payload);
		const url = `${this.baseURL}/campaigns/${campaignId}/template`;

		const formData = new FormData();
		formData.append('x', payload.x.toString()); // x posicion del texto nombre del estudiante
		formData.append('y', payload.y.toString()); // y posicion del texto nombre del estudiante
		formData.append('font_size', payload.font_size.toString()); // tamaño del texto nombre del estudiante
		formData.append('font_family', payload.font_family); // tipo de fuente del texto nombre del estudiante
		formData.append('font_color', payload.font_color); // color del texto nombre del estudiante
		formData.append('ci_color', payload.ci_color); // color del texto ci
		formData.append('certificate', payload?.certificate || ''); // archivo de la plantilla

		try {
			const response = await fetch(url, {
				method: 'PUT',
				body: formData,
				headers: {
					Accept: 'application/json'
					// No agregamos 'Content-Type' porque el navegador la define automáticamente con el boundary correcto
				}
			});

			if (!response.ok) {
				const errorData = await response.json().catch(() => ({}));
				throw new Error(errorData.message || 'Ocurrió un error al actualizar la plantilla.');
			}

			const data = await response.json();
			return data.message || 'Plantilla actualizada correctamente.';
		} catch (error: unknown) {
			console.error('Error al actualizar la plantilla:', error);
			throw new Error(
				(error as Error).message || 'Ocurrió un error inesperado al actualizar la plantilla.'
			);
		}
	}

	async uploadStudentsFile(campaignId: string, studentsFile: File): Promise<string> {
		console.log('Uploading students file...', studentsFile);
		const url = `${this.baseURL}/campaigns/${campaignId}/students`;

		const formData = new FormData();
		formData.append('students_file', studentsFile);

		try {
			const response = await fetch(url, {
				method: 'PUT',
				body: formData,
				headers: {
					Accept: 'application/json'
				}
			});

			if (!response.ok) {
				const errorData = await response.json().catch(() => ({}));
				throw new Error(errorData.message || 'Error al subir el archivo de estudiantes.');
			}

			const data = await response.json();
			return data.message || 'Archivo de estudiantes procesado correctamente.';
		} catch (error: unknown) {
			console.error('Error al subir el archivo de estudiantes:', error);
			throw new Error(error.message || 'Ocurrió un error inesperado al subir el archivo.');
		}
	}

	async campaignMessage(campaignId: string, message: string): Promise<string> {
		console.log('message...', message);
		const url = `${this.baseURL}/campaigns/${campaignId}/message`;

		try {
			const response = await fetch(url, {
				method: 'PUT',
				body: JSON.stringify({ message: message }),
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				}
			});

			if (!response.ok) {
				const errorData = await response.json().catch(() => ({}));
				throw new Error(errorData.message || 'Error al enviar el mensaje.');
			}

			const data = await response.json();
			return data.message || 'Mensaje enviado correctamente.';
		} catch (error: unknown) {
			console.error('Error al enviar el mensaje:', error);
			throw new Error(error.message || 'Ocurrió un error inesperado al enviar el mensaje.');
		}
	}
	async campaignActivate(campaignId: string, fixed_url: string): Promise<string> {
		const url = `${this.baseURL}/campaigns/${campaignId}/activate`;
		try {
			const response = await fetch(url, {
				method: 'POST',
				body: JSON.stringify({ fixed_url: fixed_url }),
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				}
			});

			if (!response.ok) {
				const errorData = await response.json().catch(() => ({}));
				throw new Error(errorData.message || 'Error al activar la campaña.');
			}

			const data = await response.json();
			return data.message || 'Campaña activada correctamente.';
		} catch (error: unknown) {
			console.error('Error al activar la campaña:', error);
			throw new Error(error.message || 'Ocurrió un error inesperado al activar la campaña.');
		}
	}
}
export const campaignService = new CampaignService();
