import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const projects = [
    {
        title: 'Analytics Dashboard Platform',
        description: 'Led the development of an internal analytics platform that consolidated multiple data sources into a unified dashboard, enabling real-time decision-making for executives.',
        impact: 'Reduced reporting time by 60%',
        role: 'Product Manager',
        tags: ['Product Strategy', 'Data Analytics', 'SQL', 'Stakeholder Management'],
        image: '/images/project-analytics.jpg',
        color: '#2563EB',
    },
    {
        title: 'User Onboarding Redesign',
        description: 'Conducted user research and redesigned the onboarding flow to reduce friction and improve first-time user experience.',
        impact: '25% increase in completion rate',
        role: 'Product Lead',
        tags: ['User Research', 'UX Design', 'A/B Testing', 'Metrics'],
        image: '/images/project-onboarding.jpg',
        color: '#059669',
    },
    {
        title: 'Feature Prioritization Framework',
        description: 'Implemented RICE prioritization framework to systematically evaluate and rank feature requests, improving roadmap clarity.',
        impact: 'Aligned 3 teams on roadmap',
        role: 'PM Process',
        tags: ['RICE Framework', 'Roadmapping', 'Stakeholder Alignment'],
        image: '/images/project-rice.jpg',
        color: '#7C3AED',
    },
    {
        title: 'Customer Feedback Loop',
        description: 'Built a systematic customer feedback collection and analysis process, turning qualitative insights into actionable product improvements.',
        impact: '50+ user interviews conducted',
        role: 'Discovery Lead',
        tags: ['User Research', 'Customer Discovery', 'Data Synthesis'],
        image: '/images/project-feedback.jpg',
        color: '#DC2626',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

export default function Projects() {
    return (
        <section
            id="projects"
            className="py-24 md:py-32"
            style={{ backgroundColor: 'var(--color-background)' }}
        >
            <div className="max-w-6xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <p
                        className="text-sm font-medium tracking-widest uppercase mb-4"
                        style={{ color: 'var(--color-accent)' }}
                    >
                        Projects
                    </p>
                    <h2
                        className="text-4xl md:text-5xl font-bold mb-4"
                        style={{
                            fontFamily: 'var(--font-display)',
                            color: 'var(--color-primary)'
                        }}
                    >
                        Products I've Shaped
                    </h2>
                    <p
                        className="text-lg max-w-2xl"
                        style={{ color: 'var(--color-secondary)' }}
                    >
                        From 0→1 launches to optimization projects, here's the work that demonstrates my product thinking.
                    </p>
                </motion.div>

                {/* Project Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-8"
                >
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.title}
                            variants={cardVariants}
                            className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2"
                            style={{
                                backgroundColor: 'var(--color-surface)',
                                border: '1px solid var(--color-border)'
                            }}
                        >
                            {/* Color Accent Bar */}
                            <div
                                className="h-1 w-full"
                                style={{ backgroundColor: project.color }}
                            />

                            {/* Content */}
                            <div className="p-6 md:p-8">
                                {/* Role Badge */}
                                <span
                                    className="inline-block px-3 py-1 text-xs font-medium rounded-full mb-4"
                                    style={{
                                        backgroundColor: `${project.color}15`,
                                        color: project.color
                                    }}
                                >
                                    {project.role}
                                </span>

                                {/* Title */}
                                <h3
                                    className="text-xl md:text-2xl font-bold mb-3 group-hover:text-opacity-80 transition-colors"
                                    style={{
                                        fontFamily: 'var(--font-display)',
                                        color: 'var(--color-primary)'
                                    }}
                                >
                                    {project.title}
                                    <ArrowUpRight
                                        className="inline-block w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                                        style={{ color: project.color }}
                                    />
                                </h3>

                                {/* Description */}
                                <p
                                    className="mb-4 leading-relaxed"
                                    style={{ color: 'var(--color-secondary)' }}
                                >
                                    {project.description}
                                </p>

                                {/* Impact */}
                                <div
                                    className="inline-flex items-center gap-2 px-3 py-2 rounded-lg mb-6"
                                    style={{ backgroundColor: 'var(--color-background)' }}
                                >
                                    <span className="text-lg">📈</span>
                                    <span
                                        className="text-sm font-semibold"
                                        style={{ color: project.color }}
                                    >
                                        {project.impact}
                                    </span>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 text-xs font-medium rounded-full"
                                            style={{
                                                backgroundColor: 'var(--color-background)',
                                                color: 'var(--color-muted)'
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
