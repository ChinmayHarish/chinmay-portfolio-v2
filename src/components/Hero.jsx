import { motion } from 'framer-motion';
import { ArrowDown, FileText, Linkedin, Github, Mail } from 'lucide-react';

export default function Hero() {
    return (
        <section
            id="hero"
            className="min-h-screen flex flex-col justify-center relative overflow-hidden"
            style={{ backgroundColor: 'var(--color-background)' }}
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />

            <div className="max-w-6xl mx-auto px-6 py-24 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="space-y-6"
                >
                    {/* Profile Image */}
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-br from-[var(--color-accent)] to-purple-600">
                            <img
                                src="/images/profile.jpg"
                                alt="Chinmay Harish"
                                className="w-full h-full object-cover rounded-full border-4 border-[var(--color-background)]"
                            />
                        </div>
                    </motion.div>

                    {/* Greeting */}
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-sm font-medium tracking-widest uppercase"
                        style={{ color: 'var(--color-accent)' }}
                    >
                        Associate Product Manager
                    </motion.p>

                    {/* Name */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
                        style={{
                            fontFamily: 'var(--font-display)',
                            color: 'var(--color-primary)'
                        }}
                    >
                        Chinmay Harish
                    </motion.h1>

                    {/* Tagline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl md:text-2xl max-w-2xl leading-relaxed"
                        style={{ color: 'var(--color-secondary)' }}
                    >
                        I build products from 0→1, turning user problems into
                        data-driven solutions that scale.
                    </motion.p>

                    {/* Stats/Highlights */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-wrap gap-8 pt-4"
                    >
                        <div>
                            <p className="text-3xl font-bold" style={{ color: 'var(--color-accent)' }}>0→1</p>
                            <p className="text-sm" style={{ color: 'var(--color-muted)' }}>Product Launches</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold" style={{ color: 'var(--color-accent)' }}>Data-Driven</p>
                            <p className="text-sm" style={{ color: 'var(--color-muted)' }}>Decision Making</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold" style={{ color: 'var(--color-accent)' }}>User-First</p>
                            <p className="text-sm" style={{ color: 'var(--color-muted)' }}>Approach</p>
                        </div>
                    </motion.div>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-wrap gap-4 pt-8"
                    >
                        <a
                            href="#experience"
                            className="inline-flex items-center gap-2 px-6 py-3 font-medium text-white rounded-lg transition-all duration-200 hover:scale-105 cursor-pointer"
                            style={{ backgroundColor: 'var(--color-accent)' }}
                        >
                            View My Work
                            <ArrowDown className="w-4 h-4" />
                        </a>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 font-medium rounded-lg border-2 transition-all duration-200 hover:scale-105 cursor-pointer"
                            style={{
                                borderColor: 'var(--color-primary)',
                                color: 'var(--color-primary)'
                            }}
                        >
                            <FileText className="w-4 h-4" />
                            Resume
                        </a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="flex gap-4 pt-8"
                    >
                        <a
                            href="https://linkedin.com/in/chinmayharish"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full transition-all duration-200 hover:scale-110 cursor-pointer"
                            style={{ backgroundColor: 'var(--color-border)' }}
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-5 h-5" style={{ color: 'var(--color-primary)' }} />
                        </a>
                        <a
                            href="https://github.com/ChinmayHarish"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full transition-all duration-200 hover:scale-110 cursor-pointer"
                            style={{ backgroundColor: 'var(--color-border)' }}
                            aria-label="GitHub"
                        >
                            <Github className="w-5 h-5" style={{ color: 'var(--color-primary)' }} />
                        </a>
                        <a
                            href="mailto:chinmay@example.com"
                            className="p-3 rounded-full transition-all duration-200 hover:scale-110 cursor-pointer"
                            style={{ backgroundColor: 'var(--color-border)' }}
                            aria-label="Email"
                        >
                            <Mail className="w-5 h-5" style={{ color: 'var(--color-primary)' }} />
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <ArrowDown className="w-6 h-6" style={{ color: 'var(--color-muted)' }} />
                </motion.div>
            </motion.div>
        </section>
    );
}
