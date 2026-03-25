'use client';

export default function PortfolioSection() {
  return (
    <section id="portfolio">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p 
          style={{ 
            textAlign: 'center', 
            fontSize: '1.2rem', 
            color: 'var(--text-muted)', 
            marginBottom: '40px' 
          }}
        >
          High-performance platforms engineered for ambitious South African brands.
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
              🔗 Amakhuma Mining
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
              aria-label="View Amakhuma Mining website"
            >
              View Live Site ↗
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
              🔗 Siko Mining Services
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
              aria-label="View Siko Mining Services website"
            >
              View Live Site ↗
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
              🔗 NMAS Innovations
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
              aria-label="View NMAS Innovations website"
            >
              View Live Site ↗
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
              🔗 Mpumi Studio
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
              aria-label="View Mpumi Studio website"
            >
              View Live Site ↗
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
              🔗 ECALVIN ETRICIAN
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
              aria-label="View ECALVIN ETRICIAN website"
            >
              View Live Site ↗
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
}
