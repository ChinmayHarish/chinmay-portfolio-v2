import { NavLink } from 'react-router-dom';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';

const links = [
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Playground', path: '/playground' },
];

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass h-16 flex items-center">
            <div className="w-full max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <NavLink
                    to="/"
                    className="text-lg font-bold tracking-tight hover:text-blue-400 transition-colors"
                >
                    CHINMAY . H
                </NavLink>

                {/* Desktop Links */}
                <div className="flex items-center gap-8">
                    {links.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) => cn(
                                "text-sm font-medium transition-colors hover:text-white relative py-1",
                                isActive ? "text-white" : "text-zinc-500"
                            )}
                        >
                            {({ isActive }) => (
                                <>
                                    {link.name}
                                    {isActive && (
                                        <motion.div
                                            layoutId="navIndicator"
                                            className="absolute -bottom-[1px] left-0 right-0 h-[1px] bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"
                                        />
                                    )}
                                </>
                            )}
                        </NavLink>
                    ))}

                    <a
                        href="/resume.pdf"
                        target="_blank"
                        className="hidden md:inline-flex text-xs font-mono px-3 py-1.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all"
                    >
                        RESUME
                    </a>
                </div>
            </div>
        </nav>
    );
}
