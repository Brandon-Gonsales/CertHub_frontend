export interface TemplateConfig {
	imageFile: File | null;
	imageUrl: string | null;
	overlayText: string;
	yOffset: number;
	xOffset: number;
	fontSize: number;
	fontIndex: number;
	ci: string;
	ciXOffset: number;
	ciYOffset: number;
}

export interface ExcelData {
	file: File | null;
	json: unknown[];
	headers: string[];
}

export const FONTS = [
	'Inter, system-ui, sans-serif', // "000"
	'Poppins, system-ui, sans-serif', // "001"
	'Roboto, system-ui, sans-serif', // "002"
	'Montserrat, system-ui, sans-serif', // "003"
	'Playfair Display, Georgia, serif', // "004"
	'Lora, Georgia, serif' // "005"
];
