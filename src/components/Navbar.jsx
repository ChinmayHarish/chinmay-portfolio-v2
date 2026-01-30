import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText } from 'lucide-react';

const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 rounded-xl ${isScrolled
                        ? 'bg-white/80 backdrop-blur-lg shadow-lg'
                        : 'bg-transparent'
                    }`}
            >
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <a
                        href="#hero"
                        className="text-xl font-bold cursor-pointer transition-colors duration-200"
                        style={{
                            fontFamily: 'var(--font-display)',
                            color: 'var(--color-primary)'
                        }}
                    >
                        CH<span style={{ color: 'var(--color-accent)' }}>.</span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium transition-colors duration-200 hover:opacity-70 cursor-pointer"
                                style={{ color: 'var(--color-secondary)' }}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-lg transition-all duration-200 hover:scale-105 cursor-pointer"
                            style={{ backgroundColor: 'var(--color-accent)' }}
                        >
                            <FileText className="w-4 h-4" />
                            Resume
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 rounded-lg cursor-pointer"
                        style={{ color: 'var(--color-primary)' }}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
                    >
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-2xl font-medium cursor-pointer"
                                    style={{
                                        fontFamily: 'var(--font-display)',
                                        color: 'var(--color-primary)'
                                    }}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-lg font-medium text-white rounded-lg cursor-pointer"
                                style={{ backgroundColor: 'var(--color-accent)' }}
                            >
                                <FileText className="w-5 h-5" />
                                Download Resume
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
