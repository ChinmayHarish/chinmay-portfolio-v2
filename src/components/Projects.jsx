import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowUpRight, Code, Database, Layout } from 'lucide-react';
import { cn } from '../lib/utils';

const projects = [
    {
        title: 'Analytics Platform',
        desc: 'Centralized executive dashboard reducing reporting time by 60%.',
        tags: ['Strategy', 'SQL'],
        icon: Database,
        className: 'md:col-span-2',
        image: '/images/project-analytics.jpg'
    },
    {
        title: 'Onboarding Flow',
        desc: 'Redesigned user journey increasing activation by 25%.',
        tags: ['UX', 'Growth'],
        icon: Layout,
        className: 'md:col-span-1',
        image: '/images/project-onboarding.jpg'
    },
    {
        title: 'RICE Framework',
        desc: 'Systematic prioritization for cross-functional roadmaps.',
        tags: ['Process', 'Roadmap'],
        icon: Code,
        className: 'md:col-span-1',
        image: '/images/project-rice.jpg'
    },
    {
        title: 'Customer Feedback',
        desc: 'Automated feedback loop to capture user insights at scale.',
        tags: ['Discovery', 'Automation'],
        icon: Database,
        className: 'md:col-span-2',
        image: '/images/project-feedback.jpg'
    },
];

export default function Projects() {
    const containerRef = useRef(null);

    useGSAP(() => {
        // Scroll Reveal
        gsap.from('.project-card', {
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 85%',
            },
            y: 60,
            opacity: 0,
            stagger: 0.1,
            duration: 1.2,
            ease: 'power3.out',
        });

        // 3D Tilt - Desktop Only
        if (window.matchMedia("(min-width: 768px)").matches) {
            const cards = gsap.utils.toArray('.project-card');

            cards.forEach((card) => {
                const image = card.querySelector('.project-image');
                const overlay = card.querySelector('.project-overlay');

                card.addEventListener('mouseenter', () => {
                    gsap.to(image, { scale: 1.05, duration: 0.5 });
                    gsap.to(overlay, { opacity: 0.2, duration: 0.5 });
                });

                card.addEventListener('mouseleave', () => {
                    gsap.to(image, { scale: 1, x: 0, y: 0, rotateY: 0, rotateX: 0, duration: 0.5 });
                    gsap.to(overlay, { opacity: 0.6, duration: 0.5 });
                });

                card.addEventListener('mousemove', (e) => {
                    const { left, top, width, height } = card.getBoundingClientRect();
                    const x = (e.clientX - left) / width - 0.5;
                    const y = (e.clientY - top) / height - 0.5;

                    gsap.to(image, {
                        x: x * 15,
                        y: y * 15,
                        rotateY: x * 8,
                        rotateX: -y * 8,
                        duration: 0.5,
                        ease: 'power2.out',
                    });
                });
            });
        }

    }, { scope: containerRef });

    return (
        <section ref={containerRef} id="projects" className="py-32 px-6 max-w-6xl mx-auto">
            <div className="mb-20 flex items-end justify-between">
                <div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Case Studies
                    </h2>
                    <div className="h-px w-24 bg-white/30" />
                </div>
                <div className="hidden md:block text-right">
                    <p className="text-zinc-500">Selected Works</p>
                    <p className="text-zinc-500">2022 — Present</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {projects.map((project, i) => (
                    <div
                        key={i}
                        className={cn(
                            "project-card group relative overflow-hidden rounded-2xl bg-zinc-900 border border-white/5",
                            project.className,
                            "aspect-[16/9] md:aspect-auto md:h-96 cursor-pointer"
                        )}
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0 z-0 overflow-hidden perspective-1000">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="project-image w-full h-full object-cover opacity-80 will-change-transform"
                            />
                            <div className="project-overlay absolute inset-0 bg-zinc-950 opacity-60 transition-opacity duration-500" />
                        </div>

                        <div className="relative z-10 h-full flex flex-col justify-between p-8">
                            <div className="flex justify-between items-start">
                                <div className="p-2 bg-white/10 rounded-lg backdrop-blur-md">
                                    <project.icon className="w-5 h-5 text-white/80" />
                                </div>
                                <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                                    <ArrowUpRight className="w-5 h-5" />
                                </div>
                            </div>

                            <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                                <h3 className="text-2xl font-bold text-white tracking-tight mb-2">{project.title}</h3>
                                <p className="text-zinc-300 text-base mb-6 line-clamp-2 max-w-md">{project.desc}</p>

                                <div className="flex gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-black/40 text-zinc-300 border border-white/10 backdrop-blur-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Accessible Link Overlay */}
                        <a href="#" className="absolute inset-0 z-20 focus:ring-4 focus:ring-white/20 outline-none rounded-2xl" aria-label={`View project: ${project.title}`}></a>
                    </div>
                ))}
            </div>
        </section>
    );
}
