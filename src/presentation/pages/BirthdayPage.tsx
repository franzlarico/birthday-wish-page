import { CalendarHeart, Gift, MapPin, Sparkles, Stars } from 'lucide-react';
import type { CSSProperties } from 'react';
import type { BirthdayProfile } from '../../domain/birthdayProfile';
import './BirthdayPage.css';

type BirthdayPageProps = {
  profile: BirthdayProfile;
};

const DolphinsBackground = () => (
  <div className="dolphins-bg" aria-hidden="true">
    {/* Drawn Waves in Background */}
    <div className="drawn-waves drawn-waves-1"></div>
    <div className="drawn-waves drawn-waves-2"></div>
    <div className="drawn-waves drawn-waves-3"></div>

    {/* Animated dolphins (Illustration style) */}
    {[...Array(4)].map((_, i) => (
      <div key={i} className={`drawn-dolphin drawn-dolphin-${i + 1}`}>
        <img 
          src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f42c.svg" 
          alt="Delfín" 
          style={{ 
            width: '100%', 
            height: '100%', 
            filter: 'drop-shadow(0 15px 15px rgba(0,0,0,0.3))' 
          }} 
        />
      </div>
    ))}
    {/* Cute bubbles */}
    <div className="bubbles">
      {[...Array(10)].map((_, i) => (
        <div key={i} className={`bubble bubble-${i + 1}`}></div>
      ))}
    </div>
  </div>
);

export function BirthdayPage({ profile }: BirthdayPageProps) {
  const pageStyle = {
    '--accent': profile.accentColor,
    '--secondary': profile.secondaryColor,
  } as CSSProperties;

  return (
    <main className="birthday-page" style={pageStyle}>
      <DolphinsBackground />
      
      <section className="hero" aria-label="Dedicatoria principal">
        <div className="hero__overlay" />
        <div className="hero__content">
          <p className="hero__eyebrow">
            <Sparkles size={18} />
            Especial
          </p>
          <h1>{profile.recipientName}</h1>
          <p className="hero__headline">{profile.headline}</p>
          <div className="hero__meta" aria-label="Detalles de celebración">
            <span>
              <CalendarHeart size={18} />
              {profile.birthDateLabel}
            </span>
          </div>
        </div>
        <div className="hero__date-card" aria-hidden="true">
          <span>{profile.birthDateLabel.split(' ')[0]}</span>
          <strong>{profile.birthDateLabel.split(' de ')[1] || 'Mayo'}</strong>
        </div>
      </section>

      <section className="intro section-shell">
        <div>
          <p className="section-kicker">Para ti</p>
          <h2>Que este día sea increíble y completamente tuyo.</h2>
        </div>
        <p>{profile.dedication}</p>
      </section>

      <section className="wishes section-shell" aria-labelledby="wishes-title">
        <div className="section-heading">
          <p className="section-kicker">Mis Deseos</p>
          <h2 id="wishes-title">Lo mejor para este nuevo año</h2>
        </div>
        <div className="wish-grid">
          {profile.wishes.map((wish) => (
            <article className="wish-card" key={wish.label}>
              <div className="card-icon">
                <Stars size={28} />
              </div>
              <p>{wish.label}</p>
              <h3>{wish.text}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="final-message" aria-label="Mensaje final">
        <div className="final-message__content">
          <Gift size={48} />
          <h2>{profile.finalMessage}</h2>
          <p>{profile.signature}</p>
        </div>
      </section>
    </main>
  );
}
