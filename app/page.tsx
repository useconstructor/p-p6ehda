export default function Home() {
  return (
    <div>
      <header style={{background:'#0A0A0A',color:'white',padding:'20px 40px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <span style={{fontSize:'1.5rem',fontWeight:'bold'}}>Project 1788567447998</span>
        <nav style={{display:'flex',gap:'20px'}}>
          <a href="#nav_sticky" style={{color:'white',textDecoration:'none'}}>nav_sticky</a>
          <a href="#hero_split" style={{color:'white',textDecoration:'none'}}>hero_split</a>
          <a href="#stats_banner" style={{color:'white',textDecoration:'none'}}>stats_banner</a>
          <a href="#about_split" style={{color:'white',textDecoration:'none'}}>about_split</a>
          <a href="#team_cards" style={{color:'white',textDecoration:'none'}}>team_cards</a>
        </nav>
      </header>
      <section style={{background:'#0A0A0A',color:'white',padding:'100px 40px',textAlign:'center'}}>
        <h1 style={{fontSize:'3rem',fontWeight:'800',marginBottom:'20px'}}>Project 1788567447998</h1>
        <p style={{fontSize:'1.2rem',opacity:0.85,maxWidth:'600px',margin:'0 auto 40px'}}>An ultra-premium, appointment-only barbershop website for The Gilded Chair, positioned as an exclusive grooming ritual rather than a transactional haircut service. The experience emphasizes cinematic restraint, master craftsmanship, membership prestige, and private inquiry.</p>
        <a href="#contact" style={{background:'#C9A962',color:'white',padding:'16px 32px',borderRadius:'50px',textDecoration:'none',fontWeight:'bold',display:'inline-block'}}>Get In Touch</a>
      </section>
      <section id="nav_sticky" style={{padding:'80px 40px',textAlign:'center'}}>
        <h2 style={{fontSize:'2rem',fontWeight:'700',marginBottom:'16px',color:'#0A0A0A'}}>nav_sticky</h2>
        <p style={{color:'#666',maxWidth:'500px',margin:'0 auto'}}>Contact us to learn more about our nav_sticky offerings.</p>
      </section>
      <section id="hero_split" style={{padding:'80px 40px',textAlign:'center'}}>
        <h2 style={{fontSize:'2rem',fontWeight:'700',marginBottom:'16px',color:'#0A0A0A'}}>hero_split</h2>
        <p style={{color:'#666',maxWidth:'500px',margin:'0 auto'}}>Contact us to learn more about our hero_split offerings.</p>
      </section>
      <section id="stats_banner" style={{padding:'80px 40px',textAlign:'center'}}>
        <h2 style={{fontSize:'2rem',fontWeight:'700',marginBottom:'16px',color:'#0A0A0A'}}>stats_banner</h2>
        <p style={{color:'#666',maxWidth:'500px',margin:'0 auto'}}>Contact us to learn more about our stats_banner offerings.</p>
      </section>
      <section id="about_split" style={{padding:'80px 40px',textAlign:'center'}}>
        <h2 style={{fontSize:'2rem',fontWeight:'700',marginBottom:'16px',color:'#0A0A0A'}}>about_split</h2>
        <p style={{color:'#666',maxWidth:'500px',margin:'0 auto'}}>Contact us to learn more about our about_split offerings.</p>
      </section>
      <section id="team_cards" style={{padding:'80px 40px',textAlign:'center'}}>
        <h2 style={{fontSize:'2rem',fontWeight:'700',marginBottom:'16px',color:'#0A0A0A'}}>team_cards</h2>
        <p style={{color:'#666',maxWidth:'500px',margin:'0 auto'}}>Contact us to learn more about our team_cards offerings.</p>
      </section>
      <footer style={{background:'#0A0A0A',color:'white',padding:'30px',textAlign:'center'}}>
        <p>Copyright 2026 Project 1788567447998. All rights reserved.</p>
      </footer>
    </div>
  );
}