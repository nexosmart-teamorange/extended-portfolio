import { ChallengesSection } from "./sections/ChallengesSection";
import { DiscussSection } from "./sections/DiscussSection";
import { EcosystemSection } from "./sections/EcosystemSection";
import { HeroSection } from "./sections/HeroSection";
import { ItemsBannerSection } from "./sections/ItemsBannerSection";
import { MarketingSection } from "./sections/MarketingSection";
import { ObjectivesSection } from "./sections/ObjectivesSection";
import { OverviewSection } from "./sections/OverviewSection";
import { ResultsSection } from "./sections/ResultsSection";
import { ReviewSection } from "./sections/ReviewSection";
import { SingleTestimonialSection } from "./sections/SingleTestimonialSection";
import { SolutionSection } from "./sections/SolutionSection";
import { SummarySection } from "./sections/SummarySection";
import { TechSection } from "./sections/TechSection";
import { UserExperienceSection } from "./sections/UserExperienceSection";

const SECTION_COMPONENTS: Record<string, (props: any) => React.ReactNode> = {
	hero: (props) => <HeroSection {...props} />,
	overview: (props) => <OverviewSection {...props} />,
	challenges: (props) => <ChallengesSection {...props} />,
	ecosystem: (props) => <EcosystemSection {...props} />,
	singleTestimonial: (props) => <SingleTestimonialSection {...props} />,
	itemsBanner: (props) => <ItemsBannerSection {...props} />,
	summary: (props) => <SummarySection {...props} />,
	tech: (props) => <TechSection {...props} />,
	review: (props) => <ReviewSection {...props} />,
	discuss: (props) => <DiscussSection {...props} />,
	objectives: (props) => <ObjectivesSection {...props} />,
	solution: (props) => <SolutionSection {...props} />,
	userExperience: (props) => <UserExperienceSection {...props} />,
	results: (props) => <ResultsSection {...props} />,
	marketing: (props) => <MarketingSection {...props} />,
};

export function renderProjectSections(
	sections: Array<{ type: string;[key: string]: any }>,
	projectFolder: string,
	mdxMap: Record<string, string>
) {
	return sections.map((section, idx) => {
		const Comp = SECTION_COMPONENTS[section.type];
		if (!Comp) {
			return (
				<section key={idx} className="py-6">
					<div className="container mx-auto text-sm text-muted-foreground">
						Unknown section type: <code>{section.type}</code>
					</div>
				</section>
			);
		}
		return <Comp key={idx} {...section} projectFolder={projectFolder} mdxMap={mdxMap} />;
	});
}
