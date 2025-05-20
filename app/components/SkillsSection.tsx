import React from 'react';

export const SkillsSection = () => {
	return (
		<section className="py-12 sm:py-20 px-4 bg-[#161B22]">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-16 text-center">Skills</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
					{[
						{
							category: 'Game Engines',
							skills: [
								{ name: 'Unity Engine', level: 95 },
								{ name: 'Unreal Engine ', level: 70 },
							],
							icon: '🕹️',
							color: 'from-yellow-500 to-yellow-700',
						},
						{
							category: 'Design and Animation',
							skills: [
								{ name: 'Blender 3D', level: 80 },
								{ name: '3D Modeling ', level: 75 },
								{ name: 'Adobe Aftereffects ', level: 85 },
								{ name: 'Figma ', level: 95 },
							],
							icon: '🎨',
							color: 'from-pink-500 to-pink-700',
						},
						{
							category: 'Programming & Tools',
							skills: [
								{ name: 'C# / C++', level: 90 },
								{ name: 'UI/UX Design', level: 95 },
								{ name: 'Version Control (Git)', level: 75 },
								{ name: 'Performance Optimization', level: 80 },
							],
							icon: '💻',
							color: 'from-blue-500 to-blue-700',
						},
					].map((category) => (
						<div key={category.category} className="bg-[#21262D] rounded-lg p-6 transform hover:scale-[1.02] transition-all">
							<div className="flex items-center gap-3 mb-6">
								<span className="text-3xl">{category.icon}</span>
								<h3 className="text-xl font-bold">{category.category}</h3>
							</div>
							<div className="space-y-4">
								{category.skills.map((skill) => (
									<div key={skill.name}>
										<div className="flex justify-between text-sm mb-1">
											<span>{skill.name}</span>
											<span className="text-gray-400">{skill.level}%</span>
										</div>
										<div className="h-2 bg-[#30363D] rounded-full overflow-hidden">
											<div className={`h-full bg-gradient-to-r ${category.color} animate-expand origin-left`} style={{ width: `${skill.level}%` }}></div>
										</div>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
