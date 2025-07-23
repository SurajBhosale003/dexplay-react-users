import { useState } from "react";
import { Settings, Trophy, Calendar, Star, Edit3, TrendingUp, Award, Target, ChevronRight, Plus, Copy, Share2, BarChart2, Check } from "lucide-react";

const Profile = () => {
  // Theme colors - Updated primary color to #D7EE34
  const theme = {
    primary: "#D7EE34", // New vibrant color
    secondary: "#10B981", // Emerald
    accent: "#F59E0B", // Amber
    background: "#F8FAFC", // Light slate
    text: "#1F2937", // Gray-800
    lightText: "#6B7280" // Gray-500
  };

  const achievements = [
    {
      id: 1,
      name: "First Victory",
      description: "Won your first match",
      image: "https://static.thenounproject.com/png/492226-200.png",
      earned: true,
      date: "Feb 10, 2024",
      xp: 50
    },
    {
      id: 2,
      name: "Team Player",
      description: "Played 10 team matches",
      image: "https://www.shutterstock.com/shutterstock/photos/394453261/display_1500/stock-vector-team-work-icon-suitable-for-info-graphics-websites-and-print-media-and-interfaces-line-vector-394453261.jpg",
      earned: true,
      date: "Feb 8, 2024",
      xp: 100
    },
    {
      id: 3,
      name: "Hat Trick Hero",
      description: "Score 3 goals in one match",
      image: "https://www.shutterstock.com/image-vector/illustration-victorious-soccer-team-celebrating-260nw-2481979411.jpg",
      earned: false,
      progress: 2,
      total: 3,
      xp: 150
    },
    {
      id: 4,
      name: "Perfect Week",
      description: "Win all matches in a week",
      image: "https://img.pikbest.com/illustration/20241226/achievement-logo_11301971.jpg!sw800",
      earned: false,
      progress: 3,
      total: 7,
      xp: 200
    },
  ];

  const recentMatches = [
    {
      id: 1,
      sport: "Football",
      result: "Won",
      score: "3-2",
      date: "Feb 10, 2024",
      opponent: "Team Alpha",
      image: "https://res.cloudinary.com/de6u5kbiw/image/upload/v1752131764/dexciss%20site/dexplay/optimal/400/football_x400/pexels-pixabay-46798_x400_ovdjpx.jpg",
      stats: {
        goals: 2,
        assists: 1,
        distance: 8.2,
        passes: 25,
        tackles: 4
      }
    },
    {
      id: 2,
      sport: "Basketball",
      result: "Lost",
      score: "45-52",
      date: "Feb 8, 2024",
      opponent: "Court Kings",
      image: "https://res.cloudinary.com/de6u5kbiw/image/upload/v1752131778/dexciss%20site/dexplay/optimal/400/basketball_x400/pexels-markusspiske-1752757_x400_svprp8.jpg",
      stats: {
        points: 18,
        rebounds: 7,
        assists: 5,
        steals: 2,
        blocks: 1
      }
    },
    {
      id: 3,
      sport: "Tennis",
      result: "Won",
      score: "6-4, 6-2",
      date: "Feb 5, 2024",
      opponent: "Mike Chen",
      image: "https://res.cloudinary.com/de6u5kbiw/image/upload/v1752131760/dexciss%20site/dexplay/optimal/400/tennis_x400/pexels-pixabay-209977_x400_rhisou.jpg",
      stats: {
        aces: 5,
        winners: 22,
        firstServe: 68,
        unforcedErrors: 8,
        breakPoints: 4
      }
    },
  ];

  const stats = [
    { label: "Matches", value: "47", icon: Target, change: "+12 this month", trend: "up" },
    { label: "Win Rate", value: "68%", icon: TrendingUp, change: "+5% this month", trend: "up" },
    { label: "Rating", value: "4.8", icon: Star, change: "Top 15%", trend: "steady" },
    { label: "Hours", value: "124", icon: Trophy, change: "+18h this month", trend: "up" },
  ];

  const [expandedMatch, setExpandedMatch] = useState(null);
  const [copiedJoinCode, setCopiedJoinCode] = useState(false);

  const toggleMatchExpand = (id) => {
    setExpandedMatch(expandedMatch === id ? null : id);
  };

  const copyJoinCode = () => {
    navigator.clipboard.writeText("SPRT-5X8K-9J2M");
    setCopiedJoinCode(true);
    setTimeout(() => setCopiedJoinCode(false), 2000);
  };

  return (
    <div style={{ 
      minHeight: "100vh", 
      backgroundColor: theme.background,
      paddingBottom: "80px" // For navbar space
    }}>
      {/* Header */}
      <div style={{
        padding: "24px",
        position: "sticky",
        top: 0,
        zIndex: 10,
        backgroundColor: "white",
        borderBottom: "1px solid #f3f4f6",
        boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)"
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}>
          <h1 style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: theme.text
          }}>My Profile</h1>
          <button style={{
            background: "transparent",
            border: "none",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: theme.primary,
            cursor: "pointer"
          }}>
            <Settings style={{ width: "20px", height: "20px" }} />
          </button>
        </div>
      </div>

      {/* Profile Content */}
      <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "24px" }}>
        {/* Profile Card */}
        <div style={{
          backgroundColor: "white",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)"
        }}>
          <div style={{ 
            height: "128px", 
            width: "100%", 
            backgroundColor: theme.primary,
            position: "relative"
          }}>
            <button style={{
              position: "absolute",
              top: "16px",
              right: "16px",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              color: "#111827",
              border: "none",
              borderRadius: "6px",
              padding: "6px 12px",
              fontSize: "0.875rem",
              display: "flex",
              alignItems: "center",
              cursor: "pointer"
            }}>
              <Edit3 style={{ width: "16px", height: "16px", marginRight: "8px" }} />
              Edit Cover
            </button>
          </div>
          
          <div style={{ padding: "24px", position: "relative" }}>
            <div style={{ 
              display: "flex", 
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "24px",
              marginTop: "-48px"
            }}>
              <div style={{ position: "relative" }}>
                <div style={{
                  position: "relative",
                  width: "96px",
                  height: "96px",
                  borderRadius: "50%",
                  border: "4px solid white",
                  backgroundColor: "#f3f4f6",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                }}>
                  <img
                    src="https://thumbs.dreamstime.com/b/happy-old-man-29332682.jpg"
                    alt="Profile"
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />
                </div>

                <button style={{
                  position: "absolute",
                  bottom: "-8px",
                  right: "-8px",
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  backgroundColor: theme.secondary,
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  cursor: "pointer"
                }}>
                  <Edit3 style={{ width: "16px", height: "16px", color: "white" }} />
                </button>
              </div>
              
              <div style={{ flex: 1, width: "100%" }}>
                <div style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "space-between",
                  marginBottom: "8px"
                }}>
                  <div>
                    <h2 style={{ 
                      fontSize: "1.5rem", 
                      fontWeight: "bold", 
                      marginBottom: "4px",
                      color: theme.text
                    }}>
                      Alex Johnson
                    </h2>
                    <p style={{ 
                      fontSize: "0.875rem", 
                      marginBottom: "8px",
                      color: theme.lightText
                    }}>
                      Age 25 • New York
                    </p>
                  </div>
                  <span style={{
                    padding: "4px 12px",
                    borderRadius: "9999px",
                    backgroundColor: theme.accent,
                    color: "white",
                    fontSize: "0.75rem",
                    fontWeight: "500",
                    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)"
                  }}>
                    Pro Member
                  </span>
                </div>
                
                <div style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "16px",
                  marginTop: "12px"
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <Star style={{ width: "16px", height: "16px", color: theme.accent }} />
                    <span style={{ fontWeight: "600", color: theme.text }}>4.8</span>
                    <span style={{ fontSize: "0.875rem", color: theme.lightText }}>(128 reviews)</span>
                  </div>
                  
                  <div style={{ height: "16px", width: "1px", backgroundColor: "#e5e7eb" }}></div>
                  
                  <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <Trophy style={{ width: "16px", height: "16px", color: theme.accent }} />
                    <span style={{ fontWeight: "600", color: theme.text }}>12</span>
                    <span style={{ fontSize: "0.875rem", color: theme.lightText }}>trophies</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "16px"
        }}>
          {stats.map((stat, index) => (
            <div key={index} style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "16px",
              boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
              transition: "transform 0.2s",
              position: "relative"
            }}>
              {/* "use client" badge */}
              {/* <div style={{
                position: "absolute",
                top: "8px",
                right: "8px",
                fontSize: "0.75rem",
                padding: "2px 6px",
                borderRadius: "9999px",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                border: "1px solid #e5e7eb"
              }}>
                use client
              </div> */}
              
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: `${theme.primary}10`
                }}>
                  <stat.icon style={{ width: "20px", height: "20px", color: theme.primary }} />
                </div>
                <div>
                  <div style={{ 
                    fontSize: "1.25rem", 
                    fontWeight: "bold",
                    color: theme.text
                  }}>
                    {stat.value}
                  </div>
                  <div style={{ 
                    fontSize: "0.75rem",
                    color: theme.lightText
                  }}>
                    {stat.label}
                  </div>
                </div>
              </div>
              <div style={{
                fontSize: "0.75rem",
                marginTop: "8px",
                display: "flex",
                alignItems: "center",
                color: stat.trend === "up" ? "#059669" : 
                      stat.trend === "down" ? "#dc2626" : "#6b7280"
              }}>
                {stat.change}
                {stat.trend === "up" && (
                  <svg style={{ width: "12px", height: "12px", marginLeft: "4px" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Join Community Card */}
        <div style={{
          backgroundColor: theme.primary,
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)"
        }}>
          <div style={{ padding: "24px", color: "white" }}>
            <div style={{ 
              display: "flex", 
              alignItems: "flex-start",
              justifyContent: "space-between"
            }}>
              <div>
                <h3 style={{ 
                  fontSize: "1.25rem", 
                  fontWeight: "bold", 
                  marginBottom: "8px" 
                }}>
                  Join Our Community
                </h3>
                <p style={{ 
                  fontSize: "0.875rem", 
                  opacity: 0.9, 
                  marginBottom: "16px" 
                }}>
                  Connect with other players and get exclusive benefits
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <button style={{
                    backgroundColor: "white",
                    color: "#111827",
                    border: "none",
                    borderRadius: "6px",
                    padding: "6px 12px",
                    fontSize: "0.875rem",
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer"
                  }}>
                    <Plus style={{ width: "16px", height: "16px", marginRight: "8px" }} />
                    Join Now
                  </button>
                  <button style={{
                    backgroundColor: "transparent",
                    border: "1px solid white",
                    color: "white",
                    borderRadius: "6px",
                    padding: "6px 12px",
                    fontSize: "0.875rem",
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer"
                  }}>
                    Learn More
                  </button>
                </div>
              </div>
              <div style={{ 
                display: "none",
                position: "relative",
                width: "96px",
                height: "96px"
              }}>
                <div style={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "50%"
                }}></div>
                <div style={{
                  position: "absolute",
                  inset: "16px",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  borderRadius: "50%"
                }}></div>
                <Trophy style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "32px",
                  height: "32px"
                }} />
              </div>
            </div>
          </div>
        </div>

        {/* Wallet & Join Code */}
        <div style={{ 
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "16px"
        }}>
          {/* Wallet Card */}
          <div style={{
            backgroundColor: theme.secondary,
            borderRadius: "16px",
            padding: "24px",
            boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)"
          }}>
            <div style={{ 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "space-between",
              color: "white"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <Trophy style={{ width: "24px", height: "24px" }} />
                </div>
                <div>
                  <h3 style={{ fontWeight: "bold" }}>DexPlay Wallet</h3>
                  <p style={{ fontSize: "0.875rem", opacity: 0.9 }}>Available balance</p>
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>₹2,500</div>
                <div style={{ fontSize: "0.875rem", opacity: 0.9 }}>+ 150 points</div>
              </div>
            </div>
          </div>

          {/* Join Code Card */}
          <div style={{
            backgroundColor: "white",
            borderRadius: "16px",
            padding: "24px",
            boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)"
          }}>
            <div style={{ 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "space-between"
            }}>
              <div>
                <h3 style={{ 
                  fontWeight: "bold", 
                  marginBottom: "4px",
                  color: theme.text
                }}>
                  Your Join Code
                </h3>
                <p style={{ 
                  fontSize: "0.875rem", 
                  marginBottom: "12px",
                  color: theme.lightText
                }}>
                  Share this code to invite friends
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{
                    padding: "8px 16px",
                    borderRadius: "8px",
                    fontFamily: "monospace",
                    fontWeight: "bold",
                    fontSize: "1.125rem",
                    border: "1px solid #e5e7eb",
                    color: theme.primary
                  }}>
                    SPRT-5X8K-9J2M
                  </div>
                  <button style={{
                    backgroundColor: "transparent",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                    width: "36px",
                    height: "36px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer"
                  }} onClick={copyJoinCode}>
                    {copiedJoinCode ? (
                      <Check style={{ width: "16px", height: "16px", color: theme.secondary }} />
                    ) : (
                      <Copy style={{ width: "16px", height: "16px" }} />
                    )}
                  </button>
                </div>
              </div>
              <button style={{
                backgroundColor: "transparent",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                width: "36px",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer"
              }}>
                <Share2 style={{ width: "16px", height: "16px" }} />
              </button>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div>
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "space-between",
            marginBottom: "16px"
          }}>
            <h3 style={{ 
              fontSize: "1.25rem", 
              fontWeight: "bold",
              color: theme.text
            }}>
              Achievements
            </h3>
            <button style={{
              backgroundColor: "transparent",
              border: "none",
              display: "flex",
              alignItems: "center",
              color: theme.primary,
              cursor: "pointer"
            }}>
              View All
              <ChevronRight style={{ width: "16px", height: "16px", marginLeft: "4px" }} />
            </button>
          </div>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "16px"
          }}>
            {achievements.map((achievement) => (
              <div key={achievement.id} style={{
                backgroundColor: achievement.earned ? "white" : "#f9fafb",
                borderRadius: "16px",
                padding: "16px",
                boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
                transition: "transform 0.2s"
              }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                  <div style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "12px",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: achievement.earned ? "#ede9fe" : "#e5e7eb"
                  }}>
                    <img
                      src={achievement.image}
                      alt={achievement.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        filter: achievement.earned ? "none" : "grayscale(100%)",
                        opacity: achievement.earned ? 1 : 0.6
                      }}
                    />
                  </div>
                  
                  <div style={{ flex: 1 }}>
                    <div style={{ 
                      display: "flex", 
                      alignItems: "flex-start", 
                      justifyContent: "space-between"
                    }}>
                      <h4 style={{ 
                        fontWeight: "bold", 
                        color: achievement.earned ? "#111827" : "#6b7280"
                      }}>
                        {achievement.name}
                      </h4>
                      {achievement.earned && (
                        <div style={{ 
                          display: "flex", 
                          alignItems: "center", 
                          gap: "4px",
                          backgroundColor: "#fef3c7",
                          color: "#92400e",
                          padding: "4px 8px",
                          borderRadius: "9999px"
                        }}>
                          <Star style={{ width: "12px", height: "12px", fill: "#f59e0b" }} />
                          <span style={{ fontSize: "0.75rem", fontWeight: "bold" }}>
                            {achievement.xp} XP
                          </span>
                        </div>
                      )}
                    </div>
                    
                    <p style={{ 
                      fontSize: "0.875rem", 
                      marginTop: "4px",
                      color: achievement.earned ? "#4b5563" : "#9ca3af"
                    }}>
                      {achievement.description}
                    </p>
                    
                    {achievement.earned ? (
                      <div style={{ 
                        fontSize: "0.75rem", 
                        marginTop: "8px", 
                        display: "flex", 
                        alignItems: "center",
                        color: "#6b7280"
                      }}>
                        <Calendar style={{ width: "12px", height: "12px", marginRight: "4px" }} />
                        Earned {achievement.date}
                      </div>
                    ) : (
                      <div style={{ marginTop: "12px" }}>
                        <div style={{ 
                          display: "flex", 
                          alignItems: "center", 
                          justifyContent: "space-between",
                          fontSize: "0.75rem",
                          marginBottom: "4px"
                        }}>
                          <span style={{ color: "#6b7280" }}>Progress</span>
                          <span style={{ fontWeight: "500", color: "#374151" }}>
                            {achievement.progress}/{achievement.total}
                          </span>
                        </div>
                        <div style={{ 
                          width: "100%", 
                          backgroundColor: "#e5e7eb", 
                          borderRadius: "9999px", 
                          height: "8px"
                        }}>
                          <div
                            style={{ 
                              height: "100%",
                              borderRadius: "9999px",
                              backgroundColor: theme.primary,
                              width: `${(achievement.progress / achievement.total) * 100}%`
                            }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Matches */}
        <div>
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "space-between",
            marginBottom: "16px"
          }}>
            <h3 style={{ 
              fontSize: "1.25rem", 
              fontWeight: "bold",
              color: theme.text
            }}>
              Recent Matches
            </h3>
            <button style={{
              backgroundColor: "transparent",
              border: "none",
              display: "flex",
              alignItems: "center",
              color: theme.primary,
              cursor: "pointer"
            }}>
              <Calendar style={{ width: "16px", height: "16px", marginRight: "8px" }} />
              View All
            </button>
          </div>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {recentMatches.map((match) => (
              <div key={match.id} style={{
                backgroundColor: "white",
                borderRadius: "16px",
                boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
                overflow: "hidden",
                transition: "transform 0.2s"
              }}>
                <div 
                  style={{ 
                    padding: "16px",
                    cursor: "pointer"
                  }} 
                  onClick={() => toggleMatchExpand(match.id)}
                >
                  <div style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "space-between"
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                      <div style={{ 
                        position: "relative", 
                        width: "48px", 
                        height: "48px", 
                        borderRadius: "12px", 
                        overflow: "hidden",
                        backgroundColor: "#f3f4f6"
                      }}>
                        <img
                          src={match.image}
                          alt={match.sport}
                          style={{
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            objectFit: "cover"
                          }}
                        />
                      </div>

                      <div>
                        <div style={{ 
                          fontWeight: "600", 
                          color: theme.text
                        }}>
                          {match.sport}
                        </div>
                        <div style={{ 
                          fontSize: "0.875rem", 
                          color: theme.lightText
                        }}>
                          vs {match.opponent}
                        </div>
                        <div style={{ 
                          fontSize: "0.75rem", 
                          color: "#9ca3af"
                        }}>
                          {match.date}
                        </div>
                      </div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ 
                        fontWeight: "bold", 
                        marginBottom: "4px",
                        color: match.result === "Won" ? theme.secondary : "#ef4444"
                      }}>
                        {match.score}
                      </div>
                      <span style={{
                        padding: "4px 8px",
                        borderRadius: "9999px",
                        backgroundColor: match.result === "Won" ? "#d1fae5" : "#fee2e2",
                        color: match.result === "Won" ? "#065f46" : "#b91c1c",
                        fontSize: "0.75rem",
                        fontWeight: "500"
                      }}>
                        {match.result}
                      </span>
                    </div>
                  </div>
                </div>
                
                {expandedMatch === match.id && (
                  <div style={{ 
                    padding: "0 16px 16px 16px",
                    borderTop: "1px solid #f3f4f6"
                  }}>
                    <h4 style={{ 
                      fontWeight: "500", 
                      marginBottom: "12px",
                      fontSize: "0.875rem",
                      color: theme.text
                    }}>
                      Match Statistics
                    </h4>
                    <div style={{ 
                      display: "grid",
                      gridTemplateColumns: "repeat(3, 1fr)",
                      gap: "12px"
                    }}>
                      {Object.entries(match.stats).map(([key, value]) => (
                        <div key={key} style={{ textAlign: "center" }}>
                          <div style={{ 
                            fontSize: "1.5rem", 
                            fontWeight: "bold",
                            color: theme.primary
                          }}>
                            {value}
                          </div>
                          <div style={{ 
                            fontSize: "0.75rem", 
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                            color: theme.lightText
                          }}>
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>
                    <button style={{
                      width: "100%",
                      marginTop: "16px",
                      backgroundColor: "transparent",
                      border: "1px solid #e5e7eb",
                      borderRadius: "8px",
                      padding: "8px 16px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer"
                    }}>
                      <BarChart2 style={{ width: "16px", height: "16px", marginRight: "8px" }} />
                      View Full Stats
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", paddingBottom: "24px" }}>
          <button style={{
            width: "100%",
            height: "48px",
            borderRadius: "16px",
            backgroundColor: theme.primary,
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
            cursor: "pointer"
          }}>
            <Calendar style={{ width: "20px", height: "20px", marginRight: "8px" }} />
            View Full Schedule
          </button>
          <button style={{
            width: "100%",
            height: "48px",
            borderRadius: "16px",
            backgroundColor: "transparent",
            border: "1px solid #e5e7eb",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer"
          }}>
            <Settings style={{ width: "20px", height: "20px", marginRight: "8px" }} />
            Account Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;