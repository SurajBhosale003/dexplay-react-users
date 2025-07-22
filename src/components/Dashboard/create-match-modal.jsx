import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, CheckCircle2, PartyPopper } from "lucide-react";
import { format, addDays, isToday, isTomorrow, isWeekend, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay } from "date-fns";

const difficulties = [
  { id: "beginner", name: "Beginner", description: "New to the sport" },
  { id: "intermediate", name: "Intermediate", description: "Some experience" },
  { id: "advanced", name: "Advanced", description: "Experienced player" },
  { id: "professional", name: "Professional", description: "Competitive level" },
];

const timeSlots = Array.from({ length: 14 }, (_, i) => i + 8); // 8AM to 9PM

const CreateMatchModal = ({ sport, onClose }) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState("intermediate");
  const [selectedTimes, setSelectedTimes] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showSuccess, setShowSuccess] = useState(false);

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setSelectedTimes([]);
  };

  const handleTimeSelect = (hour) => {
    setSelectedTimes(prev => 
      prev.includes(hour) 
        ? prev.filter(h => h !== hour)
        : [...prev, hour]
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

  const formatHour = (hour) => {
    return hour > 12 ? `${hour - 12} PM` : `${hour} AM`;
  };

  const navigateMonth = (direction) => {
    setCurrentMonth(direction === 'prev' ? subMonths(currentMonth, 1) : addMonths(currentMonth, 1));
  };

  return (
    <AnimatePresence>
      {/* Success Animation */}
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white p-8 rounded-2xl max-w-sm text-center shadow-xl"
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
              className="flex justify-center mb-4"
            >
              <CheckCircle2 className="w-16 h-16 text-green-500" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-2"
            >
              <h3 className="text-2xl font-bold text-gray-900">Booking Confirmed!</h3>
              <p className="text-gray-600 mt-2">Your match has been successfully created</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex justify-center mt-6"
            >
              <PartyPopper className="w-8 h-8 text-yellow-400 animate-bounce" />
            </motion.div>
          </motion.div>
        </motion.div>
      )}

      {/* Main Modal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-[99] flex items-end sm:items-center justify-center p-0"
        onClick={onClose}
      >
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-md bg-white rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100 sticky top-0 bg-white z-10">
            <h2 className="text-2xl font-bold text-gray-900">Create Match</h2>
            <button 
              onClick={onClose} 
              className="rounded-full hover:bg-gray-100 p-2"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
            {/* Sport Header */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="relative h-48 rounded-2xl overflow-hidden cursor-pointer border-2 border-green-500 shadow-[0_0_0_4px_rgba(34,197,94,0.2)]"
            >
              <img
                src={sport.image || "/placeholder.svg"}
                alt={sport.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4">
                <h3 className="text-white font-bold text-xl">{sport.name}</h3>
                <p className="text-white text-sm">Create your match</p>
              </div>
            </motion.div>

            {/* Difficulty Selection */}
            <div>
              <label className="text-xs font-semibold text-gray-500 mb-2 block uppercase tracking-wider">
                Skill Level
              </label>
              <div className="grid grid-cols-2 gap-3">
                {difficulties.map((diff) => (
                  <button
                    key={diff.id}
                    onClick={() => setSelectedDifficulty(diff.id)}
                    className={`h-auto py-3 flex-col items-start text-left rounded-xl border text-sm ${
                      selectedDifficulty === diff.id
                        ? "bg-green-500 text-white border-green-500 shadow-sm hover:bg-green-600 hover:border-green-600"
                        : "border-gray-200 hover:border-green-500 bg-white"
                    }`}
                  >
                    <div className="font-semibold text-sm">{diff.name}</div>
                    <div className="text-xs opacity-80 mt-1">{diff.description}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Full Calendar */}
            <div>
              <label className="text-xs font-semibold text-gray-500 mb-2 block uppercase tracking-wider">
                Select Date
              </label>
              <div className="bg-white rounded-xl border border-gray-200 p-4">
                <div className="flex items-center justify-between mb-4">
                  <button 
                    onClick={() => navigateMonth('prev')}
                    className="rounded-full hover:bg-gray-100 p-2"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                  </button>
                  <h3 className="font-semibold text-gray-900">
                    {format(currentMonth, "MMMM yyyy")}
                  </h3>
                  <button 
                    onClick={() => navigateMonth('next')}
                    className="rounded-full hover:bg-gray-100 p-2"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                <div className="grid grid-cols-7 gap-1 mb-2">
                  {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(day => (
                    <div key={day} className="text-center text-xs font-medium text-gray-500 py-1">
                      {day}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-1">
                  {monthDays.map((day, i) => (
                    <button
                      key={i}
                      onClick={() => handleDateSelect(day)}
                      className={`h-10 rounded-lg flex items-center justify-center text-sm ${
                        !isSameMonth(day, currentMonth) ? "text-gray-300" :
                        isSameDay(day, selectedDate) ? 
                          "bg-green-500 text-white font-bold" :
                          "hover:bg-gray-100"
                      }`}
                    >
                      {format(day, "d")}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Time Selection */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Available Slots
                </label>
                <div className="text-xs text-gray-500">
                  {selectedDate && format(selectedDate, "MMMM d, yyyy")}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {timeSlots.map((hour) => {
                  const displayTime = hour > 12 
                    ? `${hour - 12} PM` 
                    : hour === 12 
                      ? '12 PM' 
                      : `${hour} AM`;

                  return (
                    <motion.button
                      key={`time-slot-${hour}`}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleTimeSelect(hour)}
                      className={`h-12 rounded-lg border flex items-center justify-center text-sm ${
                        selectedTimes.includes(hour)
                          ? "bg-green-500 text-white border-green-500 font-medium"
                          : "border-gray-200 hover:border-green-500 bg-white"
                      }`}
                    >
                      {displayTime}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="pt-2">
              <div className="text-xs text-gray-500">
                <h4 className="font-semibold text-gray-700 mb-2">Terms & Conditions</h4>
                <ul className="space-y-1">
                  <li>• Minimum 2 players required to create a match</li>
                  <li>• Cancellations must be made 24 hours in advance</li>
                  <li>• Late arrivals may result in reduced playing time</li>
                  <li>• Proper sports attire required</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="p-6 border-t border-gray-100 flex gap-3 sticky bottom-0 bg-white">
            <button
              onClick={onClose}
              className="flex-1 h-12 border border-gray-200 hover:border-green-500 bg-white rounded-xl text-gray-700 font-medium"
            >
              Cancel
            </button>
            <button
              disabled={!selectedDate || selectedTimes.length === 0}
              onClick={handleBooking}
              className={`flex-1 h-12 rounded-xl text-white font-medium ${
                selectedTimes.length > 0 
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              {selectedTimes.length > 0 ? (
                <span>Book {selectedTimes.length} Slot{selectedTimes.length > 1 ? 's' : ''}</span>
              ) : (
                <span>Create Match</span>
              )}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CreateMatchModal;