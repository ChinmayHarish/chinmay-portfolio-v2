import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
    const containerRef = useRef(null);
    const profileRef = useRef(null);
    const textRef = useRef(null);
    const ctaRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        // Initial Reveal
        tl.from(profileRef.current, {
            y: 100,
            opacity: 0,
            duration: 1.5,
            ease: 'power4.out',
        })
            .from('.hero-text-line', {
                y: 100,
                opacity: 0,
                stagger: 0.15,
                duration: 1.2,
                ease: 'power3.out',
            }, '-=1')
            .from(ctaRef.current, {
                y: 20,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
            }, '-=0.8');

        // Magnetic Effect for Profile
        const profile = profileRef.current;

        const handleMouseMove = (e) => {
            const { left, top, width, height } = profile.getBoundingClientRect();
            const x = (e.clientX - (left + width / 2)) * 0.2; // Strength
            const y = (e.clientY - (top + height / 2)) * 0.2;

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
                duration: 0.5,
                ease: 'elastic.out(1, 0.3)',
            });
        };

        profile.addEventListener('mousemove', handleMouseMove);
        profile.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            profile.removeEventListener('mousemove', handleMouseMove);
            profile.removeEventListener('mouseleave', handleMouseLeave);
        };

    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}
            id="hero"
            className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden"
        >
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-950 z-0" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-5xl flex flex-col items-center">

                {/* Magnetic Profile Picture */}
                <div
                    ref={profileRef}
                    className="mb-12 relative cursor-pointer group"
                >
                    <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border border-white/10 ring-4 ring-transparent group-hover:ring-white/5 transition-all duration-500">
                        <img
                            src="/images/profile.jpg"
                            alt="Chinmay Harish"
                            className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700 ease-out"
                        />
                        {/* Glare effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                        <span className="text-xs font-mono text-zinc-500 tracking-widest">OPEN TO WORK</span>
                    </div>
                </div>

                {/* Cinematic Typography */}
                <div ref={textRef} className="space-y-4 mb-12">
                    <div className="overflow-hidden">
                        <h1 className="hero-text-line text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">
                            Precise.
                        </h1>
                    </div>
                    <div className="overflow-hidden">
                        <h1 className="hero-text-line text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-zinc-600">
                            Impactful.
                        </h1>
                    </div>
                    <div className="overflow-hidden pt-4">
                        <p className="hero-text-line text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto font-light">
                            Associate Product Manager transforming chaos into <span className="text-white font-medium">clarity</span>.
                        </p>
                    </div>
                </div>

                {/* CTAs */}
                <div ref={ctaRef} className="flex flex-col sm:flex-row items-center gap-6">
                    <a
                        href="#projects"
                        className="group relative px-8 py-4 bg-white text-black rounded-full font-semibold tracking-wide overflow-hidden hover:scale-105 transition-transform duration-300"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            See work <ArrowRight className="w-4 h-4" />
                        </span>
                        <div className="absolute inset-0 bg-zinc-200 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    </a>

                    <a
                        href="/resume.pdf"
                        target="_blank"
                        className="group flex items-center gap-2 text-zinc-400 hover:text-white transition-colors duration-300 pb-1 border-b border-transparent hover:border-white/20"
                    >
                        <Download className="w-4 h-4" />
                        <span>Download Resume</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
