import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const QuickMatch = () => {
  const [selectedSport, setSelectedSport] = useState("football");
  const [matchType, setMatchType] = useState("5v5");
  const [searchQuery, setSearchQuery] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [activeTab, setActiveTab] = useState("upcoming");

  const THEME_COLOR = '#D7EE34';

  const sports = [
    {
      id: "football",
      name: "Football",
      image: "https://res.cloudinary.com/de6u5kbiw/image/upload/v1752131774/dexciss%20site/dexplay/optimal/400/football_x400/pexels-yogendras31-1375148_x400_ydhxik.jpg",
      activeMatches: 24,
    },
    {
      id: "basketball",
      name: "Basketball",
      image: "https://res.cloudinary.com/de6u5kbiw/image/upload/v1752067723/dexciss%20site/dexplay/optimal/pexels-markusspiske-1752757_1_rhbltt.jpg",
      activeMatches: 18,
    },
    {
      id: "tennis",
      name: "Tennis",
      image: "https://res.cloudinary.com/de6u5kbiw/image/upload/v1752067671/dexciss%20site/dexplay/optimal/pexels-pixabay-209977_1_cxaacu.jpg",
      activeMatches: 12,
    },{
      id: "cricket",
      name: "Cricket",
      image: "https://res.cloudinary.com/de6u5kbiw/image/upload/v1752067729/dexciss%20site/dexplay/optimal/pexels-case-originals-3657154_1_cv7jvj.jpg",
      activeMatches: 15,
    },
    {
      id: "badminton",
      name: "Badminton",
      image: "https://res.cloudinary.com/de6u5kbiw/image/upload/v1752067735/dexciss%20site/dexplay/optimal/pexels-vladvictoria-2202685_1_ydqoy4.jpg",
      activeMatches: 8,
    }
  ];

  const matches = [
    {
      id: 1,
      sport: "football",
      title: "5v5 Football Match",
      location: "Victory Sports Complex",
      time: "Today 6:00 PM",
      players: "8/10",
      level: "Intermediate",
      image: "https://res.cloudinary.com/de6u5kbiw/image/upload/v1752067675/dexciss%20site/dexplay/optimal/pexels-pixabay-46798_1_omyner.jpg",
      host: {
        name: "Aarav Mehta",
        avatar: "https://res.cloudinary.com/de6u5kbiw/image/upload/v1752217764/People%20Profile/depositphotos_223166560-stock-photo-young-handsome-indian-man-against_zv9wum.webp",
        rating: 4.8
      },
      comments: 3,
      status: "available",
      price: "₹200 per person",
      distance: "1.2 km away",
      slots: [
        { status: "filled", player: { name: "Aarav", level: "Intermediate" } },
        { status: "filled", player: { name: "Riya", level: "Advanced" } },
        { status: "filled" },
        { status: "available" },
        { status: "available" }
      ]
    },
    {
      id: 2,
      sport: "basketball",
      title: "3v3 Basketball Tournament",
      location: "Downtown Courts",
      time: "Tomorrow 7:30 PM",
      players: "4/6",
      level: "Beginner",
      image: "https://res.cloudinary.com/de6u5kbiw/image/upload/v1752067723/dexciss%20site/dexplay/optimal/pexels-markusspiske-1752757_1_rhbltt.jpg",
      host: {
        name: "Ananya Rao",
        avatar: "https://res.cloudinary.com/de6u5kbiw/image/upload/v1752217771/People%20Profile/images_1_myv2ze.jpg",
        rating: 4.5
      },
      comments: 1,
      status: "available",
      price: "₹150 per person",
      distance: "2.5 km away",
      slots: [
        { status: "available" },
        { status: "available" },
        { status: "available" }
      ]
    },
    {
      id: 3,
      sport: "tennis",
      title: "Singles Tennis",
      location: "Elite Tennis Club",
      time: "Today 5:00 PM",
      players: "1/2",
      level: "Advanced",
      image: "https://res.cloudinary.com/de6u5kbiw/image/upload/v1752067671/dexciss%20site/dexplay/optimal/pexels-pixabay-209977_1_cxaacu.jpg",
      host: {
        name: "Mehul Sinha",
        avatar: "https://res.cloudinary.com/de6u5kbiw/image/upload/v1752217658/People%20Profile/images_veqgag.jpg",
        rating: 4.9
      },
      comments: 0,
      status: "joining",
      price: "₹300 per person",
      distance: "3.1 km away",
      slots: [
        { status: "filled", player: { name: "Mehul", level: "Advanced" } },
        { status: "available" }
      ]
    },
    {
      id: 4,
      sport: "cricket",
      title: "Gully Cricket Knockout",
      location: "Greenfield Arena",
      time: "Today 4:00 PM",
      players: "10/12",
      level: "Intermediate",
      image: "https://res.cloudinary.com/de6u5kbiw/image/upload/v1752067729/dexciss%20site/dexplay/optimal/pexels-case-originals-3657154_1_cv7jvj.jpg",
      host: {
        name: "Ritika Singh",
        avatar: "https://res.cloudinary.com/de6u5kbiw/image/upload/v1752217768/People%20Profile/0bdbc7e1f21b705d25b7f81873810086_wurlmo.jpg",
        rating: 4.7
      },
      comments: 4,
      status: "available",
      price: "₹100 per person",
      distance: "0.8 km away",
      slots: [
        { status: "filled", player: { name: "Ritika", level: "Intermediate" } },
        { status: "filled", player: { name: "Neha", level: "Beginner" } },
        { status: "filled" },
        { status: "available" },
        { status: "available" }
      ]
    },
    {
      id: 5,
      sport: "volleyball",
      title: "Beach Volleyball",
      location: "Marine Drive Sand Courts",
      time: "Tomorrow 8:00 AM",
      players: "6/8",
      level: "Beginner",
      image: "https://res.cloudinary.com/de6u5kbiw/image/upload/v1752067752/dexciss%20site/dexplay/optimal/pexels-jim-de-ramos-1263349_1_fnfz1k.jpg",
      host: {
        name: "Karthik Das",
        avatar: "https://res.cloudinary.com/de6u5kbiw/image/upload/v1752217664/People%20Profile/57dbffd654e3580d51e60e451c5850f9_hhipp8.jpg",
        rating: 4.6
      },
      comments: 2,
      status: "available",
      price: "₹180 per person",
      distance: "5.2 km away",
      slots: [
        { status: "filled", player: { name: "Karthik", level: "Beginner" } },
        { status: "available" },
        { status: "available" },
        { status: "available" }
      ]
    },
    {
      id: 6,
      sport: "badminton",
      title: "Doubles Badminton Match",
      location: "Smash Arena",
      time: "Today 9:00 PM",
      players: "2/4",
      level: "Intermediate",
      image: "https://res.cloudinary.com/de6u5kbiw/image/upload/v1752067735/dexciss%20site/dexplay/optimal/pexels-vladvictoria-2202685_1_ydqoy4.jpg",
      host: {
        name: "Priya Nair",
        avatar: "https://res.cloudinary.com/de6u5kbiw/image/upload/v1752217662/People%20Profile/pm0476_w0_dfthen.avif",
        rating: 4.4
      },
      comments: 2,
      status: "available",
      price: "₹220 per person",
      distance: "2.1 km away",
      slots: [
        { status: "filled", player: { name: "Priya", level: "Intermediate" } },
        { status: "available" },
        { status: "available" }
      ]
    }
  ];

  const pastMatches = [
    {
      id: 1,
      sport: "football",
      opponent: "Team Alpha",
      score: "3-2",
      result: "won",
      date: "Feb 10, 2024",
      image: "https://res.cloudinary.com/de6u5kbiw/image/upload/v1752067675/dexciss%20site/dexplay/optimal/pexels-pixabay-46798_1_omyner.jpg",
      performance: "8.5/10"
    },
    {
      id: 2,
      sport: "basketball",
      opponent: "Court Kings",
      score: "45-52",
      result: "lost",
      date: "Feb 8, 2024",
      image: "https://res.cloudinary.com/de6u5kbiw/image/upload/v1752067723/dexciss%20site/dexplay/optimal/pexels-markusspiske-1752757_1_rhbltt.jpg",
      performance: "7.2/10"
    }
  ];

  const filteredMatches = matches.filter(match => 
    match.sport === selectedSport && 
    match.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSlotClick = (match, slotIndex) => {
    if (match.slots[slotIndex].status === "available") {
      setSelectedMatch(match);
      setSelectedSlot(slotIndex);
      setShowConfirmation(true);
    }
  };

  const confirmBooking = () => {
    setShowConfirmation(false);
  };

  return (
    <div style={{ backgroundColor: 'white', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ padding: '16px', backgroundColor: 'white', borderBottom: '1px solid #f3f4f6' }}>
        <div style={{ marginBottom: '16px' }}>
          <h1 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827', marginBottom: '4px' }}>Quick Match</h1>
          <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>Find players and join games instantly</p>
        </div>

        {/* Search */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
          <div style={{ flex: 1, position: 'relative' }}>
            <svg
              style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', width: '16px', height: '16px', color: '#9ca3af' }}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              placeholder="Search matches..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                paddingLeft: '36px',
                height: '40px',
                border: '1px solid #e5e7eb',
                borderRadius: '0.375rem',
                width: '100%',
                outline: 'none',
                fontSize: '0.875rem'
              }}
            />
          </div>
          <button
            style={{
              height: '40px',
              width: '40px',
              border: '1px solid #e5e7eb',
              borderRadius: '0.375rem',
              backgroundColor: 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <svg
              style={{ width: '16px', height: '16px' }}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" y1="21" x2="4" y2="14"></line>
              <line x1="4" y1="10" x2="4" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12" y2="3"></line>
              <line x1="20" y1="21" x2="20" y2="16"></line>
              <line x1="20" y1="12" x2="20" y2="3"></line>
              <line x1="1" y1="14" x2="7" y2="14"></line>
              <line x1="9" y1="8" x2="15" y2="8"></line>
              <line x1="17" y1="16" x2="23" y2="16"></line>
            </svg>
          </button>
        </div>

        {/* Sport Selection */}
        <div style={{ display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '8px', marginLeft: '-4px', marginRight: '-4px', WebkitOverflowScrolling: 'touch' }}>
          {sports.map((sport) => (
            <motion.div
              key={sport.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedSport(sport.id)}
              style={{
                flexShrink: 0,
                position: 'relative',
                width: '100px',
                height: '100px',
                borderRadius: '0.75rem',
                overflow: 'hidden',
                cursor: 'pointer',
                border: selectedSport === sport.id ? `3px solid ${THEME_COLOR}` : 'none'
              }}
            >
              {/* Background Image */}
              <div style={{ position: 'absolute', inset: 0 }}>
                <img
                  src={sport.image}
                  alt={sport.name}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
                {/* Dark overlay */}
                <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.3)' }}></div>
              </div>

              {/* Active matches badge */}
              <div style={{ 
                position: 'absolute', 
                top: '6px', 
                right: '6px', 
                backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                color: THEME_COLOR, 
                fontSize: '0.625rem', 
                fontWeight: 'bold', 
                padding: '2px 6px', 
                borderRadius: '9999px' 
              }}>
                {sport.activeMatches} active
              </div>

              {/* Glass effect title */}
              <div style={{ 
                position: 'absolute', 
                bottom: 0, 
                left: 0, 
                right: 0, 
                padding: '8px', 
                background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)', 
                backdropFilter: 'blur(4px)' 
              }}>
                <div style={{ 
                  color: 'white', 
                  fontWeight: 600, 
                  textAlign: 'center',
                  fontSize: '0.75rem'
                }}>
                  {sport.name}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Match Type Toggle */}
      <div style={{ padding: '12px', backgroundColor: '#f8fae5', borderBottom: `1px solid ${THEME_COLOR}30` }}>
        <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
          {["2v2", "3v3", "5v5", "7v7", "11v11"].map((type) => (
            <button
              key={type}
              onClick={() => setMatchType(type)}
              style={{
                flexShrink: 0,
                borderRadius: '0.5rem',
                padding: '6px 12px',
                border: `1px solid ${matchType === type ? THEME_COLOR : `${THEME_COLOR}80`}`,
                backgroundColor: matchType === type ? THEME_COLOR : 'rgba(255, 255, 255, 0.8)',
                color: matchType === type ? '#111827' : '#374151',
                boxShadow: matchType === type ? '0 1px 2px 0 rgb(0 0 0 / 0.05)' : 'none',
                fontSize: '0.75rem',
                fontWeight: '500'
              }}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div style={{ flex: 1 }}>
        <div style={{ padding: '12px', backgroundColor: 'white', borderBottom: '1px solid #f3f4f6' }}>
          <div style={{ 
            display: 'grid', 
            width: '100%', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            backgroundColor: '#f3f4f6', 
            borderRadius: '0.5rem', 
            padding: '4px' 
          }}>
            <button
              onClick={() => setActiveTab("upcoming")}
              style={{
                borderRadius: '0.375rem',
                padding: '6px',
                backgroundColor: activeTab === "upcoming" ? 'white' : 'transparent',
                color: activeTab === "upcoming" ? '#111827' : '#6b7280',
                boxShadow: activeTab === "upcoming" ? '0 1px 2px 0 rgb(0 0 0 / 0.05)' : 'none',
                fontWeight: '500',
                fontSize: '0.75rem'
              }}
            >
              Upcoming
            </button>
            <button
              onClick={() => setActiveTab("registered")}
              style={{
                borderRadius: '0.375rem',
                padding: '6px',
                backgroundColor: activeTab === "registered" ? 'white' : 'transparent',
                color: activeTab === "registered" ? '#111827' : '#6b7280',
                boxShadow: activeTab === "registered" ? '0 1px 2px 0 rgb(0 0 0 / 0.05)' : 'none',
                fontWeight: '500',
                fontSize: '0.75rem'
              }}
            >
              My Matches
            </button>
            <button
              onClick={() => setActiveTab("history")}
              style={{
                borderRadius: '0.375rem',
                padding: '6px',
                backgroundColor: activeTab === "history" ? 'white' : 'transparent',
                color: activeTab === "history" ? '#111827' : '#6b7280',
                boxShadow: activeTab === "history" ? '0 1px 2px 0 rgb(0 0 0 / 0.05)' : 'none',
                fontWeight: '500',
                fontSize: '0.75rem'
              }}
            >
              History
            </button>
          </div>
        </div>

        {activeTab === "upcoming" && (
          <div style={{ padding: '16px', display: 'grid', gap: '12px' }}>
            {filteredMatches.map((match, index) => (
              <motion.div
                key={match.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div style={{ 
                  borderRadius: '0.75rem', 
                  overflow: 'hidden', 
                  border: '1px solid #e5e7eb', 
                  boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
                  transition: 'box-shadow 0.2s'
                }}>
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: '1fr 1fr', 
                    padding: '12px', 
                    gap: '12px' 
                  }}>
                    {/* Div 1 - Left Side: Image */}
                    <div style={{ 
                      borderRadius: '0.5rem', 
                      border: '1px solid #e5e7eb', 
                      padding: '6px',
                      height: '100%',
                      minHeight: '100px'
                    }}>
                      <img
                        src={match.image}
                        alt={match.sport}
                        style={{ 
                          objectFit: 'cover', 
                          width: '100%', 
                          height: '100%', 
                          borderRadius: '0.375rem' 
                        }}
                      />
                    </div>

                    {/* Div 2 - Right Side: Slot selection */}
                    <div style={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      justifyContent: 'space-between' 
                    }}>
                      <div style={{ 
                        textAlign: 'right', 
                        fontSize: '0.75rem', 
                        fontWeight: '600', 
                        color: 'black', 
                        marginBottom: '6px' 
                      }}>
                        Slot Selector
                      </div>
                      <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(3, 1fr)', 
                        gap: '6px' 
                      }}>
                        {match.slots.map((slot, index) => (
                          <motion.div
                            key={index}
                            whileTap={{ scale: slot.status === "available" ? 0.95 : 1 }}
                            onClick={() => handleSlotClick(match, index)}
                            style={{
                              width: '100%',
                              aspectRatio: '1/1',
                              borderRadius: '0.375rem',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              textAlign: 'center',
                              fontSize: '0.625rem',
                              backgroundColor: slot.status === "available" ? `${THEME_COLOR}20` : '#f3f4f6',
                              border: slot.status === "available" ? `1px solid ${THEME_COLOR}` : 'none',
                              cursor: slot.status === "available" ? 'pointer' : 'default'
                            }}
                          >
                            {slot.status === "available" ? (
                              <svg
                                style={{ width: '16px', height: '16px', color: THEME_COLOR }}
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <line x1="19" y1="8" x2="19" y2="14"></line>
                                <line x1="22" y1="11" x2="16" y2="11"></line>
                              </svg>
                            ) : slot.player ? (
                              <div>
                                <div style={{ fontWeight: '500' }}>{slot.player.name}</div>
                                <div style={{ color: '#6b7280' }}>{slot.player.level}</div>
                              </div>
                            ) : (
                              <div style={{ color: '#6b7280' }}>Reserved</div>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Div 3 - Title and other details */}
                  <div style={{ padding: '0 12px 12px 12px' }}>
                    <div style={{ 
                      borderRadius: '0.5rem', 
                      border: '1px solid #d1d5db', 
                      padding: '8px' 
                    }}>
                      <div style={{ 
                        fontWeight: '600', 
                        fontSize: '0.875rem', 
                        marginBottom: '4px', 
                        color: 'black' 
                      }}>
                        {match.title}
                      </div>
                      <div style={{ 
                        fontSize: '0.75rem', 
                        color: '#6b7280', 
                        display: 'grid', 
                        gap: '4px' 
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <svg
                            style={{ width: '14px', height: '14px' }}
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                          </svg>
                          <span>{match.location}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <svg
                            style={{ width: '14px', height: '14px' }}
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                          </svg>
                          <span>{match.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Div 4 - Footer: Avatar, Host & Join Button */}
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    backgroundColor: THEME_COLOR, 
                    padding: '8px 12px', 
                    borderRadius: '0 0 0.75rem 0.75rem' 
                  }}>
                    {/* Host Avatar and Info */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ 
                        width: '32px', 
                        height: '32px', 
                        borderRadius: '9999px', 
                        overflow: 'hidden' 
                      }}>
                        <img
                          src={match.host.avatar}
                          alt={match.host.name}
                          style={{ 
                            objectFit: 'cover', 
                            width: '100%', 
                            height: '100%' 
                          }}
                        />
                      </div>
                      <div style={{ 
                        fontSize: '0.75rem', 
                        fontWeight: '500', 
                        color: 'black' 
                      }}>
                        {match.host.name}
                      </div>
                    </div>
                    {/* Join Match Button */}
                    <button
                      onClick={() => handleSlotClick(match, index)}
                      style={{
                        backgroundColor: 'black',
                        color: 'white',
                        padding: '6px 12px',
                        borderRadius: '0.25rem',
                        fontSize: '0.75rem',
                        fontWeight: '500',
                        border: 'none'
                      }}
                    >
                      {match.status === "joining" ? "Joined" : "Join Match"}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {activeTab === "registered" && (
          <div style={{ padding: '16px' }}>
            <div style={{ 
              border: '1px solid #e5e7eb', 
              padding: '24px', 
              textAlign: 'center', 
              borderRadius: '0.5rem' 
            }}>
              <div style={{ 
                width: '48px', 
                height: '48px', 
                backgroundColor: '#f3f4f6', 
                borderRadius: '9999px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                margin: '0 auto 12px auto' 
              }}>
                <svg
                  style={{ width: '24px', height: '24px', color: '#9ca3af' }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 style={{ 
                fontSize: '1rem', 
                fontWeight: 'bold', 
                color: '#111827', 
                marginBottom: '6px' 
              }}>
                No Registered Matches
              </h3>
              <p style={{ 
                color: '#6b7280', 
                marginBottom: '16px',
                fontSize: '0.875rem'
              }}>
                Join a match to see it here
              </p>
              <button style={{ 
                backgroundColor: THEME_COLOR, 
                color: '#111827', 
                padding: '6px 12px', 
                borderRadius: '0.375rem', 
                fontWeight: '500',
                fontSize: '0.875rem',
                border: 'none'
              }}>
                Browse Matches
              </button>
            </div>
          </div>
        )}

        {activeTab === "history" && (
          <div style={{ padding: '16px', display: 'grid', gap: '12px' }}>
            {pastMatches.map((match, index) => (
              <motion.div
                key={match.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div style={{ 
                  border: '1px solid #e5e7eb', 
                  borderRadius: '0.5rem',
                  padding: '12px'
                }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between'
                  }}>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '12px' 
                    }}>
                      <div style={{ 
                        width: '40px', 
                        height: '40px', 
                        borderRadius: '0.5rem', 
                        overflow: 'hidden' 
                      }}>
                        <img
                          src={match.image}
                          alt={match.sport}
                          style={{ 
                            objectFit: 'cover', 
                            width: '100%', 
                            height: '100%' 
                          }}
                        />
                      </div>
                      <div>
                        <h3 style={{ 
                          fontWeight: 'bold', 
                          color: '#111827', 
                          textTransform: 'capitalize',
                          fontSize: '0.875rem'
                        }}>
                          {match.sport}
                        </h3>
                        <p style={{ 
                          fontSize: '0.75rem', 
                          color: '#6b7280' 
                        }}>
                          vs {match.opponent}
                        </p>
                        <p style={{ 
                          fontSize: '0.625rem', 
                          color: '#6b7280' 
                        }}>
                          {match.date}
                        </p>
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ 
                        fontSize: '1.125rem', 
                        fontWeight: 'bold', 
                        color: '#111827', 
                        marginBottom: '4px' 
                      }}>
                        {match.score}
                      </div>
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'flex-end', 
                        gap: '6px' 
                      }}>
                        <span style={{
                          fontSize: '0.625rem',
                          padding: '2px 6px',
                          borderRadius: '9999px',
                          backgroundColor: match.result === "won" ? '#dcfce7' : '#fee2e2',
                          color: match.result === "won" ? '#166534' : '#991b1b',
                          border: `1px solid ${match.result === "won" ? '#bbf7d0' : '#fecaca'}`,
                          fontWeight: 'bold'
                        }}>
                          {match.result === "won" ? "Victory" : "Defeat"}
                        </span>
                        <div style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          fontSize: '0.75rem', 
                          color: '#6b7280' 
                        }}>
                          <svg
                            style={{ 
                              width: '14px', 
                              height: '14px', 
                              color: '#f59e0b', 
                              marginRight: '2px' 
                            }}
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                          </svg>
                          {match.performance}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Booking Confirmation Modal */}
      <AnimatePresence>
        {showConfirmation && selectedMatch && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ 
              position: 'fixed', 
              inset: 0, 
              backgroundColor: 'rgba(0, 0, 0, 0.5)', 
              zIndex: 50, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              padding: '16px' 
            }}
            onClick={() => setShowConfirmation(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              style={{ 
                width: '100%', 
                maxWidth: '24rem', 
                backgroundColor: 'white', 
                borderRadius: '0.75rem', 
                overflow: 'hidden' 
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ padding: '20px' }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  marginBottom: '12px' 
                }}>
                  <svg
                    style={{ 
                      width: '40px', 
                      height: '40px', 
                      color: THEME_COLOR 
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h3 style={{ 
                  fontSize: '1.125rem', 
                  fontWeight: 'bold', 
                  textAlign: 'center', 
                  color: '#111827', 
                  marginBottom: '6px' 
                }}>
                  Match Confirmed!
                </h3>
                <p style={{ 
                  color: '#6b7280', 
                  textAlign: 'center', 
                  marginBottom: '16px',
                  fontSize: '0.875rem'
                }}>
                  You've successfully joined the {selectedMatch.title}
                </p>
                
                <div style={{ 
                  backgroundColor: '#f9fafb', 
                  borderRadius: '0.5rem', 
                  padding: '12px', 
                  marginBottom: '16px' 
                }}>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    marginBottom: '6px',
                    fontSize: '0.875rem'
                  }}>
                    <span style={{ color: '#6b7280' }}>Date:</span>
                    <span style={{ fontWeight: '500' }}>{selectedMatch.time}</span>
                  </div>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    marginBottom: '6px',
                    fontSize: '0.875rem'
                  }}>
                    <span style={{ color: '#6b7280' }}>Location:</span>
                    <span style={{ fontWeight: '500' }}>{selectedMatch.location}</span>
                  </div>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    fontSize: '0.875rem'
                  }}>
                    <span style={{ color: '#6b7280' }}>Price:</span>
                    <span style={{ fontWeight: '500' }}>{selectedMatch.price}</span>
                  </div>
                </div>

                <button 
                  style={{
                    width: '100%',
                    backgroundColor: THEME_COLOR,
                    color: '#111827',
                    padding: '8px 16px',
                    borderRadius: '0.375rem',
                    fontWeight: '500',
                    border: 'none',
                    fontSize: '0.875rem'
                  }}
                  onClick={confirmBooking}
                >
                  Got it!
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default QuickMatch;