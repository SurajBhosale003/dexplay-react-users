import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SplashScreen from './components/Auth/SplashScreen'
import Registration from './components/Auth/Registration'
import Home from './components/Dashboard/Home'
import CourtBooking from './components/Dashboard/CourtBooking'
import QuickMatch from './components/Dashboard/QuickMatch'
import MyMatches from './components/Dashboard/MyMatches'
import MatchHistory from './components/Dashboard/MatchHistory'
import ClassesTraining from './components/Dashboard/ClassesTraining'
import Profile from './components/Dashboard/Profile'
import Navbar from './components/common/Navbar'

function App() {
  return (
    <Router>
      <div style={{ paddingBottom: '80px' }}> {/* Add padding to prevent content overlap */}
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/home" element={<Home />} />
          <Route path="/courts" element={<CourtBooking />} />
          <Route path="/quick-match" element={<QuickMatch />} />
          <Route path="/my-matches" element={<MyMatches />} />
          <Route path="/history" element={<MatchHistory />} />
          <Route path="/training" element={<ClassesTraining />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
      {/* Only show navbar on these routes */}
      <Routes>
        <Route path="/home" element={<Navbar />} />
        <Route path="/courts" element={<Navbar />} />
        <Route path="/quick-match" element={<Navbar />} />
        <Route path="/my-matches" element={<Navbar />} />
        <Route path="/history" element={<Navbar />} />
        <Route path="/training" element={<Navbar />} />
        <Route path="/profile" element={<Navbar />} />
      </Routes>
    </Router>
  )
}

export default App