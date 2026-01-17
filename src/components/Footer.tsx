// app/components/Footer.tsx

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-20 py-6 text-xs text-slate-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between">
        <div className="flex flex-col gap-1">
          <span>© {new Date().getFullYear()} Zeta Reason.</span>
          <a href="mailto:a4santho@uwaterloo.ca" className="hover:text-slate-300 transition-colors">
            a4santho@uwaterloo.ca
          </a>
        </div>

        <div className="flex gap-4 mt-3 sm:mt-0">
          <a href="#docs" className="hover:text-slate-300">Docs</a>
          <a href="#metrics" className="hover:text-slate-300">Metrics</a>
          <a href="#use-cases" className="hover:text-slate-300">Use Cases</a>
          <a
            href="https://github.com/zeta-reason/core"
            className="hover:text-slate-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
