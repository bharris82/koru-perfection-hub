'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  const [selectedSolution, setSelectedSolution] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-sm border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-white">
              The Koru Project
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Personal AI That Knows You
            </h1>
            <h2 className="text-2xl md:text-4xl text-blue-300 mb-8">
              Private AI for Every Part of Life
            </h2>
            <p className="text-xl text-slate-300 mb-4">
              Personal • Family • Business
            </p>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-12">
              Your AI companion — fully yours, completely secure, and always private.
            </p>

            {/* Highlights */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                <div className="text-green-400 text-2xl mb-2">✅</div>
                <h3 className="text-white font-semibold mb-2">100% Personal & Private</h3>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                <div className="text-blue-400 text-2xl mb-2">🧠</div>
                <h3 className="text-white font-semibold mb-2">3 Solution Areas</h3>
                <p className="text-slate-400 text-sm">Personal • Family • Business</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                <div className="text-purple-400 text-2xl mb-2">📅</div>
                <h3 className="text-white font-semibold mb-2">Fast Setup</h3>
                <p className="text-slate-400 text-sm">From consultation to launch in 2–3 weeks</p>
              </div>
            </div>

            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4">
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Personal AI Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Personal AI for Every Aspect of Life
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto">
              AI that truly understands you — trained on your data, not the internet. Private, local, and always available.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-4">Personal Health AI →</h3>
              <p className="text-slate-400">
                A private health companion that learns from your medical history, preferences, and goals.
              </p>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-4">Family Tutor AI →</h3>
              <p className="text-slate-400">
                Personalized tutoring for your children, adapting to their pace and style.
              </p>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-4">Financial Advisor AI →</h3>
              <p className="text-slate-400">
                Guidance based on your real financial habits and goals.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-green-900/30 border border-green-700 rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-green-300 font-semibold">
                🔒 All solutions run in your isolated environment — your data stays with you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our AI Solutions</h2>
            <p className="text-xl text-slate-300">
              Choose the right solution for your needs — from personal environments to ready-made agents to enterprise consulting.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Personal Isolated Environment */}
            <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
              <div className="text-4xl mb-4">🖥️</div>
              <h3 className="text-2xl font-semibold text-white mb-4">Personal Isolated Environment</h3>
              <p className="text-slate-400 mb-6">
                Your own private AI environment that learns from personal docs, family photos, and knowledge.
              </p>
              <div className="space-y-2 mb-6">
                <p className="text-blue-300">Health AI • Family Tutor • Financial Advisor</p>
                <p className="text-green-300">100% Private • Local-only</p>
              </div>
            </div>

            {/* HelpBlocks.ai */}
            <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
              <div className="text-4xl mb-4">🧩</div>
              <h3 className="text-2xl font-semibold text-white mb-4">HelpBlocks.ai <span className="text-sm text-yellow-400">(Coming Soon)</span></h3>
              <p className="text-slate-400 mb-6">
                Pre-trained, plug-and-play AI agents for specific tasks.
              </p>
              <div className="space-y-2 mb-6">
                <p className="text-blue-300">Ready-to-use • Specialized Agents • Built-in Prompts • Quick Setup</p>
              </div>
              <div className="space-y-2 text-sm text-slate-400">
                <p>• Math Tutor → Step-by-step problem solving</p>
                <p>• PC Help Desk → Tech troubleshooting</p>
                <p>• Car Helper → Maintenance & repair guidance</p>
                <p>• Life Coach → Personal development</p>
                <p>• Creative Assistant → Writing & brainstorming</p>
                <p>• Relationship Coach → Communication & advice</p>
                <p>• Study Buddy → Smarter study techniques</p>
              </div>
            </div>

            {/* AI Consulting Solutions */}
            <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-2xl font-semibold text-white mb-4">AI Consulting Solutions <span className="text-sm text-purple-400">(For Businesses)</span></h3>
              <p className="text-slate-400 mb-6">
                Professional AI implementation using:
              </p>
              <div className="space-y-2 mb-6 text-blue-300">
                <p>• AnythingLLM for secure local deployments</p>
                <p>• OpenWebUI for interactive AI interfaces</p>
                <p>• ChromaDB (RAG) for custom business knowledgebases</p>
              </div>
              <div className="space-y-2 text-sm text-slate-400">
                <p><strong className="text-white">Deliverables:</strong></p>
                <p>• Local AI deployments tailored to your workflows</p>
                <p>• Custom RAG knowledgebases</p>
                <p>• Business consulting playbook + training</p>
                <p>• Enterprise-ready support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Providers Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Works With All Major AI Providers</h2>
            <p className="text-slate-300 mb-8">Your private AI setup supports the best models:</p>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="bg-slate-700 px-4 py-2 rounded-lg text-white">🦙 Ollama</span>
              <span className="bg-slate-700 px-4 py-2 rounded-lg text-white">🤖 OpenAI</span>
              <span className="bg-slate-700 px-4 py-2 rounded-lg text-white">🧠 Anthropic</span>
              <span className="bg-slate-700 px-4 py-2 rounded-lg text-white">🔷 Meta AI</span>
              <span className="bg-slate-700 px-4 py-2 rounded-lg text-white">🔍 Google</span>
              <span className="bg-slate-700 px-4 py-2 rounded-lg text-white">🌪️ Mistral</span>
              <span className="bg-slate-700 px-4 py-2 rounded-lg text-white">🎯 Cohere</span>
              <span className="bg-slate-700 px-4 py-2 rounded-lg text-white">🤗 Hugging Face</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why People Avoid AI Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Why Most People Avoid AI</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-red-900/20 border border-red-700 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-red-300 mb-4">Privacy Concerns →</h3>
              <p className="text-slate-400">
                No one wants family photos or business secrets training big-tech models.
              </p>
            </div>
            <div className="bg-red-900/20 border border-red-700 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-red-300 mb-4">Generic Responses →</h3>
              <p className="text-slate-400">
                Cloud AIs don't know your docs, business, or family context.
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-green-900/30 border border-green-700 rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-green-300 mb-4">Our Difference:</h3>
              <p className="text-lg text-white">Private, local, and trained only on your data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">How It Works (3 Steps)</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700 text-center">
              <div className="text-4xl mb-4">1️⃣</div>
              <h3 className="text-xl font-semibold text-white mb-4">Discovery Call (Free)</h3>
              <p className="text-slate-400">
                30-minute consultation to choose the right solution.
              </p>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700 text-center">
              <div className="text-4xl mb-4">2️⃣</div>
              <h3 className="text-xl font-semibold text-white mb-4">Setup & Installation</h3>
              <p className="text-slate-400">
                We configure your isolated environment, install LLM + RAG, and optimize it with your documents.
              </p>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700 text-center">
              <div className="text-4xl mb-4">3️⃣</div>
              <h3 className="text-xl font-semibold text-white mb-4">Training & Handoff</h3>
              <p className="text-slate-400">
                Live training, full documentation, 30 days of support. You own it completely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready for Personal AI?</h2>
            <p className="text-xl text-slate-300 mb-8">
              Get AI that truly understands you, your family, or your business.
            </p>
            <p className="text-lg text-slate-400 mb-12">Choose from:</p>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                <div className="text-2xl mb-2">🖥️</div>
                <p className="text-white">Personal environments</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                <div className="text-2xl mb-2">🧩</div>
                <p className="text-white">HelpBlocks.ai agents</p>
                <p className="text-sm text-yellow-400">(coming soon)</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                <div className="text-2xl mb-2">💼</div>
                <p className="text-white">Custom consulting solutions</p>
              </div>
            </div>

            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-xl px-12 py-6">
              👉 Schedule Free Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-4">The Koru Project</div>
            <p className="text-slate-400">Personal AI That Knows You</p>
          </div>
        </div>
      </footer>
    </div>
  );
}