
export default function Navbar() {
  return (
    <nav className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Logo placeholder - using text for now */}
          <span className="font-bold text-lg tracking-tight text-white">
            Zeta <span className="text-sky-400">Reason</span>
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-6 text-sm font-medium text-slate-300">
          <a href="#metrics" className="hover:text-white transition-colors">
            Metrics
          </a>
          <a href="#docs" className="hover:text-white transition-colors">
            Docs
          </a>
          <a href="#use-cases" className="hover:text-white transition-colors">
            Use Cases
          </a>
          <a
            href="https://github.com/zeta-reason/core"
            className="text-slate-400 hover:text-white transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}
