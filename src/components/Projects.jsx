import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '../lib/utils';

const projects = [
    {
        title: 'Analytics Platform',
        desc: 'Consolidated data sources for real-time executive decision making.',
        tags: ['Strategy', 'SQL'],
        className: 'md:col-span-2',
        image: '/images/project-analytics.jpg'
    },
    {
        title: 'Onboarding Flow',
        desc: 'Redesigned user journey increasing completion by 25%.',
        tags: ['UX', 'Growth'],
        className: 'md:col-span-1',
        image: '/images/project-onboarding.jpg'
    },
    {
        title: 'RICE Framework',
        desc: 'Systematic feature prioritization for cross-functional teams.',
        tags: ['Process', 'Roadmap'],
        className: 'md:col-span-1',
        image: '/images/project-rice.jpg'
    },
    {
        title: 'Customer Feedback',
        desc: 'Automated feedback loop to capture user insights at scale.',
        tags: ['Discovery', 'Automation'],
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
                start: 'top 80%',
            },
            y: 100,
            opacity: 0,
            stagger: 0.1,
            duration: 1,
            ease: 'power3.out',
        });

        // Hover Effect Logic
        const cards = gsap.utils.toArray('.project-card');

        cards.forEach((card) => {
            const image = card.querySelector('img');
            const overlay = card.querySelector('.overlay');

            card.addEventListener('mouseenter', () => {
                gsap.to(image, { scale: 1.1, duration: 0.5, ease: 'power2.out' });
                gsap.to(overlay, { opacity: 0.4, duration: 0.5 });
            });

            card.addEventListener('mouseleave', () => {
                gsap.to(image, { scale: 1, duration: 0.5, ease: 'power2.out' });
                gsap.to(overlay, { opacity: 0.7, duration: 0.5 });
            });

            card.addEventListener('mousemove', (e) => {
                const { left, top, width, height } = card.getBoundingClientRect();
                const x = (e.clientX - left) / width - 0.5;
                const y = (e.clientY - top) / height - 0.5;

                gsap.to(image, {
                    x: x * 20,
                    y: y * 20,
                    rotateY: x * 5,
                    rotateX: -y * 5,
                    duration: 0.5,
                    ease: 'power2.out',
                });
            });
        });

    }, { scope: containerRef });

    return (
        <section ref={containerRef} id="projects" className="py-32 px-6 max-w-6xl mx-auto">
            <div className="mb-24">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    Selected Work
                </h2>
                <div className="h-1 w-20 bg-white/20" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {projects.map((project, i) => (
                    <div
                        key={i}
                        className={cn(
                            "project-card group relative overflow-hidden rounded-md bg-zinc-900 border border-white/5",
                            project.className,
                            "aspect-[16/9] md:aspect-auto md:h-96 cursor-pointer"
                        )}
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0 z-0 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover opacity-60 transition-transform duration-500 will-change-transform"
                            />
                            <div className="overlay absolute inset-0 bg-zinc-950 opacity-70 transition-opacity duration-500" />
                        </div>

                        <div className="relative z-10 h-full flex flex-col justify-end p-8">
                            <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-2xl font-bold text-white tracking-tight">{project.title}</h3>
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                                        <ArrowUpRight className="w-5 h-5 text-white" />
                                    </div>
                                </div>

                                <p className="text-zinc-400 text-lg mb-6 line-clamp-2 mix-blend-screen">{project.desc}</p>

                                <div className="flex gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 text-zinc-300 border border-white/5 backdrop-blur-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
