'use client';

import { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { label: 'THE EXPERIENCE', href: '#experience' },
  { label: 'OUR BARBERS', href: '#barbers' },
  { label: 'MEMBERSHIP', href: '#membership' },
  { label: 'GALLERY', href: '#gallery' },
  { label: 'CONTACT', href: '#contact' },
];

const STATS = [
  { icon: 'laurel', value: '5,000+', label: 'Discerning Gentlemen' },
  { icon: 'crown', value: '12', label: 'Master Barbers' },
  { icon: 'wreath', value: '15+', label: 'Years of Excellence' },
  { icon: 'star', value: '5.0', label: 'Average Rating' },
];

const BARBERS = [
  { name: 'James Morrison', title: 'Master Barber', specialty: 'Classic Cuts', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face' },
  { name: 'William Chen', title: 'Senior Stylist', specialty: 'Modern Fades', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face' },
  { name: 'Marcus Thompson', title: 'Master Barber', specialty: 'Hot Towel Shaves', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face' },
  { name: 'Alexander Reid', title: 'Creative Director', specialty: 'Beard Sculpting', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop&crop=face' },
  { name: 'David Kim', title: 'Senior Stylist', specialty: 'Precision Styling', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop&crop=face' },
];

function IconLaurel() {
  return (
    <svg width="40" height="40" viewBox="0 0 48 48" fill="currentColor">
      <path d="M24 4C24 4 20 8 20 14C20 20 24 24 24 24C24 24 28 20 28 14C28 8 24 4 24 4Z" />
      <path d="M12 8C12 8 8 14 10 20C12 26 18 28 18 28C18 28 20 22 18 16C16 10 12 8 12 8Z" />
      <path d="M36 8C36 8 40 14 38 20C36 26 30 28 30 28C30 28 28 22 30 16C32 10 36 8 36 8Z" />
      <path d="M6 18C6 18 4 26 8 32C12 38 20 38 20 38C20 38 20 30 16 24C12 18 6 18 6 18Z" />
      <path d="M42 18C42 18 44 26 40 32C36 38 28 38 28 38C28 38 28 30 32 24C36 18 42 18 42 18Z" />
      <path d="M24 28V44" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="24" cy="46" r="2" />
    </svg>
  );
}

function IconCrown() {
  return (
    <svg width="40" height="40" viewBox="0 0 48 48" fill="currentColor">
      <path d="M6 36L4 16L14 24L24 12L34 24L44 16L42 36H6Z" />
      <rect x="6" y="36" width="36" height="6" rx="1" />
      <circle cx="10" cy="18" r="3" />
      <circle cx="24" cy="10" r="3" />
      <circle cx="38" cy="18" r="3" />
    </svg>
  );
}

function IconWreath() {
  return (
    <svg width="40" height="40" viewBox="0 0 48 48" fill="currentColor">
      <path d="M10 24C10 16 16 10 24 10" stroke="currentColor" strokeWidth="3" fill="none" />
      <path d="M38 24C38 16 32 10 24 10" stroke="currentColor" strokeWidth="3" fill="none" />
      <path d="M10 24C10 32 16 38 24 38" stroke="currentColor" strokeWidth="3" fill="none" />
      <path d="M38 24C38 32 32 38 24 38" stroke="currentColor" strokeWidth="3" fill="none" />
      <ellipse cx="8" cy="18" rx="4" ry="6" transform="rotate(-30 8 18)" />
      <ellipse cx="8" cy="30" rx="4" ry="6" transform="rotate(30 8 30)" />
      <ellipse cx="40" cy="18" rx="4" ry="6" transform="rotate(30 40 18)" />
      <ellipse cx="40" cy="30" rx="4" ry="6" transform="rotate(-30 40 30)" />
      <ellipse cx="14" cy="10" rx="4" ry="5" transform="rotate(-60 14 10)" />
      <ellipse cx="34" cy="10" rx="4" ry="5" transform="rotate(60 34 10)" />
      <ellipse cx="14" cy="38" rx="4" ry="5" transform="rotate(60 14 38)" />
      <ellipse cx="34" cy="38" rx="4" ry="5" transform="rotate(-60 34 38)" />
      <path d="M22 42L24 46L26 42" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  );
}

function IconStarGold() {
  return (
    <svg width="40" height="40" viewBox="0 0 48 48" fill="currentColor">
      <path d="M24 4L28.9 17.5H43.4L31.7 26L36.6 39.5L24 31L11.4 39.5L16.3 26L4.6 17.5H19.1L24 4Z" />
      <circle cx="24" cy="24" r="6" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    </svg>
  );
}

function getIcon(name: string) {
  switch (name) {
    case 'laurel': return <IconLaurel />;
    case 'crown': return <IconCrown />;
    case 'wreath': return <IconWreath />;
    case 'star': return <IconStarGold />;
    default: return null;
  }
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Sticky Navigation */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: scrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          padding: '20px 60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'all 0.3s ease',
          borderBottom: scrolled ? '1px solid rgba(201, 169, 98, 0.2)' : 'none',
        }}
      >
        <a href="#" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 600, color: '#C9A962', letterSpacing: '0.05em' }}>
          THE GILDED CHAIR
        </a>
        <nav style={{ display: 'flex', gap: '40px' }}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{
                fontSize: '0.75rem',
                fontWeight: 500,
                letterSpacing: '0.15em',
                color: '#fff',
                opacity: 0.9,
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = '#C9A962')}
              onMouseOut={(e) => (e.currentTarget.style.color = '#fff')}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          style={{
            background: '#C9A962',
            color: '#0A0A0A',
            padding: '12px 28px',
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            transition: 'all 0.3s ease',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = '#fff';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = '#C9A962';
          }}
        >
          BOOK NOW
        </a>
      </header>

      {/* Hero Section - Split Layout with Full Image */}
      <section
        id="experience"
        style={{
          minHeight: '100vh',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          background: '#0A0A0A',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '120px 80px',
          }}
        >
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 500,
              letterSpacing: '0.3em',
              color: '#C9A962',
              marginBottom: '24px',
            }}
          >
            LUXURY BARBERSHOP EST. 2009
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '5rem',
              fontWeight: 500,
              lineHeight: 1.1,
              color: '#fff',
              marginBottom: '32px',
            }}
          >
            A Cut
            <br />
            <span style={{ color: '#C9A962' }}>Above</span>
          </h1>
          <p
            style={{
              fontSize: '1.1rem',
              fontWeight: 300,
              lineHeight: 1.8,
              color: 'rgba(255,255,255,0.7)',
              maxWidth: '440px',
              marginBottom: '48px',
            }}
          >
            Experience the art of grooming at its finest. Where every cut is a masterpiece and every visit is a ritual of refinement.
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a
              href="#contact"
              style={{
                background: '#C9A962',
                color: '#0A0A0A',
                padding: '18px 40px',
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                transition: 'all 0.3s ease',
              }}
            >
              RESERVE YOUR SEAT
            </a>
            <a
              href="#barbers"
              style={{
                border: '1px solid rgba(255,255,255,0.3)',
                color: '#fff',
                padding: '18px 40px',
                fontSize: '0.8rem',
                fontWeight: 500,
                letterSpacing: '0.1em',
                transition: 'all 0.3s ease',
              }}
            >
              MEET THE MASTERS
            </a>
          </div>
        </div>
        <div
          style={{
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1200&h=1400&fit=crop"
            alt="Luxury barbershop leather chair"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to right, rgba(10, 10, 10, 0.3) 0%, transparent 50%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '40px',
              right: '40px',
              width: '60px',
              height: '60px',
              border: '2px solid #C9A962',
              borderLeft: 'none',
              borderTop: 'none',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '40px',
              left: '40px',
              width: '60px',
              height: '60px',
              border: '2px solid #C9A962',
              borderRight: 'none',
              borderBottom: 'none',
            }}
          />
        </div>
      </section>

      {/* Stats Banner */}
      <section
        style={{
          background: '#C9A962',
          padding: '60px 80px',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '40px',
        }}
      >
        {STATS.map((stat) => (
          <div
            key={stat.label}
            style={{
              textAlign: 'center',
              color: '#0A0A0A',
            }}
          >
            <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>{getIcon(stat.icon)}</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 600, marginBottom: '8px' }}>
              {stat.value}
            </div>
            <div style={{ fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.1em', opacity: 0.8 }}>
              {stat.label}
            </div>
          </div>
        ))}
      </section>

      {/* About Section - Split Layout with Image */}
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          minHeight: '80vh',
          background: '#F2EEE6',
        }}
      >
        <div
          style={{
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1000&h=1200&fit=crop"
            alt="Atmospheric barbershop interior"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, transparent 60%, rgba(10, 10, 10, 0.2) 100%)',
            }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '80px',
            color: '#0A0A0A',
          }}
        >
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 500,
              letterSpacing: '0.3em',
              color: '#C9A962',
              marginBottom: '24px',
            }}
          >
            OUR PHILOSOPHY
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '3.5rem',
              fontWeight: 500,
              lineHeight: 1.2,
              marginBottom: '32px',
            }}
          >
            More than
            <br />
            a cut
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              fontWeight: 300,
              lineHeight: 1.9,
              color: 'rgba(10, 10, 10, 0.7)',
              marginBottom: '24px',
            }}
          >
            At The Gilded Chair, we believe grooming is an art form. Our master barbers combine time-honored techniques with contemporary precision to deliver an experience that transcends the ordinary.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              fontWeight: 300,
              lineHeight: 1.9,
              color: 'rgba(10, 10, 10, 0.7)',
              marginBottom: '40px',
            }}
          >
            Every appointment is an invitation to slow down, to be present, and to emerge not just looking your best, but feeling renewed.
          </p>
          <a
            href="#membership"
            style={{
              display: 'inline-block',
              background: '#0A0A0A',
              color: '#fff',
              padding: '18px 40px',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              width: 'fit-content',
              transition: 'all 0.3s ease',
            }}
          >
            DISCOVER MEMBERSHIP
          </a>
        </div>
      </section>

      {/* Team Cards Section */}
      <section
        id="barbers"
        style={{
          background: '#0A0A0A',
          padding: '120px 80px',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 500,
              letterSpacing: '0.3em',
              color: '#C9A962',
              marginBottom: '24px',
              display: 'block',
            }}
          >
            THE ARTISANS
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '3rem',
              fontWeight: 500,
              color: '#fff',
            }}
          >
            Our Master Barbers
          </h2>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '30px',
          }}
        >
          {BARBERS.map((barber) => (
            <div
              key={barber.name}
              style={{
                background: '#1A1714',
                overflow: 'hidden',
                transition: 'transform 0.3s ease',
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'translateY(-8px)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <div
                style={{
                  aspectRatio: '3/4',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={barber.image}
                  alt={barber.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    filter: 'grayscale(20%)',
                    transition: 'filter 0.3s ease, transform 0.3s ease',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.filter = 'grayscale(0%)';
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.filter = 'grayscale(20%)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '50%',
                    background: 'linear-gradient(to top, rgba(26, 23, 20, 0.9) 0%, transparent 100%)',
                    pointerEvents: 'none',
                  }}
                />
              </div>
              <div style={{ padding: '24px', textAlign: 'center' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.2rem',
                    fontWeight: 500,
                    color: '#fff',
                    marginBottom: '8px',
                  }}
                >
                  {barber.name}
                </h3>
                <p
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    color: '#C9A962',
                    marginBottom: '8px',
                  }}
                >
                  {barber.title}
                </p>
                <p
                  style={{
                    fontSize: '0.8rem',
                    color: 'rgba(255,255,255,0.5)',
                  }}
                >
                  {barber.specialty}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Membership Section */}
      <section
        id="membership"
        style={{
          background: 'linear-gradient(180deg, #1A1714 0%, #0A0A0A 100%)',
          padding: '120px 80px',
          textAlign: 'center',
        }}
      >
        <span
          style={{
            fontSize: '0.75rem',
            fontWeight: 500,
            letterSpacing: '0.3em',
            color: '#C9A962',
            marginBottom: '24px',
            display: 'block',
          }}
        >
          EXCLUSIVE ACCESS
        </span>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '3rem',
            fontWeight: 500,
            color: '#fff',
            marginBottom: '24px',
          }}
        >
          The Gilded Circle
        </h2>
        <p
          style={{
            fontSize: '1.1rem',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.7)',
            maxWidth: '600px',
            margin: '0 auto 48px',
            lineHeight: 1.8,
          }}
        >
          Join our membership program for priority booking, exclusive events, and complimentary services reserved for our most distinguished patrons.
        </p>
        <a
          href="#contact"
          style={{
            display: 'inline-block',
            background: 'transparent',
            border: '2px solid #C9A962',
            color: '#C9A962',
            padding: '18px 48px',
            fontSize: '0.8rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            transition: 'all 0.3s ease',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = '#C9A962';
            e.currentTarget.style.color = '#0A0A0A';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#C9A962';
          }}
        >
          INQUIRE ABOUT MEMBERSHIP
        </a>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        style={{
          background: '#F2EEE6',
          padding: '120px 80px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
        }}
      >
        <div style={{ color: '#0A0A0A' }}>
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 500,
              letterSpacing: '0.3em',
              color: '#C9A962',
              marginBottom: '24px',
              display: 'block',
            }}
          >
            GET IN TOUCH
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '3rem',
              fontWeight: 500,
              marginBottom: '32px',
            }}
          >
            Book Your
            <br />
            Experience
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              fontWeight: 300,
              lineHeight: 1.9,
              color: 'rgba(10, 10, 10, 0.7)',
              marginBottom: '40px',
            }}
          >
            We operate by appointment only. Reach out to reserve your seat or inquire about membership.
          </p>
          <div style={{ marginBottom: '24px' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', marginBottom: '8px', color: '#0A0A0A' }}>ADDRESS</p>
            <p style={{ color: 'rgba(10, 10, 10, 0.7)' }}>123 Elegance Avenue, Suite 100<br />New York, NY 10001</p>
          </div>
          <div style={{ marginBottom: '24px' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', marginBottom: '8px', color: '#0A0A0A' }}>HOURS</p>
            <p style={{ color: 'rgba(10, 10, 10, 0.7)' }}>Tuesday - Saturday: 9am - 7pm<br />Sunday - Monday: Closed</p>
          </div>
          <div>
            <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', marginBottom: '8px', color: '#0A0A0A' }}>CONTACT</p>
            <p style={{ color: 'rgba(10, 10, 10, 0.7)' }}>appointments@thegildedchair.com<br />(212) 555-0199</p>
          </div>
        </div>
        <div>
          <form
            style={{
              background: '#fff',
              padding: '48px',
              boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
            }}
          >
            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '8px', color: '#0A0A0A' }}>
                NAME
              </label>
              <input
                type="text"
                style={{
                  width: '100%',
                  padding: '16px',
                  border: '1px solid rgba(10, 10, 10, 0.15)',
                  fontSize: '1rem',
                  fontFamily: 'inherit',
                }}
              />
            </div>
            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '8px', color: '#0A0A0A' }}>
                EMAIL
              </label>
              <input
                type="email"
                style={{
                  width: '100%',
                  padding: '16px',
                  border: '1px solid rgba(10, 10, 10, 0.15)',
                  fontSize: '1rem',
                  fontFamily: 'inherit',
                }}
              />
            </div>
            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '8px', color: '#0A0A0A' }}>
                MESSAGE
              </label>
              <textarea
                rows={4}
                style={{
                  width: '100%',
                  padding: '16px',
                  border: '1px solid rgba(10, 10, 10, 0.15)',
                  fontSize: '1rem',
                  fontFamily: 'inherit',
                  resize: 'vertical',
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                width: '100%',
                background: '#0A0A0A',
                color: '#fff',
                padding: '18px',
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              SEND INQUIRY
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: '#0A0A0A',
          padding: '60px 80px',
          borderTop: '1px solid rgba(201, 169, 98, 0.2)',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div>
            <a
              href="#"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.25rem',
                fontWeight: 600,
                color: '#C9A962',
                letterSpacing: '0.05em',
              }}
            >
              THE GILDED CHAIR
            </a>
            <p style={{ marginTop: '8px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>
              Luxury Barbershop Est. 2009
            </p>
          </div>
          <nav style={{ display: 'flex', gap: '40px' }}>
            {NAV_ITEMS.slice(0, 4).map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  color: 'rgba(255,255,255,0.7)',
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>
            &copy; 2026 The Gilded Chair. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
