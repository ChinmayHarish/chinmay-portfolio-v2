import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Sparkles, BarChart2, Users } from 'lucide-react';

const colorMap = {
    blue: {
        blob: "bg-blue-500/20 group-hover:bg-blue-500/30",
        icon: "text-blue-400",
        text: "text-blue-400",
        line: "bg-blue-500"
    },
    green: {
        blob: "bg-green-500/20 group-hover:bg-green-500/30",
        icon: "text-green-400",
        text: "text-green-400",
        line: "bg-green-500"
    },
    purple: {
        blob: "bg-purple-500/20 group-hover:bg-purple-500/30",
        icon: "text-purple-400",
        text: "text-purple-400",
        line: "bg-purple-500"
    },
    orange: {
        blob: "bg-orange-500/20 group-hover:bg-orange-500/30",
        icon: "text-orange-400",
        text: "text-orange-400",
        line: "bg-orange-500"
    }
};

const practices = [
    {
        icon: Sparkles,
        color: "blue",
        title: "Product Discovery",
        what: "Uncovering user needs",
        how: "Interviews, Surveys, Data",
        outcome: "Validated problems"
    },
    {
        icon: BarChart2,
        color: "green",
        title: "Data Strategy",
        what: "Measuring success",
        how: "SQL, Mixpanel, Tableau",
        outcome: "Actionable insights"
    },
    {
        icon: Users,
        color: "purple",
        title: "Execution",
        what: "Shipping software",
        how: "Agile, Jira, Roadmaps",
        outcome: "On-time delivery"
    },
    {
        icon: Sparkles,
        color: "orange",
        title: "Growth",
        what: "Driving acquisition",
        how: "A/B Testing, CRO",
        outcome: "Revenue impact"
    }
];

export default function Skills() {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.from('.practice-card', {
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 80%',
            },
            y: 60,
            opacity: 0,
            stagger: 0.1,
            duration: 1.2,
            ease: 'power3.out'
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} id="skills" className="py-32 px-6 max-w-7xl mx-auto">
            <div className="mb-24 flex items-end justify-between border-b border-white/10 pb-6">
                <div>
                    <h2 className="text-5xl md:text-9xl font-bold tracking-tighter text-white uppercase opacity-90">
                        Toolkit
                    </h2>
                    <div className="flex gap-4 mt-4">
                        <span className="text-xs font-mono text-blue-500 uppercase tracking-widest border border-blue-500/30 px-2 py-1 bg-blue-500/10">v2.4 System</span>
                        <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest px-2 py-1">Operational Capabilities</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {practices.map((practice, i) => {
                    const colors = colorMap[practice.color];

                    return (
                        <div
                            key={i}
                            className="practice-card group relative h-[420px] p-6 bg-black border border-zinc-800 hover:border-zinc-600 transition-colors duration-500 overflow-hidden flex flex-col justify-between"
                        >
                            {/* Holographic Gradient Blob */}
                            <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[80px] transition-all duration-700 ${colors.blob}`} />

                            {/* Header */}
                            <div>
                                <div className="flex justify-between items-start mb-8">
                                    <div className={`p-3 rounded-lg bg-zinc-900 border border-white/10 transition-colors group-hover:text-white ${colors.icon}`}>
                                        <practice.icon className="w-6 h-6" />
                                    </div>
                                    <span className="font-mono text-[10px] text-zinc-600">0{i + 1}</span>
                                </div>

                                <h3 className="text-3xl font-bold text-white uppercase tracking-tighter mb-4 leading-none">
                                    {practice.title.split(' ').map((word, idx) => (
                                        <div key={idx} className="block">{word}</div>
                                    ))}
                                </h3>
                            </div>

                            {/* Content Body */}
                            <div className="space-y-6 relative z-10">
                                {/* Data Points */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <span className="block text-[9px] uppercase tracking-widest text-zinc-500">Input</span>
                                        <div className="h-px w-8 bg-zinc-800 my-1" />
                                        <span className="block text-sm text-zinc-300 font-medium">{practice.what}</span>
                                    </div>
                                    <div className="space-y-1">
                                        <span className="block text-[9px] uppercase tracking-widest text-zinc-500">Output</span>
                                        <div className="h-px w-8 bg-zinc-800 my-1" />
                                        <span className={`block text-sm font-medium ${colors.text}`}>{practice.outcome}</span>
                                    </div>
                                </div>

                                {/* Tech Stack Marquee-ish */}
                                <div className="pt-4 border-t border-white/5">
                                    <span className="text-[10px] text-zinc-600 block mb-2 font-mono">STACK</span>
                                    <div className="flex flex-wrap gap-2">
                                        {practice.how.split(', ').map((tech) => (
                                            <span key={tech} className="text-xs px-2 py-1 bg-zinc-900 text-zinc-400 border border-white/5 rounded-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Hover Reveal Line */}
                            <div className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 ease-in-out ${colors.line}`} />
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
