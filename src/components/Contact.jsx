import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, MapPin, Calendar } from 'lucide-react';

export default function Contact() {
    return (
        <section
            id="contact"
            className="py-24 md:py-32"
            style={{ backgroundColor: 'var(--color-primary)' }}
        >
            <div className="max-w-4xl mx-auto px-6 text-center">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <p
                        className="text-sm font-medium tracking-widest uppercase mb-4"
                        style={{ color: 'var(--color-accent)' }}
                    >
                        Get In Touch
                    </p>
                    <h2
                        className="text-4xl md:text-5xl font-bold mb-6 text-white"
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        Let's Build Something Together
                    </h2>
                    <p
                        className="text-lg max-w-xl mx-auto mb-12"
                        style={{ color: 'rgba(255, 255, 255, 0.7)' }}
                    >
                        I'm always interested in discussing product challenges, new opportunities,
                        or just connecting with fellow PMs.
                    </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
                >
                    <a
                        href="mailto:chinmay@example.com"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 font-medium text-lg rounded-xl transition-all duration-200 hover:scale-105 cursor-pointer"
                        style={{
                            backgroundColor: 'var(--color-accent)',
                            color: 'white'
                        }}
                    >
                        <Mail className="w-5 h-5" />
                        Say Hello
                    </a>
                    <a
                        href="https://linkedin.com/in/chinmayharish"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 font-medium text-lg rounded-xl border-2 transition-all duration-200 hover:scale-105 cursor-pointer"
                        style={{
                            borderColor: 'rgba(255, 255, 255, 0.3)',
                            color: 'white'
                        }}
                    >
                        <Linkedin className="w-5 h-5" />
                        Connect on LinkedIn
                    </a>
                </motion.div>

                {/* Info Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-8 mb-16"
                >
                    <div className="flex items-center gap-3" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                        <MapPin className="w-5 h-5" />
                        <span>Bengaluru, India</span>
                    </div>
                    <div className="flex items-center gap-3" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                        <Calendar className="w-5 h-5" />
                        <span>Open to opportunities</span>
                    </div>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex justify-center gap-4"
                >
                    <a
                        href="https://linkedin.com/in/chinmayharish"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-full transition-all duration-200 hover:scale-110 cursor-pointer"
                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="w-6 h-6 text-white" />
                    </a>
                    <a
                        href="https://github.com/ChinmayHarish"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-full transition-all duration-200 hover:scale-110 cursor-pointer"
                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                        aria-label="GitHub"
                    >
                        <Github className="w-6 h-6 text-white" />
                    </a>
                    <a
                        href="mailto:chinmay@example.com"
                        className="p-4 rounded-full transition-all duration-200 hover:scale-110 cursor-pointer"
                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                        aria-label="Email"
                    >
                        <Mail className="w-6 h-6 text-white" />
                    </a>
                </motion.div>
            </div>

            {/* Footer */}
            <div
                className="max-w-6xl mx-auto px-6 pt-16 mt-16"
                style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}
            >
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p style={{ color: 'rgba(255, 255, 255, 0.5)' }} className="text-sm">
                        © {new Date().getFullYear()} Chinmay Harish. Built with React & Tailwind.
                    </p>
                    <p style={{ color: 'rgba(255, 255, 255, 0.5)' }} className="text-sm">
                        Designed to pass the 30-second test ⚡
                    </p>
                </div>
            </div>
        </section>
    );
}
