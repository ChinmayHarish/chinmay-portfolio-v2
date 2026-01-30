import { motion } from 'framer-motion';
import { ArrowUpRight, Database, Layout, Code, Play } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: 'Analytics Platform',
        category: 'Internal Tool',
        desc: 'Centralized executive dashboard reducing reporting time by 60%.',
        tech: ['React', 'SQL', 'D3.js'],
        image: '/images/project-analytics.jpg',
        colSpan: 'md:col-span-2',
        aspect: 'md:aspect-[2/1]',
    },
    {
        id: 2,
        title: 'Onboarding Flow',
        category: 'Growth',
        desc: 'Redesigned user journey increasing activation by 25%.',
        tech: ['Figma', 'A/B Testing'],
        image: '/images/project-onboarding.jpg',
        colSpan: 'md:col-span-1',
        aspect: 'md:aspect-square',
    },
    {
        id: 3,
        title: 'RICE Framework',
        category: 'Process',
        desc: 'Systematic prioritization for cross-functional roadmaps.',
        tech: ['Notion', 'Strategy'],
        image: '/images/project-rice.jpg',
        colSpan: 'md:col-span-1',
        aspect: 'md:aspect-square',
    },
    {
        id: 4,
        title: 'Customer Logic',
        category: 'Discovery',
        desc: 'Automated feedback loop to capture user insights at scale.',
        tech: ['Python', 'NLP'],
        image: '/images/project-feedback.jpg',
        colSpan: 'md:col-span-2',
        aspect: 'md:aspect-[2/1]',
    },
];

export default function Work() {
    return (
        <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-16"
            >
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Work</h1>
                <p className="text-xl text-zinc-400 max-w-2xl">
                    Selected case studies transforming ambiguity into shipping software.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {projects.map((project, i) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className={`group relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 ${project.colSpan} ${project.aspect}`}
                    >
                        {/* Image Background */}
                        <div className="absolute inset-0">
                            <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay z-10" />
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
                        </div>

                        {/* Content */}
                        <div className="relative z-20 h-full flex flex-col justify-end p-8">
                            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-blue-400 text-sm font-mono uppercase tracking-wider">{project.category}</span>
                                    <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ArrowUpRight className="w-4 h-4" />
                                    </div>
                                </div>

                                <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-zinc-300 line-clamp-2 max-w-lg mb-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                                    {project.desc}
                                </p>

                                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                                    {project.tech.map(t => (
                                        <span key={t} className="px-2 py-1 rounded bg-white/10 text-xs text-zinc-300 border border-white/5">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <a href="#" className="absolute inset-0 z-30 focus:outline-none focus:ring-4 focus:ring-blue-500/50 rounded-2xl">
                            <span className="sr-only">View {project.title}</span>
                        </a>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
