'use client';

export default function PortfolioSection() {
  return (
    <section id="portfolio">
      <div className="container">
        <h2 className="section-title">Our Work</h2>
        <p 
          style={{ 
            textAlign: 'center', 
            fontSize: '1.2rem', 
            color: 'var(--text-muted)', 
            marginBottom: '40px' 
          }}
        >
          Trusted by these businesses
        </p>
        
        <div 
          style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            gap: '40px' 
          }}
        >
          
          <div style={{ textAlign: 'center' }}>
            <div 
              style={{ 
                fontWeight: '600', 
                fontSize: '1.2rem', 
                marginBottom: '5px', 
                color: 'var(--text-primary)' 
              }}
            >
              Amakhuma Mining
            </div>
            <a 
              href="https://amakhuma.co.za" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ 
                color: 'var(--primary-color)', 
                textDecoration: 'none', 
                fontSize: '1rem' 
              }}
            >
              → [View]
            </a>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <div 
              style={{ 
                fontWeight: '600', 
                fontSize: '1.2rem', 
                marginBottom: '5px', 
                color: 'var(--text-primary)' 
              }}
            >
              Siko Mining Services
            </div>
            <a 
              href="https://sikomining.co.za" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ 
                color: 'var(--primary-color)', 
                textDecoration: 'none', 
                fontSize: '1rem' 
              }}
            >
              → [View]
            </a>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <div 
              style={{ 
                fontWeight: '600', 
                fontSize: '1.2rem', 
                marginBottom: '5px', 
                color: 'var(--text-primary)' 
              }}
            >
              NMAS Innovations
            </div>
            <a 
              href="https://nmas.co.za" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ 
                color: 'var(--primary-color)', 
                textDecoration: 'none', 
                fontSize: '1rem' 
              }}
            >
              → [View]
            </a>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <div 
              style={{ 
                fontWeight: '600', 
                fontSize: '1.2rem', 
                marginBottom: '5px', 
                color: 'var(--text-primary)' 
              }}
            >
              Mpumi Studio
            </div>
            <a 
              href="https://mpumi.nmas.co.za" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ 
                color: 'var(--primary-color)', 
                textDecoration: 'none', 
                fontSize: '1rem' 
              }}
            >
              → [View]
            </a>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div 
              style={{ 
                fontWeight: '600', 
                fontSize: '1.2rem', 
                marginBottom: '5px', 
                color: 'var(--text-primary)' 
              }}
            >
              ECALVIN ETRICIAN
            </div>
            <a 
              href="https://ecalvinetrician.co.za" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ 
                color: 'var(--primary-color)', 
                textDecoration: 'none', 
                fontSize: '1rem' 
              }}
            >
              → [View]
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
}
