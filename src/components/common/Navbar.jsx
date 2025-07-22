import { NavLink } from 'react-router-dom'
import { Home, MapPin, Zap, GraduationCap, User } from 'lucide-react'

const Navbar = () => {
  return (
    <div style={{
      position: 'fixed',
      bottom: '16px',
      left: '0',
      right: '0',
      display: 'flex',
      justifyContent: 'center',
      zIndex: 50,
      width: '100%'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90vw',
        maxWidth: '28rem',
        padding: '12px 16px',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(12px)',
        borderRadius: '9999px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        border: '1px solid rgba(229, 231, 235, 1)'
      }}>
        <NavLink 
          to="/home" 
          style={({ isActive }) => ({
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '48px',
            height: '48px',
            textDecoration: 'none'
          })}
        >
          {({ isActive }) => (
            <>
              <div style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                borderRadius: '9999px',
                transition: 'all 0.3s ease',
                pointerEvents: 'none',
                boxShadow: isActive ? '0 0 12px 4px rgba(215, 238, 52, 0.7)' : 'none'
              }}></div>
              <Home style={{
                width: '24px',
                height: '24px',
                zIndex: 10,
                transition: 'color 0.3s ease',
                color: isActive ? '#D7EE34' : 'rgba(75, 85, 99, 1)'
              }} />
            </>
          )}
        </NavLink>

        <NavLink 
          to="/courts" 
          style={({ isActive }) => ({
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '48px',
            height: '48px',
            textDecoration: 'none'
          })}
        >
          {({ isActive }) => (
            <>
              <div style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                borderRadius: '9999px',
                transition: 'all 0.3s ease',
                pointerEvents: 'none',
                boxShadow: isActive ? '0 0 12px 4px rgba(215, 238, 52, 0.7)' : 'none'
              }}></div>
              <MapPin style={{
                width: '24px',
                height: '24px',
                zIndex: 10,
                transition: 'color 0.3s ease',
                color: isActive ? '#D7EE34' : 'rgba(75, 85, 99, 1)'
              }} />
            </>
          )}
        </NavLink>

        <NavLink 
          to="/quick-match" 
          style={({ isActive }) => ({
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '48px',
            height: '48px',
            textDecoration: 'none'
          })}
        >
          {({ isActive }) => (
            <>
              <div style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                borderRadius: '9999px',
                transition: 'all 0.3s ease',
                pointerEvents: 'none',
                boxShadow: isActive ? '0 0 12px 4px rgba(215, 238, 52, 0.7)' : 'none'
              }}></div>
              <Zap style={{
                width: '24px',
                height: '24px',
                zIndex: 10,
                transition: 'color 0.3s ease',
                color: isActive ? '#D7EE34' : 'rgba(75, 85, 99, 1)'
              }} />
            </>
          )}
        </NavLink>

        <NavLink 
          to="/training" 
          style={({ isActive }) => ({
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '48px',
            height: '48px',
            textDecoration: 'none'
          })}
        >
          {({ isActive }) => (
            <>
              <div style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                borderRadius: '9999px',
                transition: 'all 0.3s ease',
                pointerEvents: 'none',
                boxShadow: isActive ? '0 0 12px 4px rgba(215, 238, 52, 0.7)' : 'none'
              }}></div>
              <GraduationCap style={{
                width: '24px',
                height: '24px',
                zIndex: 10,
                transition: 'color 0.3s ease',
                color: isActive ? '#D7EE34' : 'rgba(75, 85, 99, 1)'
              }} />
            </>
          )}
        </NavLink>

        <NavLink 
          to="/profile" 
          style={({ isActive }) => ({
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '48px',
            height: '48px',
            textDecoration: 'none'
          })}
        >
          {({ isActive }) => (
            <>
              <div style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                borderRadius: '9999px',
                transition: 'all 0.3s ease',
                pointerEvents: 'none',
                boxShadow: isActive ? '0 0 12px 4px rgba(215, 238, 52, 0.7)' : 'none'
              }}></div>
              <User style={{
                width: '24px',
                height: '24px',
                zIndex: 10,
                transition: 'color 0.3s ease',
                color: isActive ? '#D7EE34' : 'rgba(75, 85, 99, 1)'
              }} />
            </>
          )}
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar