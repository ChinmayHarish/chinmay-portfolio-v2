import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
    {
        year: '2024',
        company: 'BASF',
        role: 'Associate Product Manager',
        desc: 'Led the 0-to-1 development of an internal analytics platform for 400+ users. Reduced weekly reporting time by 60% through automated data ingestion pipelines.',
        skills: ['Roadmapping', 'Stakeholder Mgmt', 'Data Viz']
    },
    {
        year: '2023',
        company: 'Infiniteworks',
        role: 'Product Intern',
        desc: 'Optimized the user onboarding flow, resulting in a 25% increase in activation rate. Collaborated with engineering to ship 3 critical user-requested features ahead of schedule.',
        skills: ['CRO', 'User Research', 'Agile']
    },
    {
        year: '2022',
        company: 'BidFortune',
        role: 'Product Analyst',
        desc: 'Designed SQL dashboards to track KPIs for a $2M MRR product. Identified a key churn driver in the checkout process, leading to a 10% lift in successful transactions.',
        skills: ['SQL', 'Data Analytics', 'A/B Testing']
    },
];

export default function Experience() {
    const containerRef = useRef(null);

    useGSAP(() => {
        const items = gsap.utils.toArray('.exp-item');

        // Animate items on scroll
        items.forEach((item) => {
            gsap.fromTo(item,
                { opacity: 0.3, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 85%',
                        end: 'top 50%',
                        scrub: 0.5,
                    }
                }
            );
        });

        // Sticky Year Highlighter Logic could go here (simplified for now to focus on content)

    }, { scope: containerRef });

    return (
        <section ref={containerRef} id="experience" className="py-32 px-6 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24">
                {/* Sticky Header */}
                <div className="md:sticky md:top-32 h-fit">
                    <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-b from-white to-zinc-700 bg-clip-text text-transparent mb-6">
                        Impact
                    </h2>
                    <p className="text-zinc-500 max-w-xs text-lg">
                        Delivering measurable results through product leadership and data-driven decisions.
                    </p>
                </div>

                {/* Scrollable List */}
                <div className="space-y-24 md:space-y-32 py-12">
                    {experiences.map((exp, i) => (
                        <div key={i} className="exp-item group relative">
                            {/* Year Backdrop */}
                            <span className="block text-9xl font-bold text-zinc-900 absolute -left-12 -top-12 -z-10 opacity-30 select-none group-hover:text-zinc-800 transition-colors duration-500">
                                {exp.year}
                            </span>

                            <div className="relative pl-8 border-l-2 border-zinc-800 transition-all duration-500 group-hover:border-white/50 group-hover:pl-10">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-zinc-950 border-2 border-zinc-800 group-hover:border-white transition-colors duration-500" />

                                <h3 className="text-3xl font-bold text-white mb-2">{exp.company}</h3>
                                <p className="text-xl text-zinc-400 mb-6 font-mono">{exp.role}</p>

                                <p className="text-zinc-300 text-lg leading-relaxed max-w-xl mb-6">
                                    {exp.desc}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {exp.skills.map(skill => (
                                        <span key={skill} className="px-3 py-1 bg-zinc-900 border border-white/5 rounded-full text-xs text-zinc-500 uppercase tracking-wider">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
