import { getProjectBySlug, getProjectSlugs, getMdxFromProjectFolder } from "@/lib/getProject";
import { ProjectRenderer } from "@/components/projects/ProjectRenderer";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
	const slugs = getProjectSlugs();
	return slugs.map((slug) => ({ slug }));
}

export default async function ProjectPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;

	const project = getProjectBySlug(slug);
	if (!project) return notFound();

	// preload MDX (server-side)
	const mdxMap: Record<string, string> = {};
	project.sections?.forEach((section) => {
		if (section.mdx) {
			const content = getMdxFromProjectFolder(project.folder, section.mdx);

			if (content) {
				mdxMap[section.mdx] = content;
			}
		}
	});

	return <ProjectRenderer project={project} mdxMap={mdxMap} />;
}
