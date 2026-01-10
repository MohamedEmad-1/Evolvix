import HeroSection from "./(sections)/hero/HeroSection";
import SkillsSection from "./(sections)/skills/SkillsSection";
import EncryptionSection from "./(sections)/encryption/EncryptionSection";
import ProjectsSection from "./(sections)/projects/ProjectsSection";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <HeroSection />
        <SkillsSection />
        <EncryptionSection />
        <ProjectsSection />
      </div>
    </main>
  );
}
