import Header from '../common/Header'
import Navbar from '../common/Navbar'

const MatchHistory = () => {
  const history = [
    {
      id: 1,
      sport: 'Football',
      date: 'Jan 28, 2024',
      opponent: 'Red Devils',
      result: 'Won 4-1',
      duration: '90 mins'
    },
    {
      id: 2,
      sport: 'Basketball',
      date: 'Jan 22, 2024',
      opponent: 'Dunk Masters',
      result: 'Lost 38-45',
      duration: '60 mins'
    },
    {
      id: 3,
      sport: 'Tennis',
      date: 'Jan 15, 2024',
      opponent: 'Sarah Johnson',
      result: 'Won 6-2, 6-4',
      duration: '75 mins'
    }
  ]

  return (
    <div className="match-history">
      <Header title="Match History" subtitle="Your past games and performance" />
      
      <div className="history-list">
        {history.map(item => (
          <div key={item.id} className="history-card">
            <div className="sport-icon">
              {item.sport === 'Football' && '⚽'}
              {item.sport === 'Basketball' && '🏀'}
              {item.sport === 'Tennis' && '🎾'}
            </div>
            <div className="history-details">
              <h3>{item.sport} vs {item.opponent}</h3>
              <p>{item.date} • {item.duration}</p>
              <span className={`result ${item.result.startsWith('Won') ? 'win' : 'loss'}`}>
                {item.result}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <Navbar />
    </div>
  )
}

export default MatchHistory