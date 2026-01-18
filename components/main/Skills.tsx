import React from "react";
import dynamic from "next/dynamic";
import LogoLoop from "../LogoLoop";
import SkillText from "../sub/SkillText";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiDocker,
  SiGit,
  SiWordpress,
  SiFigma,
  SiVite,
} from "react-icons/si";
import { MdSearch } from "react-icons/md";

const Orb = dynamic(() => import("@/components/Orb"), { ssr: false });

interface SkillsProps {}

const Skills: React.FC<SkillsProps> = () => {
  // Frontend technologies
  const frontendLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    {
      node: <SiNextdotjs />,
      title: "Next.js",
      href: "https://nextjs.org",
    },
    {
      node: <SiTypescript />,
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
    },
    {
      node: <SiTailwindcss />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
    { node: <SiVite />, title: "Vite", href: "https://vitejs.dev" },
    { node: <SiFigma />, title: "Figma", href: "https://figma.com" },
  ];

  // Backend technologies
  const backendLogos = [
    { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
    {
      node: <SiMongodb />,
      title: "MongoDB",
      href: "https://www.mongodb.com",
    },
    {
      node: <SiPostgresql />,
      title: "PostgreSQL",
      href: "https://www.postgresql.org",
    },
    { node: <SiGraphql />, title: "GraphQL", href: "https://graphql.org" },
    { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
    { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
  ];

  // Other/Full-Stack technologies
  const otherLogos = [
    { node: <SiWordpress />, title: "WordPress", href: "https://wordpress.org" },
    { node: <MdSearch />, title: "SEO", href: "https://support.google.com/webmasters" },
  ];

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-12 h-full relative overflow-hidden pb-20 py-20"
    >
      <div className="absolute h=full inset-0 -z-10 pointer-events-none">
        <Orb
          hue={0}
          hoverIntensity={1}
          rotateOnHover
          forceHoverState={false}
          color1="#fac852"
          color2="#e6af18"
          color3="#964300"
          className="w-full h-full"
        />
      </div>

      <div className="relative z-10 w-full">
        <SkillText />

        {/* Frontend & Backend Skills - Row 1 */}
        <div className="mt-12">
          <div style={{ height: "120px", position: "relative", overflow: "hidden" }}>
            <LogoLoop
              logos={frontendLogos}
              speed={80}
              direction="left"
              logoHeight={60}
              gap={40}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              fadeOutColor="#090201"
              ariaLabel="Frontend technologies"
              className="[&_svg]:text-gray-300 [&_svg]:hover:text-white"
              style={{ filter: "brightness(0.7)" }}
            />
          </div>
        </div>

        {/* Backend & Other Skills - Row 2 */}
        <div className="mt-12">
          <div style={{ height: "120px", position: "relative", overflow: "hidden" }}>
            <LogoLoop
              logos={[...backendLogos, ...otherLogos]}
              speed={80}
              direction="left"
              logoHeight={60}
              gap={40}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              fadeOutColor="#090201"
              ariaLabel="Backend and other technologies"
              className="[&_svg]:text-gray-300 [&_svg]:hover:text-white"
              style={{ filter: "brightness(0.7)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
