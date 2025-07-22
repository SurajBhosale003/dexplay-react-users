import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { User } from 'lucide-react'

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
]

const Registration = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    gender: "",
    level: "",
    interests: [],
  })
  const [otpCode, setOtpCode] = useState(["", "", "", ""])
  const navigate = useNavigate()

const handleSportToggle = (sportId) => {
  setFormData((prev) => ({
    ...prev,
    interests: prev.interests.includes(sportId)
      ? prev.interests.filter((id) => id !== sportId)
      : [...prev.interests, sportId],
  }))
}

  const handleOtpSubmit = () => {
    setTimeout(() => {
      setOtpCode(["1", "2", "3", "4"])
      setTimeout(() => {
        navigate('/home')
      }, 1000)
    }, 2000)
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      {/* Header */}
      <div style={{ padding: '1.5rem', borderBottom: '1px solid #f3f4f6' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: '3rem', height: '3rem', backgroundColor: 'white', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/transpernt/onlylogo-white.png" alt="Logo" />
            </div>
            <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'black' }}>DexPlay</span>
          </div>
          <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Step {step} of 3</div>
        </div>
      </div>

      {/* Progress Bar */}
      <div style={{ padding: '1rem 1.5rem' }}>
        <div style={{ width: '100%', backgroundColor: '#f3f4f6', borderRadius: '9999px', height: '0.5rem' }}>
          <div 
            style={{ 
              backgroundColor: '#D7EE34', 
              height: '0.5rem', 
              borderRadius: '9999px',
              width: `${(step / 3) * 100}%`,
              transition: 'width 0.3s ease'
            }}
          />
        </div>
      </div>

      <div style={{ padding: '0 1.5rem', marginBottom: '5vh' }}>
        {step === 1 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
              <User style={{ width: '4rem', height: '4rem', color: '#D7EE34', margin: '0 auto', marginBottom: '1.5rem' }} />
              <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Welcome to DexPlay</h2>
              <p style={{ color: '#4b5563', fontSize: '1.125rem' }}>Let's set up your profile</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Full Name */}
              <div>
                <label style={{ fontSize: '0.875rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem', display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Full Name
                </label>
                <input
                  value={formData.name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                  placeholder="Enter your full name"
                  style={{ height: '3.5rem', fontSize: '1.125rem', borderWidth: '2px', borderColor: '#d1d5db', borderRadius: '0.75rem', padding: '0 1rem', width: '100%', outline: 'none', focus: { borderColor: '#D7EE34' } }}
                />
              </div>

              {/* Age */}
              <div>
                <label style={{ fontSize: '0.875rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem', display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Age</label>
                <input
                  type="number"
                  value={formData.age}
                  onChange={(e) => setFormData((prev) => ({ ...prev, age: e.target.value }))}
                  placeholder="Your age"
                  style={{ height: '3.5rem', fontSize: '1.125rem', borderWidth: '2px', borderColor: '#d1d5db', borderRadius: '0.75rem', padding: '0 1rem', width: '100%', outline: 'none', focus: { borderColor: '#D7EE34' } }}
                />
              </div>

              {/* Phone Number */}
              <div>
                <label style={{ fontSize: '0.875rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem', display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                  placeholder="Enter your phone number"
                  style={{ height: '3.5rem', fontSize: '1.125rem', borderWidth: '2px', borderColor: '#d1d5db', borderRadius: '0.75rem', padding: '0 1rem', width: '100%', outline: 'none', focus: { borderColor: '#D7EE34' } }}
                />
              </div>

              {/* Gender & Game Level Section */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
                {/* Gender */}
                <div>
                  <label style={{ fontSize: '1rem', fontWeight: '600', color: '#111827', display: 'block', marginBottom: '1rem' }}>Your gender</label>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    {['Male', 'Female'].map((gender) => (
                      <label
                        key={gender}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          padding: '0.5rem 1rem',
                          borderRadius: '9999px',
                          borderWidth: '2px',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease-in-out',
                          ...(formData.gender === gender
                            ? { backgroundColor: '#D7EE34', borderColor: '#D7EE34', color: 'black', transform: 'scale(1.03)', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }
                            : { borderColor: '#d1d5db', color: '#374151', ':hover': { borderColor: '#D7EE34', transform: 'scale(1.02)' } })
                        }}
                        onClick={() => setFormData((prev) => ({ ...prev, gender }))}
                      >
                        <input
                          type="radio"
                          name="gender"
                          checked={formData.gender === gender}
                          onChange={() => setFormData((prev) => ({ ...prev, gender }))}
                          style={{ display: 'none' }}
                        />
                        <span style={{ transition: 'all 0.3s ease-in-out' }}>{gender}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Game Level */}
                <div>
                  <label style={{ fontSize: '1rem', fontWeight: '600', color: '#111827', display: 'block', marginBottom: '1rem' }}>Your game level</label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                    {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
                      <label
                        key={level}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          padding: '0.5rem 1rem',
                          borderRadius: '9999px',
                          borderWidth: '2px',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease-in-out',
                          ...(formData.level === level
                            ? { backgroundColor: '#D7EE34', borderColor: '#D7EE34', color: 'black', transform: 'scale(1.03)', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }
                            : { borderColor: '#d1d5db', color: '#374151', ':hover': { borderColor: '#D7EE34', transform: 'scale(1.02)' } })
                        }}
                        onClick={() => setFormData((prev) => ({ ...prev, level }))}
                      >
                        <input
                          type="radio"
                          name="level"
                          checked={formData.level === level}
                          onChange={() => setFormData((prev) => ({ ...prev, level }))}
                          style={{ display: 'none' }}
                        />
                        <span style={{ transition: 'all 0.3s ease-in-out' }}>{level}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Professional Level with description */}
              <div style={{ marginTop: '1.5rem' }}>
                <label
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    padding: '1rem',
                    borderWidth: '2px',
                    borderRadius: '0.75rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease-in-out',
                    ...(formData.level === 'Professional'
                      ? { backgroundColor: '#D7EE34', borderColor: '#D7EE34', color: 'black', transform: 'scale(1.02)', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }
                      : { borderColor: '#d1d5db', ':hover': { borderColor: '#D7EE34', transform: 'scale(1.01)' } })
                  }}
                  onClick={() => setFormData((prev) => ({ ...prev, level: 'Professional' }))}
                >
                  <input
                    type="radio"
                    name="level"
                    checked={formData.level === 'Professional'}
                    onChange={() => setFormData((prev) => ({ ...prev, level: 'Professional' }))}
                    style={{ display: 'none' }}
                  />
                  <div style={{ fontSize: '0.875rem', color: '#1f2937', transition: 'all 0.3s ease-in-out' }}>
                    Professional
                    <p style={{ fontSize: '0.75rem', color: '#4b5563', marginTop: '0.25rem', lineHeight: '1.25' }}>
                      Who plays in worldwide tournaments and is ranked, has a full-time coach,
                      and has mastered all aspects of the game and its techniques.
                    </p>
                  </div>
                </label>
              </div>
            </div>

            <button
              onClick={() => setStep(2)}
              disabled={!formData.name || !formData.age || !formData.phone || !formData.gender || !formData.level}
              style={{
                width: '100%',
                height: '3.5rem',
                backgroundColor: '#000',
                color: 'white',
                fontWeight: '600',
                borderRadius: '0.75rem',
                fontSize: '1.125rem',
                marginTop: '2rem',
                transition: 'background-color 0.3s ease',
                cursor: !formData.name || !formData.age || !formData.phone || !formData.gender || !formData.level ? 'not-allowed' : 'pointer',
                opacity: !formData.name || !formData.age || !formData.phone || !formData.gender || !formData.level ? 0.7 : 1,
                ':hover': {
                  backgroundColor: !formData.name || !formData.age || !formData.phone || !formData.gender || !formData.level ? '#000' : '#c6e325'
                }
              }}
            >
              Continue
            </button>
          </div>
        )}

        {step === 2 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
              <div style={{ width: '4rem', height: '4rem', margin: '0 auto', marginBottom: '1.5rem' }}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#D7EE34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 16V12" stroke="#D7EE34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8H12.01" stroke="#D7EE34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Choose your sports</h2>
              <p style={{ color: '#4b5563', fontSize: '1.125rem' }}>Select sports you're interested in</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {sports.map((sport) => (
                <div
                  key={sport.id}
                  onClick={() => handleSportToggle(sport.id)}
                  style={{
                    position: 'relative',
                    borderRadius: '0.75rem',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    borderWidth: '2px',
                    borderColor: formData.interests.includes(sport.id) ? '#D7EE34' : '#e5e7eb',
                    transition: 'all 0.3s ease',
                    transform: formData.interests.includes(sport.id) ? 'scale(1.02)' : 'scale(1)'
                  }}
                >
                  <img
                    src={sport.image}
                    alt={sport.name}
                    style={{ width: '100%', height: '8rem', objectFit: 'cover', filter: 'brightness(0.7)' }}
                  />
                  <div style={{ position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '1rem' }}>
                    <h3 style={{ color: 'white', fontWeight: 'bold', fontSize: '1.125rem' }}>{sport.name}</h3>
                    <p style={{ color: 'white', fontSize: '0.875rem' }}>{sport.participants}</p>
                  </div>
                  {formData.interests.includes(sport.id) && (
                    <div style={{ position: 'absolute', top: '0.5rem', right: '0.5rem', width: '1.5rem', height: '1.5rem', backgroundColor: '#D7EE34', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
              disabled={formData.interests.length === 0}
              style={{
                width: '100%',
                height: '3.5rem',
                backgroundColor: '#000',
                color: 'white',
                fontWeight: '600',
                borderRadius: '0.75rem',
                fontSize: '1.125rem',
                marginTop: '2rem',
                transition: 'background-color 0.3s ease',
                cursor: formData.interests.length === 0 ? 'not-allowed' : 'pointer',
                opacity: formData.interests.length === 0 ? 0.7 : 1,
                ':hover': {
                  backgroundColor: formData.interests.length === 0 ? '#000' : '#c6e325'
                }
              }}
            >
              Continue
            </button>
          </div>
        )}

        {step === 3 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center', paddingTop: '2rem' }}>
            <div style={{ width: '4rem', height: '4rem', marginBottom: '1.5rem' }}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#D7EE34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 12L10 16L8 14" stroke="#D7EE34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '0.5rem', textAlign: 'center' }}>Verify your phone</h2>
            <p style={{ color: '#4b5563', fontSize: '1.125rem', textAlign: 'center', maxWidth: '24rem' }}>
              We've sent a verification code to {formData.phone}
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1rem' }}>
              {[0, 1, 2, 3].map((index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  value={otpCode[index]}
                  onChange={(e) => {
                    const newOtpCode = [...otpCode]
                    newOtpCode[index] = e.target.value
                    setOtpCode(newOtpCode)
                  }}
                  style={{
                    width: '3.5rem',
                    height: '3.5rem',
                    fontSize: '1.5rem',
                    textAlign: 'center',
                    borderWidth: '2px',
                    borderColor: otpCode[index] ? '#D7EE34' : '#d1d5db',
                    borderRadius: '0.5rem',
                    outline: 'none'
                  }}
                />
              ))}
            </div>

            <button
              onClick={handleOtpSubmit}
              disabled={otpCode.some(code => code === '')}
              style={{
                width: '100%',
                height: '3.5rem',
                backgroundColor: '#000',
                color: 'white',
                fontWeight: '600',
                borderRadius: '0.75rem',
                fontSize: '1.125rem',
                marginTop: '2rem',
                transition: 'background-color 0.3s ease',
                cursor: otpCode.some(code => code === '') ? 'not-allowed' : 'pointer',
                opacity: otpCode.some(code => code === '') ? 0.7 : 1,
                ':hover': {
                  backgroundColor: otpCode.some(code => code === '') ? '#000' : '#c6e325'
                }
              }}
            >
              Verify
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Registration