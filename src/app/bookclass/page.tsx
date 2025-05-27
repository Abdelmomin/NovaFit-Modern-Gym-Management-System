"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FiCalendar,
  FiClock,
  FiSearch,
  FiFilter,
  FiX,
  FiCheck,
} from "react-icons/fi";
import {
  GiWeightLiftingUp,
  GiRunningShoe,
  GiBoxingGlove,
  GiMuscleUp,
} from "react-icons/gi";
import { IoMdFitness } from "react-icons/io";
import { RiBasketballLine, RiMedalLine } from "react-icons/ri";
import { FaRegStar, FaStar } from "react-icons/fa";

const ClassBookingPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedDay, setSelectedDay] = useState("Mon");
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Days of the week
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // Categories
  const categories = [
    {
      id: "all",
      name: "All Classes",
      icon: <IoMdFitness className="w-5 h-5" />,
    },
    {
      id: "strength",
      name: "Strength",
      icon: <GiWeightLiftingUp className="w-5 h-5" />,
    },
    {
      id: "cardio",
      name: "Cardio",
      icon: <GiRunningShoe className="w-5 h-5" />,
    },
    { id: "hiit", name: "HIIT", icon: <GiMuscleUp className="w-5 h-5" /> },
    { id: "yoga", name: "Yoga", icon: <RiMedalLine className="w-5 h-5" /> },
    {
      id: "boxing",
      name: "Boxing",
      icon: <GiBoxingGlove className="w-5 h-5" />,
    },
  ];

  // Sample classes data
  const classes = [
    {
      id: 1,
      name: "Power Lift",
      category: "strength",
      trainer: "James Wilson",
      time: "7:00 AM - 8:00 AM",
      day: "Mon",
      duration: "60 mins",
      difficulty: "Intermediate",
      spots: 5,
      rating: 4.8,
      description:
        "Build raw strength with compound lifts and progressive overload techniques.",
      image:
        "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80",
    },
    {
      id: 2,
      name: "HIIT Burn",
      category: "hiit",
      trainer: "Sarah Chen",
      time: "9:00 AM - 9:45 AM",
      day: "Mon",
      duration: "45 mins",
      difficulty: "Advanced",
      spots: 8,
      rating: 4.9,
      description:
        "High-intensity interval training to maximize fat burn and endurance.",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 3,
      name: "Yoga Flow",
      category: "yoga",
      trainer: "Sophia Martinez",
      time: "6:00 PM - 7:00 PM",
      day: "Mon",
      duration: "60 mins",
      difficulty: "Beginner",
      spots: 12,
      rating: 4.7,
      description:
        "Relaxing yoga session focusing on flexibility and mindfulness.",
      image:
        "https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
    },
    {
      id: 4,
      name: "Boxing Skills",
      category: "boxing",
      trainer: "Mike Rodriguez",
      time: "7:30 PM - 8:30 PM",
      day: "Mon",
      duration: "60 mins",
      difficulty: "Intermediate",
      spots: 6,
      rating: 4.9,
      description:
        "Learn boxing fundamentals and improve your striking technique.",
      image:
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
  ];

  // Filter classes based on category, day, and search
  const filteredClasses = classes.filter((cls) => {
    const matchesCategory =
      activeCategory === "all" || cls.category === activeCategory;
    const matchesDay = cls.day === selectedDay;
    const matchesSearch =
      cls.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cls.trainer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesDay && matchesSearch;
  });

  // Handle booking
  const handleBookClass = (cls) => {
    setSelectedClass(cls);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#031625] text-white">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#031625]/90 backdrop-blur-md border-b border-[#EFD67E]/20">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <IoMdFitness className="w-8 h-8 bg-[#EFD67E] text-[#031625] rounded-lg mr-3 p-1" />
            <span className="text-xl font-bold text-[#EFD67E]">
              NojuSkrr Classes
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-300 hover:text-[#EFD67E] transition">
              <FiCalendar className="w-5 h-5" />
            </button>
            <div className="w-8 h-8 rounded-full overflow-hidden border border-[#EFD67E]">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                alt="User"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold mb-2">
            Book Your <span className="text-[#EFD67E]">Workout</span>
          </h1>
          <p className="text-gray-300">
            Find and reserve your next fitness class
          </p>
        </motion.div>

        {/* Search & Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search classes or trainers..."
                className="w-full pl-10 pr-4 py-2 bg-[#112136]/70 border border-[#EFD67E]/10 rounded-lg focus:outline-none focus:border-[#EFD67E]/50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className="flex items-center justify-center px-4 py-2 bg-[#112136]/70 border border-[#EFD67E]/10 rounded-lg hover:border-[#EFD67E]/30 transition">
              <FiFilter className="mr-2" /> Filters
            </button>
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center px-4 py-2 rounded-lg mr-2 whitespace-nowrap transition ${
                  activeCategory === cat.id
                    ? "bg-[#EFD67E] text-[#031625]"
                    : "bg-[#112136]/70 border border-[#EFD67E]/10 hover:border-[#EFD67E]/30"
                }`}
              >
                <span className="mr-2">{cat.icon}</span>
                {cat.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Day Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8"
        >
          <div className="flex justify-between gap-2">
            {days.map((day) => (
              <motion.button
                key={day}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedDay(day)}
                className={`flex-1 py-2 rounded-lg transition ${
                  selectedDay === day
                    ? "bg-[#EFD67E] text-[#031625] font-bold"
                    : "bg-[#112136]/70 border border-[#EFD67E]/10 hover:border-[#EFD67E]/30"
                }`}
              >
                {day}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Classes Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredClasses.length > 0 ? (
            filteredClasses.map((cls) => (
              <motion.div
                key={cls.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5 }}
                className="bg-[#112136]/70 rounded-xl border border-[#EFD67E]/10 hover:border-[#EFD67E]/30 overflow-hidden transition-all"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={cls.image}
                    alt={cls.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-[#EFD67E] text-[#031625] px-2 py-1 rounded text-sm font-bold">
                    {cls.spots} spots left
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{cls.name}</h3>
                    <div className="flex items-center">
                      <FaStar className="text-[#EFD67E] mr-1" />
                      <span>{cls.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{cls.description}</p>
                  <div className="flex items-center text-gray-400 mb-4">
                    <FiClock className="mr-2" /> {cls.time} • {cls.duration}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm bg-[#EFD67E]/10 text-[#EFD67E] px-3 py-1 rounded-full">
                      {cls.difficulty}
                    </span>
                    <button
                      onClick={() => handleBookClass(cls)}
                      className="px-4 py-2 bg-[#EFD67E] text-[#031625] rounded-lg font-medium hover:bg-[#EFD67E]/90 transition"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-400">
                No classes found. Try adjusting your filters.
              </p>
            </div>
          )}
        </motion.div>
      </main>

      {/* Booking Modal */}
      <AnimatePresence>
        {isBookingModalOpen && selectedClass && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={() => setIsBookingModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-[#112136] rounded-xl border border-[#EFD67E]/20 p-6 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-[#EFD67E]">
                  Confirm Booking
                </h2>
                <button
                  onClick={() => setIsBookingModalOpen(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <FiX className="w-6 h-6" />
                </button>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">{selectedClass.name}</h3>
                <p className="text-gray-300 mb-1">
                  <span className="font-medium">Trainer:</span>{" "}
                  {selectedClass.trainer}
                </p>
                <p className="text-gray-300 mb-1">
                  <span className="font-medium">Time:</span>{" "}
                  {selectedClass.time}
                </p>
                <p className="text-gray-300 mb-1">
                  <span className="font-medium">Day:</span> {selectedClass.day}
                </p>
                <p className="text-gray-300">
                  <span className="font-medium">Difficulty:</span>{" "}
                  {selectedClass.difficulty}
                </p>
              </div>
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setIsBookingModalOpen(false)}
                  className="px-4 py-2 border border-[#EFD67E]/20 rounded-lg hover:border-[#EFD67E]/50 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setIsBookingModalOpen(false);
                    // Handle booking logic here
                  }}
                  className="px-4 py-2 bg-[#EFD67E] text-[#031625] rounded-lg font-medium hover:bg-[#EFD67E]/90 transition flex items-center"
                >
                  <FiCheck className="mr-2" /> Confirm
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ClassBookingPage;
