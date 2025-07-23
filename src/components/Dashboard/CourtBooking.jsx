import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Star, Clock, Filter, Search, ChevronLeft, ChevronRight, CheckCircle2, PartyPopper, X } from "lucide-react";

const CourtBooking = () => {
  const [selectedCourt, setSelectedCourt] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTimeSlots, setSelectedTimeSlots] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);

  const courts = [
    {
      id: 1,
      name: "Shuttle Masters Arena",
      distance: "12 km",
      rating: 4.6,
      reviews: 92,
      type: "Indoor",
      price: "₹500/hr",
      availability: "Available",
      sports: ["Badminton", "Squash"],
      amenities: ["Air Conditioned", "Shower Facilities", "Racket Rental", "Water Dispenser"],
      image: "https://res.cloudinary.com/de6u5kbiw/image/upload/v1752131814/dexciss%20site/dexplay/optimal/400/badminton_x400/pexels-shvets-production-8007094_x400_fadifa.jpg"
    },
    {
      id: 2,
      name: "Victory Sports Complex",
      distance: "8 km",
      rating: 4.8,
      reviews: 124,
      type: "Outdoor",
      price: "₹700/hr",
      availability: "Limited",
      sports: ["Football", "Cricket"],
      amenities: ["Changing Rooms", "Cafeteria", "Parking", "First Aid"],
      image: "https://res.cloudinary.com/de6u5kbiw/image/upload/v1752131769/dexciss%20site/dexplay/optimal/400/football_x400/pexels-lucasallmann-1378425_x400_kltjeh.jpg"
    },
    {
      id: 3,
      name: "Grand Slam Courts",
      distance: "15 km",
      rating: 4.5,
      reviews: 87,
      type: "Outdoor",
      price: "₹900/hr",
      availability: "Available",
      sports: ["Tennis", "Basketball"],
      amenities: ["Lighting", "Pro Shop", "Coaching", "Seating"],
      image: "https://res.cloudinary.com/de6u5kbiw/image/upload/v1752131755/dexciss%20site/dexplay/optimal/400/tennis_x400/pexels-athena-2961964_x400_imcjdu.jpg"
    }
  ];

  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 0; hour < 24; hour++) {
      const startHour = hour.toString().padStart(2, '0');
      const endHour = (hour + 1).toString().padStart(2, '0');
      slots.push({
        time: `${startHour}:00 - ${endHour}:00`,
        price: hour >= 18 ? "₹800" : hour >= 14 ? "₹700" : hour >= 11 ? "₹600" : "₹500",
        available: Math.random() > 0.3,
        booked: Math.floor(Math.random() * 8),
        total: 8
      });
    }
    return slots;
  };

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const monthStart = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
  const monthEnd = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);
  const monthDays = [];
  for (let d = new Date(monthStart); d <= monthEnd; d.setDate(d.getDate() + 1)) {
    monthDays.push(new Date(d));
  }

  const handleCourtSelect = (court) => {
    setSelectedCourt(court);
    setShowBookingModal(true);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setSelectedTimeSlots([]);
  };

  const navigateMonth = (direction) => {
    setCurrentMonth(direction === 'prev' 
      ? new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
      : new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const handleBookingConfirmation = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setShowBookingModal(false);
      setSelectedTimeSlots([]);
    }, 2500);
  };

  const toggleTimeSlot = (slot) => {
    if (!slot.available) return;

    setSelectedTimeSlots(prev => {
      const isSelected = prev.some(s => s.time === slot.time);
      if (isSelected) {
        return prev.filter(s => s.time !== slot.time);
      } else {
        return [...prev, slot];
      }
    });
  };

  const filteredCourts = courts.filter(court =>
    court.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    court.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
    court.sports.some(sport => sport.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const timeSlots = generateTimeSlots();

  const formatDate = (date) => {
    return `${weekdays[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  const calculateTotalPrice = () => {
    return selectedTimeSlots.reduce((total, slot) => {
      const price = parseInt(slot.price.replace(/[^0-9]/g, ''));
      return total + price;
    }, 0);
  };

  const isSameMonth = (date1, date2) => {
    return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth();
  };

  const isSameDay = (date1, date2) => {
    return date1.getFullYear() === date2.getFullYear() && 
           date1.getMonth() === date2.getMonth() && 
           date1.getDate() === date2.getDate();
  };

  return (
    <div style={{ backgroundColor: 'white', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ padding: '24px', borderBottom: '1px solid #f3f4f6' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
          <div>
            <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827' }}>Book Courts</h1>
            <p style={{ color: '#4b5563' }}>Find and reserve sports venues</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: '#f3f4f6', borderRadius: '12px', padding: '8px 16px' }}>
            <span style={{ fontSize: '14px', fontWeight: '600', color: '#374151' }}>Balance:</span>
            <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#111827' }}>₹2,500</span>
          </div>
        </div>

        {/* Search and Filter */}
        <div style={{ display: 'flex', gap: '12px' }}>
          <div style={{ flex: 1, position: 'relative' }}>
            <Search style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', width: '20px', height: '20px', color: '#9ca3af' }} />
            <input
              placeholder="Search courts, sports, locations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                paddingLeft: '40px',
                height: '48px',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                width: '100%',
                outline: 'none',
                fontSize: '16px'
              }}
            />
          </div>
          <button style={{
            height: '48px',
            width: '48px',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            backgroundColor: 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Filter style={{ width: '20px', height: '20px', color: '#4b5563' }} />
          </button>
        </div>
      </div>

      {/* Courts List */}
      <div style={{ padding: '24px', display: 'grid', gap: '24px' }}>
        {filteredCourts.length > 0 ? (
          filteredCourts.map((court, index) => (
            <motion.div
              key={court.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div
                style={{
                  overflow: 'hidden',
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                onClick={() => handleCourtSelect(court)}
              >
                <div style={{ position: 'relative', height: '192px', backgroundColor: '#e5e7eb' }}>
                  <img src={court.image} alt={court.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', top: '16px', left: '16px' }}>
                    <span style={{
                      backgroundColor: 'rgba(215, 238, 52, 0.9)',
                      color: 'black',
                      padding: '4px 8px',
                      borderRadius: '6px',
                      fontSize: '12px',
                      fontWeight: '500'
                    }}>{court.availability}</span>
                  </div>
                  <div style={{ position: 'absolute', top: '16px', right: '16px' }}>
                    <span style={{
                      backgroundColor: 'rgba(0, 0, 0, 0.8)',
                      color: 'white',
                      padding: '4px 8px',
                      borderRadius: '6px',
                      fontSize: '12px',
                      fontWeight: '500'
                    }}>{court.type}</span>
                  </div>
                </div>

                <div style={{ padding: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <div>
                      <h3 style={{ fontWeight: 'bold', color: '#111827', fontSize: '18px', marginBottom: '4px' }}>{court.name}</h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '14px', color: '#4b5563' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <MapPin style={{ width: '16px', height: '16px' }} />
                          <span>{court.distance}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <Star style={{ width: '16px', height: '16px', color: '#f59e0b', fill: '#f59e0b' }} />
                          <span>{court.rating}</span>
                          <span>({court.reviews})</span>
                        </div>
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#111827' }}>{court.price}</div>
                    </div>
                  </div>

                  {/* Sports Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
                    {court.sports.map((sport) => (
                      <span key={sport} style={{
                        border: '1px solid #D7EE34',
                        color: '#D7EE34',
                        fontSize: '12px',
                        padding: '2px 8px',
                        borderRadius: '6px'
                      }}>
                        {sport}
                      </span>
                    ))}
                  </div>

                  {/* Amenities */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {court.amenities.slice(0, 3).map((amenity) => (
                      <span key={amenity} style={{
                        fontSize: '12px',
                        color: '#6b7280',
                        backgroundColor: '#f3f4f6',
                        padding: '4px 8px',
                        borderRadius: '8px'
                      }}>
                        {amenity}
                      </span>
                    ))}
                    {court.amenities.length > 3 && (
                      <span style={{ fontSize: '12px', color: '#6b7280' }}>
                        +{court.amenities.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <p style={{ color: '#6b7280' }}>No courts found matching your search</p>
          </div>
        )}
      </div>

      {/* Booking Modal */}
      <AnimatePresence>
        {showBookingModal && selectedCourt && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 60,
              display: 'flex',
              alignItems: 'flex-end'
            }}
            onClick={() => setShowBookingModal(false)}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: '100%',
                backgroundColor: 'white',
                borderTopLeftRadius: '24px',
                borderTopRightRadius: '24px',
                maxHeight: '90vh',
                overflowY: 'auto'
              }}
            >
              <div style={{ padding: '24px', borderBottom: '1px solid #f3f4f6' }}>
                <div style={{ width: '48px', height: '4px', backgroundColor: '#d1d5db', borderRadius: '9999px', margin: '0 auto 16px auto' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#111827' }}>Book {selectedCourt.name}</h3>
                  <button 
                    style={{ 
                      backgroundColor: 'transparent',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#4b5563',
                      cursor: 'pointer'
                    }}
                    onClick={() => setShowBookingModal(false)}
                  >
                    <X style={{ width: '20px', height: '20px' }} />
                  </button>
                </div>
                
                {/* Calendar Navigation */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <button 
                    style={{ 
                      backgroundColor: 'transparent',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#4b5563',
                      cursor: 'pointer'
                    }}
                    onClick={() => navigateMonth('prev')}
                  >
                    <ChevronLeft style={{ width: '20px', height: '20px' }} />
                  </button>
                  <h4 style={{ fontWeight: '600', color: '#111827' }}>
                    {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                  </h4>
                  <button 
                    style={{ 
                      backgroundColor: 'transparent',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#4b5563',
                      cursor: 'pointer'
                    }}
                    onClick={() => navigateMonth('next')}
                  >
                    <ChevronRight style={{ width: '20px', height: '20px' }} />
                  </button>
                </div>
                
                {/* Calendar Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px', marginBottom: '8px' }}>
                  {weekdays.map(day => (
                    <div key={day} style={{ textAlign: 'center', fontSize: '12px', fontWeight: '500', color: '#6b7280', padding: '4px 0' }}>
                      {day}
                    </div>
                  ))}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px' }}>
                  {monthDays.map((day, i) => (
                    <button
                      key={i}
                      onClick={() => handleDateSelect(day)}
                      style={{
                        height: '40px',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '14px',
                        border: 'none',
                        cursor: 'pointer',
                        backgroundColor: isSameDay(day, selectedDate) ? '#D7EE34' : 'transparent',
                        color: isSameDay(day, selectedDate) ? 'black' : !isSameMonth(day, currentMonth) ? '#d1d5db' : '#111827',
                        fontWeight: isSameDay(day, selectedDate) ? 'bold' : 'normal'
                      }}
                    >
                      {day.getDate()}
                    </button>
                  ))}
                </div>
                
                <p style={{ color: '#4b5563', marginTop: '16px' }}>{formatDate(selectedDate)}</p>
              </div>

              {/* Time Slots */}
              <div style={{ padding: '24px', display: 'grid', gap: '16px' }}>
                <h4 style={{ fontWeight: '600', color: '#111827', marginBottom: '8px' }}>Available Time Slots</h4>
                
                {timeSlots.map((slot, index) => (
                  <motion.div
                    key={index}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '16px',
                      borderRadius: '16px',
                      border: `2px solid ${
                        slot.available
                          ? selectedTimeSlots.some(s => s.time === slot.time)
                            ? '#D7EE34'
                            : '#e5e7eb'
                          : '#f3f4f6'
                      }`,
                      backgroundColor: selectedTimeSlots.some(s => s.time === slot.time) ? 'rgba(215, 238, 52, 0.1)' : 'transparent',
                      transition: 'all 0.2s',
                      cursor: slot.available ? 'pointer' : 'not-allowed'
                    }}
                    onClick={() => toggleTimeSlot(slot)}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <Clock style={{ width: '20px', height: '20px', color: '#4b5563' }} />
                      <div>
                        <div style={{
                          fontWeight: '600',
                          color: slot.available ? '#111827' : '#9ca3af'
                        }}>{slot.time}</div>
                        <div style={{ fontSize: '14px', color: '#6b7280' }}>
                          {slot.booked}/{slot.total} booked
                        </div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div style={{
                        fontWeight: 'bold',
                        color: slot.available ? '#111827' : '#9ca3af'
                      }}>{slot.price}</div>
                      <button
                        style={{
                          padding: '6px 12px',
                          borderRadius: '6px',
                          border: 'none',
                          cursor: slot.available ? 'pointer' : 'not-allowed',
                          backgroundColor: selectedTimeSlots.some(s => s.time === slot.time) 
                            ? 'black' 
                            : slot.available 
                              ? '#D7EE34' 
                              : '#e5e7eb',
                          color: selectedTimeSlots.some(s => s.time === slot.time) 
                            ? 'white' 
                            : slot.available 
                              ? 'black' 
                              : '#9ca3af',
                          fontSize: '14px'
                        }}
                        disabled={!slot.available}
                      >
                        {slot.available ? (selectedTimeSlots.some(s => s.time === slot.time) ? "Selected" : "Select") : "Full"}
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Booking Summary */}
              {selectedTimeSlots.length > 0 && (
                <div style={{ padding: '24px', borderTop: '1px solid #f3f4f6', backgroundColor: '#f9fafb' }}>
                  <div style={{ marginBottom: '16px', display: 'grid', gap: '8px' }}>
                    {selectedTimeSlots.map((slot, index) => (
                      <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ color: '#4b5563' }}>{slot.time}:</span>
                        <span style={{ fontWeight: '500' }}>{slot.price}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', fontWeight: 'bold' }}>
                    <span style={{ color: '#111827' }}>Total:</span>
                    <span style={{ fontSize: '18px' }}>₹{calculateTotalPrice()}</span>
                  </div>
                  <button
                    onClick={handleBookingConfirmation}
                    style={{
                      width: '100%',
                      height: '48px',
                      backgroundColor: '#D7EE34',
                      color: 'black',
                      border: 'none',
                      borderRadius: '8px',
                      fontWeight: '600',
                      fontSize: '16px',
                      cursor: 'pointer'
                    }}
                  >
                    Reserve {selectedTimeSlots.length} slot{selectedTimeSlots.length > 1 ? 's' : ''} - ₹{calculateTotalPrice()}
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success Animation */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              zIndex: 60,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0 }}
              style={{
                backgroundColor: 'white',
                padding: '32px',
                borderRadius: '16px',
                maxWidth: '384px',
                textAlign: 'center',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
              }}
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 0.6,
                  ease: "backOut"
                }}
                style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}
              >
                <CheckCircle2 style={{ width: '64px', height: '64px', color: '#D7EE34' }} />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                style={{ marginBottom: '8px' }}
              >
                <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827' }}>Booking Confirmed!</h3>
                <p style={{ color: '#4b5563', marginTop: '8px' }}>Your match has been successfully created</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                style={{ display: 'flex', justifyContent: 'center', marginTop: '24px' }}
              >
                <PartyPopper style={{ width: '32px', height: '32px', color: '#f59e0b', animation: 'bounce 1s infinite' }} />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CourtBooking;