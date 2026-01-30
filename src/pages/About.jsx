import { motion } from 'framer-motion';
import Experience from '../components/Experience';
import Skills from '../components/Skills';

export default function About() {
    return (
        <div className="pt-32 pb-20 px-6 min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto text-center mb-20"
            >
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                    Operator. <span className="text-zinc-600">Builder.</span>
                </h1>
                <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed">
                    I sit at the intersection of <span className="text-blue-400">user needs</span>, <span className="text-blue-400">tech feasibility</span>, and <span className="text-blue-400">business viability</span>.
                    Currently building internal tools at BASF.
                </p>
            </motion.div>

            {/* Reuse Component but styled for page */}
            <Experience />
            <Skills />
        </div>
    );
}
