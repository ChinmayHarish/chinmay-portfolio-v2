import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';
import { FileText, Github, Linkedin, Mail } from 'lucide-react';

const navLinks = [
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6"
        >
            <div
                className={cn(
                    "flex items-center gap-6 px-6 py-3 rounded-full transition-all duration-300",
                    isScrolled
                        ? "bg-zinc-900/80 backdrop-blur-md border border-white/10 shadow-lg shadow-black/20"
                        : "bg-transparent border border-transparent"
                )}
            >
                <a href="#hero" className="text-zinc-100 font-semibold hover:text-white transition-colors">
                    CH
                </a>

                <div className="w-px h-4 bg-white/10 mx-2" />

                <div className="flex items-center gap-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className="w-px h-4 bg-white/10 mx-2" />

                <div className="flex items-center gap-4">
                    <a
                        href="https://github.com/ChinmayHarish"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-white transition-colors"
                    >
                        <Github className="w-4 h-4" />
                    </a>
                    <a
                        href="https://linkedin.com/in/chinmayharish"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-white transition-colors"
                    >
                        <Linkedin className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </motion.nav>
    );
}
