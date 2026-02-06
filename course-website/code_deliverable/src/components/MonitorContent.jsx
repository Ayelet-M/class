import React from 'react'

export function MonitorContent() {
    return (
        <div className="w-[1024px] h-[640px] bg-[#050505] text-white p-12 flex flex-col font-sans select-none border-4 border-[#1a1a1a]">
            <header className="flex justify-between items-center border-b border-white/10 pb-6 mb-10">
                <div>
                    <h2 className="text-3xl font-black uppercase tracking-tighter">Course Syllabus</h2>
                    <p className="text-white/40 font-mono text-sm tracking-widest uppercase mt-1">S.26-ETH • Vibe Coding Ethics</p>
                </div>
                <div className="text-right">
                    <p className="text-xs font-mono text-white/20 uppercase tracking-widest">System Status</p>
                    <p className="text-[#00ff41] font-mono text-sm">● ANALYZING CHARACTER</p>
                </div>
            </header>

            <div className="grid grid-cols-2 gap-12 flex-1">
                <section className="space-y-8">
                    <div>
                        <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em] block mb-2">Phase 01</span>
                        <h3 className="text-xl font-bold uppercase border-l-2 border-white pl-4">Gaining Control</h3>
                        <p className="text-white/60 text-sm mt-3 leading-relaxed">
                            Establishing a baseline for AI-human synergy. Exploring the boundary between design and generation.
                        </p>
                    </div>
                    <div>
                        <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em] block mb-2">Phase 02</span>
                        <h3 className="text-xl font-bold uppercase border-l-2 border-white/20 pl-4">Doing the Right Thing</h3>
                        <p className="text-white/60 text-sm mt-3 leading-relaxed">
                            Introduction to the VAP Framework. Balancing systemic utility with individual dignity.
                        </p>
                    </div>
                </section>

                <section className="bg-white/5 p-8 rounded-lg border border-white/10 flex flex-col">
                    <h4 className="text-sm font-black uppercase tracking-widest mb-6">Latest Commits</h4>
                    <div className="space-y-4 font-mono text-xs flex-1">
                        <div className="flex gap-4 p-2 hover:bg-white/5 transition-colors cursor-pointer">
                            <span className="text-[#00ff41]">feat</span>
                            <span className="text-white/80 italic pr-2 border-r border-white/10">init course hub</span>
                        </div>
                        <div className="flex gap-4 p-2 hover:bg-white/5 transition-colors cursor-pointer">
                            <span className="text-[#00ff41]">doc</span>
                            <span className="text-white/80 italic pr-2 border-r border-white/10">add ethics-v1.pdf</span>
                        </div>
                        <div className="flex gap-4 p-2 hover:bg-white/5 transition-colors cursor-pointer">
                            <span className="text-amber-400">warn</span>
                            <span className="text-white/80 italic pr-2 border-r border-white/10">resolve vibe conflicts</span>
                        </div>
                    </div>
                    <button className="w-full mt-6 bg-white text-black py-4 font-black uppercase tracking-widest text-xs hover:bg-[#00ff41] transition-colors">
                        View Repository
                    </button>
                </section>
            </div>

            <footer className="mt-auto pt-8 border-t border-white/10 flex justify-between items-center text-[10px] font-mono uppercase tracking-[0.2em] text-white/20">
                <span>© 2026 Cornell Tech</span>
                <span>Secure Terminal SVN-C1</span>
            </footer>
        </div>
    )
}
