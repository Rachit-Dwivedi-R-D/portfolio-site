import React from 'react';

export const CreativeCapabilitiesSection = () => {
	return (
		<section className="py-12 sm:py-20 px-4 bg-[#0D1117]">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Creative Capabilities</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
					{[
						{
							title: 'Game Development',
							icon: '🕹️',
							features: ['Unity 3D & C#', 'NavMesh & AI', 'Physics & Mechanics'],
						},
						{
							title: 'UI/UX Design',
							icon: '🎨',
							features: ['Figma Prototyping', 'Responsive Design', 'User-Centered Interfaces'],
						},
						{
							title: 'Animation & Rigging',
							icon: '⚙️',
							features: ['Blender Rigging', '3D Character Animation', 'Motion Graphics'],
						},
						{
							title: 'Interaction Design',
							icon: '🧩',
							features: ['Microinteractions', 'Interactive Prototypes', 'After Effects Animations'],
						},
						{
							title: 'Performance Optimization',
							icon: '🚀',
							features: ['Scene Optimization', 'Frame Rate Stability', 'Memory Management'],
						},
						{
							title: 'Cross-Platform Delivery',
							icon: '🌐',
							features: ['Mobile & Web Builds', 'Responsive Game UI', 'Export Pipelines'],
						},
					].map((category) => (
						<div key={category.title} className="group bg-[#161B22] p-6 rounded-lg hover:bg-[#21262D] transition-all">
							<div className="text-3xl mb-4">{category.icon}</div>
							<h3 className="text-xl font-bold mb-3">{category.title}</h3>
							<ul className="space-y-2">
								{category.features.map((feature) => (
									<li key={feature} className="text-gray-400 group-hover:text-gray-300 transition-colors">
										{feature}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
