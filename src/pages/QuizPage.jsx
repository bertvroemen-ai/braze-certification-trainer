import { useParams, useNavigate } from 'react-router-dom';
import certifications from '../data/certifications.json';
import styles from './QuizPage.module.css';

export default function QuizPage() {
  const { certId } = useParams();
  const navigate = useNavigate();

  // Find cert details
  const allCerts = [
    ...certifications.skillBadges,
    ...certifications.level1,
    ...certifications.level2_3,
  ];
  const cert = allCerts.find((c) => c.id === certId);

  if (!cert) {
    return (
      <div className={styles.container}>
        <button className={styles.backButton} onClick={() => navigate('/')}>
          ← Back
        </button>
        <div className={styles.error}>Certification not found</div>
      </div>
    );
  }

  const colorStyles = {
    purple: { accent: '#534AB7', light: '#EEEDFE' },
    coral: { accent: '#D85A30', light: '#FAECE7' },
    pink: { accent: '#D4537E', light: '#FBEAF0' },
  };

  const colors = colorStyles[cert.color] || colorStyles.purple;

  return (
    <div className={styles.container}>
      <button className={styles.backButton} onClick={() => navigate('/')}>
        ← Back to Home
      </button>

      <header className={styles.header} style={{ backgroundColor: colors.light }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ fontSize: '40px' }}>{cert.icon}</div>
          <div>
            <h1 style={{ marginBottom: '0.5rem' }}>{cert.name}</h1>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
              {cert.passingScore}% passing • {cert.questions} questions • {cert.duration} minutes
            </p>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.placeholder}>
          <div style={{ fontSize: '64px', marginBottom: '1rem' }}>🚀</div>
          <h2>Coming Soon</h2>
          <p>The quiz interface for {cert.name} will be built here.</p>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginTop: '1rem' }}>
            Questions will be loaded from our database and evaluated by AI.
          </p>
        </div>
      </main>
    </div>
  );
}
