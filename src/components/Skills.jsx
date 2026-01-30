import { motion } from 'framer-motion';

const skills = [
    "Product Strategy", "user-centric design", "sql", "a/b testing",
    "roadmap planning", "jira", "user research", "figma",
    "data analytics", "stakeholder management", "go-to-market"
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-6 max-w-4xl mx-auto text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
            >
                <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent mb-4">
                    Capabilities
                </h2>
                <p className="text-zinc-500">Tools and methodologies I use to drive impact.</p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-2">
                {skills.map((skill, i) => (
                    <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="px-4 py-2 rounded-lg bg-zinc-900 border border-white/5 text-zinc-400 text-sm hover:text-white hover:border-white/20 transition-all cursor-default uppercase tracking-wider"
                    >
                        {skill}
                    </motion.span>
                ))}
            </div>
        </section>
    );
}
