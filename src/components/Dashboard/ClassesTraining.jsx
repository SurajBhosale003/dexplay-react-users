import { useState } from 'react'
import Header from '../common/Header'
import Navbar from '../common/Navbar'
import { Clock, MapPin, Star, Users, ChevronDown, ChevronUp, Search, X, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react'

const ClassesTraining = () => {
  const [expandedClass, setExpandedClass] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [showEnrollmentModal, setShowEnrollmentModal] = useState(false)
  const [selectedClass, setSelectedClass] = useState(null)
  const [selectedBatch, setSelectedBatch] = useState(null)
  const [showSuccess, setShowSuccess] = useState(false)

  const categories = ['All', 'Football', 'Basketball', 'Tennis', 'Cricket']

  const classes = [
    {
      id: 1,
      title: 'Professional Football Training',
      instructor: 'Coach Martinez',
      instructorImage: 'https://www.shutterstock.com/image-photo/portrait-male-football-coach-stadium-260nw-2205149037.jpg',
      rating: 4.9,
      price: '₹2,500/month',
      duration: '90 minutes',
      level: 'Intermediate',
      image: 'https://cdn01.alison-static.net/courses/5931/alison_courseware_intro_5931.jpg',
      schedule: 'Mon, Wed, Fri',
      time: '6:00 PM - 7:30 PM',
      location: 'Victory Sports Complex',
      description: 'Comprehensive football training covering technical skills, tactical awareness, and physical conditioning.',
      enrolled: 18,
      maxStudents: 25,
      startDate: 'March 1, 2024',
      endDate: 'March 31, 2024',
      category: 'Football',
      batches: [
        { id: 1, time: '6:00 AM - 7:30 AM', days: 'Mon, Wed, Fri', seats: 5 },
        { id: 2, time: '4:00 PM - 5:30 PM', days: 'Tue, Thu, Sat', seats: 8 },
        { id: 3, time: '6:00 PM - 7:30 PM', days: 'Mon, Wed, Fri', seats: 2 }
      ]
    },
    {
      id: 2,
      title: 'Tennis Masterclass',
      instructor: 'Sarah Williams',
      instructorImage: 'https://cdn.thealbertclub.co.uk/core/uploads/2023/11/rachel-thomas-scaled.webp',
      rating: 4.8,
      price: '₹3,000/month',
      duration: '60 minutes',
      level: 'Advanced',
      image: 'https://img.freepik.com/premium-photo/tennis-coach-giving-sports-lesson-athlete-sporty-summer-exercise-activity-hobby-outdoor-court-female-instructor-teaching-training-woman-fitness-leisure-wellness-lifestyle_590464-79466.jpg',
      schedule: 'Tue, Thu, Sat',
      time: '5:00 PM - 6:00 PM',
      location: 'Elite Tennis Club',
      description: 'Advanced tennis techniques for competitive players looking to excel in tournaments.',
      enrolled: 12,
      maxStudents: 16,
      startDate: 'March 5, 2024',
      endDate: 'April 5, 2024',
      category: 'Tennis',
      batches: [
        { id: 1, time: '7:00 AM - 8:00 AM', days: 'Tue, Thu, Sat', seats: 3 },
        { id: 2, time: '5:00 PM - 6:00 PM', days: 'Mon, Wed, Fri', seats: 1 }
      ]
    },
    {
      id: 3,
      title: 'Basketball Fundamentals',
      instructor: 'Coach Johnson',
      instructorImage: 'https://resources.finalsite.net/images/t_image_size_4/v1650993593/servitehs/lqyqibmle049dlzhsjmj/AnthonyDavisBasketball.jpg',
      rating: 4.7,
      price: '₹2,000/month',
      duration: '75 minutes',
      level: 'Beginner',
      image: 'https://t3.ftcdn.net/jpg/01/73/89/66/360_F_173896685_3Q3Vv2aCRkm9irKWD1g5BqASx6seST8L.jpg',
      schedule: 'Sat, Sun',
      time: '4:00 PM - 5:15 PM',
      location: 'Downtown Courts',
      description: 'Learn basketball basics including shooting, dribbling, defense, and team strategies.',
      enrolled: 22,
      maxStudents: 30,
      startDate: 'March 2, 2024',
      endDate: 'April 2, 2024',
      category: 'Basketball',
      batches: [
        { id: 1, time: '8:00 AM - 9:15 AM', days: 'Sat, Sun', seats: 5 },
        { id: 2, time: '4:00 PM - 5:15 PM', days: 'Sat, Sun', seats: 3 }
      ]
    }
  ]

  const filteredClasses = classes.filter(classItem => {
    const matchesSearch = classItem.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         classItem.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         classItem.category.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || classItem.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const toggleExpanded = (classId) => {
    setExpandedClass(expandedClass === classId ? null : classId)
  }

  const handleEnrollClick = (classItem) => {
    setSelectedClass(classItem)
    setShowEnrollmentModal(true)
  }

  const generateJoinCode = (classId, batchId) => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
    const baseCode = `${classId.toString(36)}-${batchId.toString(36)}`.toUpperCase()
    const randomPart = Array.from({length: 4}, () => 
      chars.charAt(Math.floor(Math.random() * chars.length)))
      .join('')
    return `${baseCode}-${randomPart}`
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      {/* Header */}
      <div style={{ 
        padding: '24px', 
        backgroundColor: 'white', 
        borderBottom: '1px solid #f3f4f6',
        position: 'sticky',
        top: 0,
        zIndex: 10,
        boxShadow: '0 1px 2px 0 rgba(0,0,0,0.05)'
      }}>
        <div style={{ marginBottom: '24px' }}>
          <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#111827', marginBottom: '8px' }}>
            Classes & Training
          </h1>
          <p style={{ color: '#4b5563' }}>Professional coaching and skill development</p>
        </div>

        {/* Search */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
          <div style={{ flex: 1, position: 'relative' }}>
            <Search style={{ 
              position: 'absolute', 
              left: '12px', 
              top: '50%', 
              transform: 'translateY(-50%)', 
              width: '20px', 
              height: '20px', 
              color: '#9ca3af' 
            }} />
            <input
              placeholder="Search classes, instructors, sports..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                paddingLeft: '40px',
                height: '48px',
                border: '1px solid #e5e7eb',
                borderRadius: '0.375rem',
                width: '100%',
                outline: 'none',
                fontSize: '0.875rem'
              }}
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#9ca3af'
                }}
              >
                <X style={{ width: '20px', height: '20px' }} />
              </button>
            )}
          </div>
          <button 
            style={{
              height: '48px',
              width: '48px',
              border: '1px solid #e5e7eb',
              borderRadius: '0.375rem',
              backgroundColor: 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

        {/* Category Filter */}
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '8px' }}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                flexShrink: 0,
                borderRadius: '0.75rem',
                padding: '8px 16px',
                border: selectedCategory === category ? 'none' : '1px solid #e5e7eb',
                backgroundColor: selectedCategory === category ? '#d7ee34' : 'white',
                color: selectedCategory === category ? '#111827' : '#374151',
                fontWeight: '500',
                fontSize: '0.875rem'
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Classes List */}
      <div style={{ padding: '24px', display: 'grid', gap: '24px' }}>
        {filteredClasses.length > 0 ? (
          filteredClasses.map((classItem) => (
            <div 
              key={classItem.id}
              style={{
                backgroundColor: 'white',
                borderRadius: '0.5rem',
                overflow: 'hidden',
                border: '1px solid #e5e7eb',
                boxShadow: '0 1px 3px 0 rgba(0,0,0,0.1)'
              }}
            >
              <div style={{ position: 'relative', height: '192px' }}>
                <img
                  src={classItem.image}
                  alt={classItem.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)'
                }} />
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px'
                }}>
                  <span style={{
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    color: '#111827',
                    padding: '4px 8px',
                    borderRadius: '0.375rem',
                    fontSize: '0.75rem',
                    fontWeight: '500'
                  }}>
                    {classItem.category}
                  </span>
                </div>
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px'
                }}>
                  <span style={{
                    backgroundColor: 'rgba(215,238,52,0.9)',
                    color: '#111827',
                    padding: '4px 8px',
                    borderRadius: '0.375rem',
                    fontSize: '0.75rem',
                    fontWeight: '500'
                  }}>
                    {classItem.level}
                  </span>
                </div>
                <div style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  right: '16px'
                }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', marginBottom: '8px' }}>
                    {classItem.title}
                  </h3>
                </div>
              </div>

              <div style={{ padding: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '9999px',
                    overflow: 'hidden',
                    border: '2px solid #d7ee34'
                  }}>
                    <img
                      src={classItem.instructorImage}
                      alt={classItem.instructor}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div>
                        <p style={{ fontWeight: '600', color: '#111827' }}>{classItem.instructor}</p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <Star style={{ width: '16px', height: '16px', color: '#f59e0b', fill: '#f59e0b' }} />
                          <span style={{ fontSize: '0.875rem', color: '#4b5563' }}>{classItem.rating}</span>
                        </div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#111827' }}>
                          {classItem.price}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '24px', 
                  fontSize: '0.875rem', 
                  color: '#4b5563',
                  marginBottom: '16px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock style={{ width: '16px', height: '16px' }} />
                    <span>{classItem.duration}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span>{classItem.schedule}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Users style={{ width: '16px', height: '16px' }} />
                    <span>
                      {classItem.enrolled}/{classItem.maxStudents}
                    </span>
                  </div>
                </div>

                {/* More Info + Enroll Section */}
                <div style={{ 
                  marginTop: '16px',
                  marginLeft: '-16px',
                  marginRight: '-16px',
                  padding: '12px 16px',
                  backgroundColor: '#d7ee34',
                  borderRadius: '0.375rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <button
                    onClick={() => toggleExpanded(classItem.id)}
                    style={{
                      backgroundColor: 'transparent',
                      border: 'none',
                      color: '#111827',
                      fontWeight: '500',
                      fontSize: '0.875rem',
                      display: 'flex',
                      alignItems: 'center',
                      cursor: 'pointer'
                    }}
                  >
                    {expandedClass === classItem.id ? (
                      <>
                        Less info <ChevronUp style={{ width: '16px', height: '16px', marginLeft: '4px' }} />
                      </>
                    ) : (
                      <>
                        More info <ChevronDown style={{ width: '16px', height: '16px', marginLeft: '4px' }} />
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => handleEnrollClick(classItem)}
                    style={{
                      backgroundColor: '#111827',
                      color: 'white',
                      padding: '8px 24px',
                      fontSize: '0.875rem',
                      borderRadius: '0.5rem',
                      fontWeight: '500',
                      cursor: 'pointer',
                      border: 'none'
                    }}
                  >
                    {classItem.enrolled >= classItem.maxStudents ? 'Full' : 'Enroll Now'}
                  </button>
                </div>

                {/* Expanded Details */}
                {expandedClass === classItem.id && (
                  <div style={{ 
                    borderTop: '1px solid #f3f4f6',
                    paddingTop: '16px',
                    marginTop: '16px'
                  }}>
                    <div style={{ display: 'grid', gap: '16px' }}>
                      <div>
                        <h4 style={{ fontWeight: '600', color: '#111827', marginBottom: '8px' }}>About This Class</h4>
                        <p style={{ color: '#4b5563', fontSize: '0.875rem', lineHeight: '1.5' }}>
                          {classItem.description}
                        </p>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                        <div>
                          <h4 style={{ fontWeight: '600', color: '#111827', marginBottom: '8px' }}>Schedule Details</h4>
                          <div style={{ display: 'grid', gap: '8px', fontSize: '0.875rem', color: '#4b5563' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                              </svg>
                              <span>
                                {classItem.startDate} - {classItem.endDate}
                              </span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <Clock style={{ width: '16px', height: '16px' }} />
                              <span>{classItem.time}</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <MapPin style={{ width: '16px', height: '16px' }} />
                              <span>{classItem.location}</span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 style={{ fontWeight: '600', color: '#111827', marginBottom: '8px' }}>Enrollment</h4>
                          <div style={{ display: 'grid', gap: '8px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
                              <span style={{ color: '#4b5563' }}>Students</span>
                              <span style={{ color: '#111827', fontWeight: '500' }}>
                                {classItem.enrolled}/{classItem.maxStudents}
                              </span>
                            </div>
                            <div style={{ width: '100%', backgroundColor: '#e5e7eb', borderRadius: '9999px', height: '8px' }}>
                              <div
                                style={{ 
                                  backgroundColor: '#d7ee34',
                                  height: '100%',
                                  borderRadius: '9999px',
                                  width: `${(classItem.enrolled / classItem.maxStudents) * 100}%`
                                }}
                              />
                            </div>
                            <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>
                              {classItem.maxStudents - classItem.enrolled} spots remaining
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div style={{ textAlign: 'center', padding: '48px 0' }}>
            <div style={{ color: '#9ca3af', marginBottom: '16px' }}>
              <Search style={{ width: '48px', height: '48px', margin: '0 auto' }} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '500', color: '#111827', marginBottom: '8px' }}>
              No classes found
            </h3>
            <p style={{ color: '#6b7280' }}>Try adjusting your search or filter criteria</p>
            <button 
              style={{
                marginTop: '16px',
                border: '1px solid #d7ee34',
                color: '#d7ee34',
                backgroundColor: 'transparent',
                padding: '8px 16px',
                borderRadius: '0.375rem',
                fontWeight: '500',
                cursor: 'pointer'
              }}
              onClick={() => {
                setSearchQuery('')
                setSelectedCategory('All')
              }}
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* Enrollment Modal */}
      {showEnrollmentModal && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 80,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          padding: 0
        }}>
          <div style={{
            backgroundColor: 'white',
            borderTopLeftRadius: '0.75rem',
            borderTopRightRadius: '0.75rem',
            width: '100%',
            maxWidth: '768px',
            height: '90vh',
            overflowY: 'auto',
            transform: 'translateY(100%)',
            animation: 'slideUp 0.5s forwards'
          }}>
            <style>{`
              @keyframes slideUp {
                from { transform: translateY(100%); }
                to { transform: translateY(0); }
              }
            `}</style>
            
            <div style={{
              position: 'sticky',
              top: 0,
              backgroundColor: 'white',
              zIndex: 10,
              padding: '24px',
              borderBottom: '1px solid #f3f4f6'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827' }}>
                    Enroll in {selectedClass?.title}
                  </h2>
                  <p style={{ color: '#6b7280' }}>Select your preferred batch and schedule</p>
                </div>
                <button 
                  onClick={() => setShowEnrollmentModal(false)}
                  style={{ color: '#9ca3af' }}
                >
                  <X style={{ width: '24px', height: '24px' }} />
                </button>
              </div>
            </div>

            <div style={{ padding: '24px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }}>
                <div>
                  <h3 style={{ fontWeight: '600', color: '#111827', marginBottom: '16px' }}>Available Batches</h3>
                  <div style={{ display: 'grid', gap: '12px' }}>
                    {selectedClass?.batches.map((batch) => (
                      <div 
                        key={batch.id}
                        onClick={() => setSelectedBatch(batch)}
                        style={{
                          padding: '16px',
                          border: '1px solid',
                          borderRadius: '0.5rem',
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                          borderColor: selectedBatch?.id === batch.id ? '#d7ee34' : '#e5e7eb',
                          backgroundColor: selectedBatch?.id === batch.id ? 'rgba(215,238,52,0.1)' : 'white',
                          boxShadow: selectedBatch?.id === batch.id ? '0 4px 6px -1px rgba(0,0,0,0.1)' : 'none'
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <div>
                            <p style={{ fontWeight: '500', color: '#111827' }}>{batch.time}</p>
                            <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>{batch.days}</p>
                          </div>
                          <div style={{ fontSize: '0.875rem' }}>
                            <span style={{
                              fontWeight: '500',
                              color: batch.seats < 3 ? '#ef4444' : '#111827'
                            }}>
                              {batch.seats}
                            </span> 
                            <span style={{ color: '#6b7280' }}> seats left</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid #e5e7eb', display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                <button 
                  style={{
                    border: '1px solid #d1d5db',
                    backgroundColor: 'white',
                    color: '#374151',
                    padding: '8px 16px',
                    borderRadius: '0.375rem',
                    fontWeight: '500',
                    cursor: 'pointer'
                  }}
                  onClick={() => setShowEnrollmentModal(false)}
                >
                  Cancel
                </button>
                <button 
                  style={{
                    backgroundColor: '#d7ee34',
                    color: '#111827',
                    padding: '8px 16px',
                    borderRadius: '0.375rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    border: 'none',
                    boxShadow: '0 1px 2px 0 rgba(0,0,0,0.05)',
                    opacity: !selectedBatch ? 0.5 : 1,
                    pointerEvents: !selectedBatch ? 'none' : 'auto'
                  }}
                  disabled={!selectedBatch}
                  onClick={() => {
                    setShowSuccess(true)
                    setTimeout(() => {
                      setShowSuccess(false)
                      setShowEnrollmentModal(false)
                      setSelectedBatch(null)
                    }, 2000)
                  }}
                >
                  Confirm Enrollment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Success Popup */}
      {showSuccess && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.7)',
          zIndex: 90,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '32px',
            borderRadius: '1rem',
            maxWidth: '400px',
            width: '100%',
            margin: '0 16px',
            textAlign: 'center',
            transform: 'scale(0.9)',
            animation: 'scaleUp 0.3s forwards'
          }}>
            <style>{`
              @keyframes scaleUp {
                from { transform: scale(0.9); }
                to { transform: scale(1); }
              }
            `}</style>
            
            <div style={{
              animation: 'bounce 0.6s',
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '16px'
            }}>
              <CheckCircle2 style={{ width: '64px', height: '64px', color: '#d7ee34' }} />
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '8px' }}>
              Enrollment Successful!
            </h3>
            <p style={{ color: '#6b7280', marginBottom: '24px' }}>
              You're now enrolled in {selectedClass?.title}<br />
              Batch: {selectedBatch?.time} ({selectedBatch?.days})
            </p>
            <div style={{ backgroundColor: '#f3f4f6', padding: '16px', borderRadius: '0.5rem', marginBottom: '24px' }}>
              <p style={{ fontSize: '0.875rem', fontWeight: '500', color: '#374151' }}>Your Join Code</p>
              <p style={{ fontSize: '1.25rem', fontWeight: 'bold', fontFamily: 'monospace', marginTop: '4px' }}>
                {generateJoinCode(selectedClass?.id, selectedBatch?.id)}
              </p>
            </div>
            <button 
              style={{
                width: '100%',
                backgroundColor: '#d7ee34',
                color: '#111827',
                padding: '12px',
                borderRadius: '0.375rem',
                fontWeight: '500',
                cursor: 'pointer',
                border: 'none'
              }}
              onClick={() => setShowSuccess(false)}
            >
              Got it!
            </button>
          </div>
        </div>
      )}

      <Navbar />
    </div>
  )
}

export default ClassesTraining