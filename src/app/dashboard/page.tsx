"use client";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiCalendar,
  FiAward,
  FiActivity,
  FiUser,
  FiClock,
  FiHeart,
  FiTrendingUp,
} from "react-icons/fi";
import {
  GiWeightLiftingUp,
  GiRunningShoe,
  GiBoxingGlove,
} from "react-icons/gi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { IoMdFitness } from "react-icons/io";
import { RiBasketballLine } from "react-icons/ri";

export default function Dashboard() {
  const user = {
    name: "Alex Johnson",
    membership: "Premium",
    expires: "Dec 15, 2023",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    streak: 12,
    level: "Intermediate",
  };

  const stats = [
    {
      label: "Workouts",
      value: 8,
      change: "+2",
      icon: <FiActivity className="w-5 h-5" />,
    },
    {
      label: "Hours",
      value: 14.5,
      change: "+3.2",
      icon: <FiClock className="w-5 h-5" />,
    },
    {
      label: "Calories",
      value: "4,820",
      change: "+1,240",
      icon: <FiTrendingUp className="w-5 h-5" />,
    },
    {
      label: "Points",
      value: "1,250",
      change: "+180",
      icon: <FiAward className="w-5 h-5" />,
    },
  ];

  const upcomingClasses = [
    {
      name: "Power Lift",
      time: "Today, 5:30 PM",
      trainer: "James Wilson",
      icon: <GiWeightLiftingUp className="w-6 h-6" />,
      type: "strength",
      spots: 3,
    },
    {
      name: "HIIT Blast",
      time: "Tomorrow, 7:00 AM",
      trainer: "Sarah Chen",
      icon: <IoMdFitness className="w-6 h-6" />,
      type: "cardio",
      spots: 8,
    },
    {
      name: "Boxing Skills",
      time: "Wed, 6:00 PM",
      trainer: "Mike Rodriguez",
      icon: <GiBoxingGlove className="w-6 h-6" />,
      type: "mma",
      spots: 5,
    },
  ];

  const announcements = [
    {
      title: "New Yoga Studio Opening",
      content: "Our new yoga studio with heated floors opens next Monday!",
      time: "2 hours ago",
    },
    {
      title: "Member Appreciation Week",
      content: "Free smoothies for all members this Friday after 5 PM",
      time: "1 day ago",
    },
    {
      title: "Equipment Upgrade",
      content: "New Peloton bikes have been installed in the cardio zone",
      time: "3 days ago",
    },
  ];

  const achievements = [
    {
      name: "5K Runner",
      icon: <GiRunningShoe className="w-6 h-6" />,
      date: "Nov 5",
    },
    {
      name: "Bench Press",
      icon: <GiWeightLiftingUp className="w-6 h-6" />,
      date: "Oct 28",
    },
    {
      name: "Basketball",
      icon: <RiBasketballLine className="w-6 h-6" />,
      date: "Oct 15",
    },
  ];

  return (
    <div className="min-h-screen bg-[#031625] text-white">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#031625]/90 backdrop-blur-md border-b border-[#EFD67E]/20">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <IoMdFitness className="w-8 h-8 bg-[#EFD67E] text-[#031625] rounded-lg mr-3 p-1" />
            <span className="text-xl font-bold text-[#EFD67E]">
              NojuSkrr Dashboard
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <button className="relative p-1 text-gray-300 hover:text-[#EFD67E] transition">
              <FiCalendar className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#EFD67E] text-[#031625] text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </button>
            <button className="relative p-1 text-gray-300 hover:text-[#EFD67E] transition">
              <FiHeart className="w-5 h-5" />
            </button>
            <div className="w-8 h-8 rounded-full overflow-hidden border border-[#EFD67E]">
              <img
                src={user.photo}
                alt={user.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h1 className="text-3xl font-bold mb-2">
            Welcome back, <span className="text-[#EFD67E]">{user.name}</span>
          </h1>
          <p className="text-gray-300">
            Here's what's happening with your fitness journey today
          </p>
        </motion.section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-[#112136]/70 p-4 rounded-xl border border-[#EFD67E]/10 hover:border-[#EFD67E]/30 transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300 text-sm">{stat.label}</span>
                    <div className="text-[#EFD67E]">{stat.icon}</div>
                  </div>
                  <div className="flex items-end">
                    <span className="text-2xl font-bold mr-2">
                      {stat.value}
                    </span>
                    <span className="text-sm text-green-400">
                      {stat.change}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Progress Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-[#112136]/70 p-6 rounded-xl border border-[#EFD67E]/10"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-[#EFD67E]">
                  Weekly Activity
                </h2>
                <button className="text-sm text-gray-300 hover:text-[#EFD67E] transition">
                  View All
                </button>
              </div>
              <div className="h-64">
                {/* Chart Placeholder - Would be replaced with actual chart library */}
                <div className="w-full h-full bg-[#112136] rounded-lg flex items-center justify-center text-gray-400">
                  Activity Chart Visualization
                </div>
              </div>
            </motion.div>

            {/* Upcoming Classes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-[#112136]/70 p-6 rounded-xl border border-[#EFD67E]/10"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-[#EFD67E]">
                  Upcoming Classes
                </h2>
                <button className="text-sm text-gray-300 hover:text-[#EFD67E] transition">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {upcomingClasses.map((cls, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ x: 5 }}
                    className="flex items-center justify-between p-4 bg-[#0a213a]/50 rounded-lg border border-[#EFD67E]/10 hover:border-[#EFD67E]/30 transition-all"
                  >
                    <div className="flex items-center">
                      <div
                        className={`p-2 rounded-lg mr-4 ${
                          cls.type === "strength"
                            ? "bg-blue-500/20 text-blue-300"
                            : cls.type === "cardio"
                            ? "bg-red-500/20 text-red-300"
                            : "bg-purple-500/20 text-purple-300"
                        }`}
                      >
                        {cls.icon}
                      </div>
                      <div>
                        <h3 className="font-medium">{cls.name}</h3>
                        <p className="text-sm text-gray-400">
                          {cls.time} • {cls.trainer}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span
                        className={`text-xs px-2 py-1 rounded mr-3 ${
                          cls.spots < 5
                            ? "bg-red-500/20 text-red-300"
                            : "bg-green-500/20 text-green-300"
                        }`}
                      >
                        {cls.spots} spots left
                      </span>
                      <button className="text-[#EFD67E] hover:text-[#EFD67E]/80 transition">
                        <HiOutlineArrowNarrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* User Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#112136]/70 p-6 rounded-xl border border-[#EFD67E]/10"
            >
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#EFD67E] mb-4">
                  <img
                    src={user.photo}
                    alt={user.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-xl font-bold">{user.name}</h2>
                <p className="text-gray-300">{user.level} Member</p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Membership</span>
                  <span className="font-medium">{user.membership}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Expires</span>
                  <span>{user.expires}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Current Streak</span>
                  <span className="flex items-center">
                    {user.streak} days
                    <span className="ml-1 text-[#EFD67E]">🔥</span>
                  </span>
                </div>
              </div>
              <button className="w-full mt-6 py-2 bg-[#EFD67E] text-[#031625] rounded-lg font-medium hover:bg-[#EFD67E]/90 transition">
                View Profile
              </button>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-[#112136]/70 p-6 rounded-xl border border-[#EFD67E]/10"
            >
              <h2 className="text-xl font-bold text-[#EFD67E] mb-6">
                Quick Actions
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 bg-[#0a213a]/50 rounded-lg border border-[#EFD67E]/10 hover:border-[#EFD67E]/30 transition-all flex flex-col items-center"
                >
                  <FiCalendar className="w-6 h-6 text-[#EFD67E] mb-2" />
                  <span>Book Class</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 bg-[#0a213a]/50 rounded-lg border border-[#EFD67E]/10 hover:border-[#EFD67E]/30 transition-all flex flex-col items-center"
                >
                  <FiUser className="w-6 h-6 text-[#EFD67E] mb-2" />
                  <span>Trainer</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 bg-[#0a213a]/50 rounded-lg border border-[#EFD67E]/10 hover:border-[#EFD67E]/30 transition-all flex flex-col items-center"
                >
                  <FiClock className="w-6 h-6 text-[#EFD67E] mb-2" />
                  <span>Schedule</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 bg-[#0a213a]/50 rounded-lg border border-[#EFD67E]/10 hover:border-[#EFD67E]/30 transition-all flex flex-col items-center"
                >
                  <FiAward className="w-6 h-6 text-[#EFD67E] mb-2" />
                  <span>Goals</span>
                </motion.button>
              </div>
            </motion.div>

            {/* Announcements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-[#112136]/70 p-6 rounded-xl border border-[#EFD67E]/10"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-[#EFD67E]">
                  Announcements
                </h2>
                <button className="text-sm text-gray-300 hover:text-[#EFD67E] transition">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {announcements.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="p-4 bg-[#0a213a]/50 rounded-lg border border-[#EFD67E]/10"
                  >
                    <h3 className="font-medium mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-300 mb-2">{item.content}</p>
                    <p className="text-xs text-gray-500">{item.time}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Recent Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-[#112136]/70 p-6 rounded-xl border border-[#EFD67E]/10"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-[#EFD67E]">
                  Recent Achievements
                </h2>
                <button className="text-sm text-gray-300 hover:text-[#EFD67E] transition">
                  View All
                </button>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {achievements.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center p-3 bg-[#0a213a]/50 rounded-lg border border-[#EFD67E]/10"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#EFD67E]/10 text-[#EFD67E] flex items-center justify-center mb-2">
                      {item.icon}
                    </div>
                    <span className="text-xs text-center">{item.name}</span>
                    <span className="text-xs text-gray-500 mt-1">
                      {item.date}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
