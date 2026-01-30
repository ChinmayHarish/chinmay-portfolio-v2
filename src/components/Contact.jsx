export default function Contact() {
    return (
        <footer className="py-12 border-t border-white/5 bg-zinc-950">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <p className="text-zinc-500 text-sm">© {new Date().getFullYear()} Chinmay Harish</p>
                    <p className="text-zinc-600 text-xs mt-1">Built with precision.</p>
                </div>

                <div className="flex gap-6">
                    <a href="mailto:chinmay@example.com" className="text-zinc-400 hover:text-white text-sm transition-colors">Email</a>
                    <a href="https://linkedin.com/in/chinmayharish" className="text-zinc-400 hover:text-white text-sm transition-colors">LinkedIn</a>
                    <a href="https://github.com/ChinmayHarish" className="text-zinc-400 hover:text-white text-sm transition-colors">GitHub</a>
                </div>
            </div>
        </footer>
    );
}
