import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowRight, Download, Terminal } from 'lucide-react';

export default function Hero() {
    const containerRef = useRef(null);
    const profileRef = useRef(null);
    const textRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        // Initial Reveal
        tl.from(profileRef.current, {
            y: 50,
            opacity: 0,
            duration: 1.5,
            ease: 'power4.out',
        })
            .from('.hero-text-line', {
                y: 100,
                opacity: 0,
                stagger: 0.1,
                duration: 1,
                ease: 'power3.out',
            }, '-=1')
            .from('.hero-cta', {
                y: 20,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out',
            }, '-=0.5');

        // Magnetic Profile Interaction
        const profile = profileRef.current;

        // Only enable magnetic effect on desktop (simple check)
        if (window.matchMedia("(min-width: 768px)").matches) {
            const handleMouseMove = (e) => {
                const { left, top, width, height } = profile.getBoundingClientRect();
                const x = (e.clientX - (left + width / 2)) * 0.3;
                const y = (e.clientY - (top + height / 2)) * 0.3;

                gsap.to(profile, {
                    x: x,
                    y: y,
                    duration: 0.5,
                    ease: 'power2.out',
                });
            };

            const handleMouseLeave = () => {
                gsap.to(profile, {
                    x: 0,
                    y: 0,
                    duration: 0.6,
                    ease: 'elastic.out(1, 0.4)',
                });
            };

            profile.addEventListener('mousemove', handleMouseMove);
            profile.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                profile.removeEventListener('mousemove', handleMouseMove);
                profile.removeEventListener('mouseleave', handleMouseLeave);
            };
        }

    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}
            id="hero"
            className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 overflow-hidden"
        >
            {/* Background Ambience handled by App.jsx */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-5xl flex flex-col items-center">

                {/* Magnetic Profile Picture */}
                <div
                    ref={profileRef}
                    className="mb-10 relative cursor-pointer group"
                >
                    <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border border-white/10 ring-4 ring-transparent group-hover:ring-white/5 transition-all duration-500">
                        <img
                            src="/images/profile.jpg"
                            alt="Chinmay Harish"
                            className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
                        />
                    </div>
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-white/10 rounded-full">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                            <span className="text-[10px] uppercase tracking-widest text-zinc-400">Online</span>
                        </div>
                    </div>
                </div>

                {/* Cinematic Typography */}
                <div ref={textRef} className="space-y-6 mb-12">
                    <div className="overflow-hidden">
                        <h1 className="hero-text-line text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-2">
                            Operator.
                        </h1>
                    </div>
                    <div className="overflow-hidden">
                        <h1 className="hero-text-line text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-zinc-600">
                            Builder.
                        </h1>
                    </div>

                    <div className="overflow-hidden pt-6">
                        <p className="hero-text-line text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
                            <span className="text-white font-medium">Associate Product Manager</span> focused on scalable systems.
                            <br className="hidden md:block" />
                            Transforming ambiguous requirements into shipping software.
                        </p>
                    </div>
                </div>

                {/* CTAs */}
                <div className="hero-cta flex flex-col sm:flex-row items-center gap-6">
                    <a
                        href="#projects"
                        className="group relative px-8 py-4 bg-white text-black rounded-full font-semibold tracking-wide overflow-hidden hover:bg-zinc-200 transition-colors focus:ring-4 focus:ring-white/20 outline-none"
                    >
                        <span className="flex items-center gap-2">
                            View Case Studies <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </span>
                    </a>

                    <a
                        href="/resume.pdf"
                        target="_blank"
                        className="group flex items-center gap-2 text-zinc-400 hover:text-white transition-colors duration-300 px-4 py-2 rounded-full hover:bg-white/5"
                    >
                        <Download className="w-4 h-4" />
                        <span>Resumé_v2.pdf</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
