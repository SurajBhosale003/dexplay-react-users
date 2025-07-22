const SportsCard = ({ sport }) => {
  return (
    <div className="sport-card">
      <div className="sport-header">
        <span className="sport-icon">{sport.icon}</span>
        <h3>{sport.name}</h3>
      </div>
      <div className="sport-stats">
        <div className="stat">
          <span className="value">{sport.active}</span>
          <span className="label">active</span>
        </div>
        <div className="stat">
          <span className="value">{sport.next}</span>
          <span className="label">next</span>
        </div>
      </div>
    </div>
  )
}

export default SportsCard