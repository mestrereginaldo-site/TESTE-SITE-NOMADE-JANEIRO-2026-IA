import React from "react";

export default function Home() {
  return (
    <main style={{ backgroundColor: '#020617', color: 'white', minHeight: '100-vh', fontFamily: 'sans-serif' }}>
      {/* HEADER FIXO */}
      <nav style={{ padding: '20px', borderBottom: '1px solid #1e293b', display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ fontSize: '24px', fontWeight: 'bold' }}>ADVOGADO <span style={{ color: '#eab308' }}>NÔMADE</span></div>
        <div style={{ color: '#94a3b8', fontSize: '14px' }}>OAB/SC 57.879</div>
      </nav>

      {/* HERO SECTION - O SEU CARTÃO DE VISITAS PARA SP */}
      <section style={{ padding: '80px 20px', textAlign: 'center', background: 'linear-gradient(to bottom, #1e3a8a33, transparent)' }}>
        <h1 style={{ fontSize: '48px', fontWeight: '900', marginBottom: '20px' }}>
          Inteligência de <span style={{ color: '#eab308' }}>Ativos</span> Jurídicos
        </h1>
        <p style={{ fontSize: '20px', color: '#94a3b8', maxWidth: '800px', margin: '0 auto 40px' }}>
          Auditoria estratégica para identificação de liquidez represada contra Réus de Ouro (Bancos e S/A). 
          Saneamos carteiras de massa com tecnologia de ponta em 48h.
        </p>
        <a href="https://wa.me/5571986482241" style={{ backgroundColor: '#eab308', color: '#020617', padding: '18px 40px', borderRadius: '50px', fontWeight: 'bold', fontSize: '18px', textDecoration: 'none', display: 'inline-block' }}>
          Solicitar Auditoria Gratuita (50 Processos)
        </a>
      </section>

      {/* DASHBOARD DE IMPACTO - O QUE CONVENCE O SÓCIO */}
      <section style={{ padding: '60px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          <div style={{ background: '#0f172a', padding: '30px', borderRadius: '20px', border: '1px solid #1e293b' }}>
            <p style={{ color: '#64748b', fontSize: '12px', fontWeight: 'bold', letterSpacing: '1px', marginBottom: '10px' }}>ATIVOS MAPEADOS (MÊS)</p>
            <h2 style={{ fontSize: '32px', fontWeight: '800' }}>R$ 14.250.840</h2>
          </div>
          <div style={{ background: '#0f172a', padding: '30px', borderRadius: '20px', border: '1px solid #1e293b' }}>
            <p style={{ color: '#64748b', fontSize: '12px', fontWeight: 'bold', letterSpacing: '1px', marginBottom: '10px' }}>INÉRCIA DE CARTEIRA</p>
            <h2 style={{ fontSize: '32px', fontWeight: '800' }}>8.420 Dias</h2>
          </div>
          <div style={{ background: '#0f172a', padding: '30px', borderRadius: '20px', border: '1px solid #1e293b' }}>
            <p style={{ color: '#64748b', fontSize: '12px', fontWeight: 'bold', letterSpacing: '1px', marginBottom: '10px' }}>ASSERTIVIDADE TÉCNICA</p>
            <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#eab308' }}>94.8%</h2>
          </div>
        </div>
      </section>

      {/* PORTAL DE AUDITORIA - MODELO SAAS */}
      <section style={{ padding: '80px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ background: '#1e293b', borderRadius: '30px', padding: '40px', display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
          <div style={{ flex: '1 1 500px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>Portal de Auditoria SaaS</h2>
            <p style={{ color: '#cbd5e1', marginBottom: '20px' }}>
              Suba seus relatórios e nossa tecnologia filtra instantaneamente os ativos com maior probabilidade de êxito e liquidez imediata.
            </p>
            <div style={{ color: '#eab308', fontWeight: 'bold' }}>✓ Saneamento contra Bancos e S/A</div>
            <div style={{ color: '#eab308', fontWeight: 'bold' }}>✓ Identificação de Devedores Solventes</div>
            <div style={{ color: '#eab308', fontWeight: 'bold' }}>✓ Relatórios para Sócio-Gestor</div>
          </div>
          <div style={{ flex: '1 1 300px', background: '#0f172a', padding: '30px', borderRadius: '20px', textAlign: 'center' }}>
            <h3 style={{ marginBottom: '10px' }}>Área Restrita</h3>
            <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '20px' }}>Acesso exclusivo para parceiros homologados.</p>
            <button style={{ width: '100%', padding: '12px', borderRadius: '8px', border: 'none', background: '#334155', color: '#94a3b8', cursor: 'not-allowed' }}>Acessar Painel</button>
          </div>
        </div>
      </section>

      <footer style={{ padding: '40px', textAlign: 'center', color: '#475569', fontSize: '14px', borderTop: '1px solid #1e293b' }}>
        © 2026 Advogado Nômade - Dr. Reginaldo Oliveira (OAB/SC 57.879). Operação 100% Digital.
      </footer>
    </main>
  );
}
