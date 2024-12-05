import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Portfolio1 from "@/assets/images/portfolio1new.png";
import Portfolio2 from "@/assets/images/portfolio2new.png";
import Portfolio3 from "@/assets/images/portfolio3new.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "3D Portfolio",
    year: "2024",
    title: "Three.js portfolio",
    results: [
      {
        title: "Create a dynamic environment with interactive 3D elements",
      },
      {
        title: "Implement hover effects, clickable objects.",
      },
      {
        title:
          "Use low-poly models to ensure smooth functionality across devices",
      },
    ],
    link: "https://anik8patil-3d-portfolio.vercel.app/",
    image: Portfolio1,
  },
  {
    company: "Portfolio",
    year: "2024",
    title: "React.js Portfolio",
    results: [
      { title: "Created responsive portfolio" },
      { title: "Implemented hover effects" },
      { title: "Smooth transitions accross devices" },
    ],
    link: "https://aniketpatil-portfolio.vercel.app/",
    image: Portfolio2,
  },
  {
    company: "CarePulse",
    year: "2024",
    title: "Dental health care",
    results: [
      { title: "Build an intuitive dashboard for appointment booking" },
      { title: "Real-time notifications for appointments and reminders" },
      { title: "Used Appwrite to storing and handling patient info." },
    ],
    link: "https://care-pulse-lemon.vercel.app/",
    image: Portfolio3,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16  lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Real-world Results"
          description="See how I transformed concepts into engaging digital experiences"
        />
        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit live site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
