import { useNavigate } from 'react-router-dom';

export default function CertificationCard({ cert, isSmall = false }) {
  const navigate = useNavigate();

  const colorGradients = {
    purple: {
      gradient: 'linear-gradient(135deg, #EEEDFE 0%, #CECBF6 100%)',
      border: '#AFA9EC',
      borderHover: '#7F77DD',
      text: '#3C3489',
    },
    coral: {
      gradient: 'linear-gradient(135deg, #FAECE7 0%, #F5C4B3 100%)',
      border: '#F0997B',
      borderHover: '#D85A30',
      text: '#712B13',
    },
    pink: {
      gradient: 'linear-gradient(135deg, #FBEAF0 0%, #F4C0D1 100%)',
      border: '#ED93B1',
      borderHover: '#D4537E',
      text: '#72243E',
    },
  };

  const colors = colorGradients[cert.color] || colorGradients.purple;

  const handleClick = () => {
    navigate(`/quiz/${cert.id}`);
  };

  if (isSmall) {
    return (
      <button
        onClick={handleClick}
        style={{
          background: colors.gradient,
          border: `0.5px solid ${colors.border}`,
          borderRadius: '12px',
          padding: '1rem',
          cursor: 'pointer',
          textAlign: 'center',
          fontSize: '14px',
          fontWeight: 500,
          color: colors.text,
          minHeight: '140px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onMouseEnter={(e) => {
          e.target.style.borderColor = colors.borderHover;
          e.target.style.transform = 'translateY(-2px)';
          e.target.style.boxShadow = 'rgba(0,0,0,0.1) 0 4px 12px';
        }}
        onMouseLeave={(e) => {
          e.target.style.borderColor = colors.border;
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = 'none';
        }}
      >
        <div style={{ marginBottom: '8px', fontSize: '24px' }}>{cert.icon}</div>
        <div style={{ fontWeight: 500 }}>{cert.name}</div>
        <div style={{ fontSize: '12px', color: colors.text, marginTop: '4px', opacity: 0.8 }}>
          {cert.passingScore}% • {cert.questions} Q
        </div>
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      style={{
        background: colors.gradient,
        border: `0.5px solid ${colors.border}`,
        borderRadius: '12px',
        padding: '1.25rem',
        cursor: 'pointer',
        textAlign: 'left',
        fontSize: '15px',
        fontWeight: 500,
        color: colors.text,
        minHeight: '140px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }}
      onMouseEnter={(e) => {
        e.target.style.borderColor = colors.borderHover;
        e.target.style.transform = 'translateY(-2px)';
        e.target.style.boxShadow = 'rgba(0,0,0,0.1) 0 4px 12px';
      }}
      onMouseLeave={(e) => {
        e.target.style.borderColor = colors.border;
        e.target.style.transform = 'translateY(0)';
        e.target.style.boxShadow = 'none';
      }}
    >
      <div style={{ marginBottom: '8px', fontSize: '20px' }}>{cert.icon}</div>
      <div style={{ fontWeight: 500, marginBottom: '4px' }}>{cert.name}</div>
      <div
        style={{
          fontSize: '13px',
          color: colors.text,
          marginTop: '8px',
          fontWeight: 400,
          lineHeight: 1.4,
          opacity: 0.85,
        }}
      >
        {cert.passingScore}% • {cert.questions} questions • {cert.duration} min
      </div>
    </button>
  );
}
