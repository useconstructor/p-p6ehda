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
  { icon: 'users', value: '5,000+', label: 'Discerning Gentlemen' },
  { icon: 'scissors', value: '12', label: 'Master Barbers' },
  { icon: 'award', value: '15+', label: 'Years of Excellence' },
  { icon: 'star', value: '5.0', label: 'Average Rating' },
];

const BARBERS = [
  { name: 'James Morrison', title: 'Master Barber', specialty: 'Classic Cuts', image: '/barbers/james.jpg' },
  { name: 'William Chen', title: 'Senior Stylist', specialty: 'Modern Fades', image: '/barbers/william.jpg' },
  { name: 'Marcus Thompson', title: 'Master Barber', specialty: 'Hot Towel Shaves', image: '/barbers/marcus.jpg' },
  { name: 'Alexander Reid', title: 'Creative Director', specialty: 'Beard Sculpting', image: '/barbers/alexander.jpg' },
  { name: 'David Kim', title: 'Senior Stylist', specialty: 'Precision Styling', image: '/barbers/david.jpg' },
];

function IconUsers() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function IconScissors() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <line x1="20" y1="4" x2="8.12" y2="15.88" />
      <line x1="14.47" y1="14.48" x2="20" y2="20" />
      <line x1="8.12" y1="8.12" x2="12" y2="12" />
    </svg>
  );
}

function IconAward() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="7" />
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
  );
}

function IconStar() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function getIcon(name: string) {
  switch (name) {
    case 'users': return <IconUsers />;
    case 'scissors': return <IconScissors />;
    case 'award': return <IconAward />;
    case 'star': return <IconStar />;
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

      {/* Hero Section - Split Layout */}
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
            background: 'linear-gradient(135deg, #1A1714 0%, #2a241e 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23C9A962\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: '70%',
                aspectRatio: '3/4',
                background: '#1A1714',
                border: '2px solid rgba(201, 169, 98, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              <div style={{ textAlign: 'center', color: 'rgba(201, 169, 98, 0.6)' }}>
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="6" cy="6" r="3" />
                  <circle cx="6" cy="18" r="3" />
                  <line x1="20" y1="4" x2="8.12" y2="15.88" />
                  <line x1="14.47" y1="14.48" x2="20" y2="20" />
                  <line x1="8.12" y1="8.12" x2="12" y2="12" />
                </svg>
                <p style={{ marginTop: '16px', fontSize: '0.85rem', letterSpacing: '0.1em' }}>BARBERSHOP CHAIR</p>
              </div>
              <div
                style={{
                  position: 'absolute',
                  top: '-20px',
                  left: '-20px',
                  width: '40px',
                  height: '40px',
                  border: '2px solid #C9A962',
                  borderRight: 'none',
                  borderBottom: 'none',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '-20px',
                  right: '-20px',
                  width: '40px',
                  height: '40px',
                  border: '2px solid #C9A962',
                  borderLeft: 'none',
                  borderTop: 'none',
                }}
              />
            </div>
          </div>
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
            <div style={{ marginBottom: '16px', opacity: 0.8 }}>{getIcon(stat.icon)}</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 600, marginBottom: '8px' }}>
              {stat.value}
            </div>
            <div style={{ fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.1em', opacity: 0.8 }}>
              {stat.label}
            </div>
          </div>
        ))}
      </section>

      {/* About Section - Split Layout */}
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
            background: 'linear-gradient(135deg, #1A1714 0%, #2a241e 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '60px',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              minHeight: '400px',
              background: '#0A0A0A',
              border: '2px solid rgba(201, 169, 98, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div style={{ textAlign: 'center', color: 'rgba(201, 169, 98, 0.6)' }}>
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              <p style={{ marginTop: '12px', fontSize: '0.75rem', letterSpacing: '0.1em' }}>BARBERSHOP INTERIOR</p>
            </div>
          </div>
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
                  background: 'linear-gradient(180deg, #2a241e 0%, #1A1714 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderBottom: '2px solid rgba(201, 169, 98, 0.2)',
                }}
              >
                <div style={{ textAlign: 'center', color: 'rgba(201, 169, 98, 0.5)' }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
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
