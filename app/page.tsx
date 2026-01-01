import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white font-sans">
      {/* HEADER PROFISSIONAL */}
      <nav className="p-6 border-b border-white/10 flex justify-between items-center max-w-6xl mx-auto">
        <div className="text-xl font-bold">ADVOGADO <span className="text-yellow-500">NÔMADE</span></div>
        <div className="text-sm text-slate-400">OAB/SC 57.879</div>
      </nav>

      {/* HERO: O IMPACTO DE SÃO PAULO */}
      <section className="py-24 px-6 text-center bg-gradient-to-b from-blue-900/20 to-transparent">
        <h1 className="text-5xl md:text-7xl font-black mb-6">
          Inteligência de <span className="text-yellow-500">Ativos</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
          Auditoria de dados para identificação de liquidez represada. 
          Saneamos carteiras de massa contra Réus de Ouro em 48h.
        </p>
        <a href="https://wa.me/5571986482241" className="bg-yellow-500 text-black font-bold py-4 px-10 rounded-full text-lg hover:bg-yellow-400 transition">
          Solicitar Auditoria Gratuita
        </a>
      </section>

      {/* DASHBOARD: A PROVA TÉCNICA */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
            <p className="text-slate-500 text-xs font-bold uppercase mb-2">Ativos Mapeados (Mês)</p>
            <h2 className="text-4xl font-bold text-white">R$ 14.250.840</h2>
          </div>
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
            <p className="text-slate-500 text-xs font-bold uppercase mb-2">Inércia de Carteira</p>
            <h2 className="text-4xl font-bold text-white">8.420 Dias</h2>
          </div>
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
            <p className="text-slate-500 text-xs font-bold uppercase mb-2">Assertividade Técnica</p>
            <h2 className="text-4xl font-bold text-yellow-500">94.8%</h2>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/10 text-center text-slate-600 text-sm">
        Consultoria Digital Dr. Reginaldo Oliveira. Operação 100% Online.
      </footer>
    </main>
  );
}
