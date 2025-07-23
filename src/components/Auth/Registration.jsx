import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from 'lucide-react';
import styles from './Registration.module.css'; 
import Logo from '../../assets/namelogo-white.png';

const sports = [
  {
    id: "football",
    name: "Football",
    image: "https://res.cloudinary.com/de6u5kbiw/image/upload/v1752067675/dexciss%20site/dexplay/optimal/pexels-pixabay-46798_1_omyner.jpg",
    participants: "2.1M players",
  },
  {
    id: "basketball",
    name: "Basketball",
    image: "https://res.cloudinary.com/de6u5kbiw/image/upload/v1752067723/dexciss%20site/dexplay/optimal/pexels-markusspiske-1752757_1_rhbltt.jpg",
    participants: "1.8M players",
  },
  {
    id: "tennis",
    name: "Tennis",
    image: "https://res.cloudinary.com/de6u5kbiw/image/upload/v1752067671/dexciss%20site/dexplay/optimal/pexels-pixabay-209977_1_cxaacu.jpg",
    participants: "950K players",
  },
  {
    id: "cricket",
    name: "Cricket",
    image: "https://res.cloudinary.com/de6u5kbiw/image/upload/v1752067729/dexciss%20site/dexplay/optimal/pexels-case-originals-3657154_1_cv7jvj.jpg",
    participants: "1.2M players",
  },
  {
    id: "badminton",
    name: "Badminton",
    image: "https://res.cloudinary.com/de6u5kbiw/image/upload/v1752067735/dexciss%20site/dexplay/optimal/pexels-vladvictoria-2202685_1_ydqoy4.jpg",
    participants: "680K players",
  },
  {
    id: "volleyball",
    name: "Volleyball",
    image: "https://res.cloudinary.com/de6u5kbiw/image/upload/v1752067714/dexciss%20site/dexplay/optimal/pexels-pavel-danilyuk-6203514_1_lqgfrd.jpg",
    participants: "520K players",
  },
];

const Registration = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    gender: "",
    level: "",
    interests: [],
  });
  const [otpCode, setOtpCode] = useState(["", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const navigate = useNavigate();

  const handleSportToggle = (sportId) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(sportId)
        ? prev.interests.filter((id) => id !== sportId)
        : [...prev.interests, sportId],
    }));
  };

  const handleOtpSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setOtpCode(["1", "2", "3", "4"]);
      setShowSuccessPopup(true);
      setTimeout(() => {
        setShowSuccessPopup(false);
        navigate('/home');
      }, 2000);
      setIsLoading(false);
    }, 2000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isStep1Valid = () => {
    return (
      formData.name.trim() &&
      formData.age &&
      formData.phone &&
      formData.gender &&
      formData.level
    );
  };

  const isStep2Valid = () => {
    return formData.interests.length > 0;
  };

  const isStep3Valid = () => {
    return otpCode.every(code => code !== '');
  };

  return (
    <div className={styles.container}>
      {/* Success Popup */}
      {showSuccessPopup && (
        <div className={styles.successPopup}>
          <div className={styles.successPopupContent}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="#D7EE34"/>
              <path d="M16 10L10.5 15L8 12.7273" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h3>Phone Verified Successfully!</h3>
          </div>
        </div>
      )}

      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logoContainer}>
            <div className={styles.logoWrapper}>
              <img src={Logo} alt="DexPlay Logo" className={styles.logo} />
            </div>
          </div>
          <div className={styles.stepIndicator}>Step {step} of 3</div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className={styles.progressContainer}>
        <div className={styles.progressBar}>
          <div 
            className={styles.progressFill}
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>

      <main className={styles.mainContent}>
        {step === 1 && (
          <div className={styles.stepContainer}>
            <div className={styles.stepHeader}>
              <User className={styles.userIcon} />
              <h2 className={styles.stepTitle}>Welcome to DexPlay</h2>
              <p className={styles.stepSubtitle}>Let's set up your profile</p>
            </div>

            <div className={styles.formGroup}>
              {/* Full Name */}
              <div className={styles.inputGroup}>
                <label htmlFor="name" className={styles.inputLabel}>
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className={styles.textInput}
                />
              </div>

              {/* Age */}
              <div className={styles.inputGroup}>
                <label htmlFor="age" className={styles.inputLabel}>Age</label>
                <input
                  id="age"
                  name="age"
                  type="number"
                  value={formData.age}
                  onChange={handleInputChange}
                  placeholder="Your age"
                  className={styles.textInput}
                  min="10"
                  max="100"
                />
              </div>

              {/* Phone Number */}
              <div className={styles.inputGroup}>
                <label htmlFor="phone" className={styles.inputLabel}>
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  className={styles.textInput}
                />
              </div>

              {/* Gender */}
              <div className={styles.inputGroup}>
                <label className={styles.radioGroupLabel}>Your gender</label>
                <div className={styles.radioGroup}>
                  {['Male', 'Female'].map((gender) => (
                    <label
                      key={gender}
                      className={`${styles.radioLabel} ${
                        formData.gender === gender ? styles.radioLabelSelected : ''
                      }`}
                    >
                      <input
                        type="radio"
                        name="gender"
                        value={gender}
                        checked={formData.gender === gender}
                        onChange={handleInputChange}
                        className={styles.radioInput}
                      />
                      <span>{gender}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Game Level */}
              <div className={styles.inputGroup}>
                <label className={styles.radioGroupLabel}>Your game level</label>
                <div className={styles.radioGroup}>
                  {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
                    <label
                      key={level}
                      className={`${styles.radioLabel} ${
                        formData.level === level ? styles.radioLabelSelected : ''
                      }`}
                    >
                      <input
                        type="radio"
                        name="level"
                        value={level}
                        checked={formData.level === level}
                        onChange={handleInputChange}
                        className={styles.radioInput}
                      />
                      <span>{level}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Professional Level */}
              <div className={styles.professionalOption}>
                <label
                  className={`${styles.professionalLabel} ${
                    formData.level === 'Professional' ? styles.professionalLabelSelected : ''
                  }`}
                >
                  <input
                    type="radio"
                    name="level"
                    value="Professional"
                    checked={formData.level === 'Professional'}
                    onChange={handleInputChange}
                    className={styles.radioInput}
                  />
                  <div className={styles.professionalText}>
                    Professional
                    <p className={styles.professionalDescription}>
                      Who plays in worldwide tournaments and is ranked, has a full-time coach,
                      and has mastered all aspects of the game and its techniques.
                    </p>
                  </div>
                </label>
              </div>
            </div>

            <button
              onClick={() => setStep(2)}
              disabled={!isStep1Valid()}
              className={`${styles.continueButton} ${
                !isStep1Valid() ? styles.buttonDisabled : ''
              }`}
            >
              Continue
            </button>
          </div>
        )}

        {step === 2 && (
          <div className={styles.stepContainer}>
            <div className={styles.stepHeader}>
              <div className={styles.sportsIcon}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#D7EE34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 16V12" stroke="#D7EE34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8H12.01" stroke="#D7EE34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className={styles.stepTitle}>Choose your sports</h2>
              <p className={styles.stepSubtitle}>Select sports you're interested in</p>
            </div>

            <div className={styles.sportsGrid}>
              {sports.map((sport) => (
                <div
                  key={sport.id}
                  onClick={() => handleSportToggle(sport.id)}
                  className={`${styles.sportCard} ${
                    formData.interests.includes(sport.id) ? styles.sportCardSelected : ''
                  }`}
                >
                  <img
                    src={sport.image}
                    alt={sport.name}
                    className={styles.sportImage}
                  />
                  <div className={styles.sportOverlay}>
                    <h3 className={styles.sportName}>{sport.name}</h3>
                    <p className={styles.sportParticipants}>{sport.participants}</p>
                  </div>
                  {formData.interests.includes(sport.id) && (
                    <div className={styles.sportCheckmark}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <button
              onClick={() => setStep(3)}
              disabled={!isStep2Valid()}
              className={`${styles.continueButton} ${
                !isStep2Valid() ? styles.buttonDisabled : ''
              }`}
            >
              Continue
            </button>
          </div>
        )}

        {step === 3 && (
          <div className={styles.stepContainer}>
            <div className={styles.stepHeader}>
              <div className={styles.verifyIcon}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#D7EE34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 12L10 16L8 14" stroke="#D7EE34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className={styles.stepTitle}>Verify your phone</h2>
              <p className={styles.stepSubtitle}>
                We've sent a verification code to {formData.phone}
              </p>
            </div>

            <div className={styles.otpContainer}>
              {[0, 1, 2, 3].map((index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  value={otpCode[index]}
                  onChange={(e) => {
                    const newOtpCode = [...otpCode];
                    newOtpCode[index] = e.target.value;
                    setOtpCode(newOtpCode);
                    
                    // Auto-focus to next input
                    if (e.target.value && index < 3) {
                      document.getElementById(`otp-${index + 1}`).focus();
                    }
                  }}
                  id={`otp-${index}`}
                  className={`${styles.otpInput} ${
                    otpCode[index] ? styles.otpInputFilled : ''
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleOtpSubmit}
              disabled={!isStep3Valid() || isLoading}
              className={`${styles.continueButton} ${
                !isStep3Valid() || isLoading ? styles.buttonDisabled : ''
              }`}
            >
              {isLoading ? (
                <span className={styles.spinner}></span>
              ) : (
                'Verify'
              )}
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Registration;