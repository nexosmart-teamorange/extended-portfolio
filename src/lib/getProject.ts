import fs from "node:fs";
import path from "node:path";

const PROJECTS_DIR = path.join(process.cwd(), "src", "projects");
// If later you move it to root, change to: path.join(process.cwd(), "projects")

export type ProjectSection = {
	type: string;
	[key: string]: any;
};

export type ProjectMeta = {
	slug: string;
	title: string;
	accent: string;
	description?: string;
	tags?: string[];
	sections?: ProjectSection[];
	folder: string;
};

export function getProjectSlugs(): string[] {
	return fs
		.readdirSync(PROJECTS_DIR, { withFileTypes: true })
		.filter((d) => d.isDirectory())
		.map((d) => d.name);
}

export function getProjectBySlug(slug: string): ProjectMeta | null {
	const folder = path.join(PROJECTS_DIR, slug);
	const jsonPath = path.join(folder, "index.json");

	if (!fs.existsSync(jsonPath)) return null;

	const file = fs.readFileSync(jsonPath, "utf8");
	const data = JSON.parse(file);

	return {
		slug,
		...data,
		folder,
	};
}

export function getMdxFromProjectFolder(folder: string, fileName: string): string | null {
	const full = path.join(folder, fileName);
	if (!fs.existsSync(full)) return null;
	return fs.readFileSync(full, "utf8");
}