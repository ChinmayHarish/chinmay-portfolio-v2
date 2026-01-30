import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '../lib/utils';

const projects = [
    {
        title: 'Analytics Platform',
        desc: 'Consolidated data sources for real-time executive decision making.',
        tags: ['Strategy', 'SQL'],
        className: 'md:col-span-2',
        image: '/images/project-analytics.jpg'
    },
    {
        title: 'Onboarding Flow',
        desc: 'Redesigned user journey increasing completion by 25%.',
        tags: ['UX', 'Growth'],
        className: 'md:col-span-1',
        image: '/images/project-onboarding.jpg'
    },
    {
        title: 'RICE Framework',
        desc: 'Systematic feature prioritization for cross-functional teams.',
        tags: ['Process', 'Roadmap'],
        className: 'md:col-span-1',
        image: '/images/project-rice.jpg'
    },
    {
        title: 'Customer Feedback',
        desc: 'Automated feedback loop to capture user insights at scale.',
        tags: ['Discovery', 'Automation'],
        className: 'md:col-span-2',
        image: '/images/project-feedback.jpg'
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
            >
                <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
                    Selected Work
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {projects.map((project, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className={cn(
                            "group relative overflow-hidden rounded-xl border border-white/10 bg-zinc-900/50 hover:bg-zinc-800/50 transition-colors",
                            project.className,
                            "aspect-[16/9] md:aspect-auto md:h-80"
                        )}
                    >
                        {/* Background Image with Overlay */}
                        <div className="absolute inset-0 z-0">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500 group-hover:scale-105 transform"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />
                        </div>

                        <div className="relative z-10 h-full flex flex-col justify-end p-6">
                            <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                                <div className="flex items-center gap-2 mb-2">
                                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                    <ArrowUpRight className="w-4 h-4 text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <p className="text-zinc-400 text-sm mb-4 max-w-md">{project.desc}</p>
                                <div className="flex gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs px-2 py-1 rounded-md bg-white/10 text-zinc-300 border border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
