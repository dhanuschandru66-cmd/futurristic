import { Brain, Users, Zap, Shield, Globe, TrendingUp } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

      <div className="relative z-10">
        <nav className="px-6 py-8">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-cyan-400 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-slate-900" />
              </div>
              <span className="text-2xl font-bold text-white">NeuroLink AI</span>
            </div>
            <button className="px-6 py-2.5 bg-cyan-400 text-slate-900 rounded-lg font-semibold hover:bg-cyan-300 transition-all duration-200 hover:scale-105">
              Join Waitlist
            </button>
          </div>
        </nav>

        <main className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-400/10 border border-cyan-400/20 rounded-full text-cyan-400 text-sm font-medium mb-8">
                <Zap className="w-4 h-4" />
                <span>Launching Q2 2026</span>
              </div>

              <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Collaborative Intelligence
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  Augmentation System
                </span>
              </h1>

              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                NeuroLink AI seamlessly integrates with your team's workflow to enhance collective decision-making through real-time cognitive pattern analysis and predictive collaboration insights.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
                <button className="px-8 py-4 bg-cyan-400 text-slate-900 rounded-lg font-semibold text-lg hover:bg-cyan-300 transition-all duration-200 hover:scale-105 shadow-lg shadow-cyan-400/20">
                  Request Demo
                </button>
                <button className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-200">
                  Learn More
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-20">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-cyan-400/10 rounded-xl flex items-center justify-center mb-6">
                  <Brain className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Main Purpose</h3>
                <p className="text-slate-300 leading-relaxed">
                  Amplifies team productivity by analyzing communication patterns, identifying knowledge gaps, and suggesting optimal collaboration strategies in real-time. Acts as an invisible co-pilot for distributed teams.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-cyan-400/10 rounded-xl flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Who Benefits</h3>
                <p className="text-slate-300 leading-relaxed">
                  Remote-first enterprises, research institutions, and innovation teams managing complex projects across time zones. Particularly valuable for organizations navigating rapid scaling and knowledge preservation.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-cyan-400/10 rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Expected Impact</h3>
                <p className="text-slate-300 leading-relaxed">
                  Early beta users report 40% reduction in meeting time, 3x faster onboarding for new team members, and measurable improvements in cross-functional innovation cycles.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-400/10 to-blue-400/10 border border-cyan-400/20 rounded-3xl p-12">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Core Capabilities</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-cyan-400/20 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-cyan-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Privacy-First Architecture</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      All cognitive analysis happens on encrypted edge nodes. Your team's data never leaves your infrastructure. Zero-knowledge processing ensures complete confidentiality.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-cyan-400/20 rounded-lg flex items-center justify-center">
                      <Globe className="w-5 h-5 text-cyan-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Seamless Integration</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Works invisibly within your existing tools. Slack, Teams, Notion, GitHub, and 50+ platforms supported. No workflow disruption, no learning curve.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-cyan-400/20 rounded-lg flex items-center justify-center">
                      <Zap className="w-5 h-5 text-cyan-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Predictive Insights</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Anticipates bottlenecks before they occur. Identifies emerging expertise within your team. Suggests optimal collaboration pairings based on cognitive complementarity.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-cyan-400/20 rounded-lg flex items-center justify-center">
                      <Brain className="w-5 h-5 text-cyan-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Adaptive Learning</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Evolves with your team's unique culture. Learns from successful outcomes to continuously refine recommendations. Becomes more valuable over time.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-20 text-center">
              <p className="text-slate-400 text-sm mb-4">Backed by leading AI research labs and venture partners</p>
              <div className="flex flex-wrap items-center justify-center gap-12 opacity-40">
                <div className="text-white font-semibold text-lg">MIT CSAIL</div>
                <div className="text-white font-semibold text-lg">Stanford HAI</div>
                <div className="text-white font-semibold text-lg">DeepMind Alumni</div>
                <div className="text-white font-semibold text-lg">Sequoia Capital</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
