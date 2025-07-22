import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Header = ({ 
  title, 
  subtitle, 
  showBack = false, 
  action = null,
  className = '' 
}) => {
  const navigate = useNavigate();
  
  return (
    <div className={`header ${className}`}>
      <div className="header-content">
        {showBack && (
          <button 
            className="header-back-button"
            onClick={() => navigate(-1)}
            aria-label="Go back"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        )}
        
        <div className="header-text">
          <h1 className="header-title">{title}</h1>
          {subtitle && <p className="header-subtitle">{subtitle}</p>}
        </div>
        
        {action && <div className="header-action">{action}</div>}
      </div>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  showBack: PropTypes.bool,
  action: PropTypes.node,
  className: PropTypes.string
};

export default Header;