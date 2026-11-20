import './App.css'

const services = [
  { number: '01', name: 'Corte clássico', detail: 'Tesoura ou máquina, finalizado no capricho.', price: 'R$ 45' },
  { number: '02', name: 'Barba', detail: 'Toalha quente, navalha e cuidado em cada detalhe.', price: 'R$ 35' },
  { number: '03', name: 'Corte + barba', detail: 'O ritual completo para sair renovado.', price: 'R$ 70' },
]

function ArrowIcon() {
  return <span aria-hidden="true" className="arrow">↗</span>
}

function App() {
  return (
    <main>
      <section className="hero" id="inicio">
        <div className="hero-photo" aria-hidden="true" />
        <div className="hero-shade" aria-hidden="true" />

        <header className="site-header">
          <a className="wordmark" href="#inicio" aria-label="Ofício Barbearia, início">
            <span className="wordmark-icon">O.</span>
            <span>OFÍCIO<span className="wordmark-sub">BARBEARIA</span></span>
          </a>
          <nav className="desktop-nav" aria-label="Navegação principal">
            <a href="#servicos">Serviços</a>
            <a href="#sobre">A casa</a>
            <a href="#contato">Onde estamos</a>
          </nav>
          <a className="header-cta" href="#contato">Agende seu horário <ArrowIcon /></a>
        </header>

        <div className="hero-content">
          <p className="eyebrow"><span /> BARBEARIA • DESDE 2018</p>
          <h1>Seu estilo.<br /><em>Nosso ofício.</em></h1>
          <p className="hero-copy">Mais do que cortar cabelo. Um tempo para você, feito com técnica, cuidado e personalidade.</p>
          <a className="button button-gold" href="#servicos">Conheça a barbearia <ArrowIcon /></a>
        </div>

        <div className="hero-note"><span>01 / 03</span><span className="note-line" /><span>TRADIÇÃO COM ATITUDE</span></div>
        <a className="scroll-cue" href="#servicos"><span className="scroll-line" /> ROLE PARA DESCOBRIR</a>
      </section>

      <section className="intro" id="sobre">
        <div className="section-kicker"><span>01</span> UM BOM CORTE MUDA O DIA</div>
        <div className="intro-copy">
          <h2>O cuidado está<br />em cada <em>detalhe.</em></h2>
          <div className="intro-aside">
            <p>Um espaço para desacelerar, trocar ideia e sair se sentindo bem. Aqui, cada atendimento respeita o seu estilo — do primeiro bom dia ao último ajuste.</p>
            <a className="text-link" href="#contato">Conheça a casa <ArrowIcon /></a>
          </div>
        </div>
        <div className="stats-row">
          <div><strong>+5</strong><span>ANOS DE EXPERIÊNCIA</span></div>
          <div><strong>1:1</strong><span>ATENDIMENTO COM HORA MARCADA</span></div>
          <div><strong>100%</strong><span>ATENÇÃO AO SEU ESTILO</span></div>
        </div>
      </section>

      <section className="services" id="servicos">
        <div className="services-heading">
          <div className="section-kicker"><span>02</span> O QUE A GENTE FAZ</div>
          <h2>Na régua.<br /><em>No seu estilo.</em></h2>
          <p>Serviços feitos sem pressa, com técnica e bons produtos.</p>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <article className="service-item" key={service.number}>
              <span className="service-number">{service.number}</span>
              <div className="service-description"><h3>{service.name}</h3><p>{service.detail}</p></div>
              <span className="service-price">{service.price}</span>
              <a className="service-arrow" href="#contato" aria-label={`Agendar ${service.name}`}><ArrowIcon /></a>
            </article>
          ))}
          <p className="price-note">Valores demonstrativos. Personalize os serviços e preços para cada barbearia.</p>
        </div>
      </section>

      <section className="quote-band">
        <span className="quote-mark">“</span>
        <blockquote>Estilo não se inventa.<br /><em>Se revela.</em></blockquote>
        <span className="quote-caption">UM BOM CORTE COMEÇA COM UMA BOA CONVERSA.</span>
      </section>

      <section className="contact" id="contato">
        <div className="contact-copy">
          <div className="section-kicker"><span>03</span> VAMOS MARCAR?</div>
          <h2>Seu próximo<br />corte começa <em>aqui.</em></h2>
          <p>Chame a gente e encontre o melhor horário para você.</p>
          <a className="button button-dark" href="#contato">Agende pelo WhatsApp <ArrowIcon /></a>
          <small>Adicione o WhatsApp da barbearia para ativar o agendamento.</small>
        </div>
        <div className="contact-card">
          <div className="contact-card-top"><span className="wordmark-icon">O.</span><span>OFÍCIO BARBEARIA</span></div>
          <div className="contact-details">
            <div><span>ENDEREÇO</span><p>Rua da Barbearia, 123<br />Centro • Sua cidade</p></div>
            <div><span>HORÁRIOS</span><p>Ter a sáb, 9h às 19h<br />Sáb, 9h às 16h</p></div>
          </div>
          <a className="map-link" href="https://maps.google.com" target="_blank" rel="noreferrer">Abrir no mapa <ArrowIcon /></a>
          <span className="contact-card-stamp">DESDE<br />2018</span>
        </div>
      </section>

      <footer className="site-footer">
        <a className="wordmark" href="#inicio"><span className="wordmark-icon">O.</span><span>OFÍCIO<span className="wordmark-sub">BARBEARIA</span></span></a>
        <span>UM BOM CORTE, UMA BOA CONVERSA.</span>
        <a href="#inicio">VOLTAR AO TOPO ↑</a>
      </footer>
    </main>
  )
}

export default App
