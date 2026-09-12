import CertificationCard from '../components/CertificationCard';
import certifications from '../data/certifications.json';
import styles from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Braze Certification Trainer</h1>
        <p>
          Practice your skills and master Braze certifications with interactive question-answer exercises.
          Choose a badge or certification below to get started.
        </p>
      </header>

      {/* Skill Badges Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Skill Badges</h2>
        <div className={styles.gridSmall}>
          {certifications.skillBadges.map((cert) => (
            <CertificationCard key={cert.id} cert={cert} isSmall={true} />
          ))}
        </div>
      </section>

      {/* Level 1 Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Level 1 Certifications</h2>
        <div className={styles.gridLarge}>
          {certifications.level1.map((cert) => (
            <CertificationCard key={cert.id} cert={cert} isSmall={false} />
          ))}
        </div>
      </section>

      {/* Level 2 & 3 Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Level 2 & 3 Certifications</h2>
        <div className={styles.gridLarge}>
          {certifications.level2_3.map((cert) => (
            <CertificationCard key={cert.id} cert={cert} isSmall={false} />
          ))}
        </div>
      </section>
    </div>
  );
}
