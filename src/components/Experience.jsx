import { motion } from 'framer-motion';

const experiences = [
    {
        company: 'BASF',
        role: 'Associate Product Manager',
        period: '2024 - Present',
        description: 'Leading internal analytics platform development. Defined PRDs for 8-person team. Reduced reporting time by 60%.',
    },
    {
        company: 'Infiniteworks',
        role: 'Product Intern',
        period: '2023 - 2024',
        description: 'Shipped 3 user-requested features. Improved onboarding completion by 25%.',
    },
    {
        company: 'BidFortune',
        role: 'Product & Data Analyst',
        period: '2022 - 2023',
        description: 'Built SQL dashboards for key metrics. Analyzed user behavior to inform product strategy.',
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-24 px-6 max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
            >
                <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
                    Experience
                </h2>
            </motion.div>

            <div className="relative border-l border-zinc-800 ml-3 space-y-12">
                {experiences.map((exp, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="relative pl-8"
                    >
                        {/* Dot */}
                        <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-zinc-900 border border-zinc-600 ring-4 ring-zinc-900" />

                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                            <h3 className="text-xl font-semibold text-zinc-100">{exp.role}</h3>
                            <span className="text-sm font-mono text-zinc-500">{exp.period}</span>
                        </div>

                        <p className="text-zinc-400 font-medium mb-2">{exp.company}</p>
                        <p className="text-zinc-500 leading-relaxed max-w-2xl">{exp.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
