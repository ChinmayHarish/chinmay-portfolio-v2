import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const skills = [
    "Product Strategy", "user-centric design", "sql", "a/b testing",
    "roadmap planning", "jira", "user research", "figma",
    "data analytics", "stakeholder management", "go-to-market"
];

export default function Skills() {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.from('.skill-tag', {
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 85%',
            },
            y: 50,
            opacity: 0,
            stagger: {
                amount: 0.5,
                from: "random"
            },
            duration: 1,
            ease: 'back.out(1.7)',
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} id="skills" className="py-32 px-6 max-w-5xl mx-auto text-center">
            <div className="mb-16">
                <h2 className="text-3xl font-bold text-zinc-400 mb-4">
                    Capabilities
                </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
                {skills.map((skill, i) => (
                    <span
                        key={skill}
                        className="skill-tag px-6 py-3 rounded-full bg-zinc-900/50 border border-white/5 text-zinc-400 text-sm md:text-base hover:text-white hover:border-white/20 hover:bg-zinc-800 transition-all cursor-default uppercase tracking-widest"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    );
}
