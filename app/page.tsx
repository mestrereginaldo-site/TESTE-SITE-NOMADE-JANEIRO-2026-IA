import React from "react";

export default function Home() {
  // Link direto para o seu WhatsApp com a mensagem de conversão
  const whatsappLink = "https://wa.me/5571986482241?text=Olá%20Dr.%20Reginaldo,%20vi%20o%20Dashboard%20de%20R$14Mi%20e%20tenho%20interesse%20na%20Auditoria%20Estratégica%20de%20Ativos.";

  return (
    <main style={{ backgroundColor: '#020617', color: 'white', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      {/* HEADER */}
      <nav style={{ padding: '20px', borderBottom: '1px solid #1e293b', display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ fontSize: '24px', fontWeight: 'bold' }}>ADVOGADO <span style={{ color: '#eab308' }}>NÔMADE</span></div>
        <div style={{ color: '#94a3b8', fontSize: '14px' }}>OAB/SC 57.879 | <span style={{ color: '#4ade80' }}>● Sistema Online</span></div>
      </nav>

      {/* HERO SECTION */}
      <section style={{ padding: '80px 20px', textAlign: 'center', background: 'linear-gradient(to bottom, #1e3a8a33, transparent)' }}>
        <h1 style={{ fontSize: '48px', fontWeight: '900', marginBottom: '20px' }}>
          Inteligência de <span style={{ color: '#eab308' }}>Ativos</span> Jurídicos
        </h1>
        <p style={{ fontSize: '20px', color: '#94a3b8', maxWidth: '800px', margin: '0 auto 40px' }}>
          Tecnologia de Auditoria para identificar liquidez represada contra Réus de Ouro (Bancos e S/A). 
          Saneamos carteiras de alta escala em 48h. 
        </p>
        <a href={whatsappLink} target="_blank" style={{ backgroundColor: '#eab308', color: '#020617', padding: '18px 40px', borderRadius: '50px', fontWeight: 'bold', fontSize: '18px', textDecoration: 'none', display: 'inline-block', boxShadow: '0 10px 15px -3px rgba(234, 179, 8, 0.3)' }}>
          🚀 Solicitar Diagnóstico Gratuito (50 Processos)
        </a>
      </section>

      {/* DASHBOARD FUNCIONAL (SIMULADO) */}
      <section style={{ padding: '40px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <h3 style={{ textAlign: 'center', color: '#64748b', fontSize: '14px', marginBottom: '30px', letterSpacing: '2px' }}>MONITORAMENTO DE LIQUIDEZ NACIONAL</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          <div style={{ background: '#0f172a', padding: '30px', borderRadius: '20px', border: '1px solid #1e293b', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
            <p style={{ color: '#64748b', fontSize: '12px', fontWeight: 'bold', marginBottom: '10px' }}>ATIVOS MAPEADOS (MÊS)</p>
            <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#f8fafc' }}>R$ 14.250.840</h2>
            <div style={{ color: '#4ade80', fontSize: '12px', marginTop: '5px' }}>↑ Atualizado hoje</div>
          </div>
          <div style={{ background: '#0f172a', padding: '30px', borderRadius: '20px', border: '1px solid #1e293b' }}>
            <p style={{ color: '#64748b', fontSize: '12px', fontWeight: 'bold', marginBottom: '10px' }}>PROCESSOS EM AUDITORIA</p>
            <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#f8fafc' }}>8.420 Autos</h2>
            <div style={{ color: '#94a3b8', fontSize: '12px', marginTop: '5px' }}>Filtro: Réus Solventes [cite: 2025-12-24]</div>
          </div>
          <div style={{ background: '#0f172a', padding: '30px', borderRadius: '20px', border: '1px solid #1e293b' }}>
            <p style={{ color: '#64748b', fontSize: '12px', fontWeight: 'bold', marginBottom: '10px' }}>ASSERTIVIDADE DE RECUPERAÇÃO</p>
            <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#eab308' }}>94.8%</h2>
            <div style={{ color: '#eab308', fontSize: '12px', marginTop: '5px' }}>★ Padrão Ouro de Liquidez</div>
          </div>
        </div>
      </section>

      {/* PORTAL DE AUDITORIA (CONVERSÃO) */}
      <section style={{ padding: '80px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ background: '#1e293b', borderRadius: '30px', padding: '40px', display: 'flex', flexWrap: 'wrap', gap: '40px', border: '1px solid #334155' }}>
          <div style={{ flex: '1 1 500px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>Área do Cliente (SaaS)</h2>
            <p style={{ color: '#cbd5e1', marginBottom: '20px', lineHeight: '1.6' }}>
              Nossa plataforma de Inteligência Jurídica realiza o saneamento automático. Identificamos processos parados com réus solventes, aplicando a lógica de <b>Companion Numbers</b> para maximizar o êxito.
            </p>
            <div style={{ marginBottom: '10px' }}>✅ Saneamento eProc / PJe / Projudi</div>
            <div style={{ marginBottom: '10px' }}>✅ Identificação de Devedores Solventes</div>
            <div>✅ Relatórios de Provisão de Honorários</div>
          </div>
          <div style={{ flex: '1 1 300px', background: '#0f172a', padding: '30px', borderRadius: '20px', textAlign: 'center', border: '1px solid #1e293b' }}>
            <h3 style={{ marginBottom: '10px' }}>Login Restrito</h3>
            <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '20px' }}>Exclusivo para escritórios em SP e SC com carteira acima de 1.000 processos.</p>
            <a href={whatsappLink} style={{ display: 'block', width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #eab308', color: '#eab308', textDecoration: 'none', fontWeight: 'bold' }}>Solicitar Credenciais</a>
          </div>
        </div>
      </section>

      <footer style={{ padding: '40px', textAlign: 'center', color: '#475569', fontSize: '14px', borderTop: '1px solid #1e293b' }}>
        © 2026 Advogado Nômade - Dr. Reginaldo Oliveira (OAB/SC 57.879). <br/>
        Estratégia baseada em padrões de alta liquidez.
      </footer>
    </main>
  );
}
