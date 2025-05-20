import React from 'react';

export const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Resume Button */}
      <div className="absolute top-4 right-4 sm:top-10 sm:right-10 z-50">
        <a
          href="/RD_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 rounded-md font-semibold text-white 
            bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 
            shadow-lg shadow-pink-500/40 
            hover:scale-105 transition-transform duration-300"
        >
          Resume
        </a>
      </div>

      {/* Background Video */}
      <video
        src="/game.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30 sm:opacity-40 md:opacity-50 lg:opacity-60 xl:opacity-70 hidden sm:block"
      />

      {/* Logo Link */}
      <a
        href="#"
        className="absolute top-6 left-6 z-20 bg-black px-4 py-2 rounded-full shadow-md hover:bg-gray-800 transition"
      >
        <img
          src="/Name-Logo.png"
          alt="Rachit Dwivedi Logo"
          className="w-16 h-16 object-contain max-w-full"
        />
      </a>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 overflow-hidden">
        {[
          { src: '/unity.png', position: 'top-28 left-40', delay: '0s' },
          { src: '/blender3d.png', position: 'top-32 right-40', delay: '1.5s' },
          { src: '/unreal.png', position: 'bottom-28 left-80', delay: '3s' },
          { src: '/dot-net.png', position: 'bottom-80 left-20', delay: '4.5s' },
          { src: '/after-effects.png', position: 'bottom-40 right-20', delay: '4.5s' },
          { src: '/figma.png', position: 'bottom-10 left-20', delay: '4.5s' },
          {
            src: '/c-sharp.png',
            position: 'top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2',
            delay: '2s',
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`absolute ${item.position} animate-float opacity-70`}
            style={{ animationDelay: item.delay }}
          >
            <img
              src={item.src}
              alt="Game Dev Tool Icon"
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 object-contain max-w-full"
            />
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-12 md:px-4 text-center space-y-6">
        {/* Name Section */}
        <div className="relative inline-block px-4 sm:px-0">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-75"></div>
          <h1 className="relative text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 pb-2">
            Rachit Dwivedi
          </h1>
        </div>

        {/* Role & Description */}
        <div className="space-y-4 sm:space-y-6 mt-6 sm:mt-8">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-8 sm:w-12 bg-blue-500"></span>
              <h2 className="text-xl sm:text-2xl font-light tracking-wide text-blue-400">
                Game Developer | Designer | Animator
              </h2>
              <span className="h-[1px] w-20 sm:w-12 bg-blue-500"></span>
            </div>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl px-4 sm:px-0">
              Crafting immersive gaming experiences with cutting-edge game engines,
              intuitive design, and compelling animations
            </p>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6 sm:mt-8 px-4 sm:px-0">
            {[
              'Unity',
              'Unreal Engine',
              'C#',
              '.NET',
              'Blender3D',
              'Figma',
              'Adobe Aftereffects ',
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 sm:px-4 py-1 sm:py-1.5 bg-[#1A1F2B] rounded-full text-sm font-medium text-gray-300 border border-[#2D333B] hover:border-blue-500/50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-8 sm:mt-12 px-4 sm:px-0">
          <a
            href="#work"
            className="group relative inline-flex items-center justify-center w-full sm:w-auto"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-75 group-hover:opacity-100 transition"></div>
            <span className="relative px-6 sm:px-8 py-3 bg-[#161B22] rounded-full inline-flex items-center justify-center w-full sm:w-auto">
              View My Work
              <svg
                className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </a>
          <a
            href="#contact"
            className="px-6 sm:px-8 py-3 bg-[#21262D] rounded-full hover:bg-[#2D333B] transition-colors border border-[#2D333B] hover:border-gray-600 text-center w-full sm:w-auto"
          >
            Get in Touch
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 sm:gap-6 mt-8 sm:mt-12">
          {[
            { name: 'GitHub', src: '/github.png', href: 'https://github.com/Rachit-Dwivedi-R-D' },
            {
              name: 'LinkedIn',
              src: '/linkedin.png',
              href: 'https://www.linkedin.com/in/rachit-dwivedi-b05662261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
            },
            { name: 'Email', src: '/gmail.png', href: 'mailto:rachit0official@gmail.com' },
          ].map((social) => (
            <a
              key={social.name}
              href={social.href}
              className="group relative p-2 sm:p-3 hover:text-blue-400 transition-colors"
              aria-label={social.name}
            >
              <img
                src={social.src}
                alt={social.name}
                className="w-10 h-10 object-contain group-hover:scale-110 transition-transform max-w-full"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 inset-x-0 flex flex-col items-center animate-bounce">
        <span className="text-gray-400 text-sm mb-2 text-center">Scroll to explore</span>
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};
