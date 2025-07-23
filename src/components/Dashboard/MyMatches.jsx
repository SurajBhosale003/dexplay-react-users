import Header from '../common/Header'
import Navbar from '../common/Navbar'

const MyMatches = () => {
  const matches = [
    {
      id: 1,
      sport: 'Football',
      opponent: 'Team Alpha',
      date: 'Feb 16, 2024',
      result: 'Won 3-2'
    },
    {
      id: 2,
      sport: 'Basketball',
      opponent: 'Court Kings',
      date: 'Feb 28, 2024',
      result: 'Lost 45-52'
    },
    {
      id: 3,
      sport: 'Tennis',
      opponent: 'Mike Chen',
      date: 'Feb 5, 2024',
      result: 'Won 6-4, 6-3'
    }
  ]

  return (
    <div className="my-matches">
      <Header title="Upcoming Matches" subtitle="Your scheduled games" />
      
      <div className="matches-list">
        {matches.map(match => (
          <div key={match.id} className="match-card">
            <div className="match-header">
              <h3>{match.sport} Match</h3>
              <span className="result">{match.result}</span>
            </div>
            <div className="match-details">
              <p>vs {match.opponent}</p>
              <span>{match.date}</span>
            </div>
            <div className="match-actions">
              <button className="details-btn">Details</button>
              <button className="cancel-btn">Cancel</button>
            </div>
          </div>
        ))}
      </div>
      
      <Navbar />
    </div>
  )
}

export default MyMatches