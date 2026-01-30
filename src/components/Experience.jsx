import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const experiences = [
    {
        company: 'BASF',
        role: 'Associate Product Manager',
        period: '2024 - Present',
        location: 'Bengaluru, India',
        type: 'Full-time',
        highlights: [
            'Led 0-to-1 product development for internal analytics platform',
            'Defined PRDs and roadmaps for cross-functional team of 8',
            'Implemented data-driven prioritization using RICE framework',
            'Reduced manual reporting time by 60% through automation',
        ],
        logo: '/images/basf.png',
    },
    {
        company: 'Infiniteworks',
        role: 'Product Intern',
        period: '2023 - 2024',
        location: 'Remote',
        type: 'Internship',
        highlights: [
            'Conducted user research with 50+ customers to identify pain points',
            'Designed and shipped 3 new features based on user feedback',
            'Created product analytics dashboard for executive decision-making',
            'Improved user onboarding completion rate by 25%',
        ],
        logo: '/images/infiniteworks.png',
    },
    {
        company: 'BidFortune',
        role: 'Product & Data Analyst',
        period: '2022 - 2023',
        location: 'Bengaluru, India',
        type: 'Full-time',
        highlights: [
            'Built SQL dashboards tracking key product metrics',
            'Analyzed user behavior data to inform product decisions',
            'Collaborated with engineering on feature specifications',
            'Presented data insights to stakeholders weekly',
        ],
        logo: '/images/bidfortune.png',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
};

export default function Experience() {
    return (
        <section
            id="experience"
            className="py-24 md:py-32"
            style={{ backgroundColor: 'var(--color-surface)' }}
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
                        Experience
                    </p>
                    <h2
                        className="text-4xl md:text-5xl font-bold"
                        style={{
                            fontFamily: 'var(--font-display)',
                            color: 'var(--color-primary)'
                        }}
                    >
                        Where I've Built Products
                    </h2>
                </motion.div>

                {/* Timeline */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="relative"
                >
                    {/* Timeline Line */}
                    <div
                        className="absolute left-0 md:left-8 top-0 bottom-0 w-px"
                        style={{ backgroundColor: 'var(--color-border)' }}
                    />

                    {/* Experience Cards */}
                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.company}
                                variants={itemVariants}
                                className="relative pl-8 md:pl-20"
                            >
                                {/* Timeline Dot */}
                                <div
                                    className="absolute left-0 md:left-8 top-0 w-4 h-4 rounded-full -translate-x-1/2 border-4"
                                    style={{
                                        backgroundColor: 'var(--color-accent)',
                                        borderColor: 'var(--color-surface)'
                                    }}
                                />

                                {/* Card */}
                                <div
                                    className="p-6 md:p-8 rounded-xl transition-all duration-300 hover:shadow-lg cursor-default group"
                                    style={{
                                        backgroundColor: 'var(--color-background)',
                                        border: '1px solid var(--color-border)'
                                    }}
                                >
                                    {/* Header */}
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                                        <div>
                                            <h3
                                                className="text-xl md:text-2xl font-bold mb-1"
                                                style={{
                                                    fontFamily: 'var(--font-display)',
                                                    color: 'var(--color-primary)'
                                                }}
                                            >
                                                {exp.role}
                                            </h3>
                                            <p
                                                className="text-lg font-medium"
                                                style={{ color: 'var(--color-accent)' }}
                                            >
                                                {exp.company}
                                            </p>
                                        </div>
                                        <div className="flex flex-wrap gap-4 text-sm" style={{ color: 'var(--color-muted)' }}>
                                            <span className="inline-flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                {exp.period}
                                            </span>
                                            <span className="inline-flex items-center gap-1">
                                                <MapPin className="w-4 h-4" />
                                                {exp.location}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Highlights */}
                                    <ul className="space-y-3">
                                        {exp.highlights.map((highlight, i) => (
                                            <li
                                                key={i}
                                                className="flex items-start gap-3"
                                                style={{ color: 'var(--color-secondary)' }}
                                            >
                                                <span
                                                    className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                                                    style={{ backgroundColor: 'var(--color-accent)' }}
                                                />
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
