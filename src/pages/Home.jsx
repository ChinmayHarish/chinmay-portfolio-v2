import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

export default function Home() {
    return (
        <div className="pt-16 min-h-screen">
            <Hero />
            <Projects />
            <Skills />
        </div>
    );
}
