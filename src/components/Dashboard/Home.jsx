import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const THEME_COLOR = "#D7EE34";

const sports = [
  {
    id: "football",
    name: "Football",
    image:
      "https://res.cloudinary.com/de6u5kbiw/image/upload/v1752131850/dexciss%20site/dexplay/optimal/700/football_x700/pexels-rethaferguson-3621104_x700_fajqo5.jpg",
    activeMatches: 24,
    nextMatch: "Today 6:00 PM",
  },
  {
    id: "tennis",
    name: "Tennis",
    image:
      "https://res.cloudinary.com/de6u5kbiw/image/upload/v1752131846/dexciss%20site/dexplay/optimal/700/tennis_x700/pexels-dmytro-1259064-2694942_x700_hnjgd9.jpg",
    activeMatches: 12,
    nextMatch: "Today 5:00 PM",
  },
  {
    id: "badminton",
    name: "Badminton",
    image:
      "https://res.cloudinary.com/de6u5kbiw/image/upload/v1752131914/dexciss%20site/dexplay/optimal/700/badminton_x700/pexels-leozhao-5767580_x700_eodbkk.jpg",
    activeMatches: 8,
    nextMatch: "Today 7:00 PM",
  },
  {
    id: "cricket",
    name: "Cricket",
    image:
      "https://res.cloudinary.com/de6u5kbiw/image/upload/v1752131881/dexciss%20site/dexplay/optimal/700/cricket_x700/pexels-lorien-le-poer-trench-2148896580-30387508_x700_nuax9q.jpg",
    activeMatches: 15,
    nextMatch: "Tomorrow 4:00 PM",
  },
  {
    id: "badminton",
    name: "Badminton",
    image:
      "https://res.cloudinary.com/de6u5kbiw/image/upload/v1752131914/dexciss%20site/dexplay/optimal/700/badminton_x700/pexels-leozhao-5767580_x700_eodbkk.jpg",
    activeMatches: 8,
    nextMatch: "Today 7:00 PM",
  },
  {
    id: "volleyball",
    name: "Volleyball",
    image:
      "https://res.cloudinary.com/de6u5kbiw/image/upload/v1752131879/dexciss%20site/dexplay/optimal/700/volleyball_x700/pexels-pavel-danilyuk-6203521_x700_wx7rv5.jpg",
    activeMatches: 10,
    nextMatch: "Tomorrow 6:30 PM",
  },
];

const matches = [
  {
    id: 1,
    title: "Football Match",
    location: "Victory Park",
    dateTime: "Today 6:00 PM",
    status: "Confirmed",
    sport: "football",
    image:
      "https://res.cloudinary.com/de6u5kbiw/image/upload/v1752131863/dexciss%20site/dexplay/optimal/700/football_x700/pexels-yogendras31-3361471_x700_avsyqv.jpg",
  },
  {
    id: 2,
    title: "Basketball Tournament",
    location: "City Arena",
    dateTime: "Tomorrow 7:30 PM",
    status: "Pending",
    sport: "basketball",
    image:
      "https://res.cloudinary.com/de6u5kbiw/image/upload/v1752131848/dexciss%20site/dexplay/optimal/700/basketball_x700/pexels-justinianoadriano-1905009_x700_ep6zny.jpg",
  },
  {
    id: 3,
    title: "Tennis Championship",
    location: "Grand Courts",
    dateTime: "Today 5:00 PM",
    status: "Confirmed",
    sport: "tennis",
    image:
      "https://res.cloudinary.com/de6u5kbiw/image/upload/v1752131840/dexciss%20site/dexplay/optimal/700/tennis_x700/pexels-jim-de-ramos-395808-1277397_x700_bdo9xg.jpg",
  },
];

const stats = [
  { label: "Matches Played", value: "24", icon: "TrendingUp", change: "+12%" },
  { label: "Win Rate", value: "75%", icon: "TrendingUp", change: "+5%" },
  { label: "Hours Played", value: "48", icon: "Clock", change: "+8h" },
];

const difficulties = [
  { id: "beginner", name: "Beginner", description: "New to the sport" },
  { id: "intermediate", name: "Intermediate", description: "Some experience" },
  { id: "advanced", name: "Advanced", description: "Experienced player" },
  {
    id: "professional",
    name: "Professional",
    description: "Competitive level",
  },
];

const timeSlots = Array.from({ length: 14 }, (_, i) => i + 8); // 8AM to 9PM

const Icon = ({ name, ...props }) => {
  switch (name) {
    case "Plus":
      return (
        <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
      );
    case "Clock":
      return (
        <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );
    case "Users":
      return (
        <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      );
    case "TrendingUp":
      return (
        <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      );
    case "Calendar":
      return (
        <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      );
    case "Bell":
      return (
        <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
      );
    case "MapPin":
      return (
        <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      );
    case "CheckCircle2":
      return (
        <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );
    case "ChevronLeft":
      return (
        <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      );
    case "ChevronRight":
      return (
        <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      );
    case "PartyPopper":
      return (
        <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 13l3 3m0 0l3-3m-3 3V10"
          />
        </svg>
      );
    case "X":
      return (
        <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      );
    default:
      return null;
  }
};

const CreateMatchModal = ({ sport, onClose }) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState("intermediate");
  const [selectedTimes, setSelectedTimes] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showSuccess, setShowSuccess] = useState(false);
  const [hoveredTimeSlot, setHoveredTimeSlot] = useState(null);

  const monthStart = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  );
  const monthEnd = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  );

  const monthDays = [];
  for (
    let d = new Date(monthStart);
    d <= monthEnd;
    d.setDate(d.getDate() + 1)
  ) {
    monthDays.push(new Date(d));
  }

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setSelectedTimes([]);
  };

  const handleTimeSelect = (hour) => {
    setSelectedTimes((prev) =>
      prev.includes(hour) ? prev.filter((h) => h !== hour) : [...prev, hour]
    );
  };

  const handleBooking = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setSelectedTimes([]);
      setSelectedDate(new Date());
      setSelectedDifficulty("intermediate");
      onClose();
    }, 2500);
  };

  const navigateMonth = (direction) => {
    setCurrentMonth((prev) => {
      const newMonth = new Date(prev);
      newMonth.setMonth(
        direction === "prev" ? prev.getMonth() - 1 : prev.getMonth() + 1
      );
      return newMonth;
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const isSameMonth = (date1, date2) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth()
    );
  };

  const isSameDay = (date1, date2) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  return (
    <AnimatePresence>
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.7)",
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px",
          }}
        >
          <motion.div
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0 }}
            style={{
              backgroundColor: "white",
              padding: "32px",
              borderRadius: "16px",
              maxWidth: "384px",
              width: "100%",
              textAlign: "center",
              boxShadow:
                "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
            }}
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 3000,
                ease: "backOut",
              }}
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "16px",
              }}
            >
              <Icon
                name="CheckCircle2"
                style={{ width: "64px", height: "64px", color: "#10B981" }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{ marginBottom: "8px" }}
            >
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#111827",
                }}
              >
                Booking Confirmed!
              </h3>
              <p style={{ color: "#6B7280", marginTop: "8px" }}>
                Your match has been successfully created
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "24px",
                gap: "16px",
              }}
            >
              <Icon
                name="PartyPopper"
                style={{ width: "32px", height: "32px", color: "#F59E0B" }}
              />

              
            </motion.div>
          </motion.div>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 99,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          padding: 0,
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            width: "100%",
            maxWidth: "448px",
            backgroundColor: "white",
            borderRadius: "24px 24px 0 0",
            overflow: "hidden",
            boxShadow:
              "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "24px",
              borderBottom: "1px solid #F3F4F6",
              position: "sticky",
              top: 0,
              backgroundColor: "white",
              zIndex: 10,
            }}
          >
            <h2
              style={{ fontSize: "20px", fontWeight: "bold", color: "#111827" }}
            >
              Create Match for {sport.name}
            </h2>
            <button
              onClick={onClose}
              style={{
                borderRadius: "9999px",
                backgroundColor: "#F3F4F6",
                padding: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "none",
                cursor: "pointer",
              }}
            >
              <Icon
                name="X"
                style={{ width: "16px", height: "16px", color: "#6B7280" }}
              />
            </button>
          </div>

          <div
            style={{
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              maxHeight: "calc(100vh - 200px)",
              overflowY: "auto",
            }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              
            >
              <img
                    src={sport.image}
                    alt={sport.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "12px",
                      
                      objectFit: "cover",
                    }}
                  />
              
            </motion.div>

            <div>
              <label
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#6B7280",
                  marginBottom: "8px",
                  display: "block",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Skill Level
              </label>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "8px",
                }}
              >
                {difficulties.map((diff) => (
                  <motion.button
                    key={diff.id}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedDifficulty(diff.id)}
                    style={{
                      padding: "12px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      textAlign: "left",
                      borderRadius: "8px",
                      border: "1px solid",
                      fontSize: "14px",
                      backgroundColor:
                        selectedDifficulty === diff.id ? "#D7EE34" : "white",
                      color:
                        selectedDifficulty === diff.id ? "#374151" : "#111827",
                      borderColor:
                        selectedDifficulty === diff.id ? "#D7EE34" : "#E5E7EB",
                      fontWeight:
                        selectedDifficulty === diff.id ? "600" : "normal",
                      cursor: "pointer",
                    }}
                  >
                    <div style={{ fontWeight: "600", fontSize: "14px" }}>
                      {diff.name}
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        opacity: 0.8,
                        marginTop: "4px",
                      }}
                    >
                      {diff.description}
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            <div>
              <label
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#6B7280",
                  marginBottom: "8px",
                  display: "block",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Select Date
              </label>
              <div style={{ backgroundColor: "white", borderRadius: "12px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "12px",
                  }}
                >
                  <button
                    onClick={() => navigateMonth("prev")}
                    style={{
                      borderRadius: "9999px",
                      backgroundColor: "#F3F4F6",
                      padding: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    <Icon
                      name="ChevronLeft"
                      style={{
                        width: "16px",
                        height: "16px",
                        color: "#6B7280",
                      }}
                    />
                  </button>
                  <h3
                    style={{
                      fontWeight: "600",
                      color: "#111827",
                      fontSize: "16px",
                    }}
                  >
                    {currentMonth.toLocaleDateString(undefined, {
                      month: "long",
                      year: "numeric",
                    })}
                  </h3>
                  <button
                    onClick={() => navigateMonth("next")}
                    style={{
                      borderRadius: "9999px",
                      backgroundColor: "#F3F4F6",
                      padding: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    <Icon
                      name="ChevronRight"
                      style={{
                        width: "16px",
                        height: "16px",
                        color: "#6B7280",
                      }}
                    />
                  </button>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(7, 1fr)",
                    gap: "4px",
                    marginBottom: "8px",
                  }}
                >
                  {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                    <div
                      key={day}
                      style={{
                        textAlign: "center",
                        fontSize: "12px",
                        fontWeight: "500",
                        color: "#6B7280",
                        padding: "4px",
                      }}
                    >
                      {day}
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(7, 1fr)",
                    gap: "4px",
                  }}
                >
                  {monthDays.map((day, i) => (
                    <motion.button
                      key={i}
                      whileHover={{ backgroundColor: "#F3F4F6" }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleDateSelect(day)}
                      style={{
                        height: "36px",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "14px",
                        backgroundColor: isSameDay(day, selectedDate)
                          ? "#D7EE34"
                          : "transparent",
                        color: isSameDay(day, selectedDate)
                          ? "#374151"
                          : isSameMonth(day, currentMonth)
                          ? "#111827"
                          : "#D1D5DB",
                        fontWeight: isSameDay(day, selectedDate)
                          ? "600"
                          : "normal",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      {day.getDate()}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                }}
              >
                <label
                  style={{
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "#6B7280",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Available Slots
                </label>
                <div style={{ fontSize: "12px", color: "#6B7280" }}>
                  {selectedDate && formatDate(selectedDate)}
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "8px",
                }}
              >
                {timeSlots.map((hour) => {
                  const displayTime =
                    hour > 12
                      ? `${hour - 12} PM`
                      : hour === 12
                      ? "12 PM"
                      : `${hour} AM`;
                  const isSelected = selectedTimes.includes(hour);
                  const isHovered = hoveredTimeSlot === hour && !isSelected;

                  return (
                    <motion.button
                      key={`time-slot-${hour}`}
                      whileHover={{ backgroundColor: "#F3F4F6" }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleTimeSelect(hour)}
                      onMouseEnter={() => setHoveredTimeSlot(hour)}
                      onMouseLeave={() => setHoveredTimeSlot(null)}
                      style={{
                        height: "40px",
                        borderRadius: "8px",
                        border: `1px solid ${
                          isSelected
                            ? "#D7EE34"
                            : isHovered
                            ? "#D7EE34"
                            : "#E5E7EB"
                        }`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "14px",
                        backgroundColor: isSelected ? "#D7EE34" : "white",
                        color: isSelected ? "#374151" : "#111827",
                        fontWeight: isSelected ? "500" : "normal",
                        cursor: "pointer",
                      }}
                    >
                      {displayTime}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            <div>
              <div
                style={{
                  fontSize: "12px",
                  color: "#6B7280",
                }}
              >
                <h4
                  style={{
                    fontWeight: "600",
                    color: "#D7EE34",
                    marginBottom: "8px",
                  }}
                >
                  Terms & Conditions : 
                </h4>
                <ul
                  style={{ listStyleType: "none", paddingLeft: 0, margin: 0 }}
                >
                  <li style={{ marginBottom: "4px" }}>
                    • Minimum 2 players required
                  </li>
                  <li style={{ marginBottom: "4px" }}>
                    • 24h cancellation policy
                  </li>
                  <li style={{ marginBottom: "4px" }}>
                    • Late arrivals may reduce play time
                  </li>
                  <li>• Proper sports attire required</li>
                </ul>
              </div>
            </div>
          </div>

          <div
            style={{
              padding: "16px",
              borderTop: "1px solid #F3F4F6",
              display: "flex",
              gap: "12px",
              position: "sticky",
              bottom: 0,
              backgroundColor: "white",
            }}
          >
            <motion.button
              whileHover={{ backgroundColor: "#F3F4F6" }}
              whileTap={{ scale: 0.98 }}
              onClick={onClose}
              style={{
                flex: 1,
                height: "48px",
                border: "1px solid #E5E7EB",
                backgroundColor: "white",
                borderRadius: "12px",
                color: "#374151",
                fontWeight: "500",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Cancel
            </motion.button>
            <motion.button
              whileHover={{ backgroundColor: "#D7EE34" }}
              whileTap={{ scale: 0.98 }}
              disabled={!selectedDate || selectedTimes.length === 0}
              onClick={handleBooking}
              style={{
                flex: 1,
                height: "48px",
                borderRadius: "12px",
                color: "#374151",
                fontWeight: "500",
                fontSize: "16px",
                backgroundColor:
                  selectedTimes.length > 0 ? "#D7EE34" : "#D1D5DB ",
                border: "none",
                cursor: selectedTimes.length > 0 ? "pointer" : "not-allowed",
              }}
            >
              {selectedTimes.length > 0
                ? `Book ${selectedTimes.length} Slot${
                    selectedTimes.length > 1 ? "s" : ""
                  }`
                : "Create Match"}
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const HomeScreen = ({ user }) => {
  const [showCreateMatch, setShowCreateMatch] = useState(false);
  const [selectedSport, setSelectedSport] = useState(null);

  const handleCreateMatch = (sport) => {
    setSelectedSport(sport);
    setShowCreateMatch(true);
  };

  function getTimeBasedGreeting() {
    const hour = new Date().getHours();

    if (hour < 12) {
      return "Good morning";
    } else if (hour < 18) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  }

  return (
    <div style={{ backgroundColor: "white", minHeight: "100vh" }}>
      {/* Header */}
      <div
        style={{
          padding: "24px",
          backgroundColor: "white",
          borderBottom: "1px solid #f3f4f6",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "24px",
          }}
        >
          <div>
            <h1
              style={{ fontSize: "24px", fontWeight: "bold", color: "#111827" }}
            >
              {getTimeBasedGreeting()},{user?.name}
            </h1>
            <p style={{ color: "#4b5563" }}>Ready for your next match?</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            {/* Notification Bell Button */}
            <button
              style={{
                backgroundColor: "transparent",
                border: "none",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "background-color 0.2s",
                ":hover": {
                  backgroundColor: "#f3f4f6",
                },
              }}
              onClick={() => console.log("Notifications clicked")} // Add your notification handler
            >
              <Icon
                name="Bell"
                style={{ width: "20px", height: "20px", color: "#4b5563" }}
              />
            </button>

            {/* User Profile Button */}
            <button
              style={{
                backgroundColor: "#e5e7eb",
                border: "none",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "background-color 0.2s, transform 0.2s",
                ":hover": {
                  backgroundColor: "#d1d5db",
                  transform: "scale(1.05)",
                },
              }}
              onClick={() => {
                // Navigate to profile page
                window.location.href = "/profile"; // or use your router (React Router, Next.js, etc.)
                // For React Router: navigate('/profile');
                // For Next.js: router.push('/profile');
              }}
            >
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#4b5563",
                  userSelect: "none",
                }}
              >
                {user?.name?.charAt(0).toUpperCase() || "U"}
              </span>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
          }}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              style={{
                padding: "16px",
                textAlign: "center",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "8px",
                }}
              >
                <Icon
                  name={stat.icon}
                  style={{ width: "20px", height: "20px", color: THEME_COLOR }}
                />
              </div>
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#111827",
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: "12px", color: "#6b7280" }}>
                {stat.label}
              </div>
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: "500",
                  color: THEME_COLOR,
                }}
              >
                {stat.change}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Your Sports */}
      <div style={{ padding: "16px 12px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "16px",
          }}
        >
          <h2
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "#111827",
              "@media (min-width: 640px)": {
                fontSize: "20px",
              },
            }}
          >
            Your Sports
          </h2>
          <button
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "#4b5563",
              fontSize: "14px",
              padding: "4px 8px",
            }}
          >
            View All
          </button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {sports.map((sport, index) => (
            <motion.div
              key={sport.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div
                style={{
                  overflow: "hidden",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                  transition: "box-shadow 0.2s",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    height: "160px",
                    "@media (min-width: 640px)": {
                      height: "192px",
                    },
                  }}
                >
                  <img
                    src={sport.image}
                    alt={sport.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: "0",
                      background:
                        "linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "12px",
                      left: "12px",
                      right: "12px",
                      "@media (min-width: 640px)": {
                        bottom: "16px",
                        left: "16px",
                        right: "16px",
                      },
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "white",
                        marginBottom: "6px",
                        "@media (min-width: 640px)": {
                          fontSize: "24px",
                          marginBottom: "8px",
                        },
                      }}
                    >
                      {sport.name}
                    </h3>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexDirection: "column",
                        gap: "8px",
                        "@media (min-width: 640px)": {
                          flexDirection: "row",
                          gap: "16px",
                        },
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          color: "rgba(255, 255, 255, 0.9)",
                          width: "100%",
                          justifyContent: "space-between",
                          "@media (min-width: 640px)": {
                            width: "auto",
                            justifyContent: "flex-start",
                          },
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "4px",
                          }}
                        >
                          <Icon
                            name="Users"
                            style={{ width: "14px", height: "14px" }}
                          />
                          <span style={{ fontSize: "12px" }}>
                            {sport.activeMatches} active
                          </span>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "4px",
                          }}
                        >
                          <Icon
                            name="Clock"
                            style={{ width: "14px", height: "14px" }}
                          />
                          <span style={{ fontSize: "12px" }}>
                            {sport.nextMatch}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => handleCreateMatch(sport)}
                        style={{
                          backgroundColor: THEME_COLOR,
                          color: "black",
                          borderRadius: "6px",
                          padding: "4px 8px",
                          fontSize: "12px",
                          fontWeight: "500",
                          display: "flex",
                          alignItems: "center",
                          border: "none",
                          cursor: "pointer",
                          width: "100%",
                          justifyContent: "center",
                          "@media (min-width: 640px)": {
                            width: "auto",
                            padding: "6px 12px",
                            fontSize: "14px",
                          },
                        }}
                      >
                        <Icon
                          name="Plus"
                          style={{
                            width: "14px",
                            height: "14px",
                            marginRight: "4px",
                          }}
                        />
                        Create
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Upcoming Matches */}
      <div style={{ padding: "16px 12px", backgroundColor: "#f9fafb" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "24px",
          }}
        >
          <div style={{ marginBottom: "16px" }}>
            <h2
              style={{ fontSize: "20px", fontWeight: "bold", color: "#111827" }}
            >
              Upcoming Matches
            </h2>
            <p style={{ color: "#6b7280", marginTop: "4px", fontSize: "14px" }}>
              Your scheduled games and tournaments
            </p>
          </div>
          <button
            style={{
              backgroundColor: "transparent",
              color: "#4b5563",
              border: "1px solid #d1d5db",
              padding: "6px 12px",
              borderRadius: "6px",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              alignSelf: "flex-start",
            }}
          >
            <Icon
              name="Calendar"
              style={{ width: "16px", height: "16px", marginRight: "8px" }}
            />
            Calendar
          </button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {matches.map((match) => (
            <div
              key={match.id}
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                cursor: "pointer",
                minHeight: "auto",
                display: "flex",
                flexDirection: "column",
                transition: "box-shadow 0.2s",
                boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                "@media (min-width: 640px)": {
                  flexDirection: "row",
                  minHeight: "152px",
                },
              }}
            >
              {/* Image container - full width on mobile, fixed width on larger screens */}
              <div
                style={{
                  width: "100%",
                  height: "120px",
                  "@media (min-width: 640px)": {
                    width: "128px",
                    height: "auto",
                  },
                  flexShrink: "0",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <img
                  src={match.image}
                  alt={match.sport}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center center",
                  }}
                />
              </div>

              {/* Match details */}
              <div
                style={{
                  flex: "1",
                  padding: "12px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                  }}
                >
                  <h3
                    style={{
                      fontWeight: "600",
                      fontSize: "16px",
                      "@media (min-width: 640px)": {
                        fontSize: "18px",
                      },
                      color: "#111827",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {match.title}
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "13px",
                      color: "#6b7280",
                    }}
                  >
                    <Icon
                      name="MapPin"
                      style={{
                        width: "14px",
                        height: "14px",
                        marginRight: "4px",
                        flexShrink: "0",
                      }}
                    />
                    <span
                      style={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {match.location}
                    </span>
                  </div>
                </div>

                <div style={{ marginTop: "12px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "13px",
                      color: "#6b7280",
                      marginBottom: "8px",
                    }}
                  >
                    <Icon
                      name="Clock"
                      style={{
                        width: "14px",
                        height: "14px",
                        marginRight: "4px",
                      }}
                    />
                    <span>{match.dateTime}</span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        padding: "4px 8px",
                        borderRadius: "9999px",
                        fontSize: "12px",
                        fontWeight: "500",
                        backgroundColor:
                          match.status === "Confirmed" ? "#dcfce7" : "#fef3c7",
                        color:
                          match.status === "Confirmed" ? "#166534" : "#92400e",
                      }}
                    >
                      {match.status === "Confirmed" ? (
                        <Icon
                          name="CheckCircle2"
                          style={{
                            width: "12px",
                            height: "12px",
                            marginRight: "4px",
                          }}
                        />
                      ) : (
                        <Icon
                          name="Clock"
                          style={{
                            width: "12px",
                            height: "12px",
                            marginRight: "4px",
                          }}
                        />
                      )}
                      {match.status}
                    </span>
                    <button
                      style={{
                        backgroundColor: "transparent",
                        border: "none",
                        fontSize: "14px",
                        color: "#4b5563",
                        cursor: "pointer",
                        marginRight: "-8px",
                      }}
                    >
                      {/* Action button content if needed */}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Create Match Modal */}
      {showCreateMatch && (
        <CreateMatchModal
          sport={selectedSport}
          onClose={() => setShowCreateMatch(false)}
        />
      )}
    </div>
  );
};

export default HomeScreen;
