import { HeroSection } from './components/HeroSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CreativeCapabilitiesSection } from './components/CreativeCapabilitiesSection';
import { ContactSection } from './components/ContactSection';

export default function WebDeveloperPortfolio() {
	return (
		<main className="min-h-screen bg-[#0D1117] text-white">
			<HeroSection />
			<SkillsSection />
			<ProjectsSection />
			<CreativeCapabilitiesSection />
			<ContactSection />
		</main>
	);
}
