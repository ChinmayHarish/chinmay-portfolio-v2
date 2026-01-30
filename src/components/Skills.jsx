import { motion } from 'framer-motion';
import {
    Target,
    BarChart3,
    Users,
    FileText,
    Database,
    Lightbulb,
    GitBranch,
    Presentation,
    Search,
    TrendingUp
} from 'lucide-react';

const skillCategories = [
    {
        title: 'Product Management',
        icon: Target,
        skills: [
            'Product Strategy & Vision',
            'Roadmap Planning',
            'RICE Prioritization',
            'PRD Writing',
            'Feature Specification',
            'Go-to-Market Strategy',
        ],
        color: '#2563EB',
    },
    {
        title: 'User Research',
        icon: Users,
        skills: [
            'Customer Interviews',
            'User Personas',
            'Journey Mapping',
            'Usability Testing',
            'Survey Design',
            'Competitive Analysis',
        ],
        color: '#059669',
    },
    {
        title: 'Data & Analytics',
        icon: BarChart3,
        skills: [
            'SQL & Data Querying',
            'Product Analytics',
            'A/B Testing',
            'Metrics & KPIs',
            'Dashboard Design',
            'Data-Driven Decisions',
        ],
        color: '#7C3AED',
    },
    {
        title: 'Tools & Collaboration',
        icon: GitBranch,
        skills: [
            'Figma & Design Tools',
            'Jira & Agile',
            'Notion & Documentation',
            'Amplitude & Mixpanel',
            'Miro & Whiteboards',
            'Stakeholder Management',
        ],
        color: '#DC2626',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
};

export default function Skills() {
    return (
        <section
            id="skills"
            className="py-24 md:py-32"
            style={{ backgroundColor: 'var(--color-surface)' }}
        >
            <div className="max-w-6xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p
                        className="text-sm font-medium tracking-widest uppercase mb-4"
                        style={{ color: 'var(--color-accent)' }}
                    >
                        Skills & Toolkit
                    </p>
                    <h2
                        className="text-4xl md:text-5xl font-bold mb-4"
                        style={{
                            fontFamily: 'var(--font-display)',
                            color: 'var(--color-primary)'
                        }}
                    >
                        My PM Toolkit
                    </h2>
                    <p
                        className="text-lg max-w-2xl mx-auto"
                        style={{ color: 'var(--color-secondary)' }}
                    >
                        The methodologies, tools, and skills I use to ship great products.
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {skillCategories.map((category) => {
                        const IconComponent = category.icon;
                        return (
                            <motion.div
                                key={category.title}
                                variants={cardVariants}
                                className="p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                                style={{
                                    backgroundColor: 'var(--color-background)',
                                    border: '1px solid var(--color-border)'
                                }}
                            >
                                {/* Icon */}
                                <div
                                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                                    style={{ backgroundColor: `${category.color}15` }}
                                >
                                    <IconComponent
                                        className="w-6 h-6"
                                        style={{ color: category.color }}
                                    />
                                </div>

                                {/* Title */}
                                <h3
                                    className="text-lg font-bold mb-4"
                                    style={{
                                        fontFamily: 'var(--font-display)',
                                        color: 'var(--color-primary)'
                                    }}
                                >
                                    {category.title}
                                </h3>

                                {/* Skills List */}
                                <ul className="space-y-2">
                                    {category.skills.map((skill) => (
                                        <li
                                            key={skill}
                                            className="flex items-center gap-2 text-sm"
                                            style={{ color: 'var(--color-secondary)' }}
                                        >
                                            <span
                                                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                                style={{ backgroundColor: category.color }}
                                            />
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
