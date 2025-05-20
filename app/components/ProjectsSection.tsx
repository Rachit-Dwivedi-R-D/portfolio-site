import React from 'react';
import Image from 'next/image';

const GlowingButton = ({
  url,
  label,
}: {
  url: string;
  label: 'GitHub' | 'Prototype';
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-4 px-4 py-2 text-white font-semibold rounded-md
                 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500
                 shadow-lg shadow-purple-500/50
                 hover:scale-105 transition-transform duration-300"
    >
      {label}
    </a>
  );
};

export const ProjectsSection = () => {
  const projects = [
    {
      title: 'Sharp Shooter - Unity FPS Game',
      description:
        'first-person shooter game where the player battles enemy robots and turrets using a pistol, machine gun, and sniper rifle. Enemies spawn from gates, and rotating pickups provide ammo and weapons. Features multiple weapons, damage system, and FPS mechanics.',
      techDetails: ['Unity Engine', 'C# scripting', 'NavMesh agent', 'Scene Optimization'],
      image: '/Sharp.png',
      githubUrl: 'https://github.com/Rachit-Dwivedi-R-D/Sharp-Shooter-Game.git',
    },
    {
      title: 'Rocket Boost - Arcade Game',
      description:
        'Unity-based game that challenges players to navigate a rocket through a sequence of dynamic, moving obstacles to successfully reach the designated landing pad. The objective is to achieve precision and timing in order to avoid collisions and complete each level.',
      techDetails: ['C# Scripting', 'Handling Player movement controls', 'Character Modeling', 'Physics System'],
      image: '/Rocket.png',
      githubUrl: 'https://github.com/Rachit-Dwivedi-R-D/Rocket_Boost_Game.git',
    },
	{
      title: 'Box Bash - Obstacle Course Game',
      description:
        'Navigate the Box through a challenging course filled with obstacles. If the player hits the obstacle it will turn red and increments the object hit number printed on the console. Make your way up to the finish line',
      techDetails: ['Player Input System', 'Movement controls', 'Creating Enviroment'],
      image: '/Box.png',
      githubUrl: 'https://github.com/Rachit-Dwivedi-R-D/Obstacle_Course_game.git',
    },
    {
      title: 'Foodiewe - Figma Mobile Design',
      description:
        'A comprehensive food delivery app design in Figma featuring splash screen, homepage, wishlist, address management, payments, customer support, and customizable order pages for a smooth user experience.',
      techDetails: ['Figma Prototyping', 'Adobe Illustrator for Logo', 'Adobe After Effects for Logo animation', 'Vector Graphics'],
      image: '/food.png',
      prototypeUrl:
        'https://www.figma.com/proto/CYuv2GpdS587tmCldTavPV/Food-app-design?page-id=0%3A1&node-id=462-1139&node-type=canvas&viewport=989%2C561%2C0.4&t=44jf7RmzC2DRc8zA-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A667',
    },
  ];

  return (
    <section id="work" className="py-12 sm:py-20 px-4 bg-[#161B22] scroll-mt-20">
		 <div className="absolute inset-0 bg-gradient-to-r from-[#001f5b] via-[#003080] to-[#001f5b] opacity-80 blur-xl animate-pulse pointer-events-none"></div>
  <div className="relative z-10 max-w-6xl mx-auto"></div>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">
          Creative Projects Showcase
        </h2>
        <div className="space-y-8 sm:space-y-12">
          {projects.map((project, idx) => (
            <div key={project.title} className="bg-[#21262D] rounded-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                  <h3 className="text-xl sm:text-2xl font-bold">{project.title}</h3>
                  <p className="text-sm sm:text-base text-gray-400">{project.description}</p>

                  {/* Technical Implementation */}
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">
                      Technical Implementation
                    </h4>
                    <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
                      {project.techDetails.map((detail) => (
                        <li key={detail} className="flex items-center gap-2">
                          <span className="text-green-400">▹</span>
                          <span className="text-gray-300">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Buttons */}
                  <div>
                    {project.githubUrl && <GlowingButton url={project.githubUrl} label="GitHub" />}
                    {idx === projects.length - 1 && project.prototypeUrl && (
                      <GlowingButton url={project.prototypeUrl} label="Prototype" />
                    )}
                  </div>
                </div>

                <div className="relative h-full min-h-[300px] lg:min-h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#21262D] via-[#21262D]/95 via-[5%] via-[#21262D]/0 to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
