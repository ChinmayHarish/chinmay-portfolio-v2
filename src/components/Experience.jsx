import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
    {
        year: '2024',
        company: 'BASF',
        role: 'Associate Product Manager',
        desc: 'Driving internal analytics transformation. 0-to-1 build of reporting platform.',
    },
    {
        year: '2023',
        company: 'Infiniteworks',
        role: 'Product Intern',
        desc: 'Shipped user-facing features. Improved retention by 15%.',
    },
    {
        year: '2022',
        company: 'BidFortune',
        role: 'Product Analyst',
        desc: 'SQL & Data visualization. Informed high-stakes roadmap decisions.',
    },
];

export default function Experience() {
    const containerRef = useRef(null);

    useGSAP(() => {
        const items = gsap.utils.toArray('.exp-item');

        items.forEach((item) => {
            gsap.fromTo(item,
                {
                    opacity: 0.2,
                    y: 50
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 80%',
                        end: 'top 50%',
                        scrub: true,
                    }
                }
            );
        });

    }, { scope: containerRef });

    return (
        <section ref={containerRef} id="experience" className="py-32 px-6 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24">
                {/* Sticky Header */}
                <div className="md:sticky md:top-32 h-fit">
                    <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-b from-white to-zinc-700 bg-clip-text text-transparent mb-6">
                        History
                    </h2>
                    <p className="text-zinc-500 max-w-xs">
                        A timeline of problems solved and products launched.
                    </p>
                </div>

                {/* Scrollable List */}
                <div className="space-y-24 md:space-y-32 py-12">
                    {experiences.map((exp, i) => (
                        <div key={i} className="exp-item group">
                            <span className="block text-8xl md:text-9xl font-bold text-zinc-900 absolute -z-10 -translate-y-1/2 opacity-50 select-none">
                                {exp.year}
                            </span>
                            <div className="relative pl-6 border-l-2 border-zinc-800 transition-colors duration-500 group-hover:border-white">
                                <h3 className="text-3xl font-bold text-white mb-2">{exp.company}</h3>
                                <p className="text-xl text-zinc-400 mb-4 font-light">{exp.role}</p>
                                <p className="text-zinc-500 text-lg leading-relaxed max-w-md">
                                    {exp.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
