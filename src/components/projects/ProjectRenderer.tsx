import { ProjectMeta } from "@/lib/getProject";
import { renderProjectSections } from "./sections";

export function ProjectRenderer({
	project,
	mdxMap = {},
}: {
	project: ProjectMeta;
	mdxMap?: Record<string, string>;
}) {
	return (
		<main
			className="min-h-screen"
			style={{
				"--color-accent": `hsl(${project.accent ?? "0 0% 0%"})`,
			} as React.CSSProperties}
		>
			{renderProjectSections(project.sections ?? [], project.folder, mdxMap)}
		</main>
	);
}
