"use client";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  FaArrowRight,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaRegClock,
  FaUserAlt,
} from "react-icons/fa";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import {
  RiRunLine,
  RiBasketballLine,
  RiBoxingLine,
  RiMedalLine,
} from "react-icons/ri";
import {
  GiWeightLiftingUp,
  GiMuscleUp,
  GiBoxingGlove,
  GiGymBag,
} from "react-icons/gi";
import { IoMdFitness } from "react-icons/io";

export default function LandingPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Image URLs from Unsplash (fitness-related)
  const images = {
    hero: "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    about:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1075&q=80",
    testimonial1:
      "https://images.unsplash.com/photo-1533681904393-9ab6eee7e408?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    testimonial2:
      "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    testimonial3:
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    pattern:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    class1:
      "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80",
    class2:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    class3:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    class4:
      "https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Professional Athlete",
      text: "NojuSkrr transformed my training routine. The personalized programs helped me achieve my competition goals faster than I imagined.",
      image: images.testimonial1,
    },
    {
      name: "Mike Rodriguez",
      role: "Fitness Enthusiast",
      text: "I've tried many gyms, but the community and trainers at NojuSkrr are unmatched. Lost 20kg in 3 months!",
      image: images.testimonial2,
    },
    {
      name: "Emma Chen",
      role: "Yoga Instructor",
      text: "The facilities are state-of-the-art and always clean. The perfect balance of strength and mindfulness spaces.",
      image: images.testimonial3,
    },
  ];

  const features = [
    {
      icon: <GiWeightLiftingUp className="w-8 h-8" />,
      title: "Strength Training",
      description: "World-class equipment for all levels",
    },
    {
      icon: <RiRunLine className="w-8 h-8" />,
      title: "Cardio Zone",
      description: "Cutting-edge machines with immersive experiences",
    },
    {
      icon: <GiMuscleUp className="w-8 h-8" />,
      title: "Personal Coaching",
      description: "Certified trainers for personalized programs",
    },
    {
      icon: <RiBasketballLine className="w-8 h-8" />,
      title: "Group Classes",
      description: "50+ weekly classes for all interests",
    },
  ];

  const classes = [
    {
      name: "Power Lift",
      time: "7:00 AM",
      trainer: "James Wilson",
      icon: <GiWeightLiftingUp className="w-6 h-6" />,
      image: images.class1,
    },
    {
      name: "Boxing Fundamentals",
      time: "9:00 AM",
      trainer: "Lisa Rodriguez",
      icon: <GiBoxingGlove className="w-6 h-6" />,
      image: images.class2,
    },
    {
      name: "HIIT Burn",
      time: "12:00 PM",
      trainer: "Marcus Lee",
      icon: <IoMdFitness className="w-6 h-6" />,
      image: images.class3,
    },
    {
      name: "Yoga Flow",
      time: "6:00 PM",
      trainer: "Sophia Chen",
      icon: <RiMedalLine className="w-6 h-6" />,
      image: images.class4,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#031625] text-white overflow-x-hidden">
      {/* Hero Section with Parallax */}
      <section
        ref={ref}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${images.hero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            y: backgroundY,
          }}
        />
        <div className="absolute inset-0 bg-black/60 z-1" />

        <motion.div
          className="relative z-10 container mx-auto px-6 text-center"
          style={{ y: textY }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <GiGymBag className="w-20 h-20 bg-[#EFD67E] text-[#031625] rounded-lg p-2" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#EFD67E]">
              <span className="block">REDEFINE</span>
              <span className="block">YOUR LIMITS</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Join NojuSkrr and experience fitness reimagined with cutting-edge
              facilities and expert coaching
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-[#EFD67E] text-[#031625] rounded-lg font-semibold flex items-center gap-2"
              >
                Get Started <HiOutlineArrowNarrowRight />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-[#EFD67E] text-[#EFD67E] rounded-lg font-semibold"
              >
                Explore Classes
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-0 right-0 flex justify-center z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <FaArrowRight className="text-[#EFD67E] text-2xl rotate-90" />
          </motion.div>
        </motion.div>
      </section>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#031625]/90 backdrop-blur-md border-b border-[#EFD67E]/20">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <GiGymBag className="w-10 h-10 bg-[#EFD67E] text-[#031625] rounded-lg mr-3 p-1" />
            <span className="text-2xl font-bold text-[#EFD67E]">NojuSkrr</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-[#EFD67E] transition">
              Home
            </a>
            <a href="#" className="text-white hover:text-[#EFD67E] transition">
              Classes
            </a>
            <a href="#" className="text-white hover:text-[#EFD67E] transition">
              Trainers
            </a>
            <a href="#" className="text-white hover:text-[#EFD67E] transition">
              Pricing
            </a>
            <a href="#" className="text-white hover:text-[#EFD67E] transition">
              About
            </a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-[#EFD67E] text-[#031625] rounded-lg font-semibold"
            >
              Join Now
            </motion.button>
          </div>

          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-6 py-4 space-y-4">
                <a
                  href="#"
                  className="block text-white hover:text-[#EFD67E] transition"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="block text-white hover:text-[#EFD67E] transition"
                >
                  Classes
                </a>
                <a
                  href="#"
                  className="block text-white hover:text-[#EFD67E] transition"
                >
                  Trainers
                </a>
                <a
                  href="#"
                  className="block text-white hover:text-[#EFD67E] transition"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="block text-white hover:text-[#EFD67E] transition"
                >
                  About
                </a>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-2 bg-[#EFD67E] text-[#031625] rounded-lg font-semibold"
                >
                  Join Now
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Stats Section */}
      <section className="py-12 bg-[#0a213a]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-6"
            >
              <div className="text-4xl font-bold text-[#EFD67E] mb-2">10+</div>
              <p className="text-gray-300">Years Experience</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-6"
            >
              <div className="text-4xl font-bold text-[#EFD67E] mb-2">50+</div>
              <p className="text-gray-300">Weekly Classes</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6"
            >
              <div className="text-4xl font-bold text-[#EFD67E] mb-2">15+</div>
              <p className="text-gray-300">Certified Trainers</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-6"
            >
              <div className="text-4xl font-bold text-[#EFD67E] mb-2">2K+</div>
              <p className="text-gray-300">Happy Members</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-[#031625] to-[#0a213a]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-[#EFD67E]">
              WHY CHOOSE NOJUSKRR
            </h2>
            <p className="text-xl max-w-2xl mx-auto text-gray-300">
              We're not just a gym - we're a community dedicated to helping you
              achieve your fitness goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-[#112136]/50 p-8 rounded-xl border border-[#EFD67E]/10 hover:border-[#EFD67E]/30 transition-all"
              >
                <div className="text-[#EFD67E] mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-[#0a213a]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="relative">
                <img
                  src={images.about}
                  alt="NojuSkrr Gym"
                  className="rounded-xl shadow-2xl w-full h-auto object-cover"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-6 -right-6 bg-[#EFD67E] p-4 rounded-lg shadow-lg"
                >
                  <div className="text-center">
                    <span className="block text-3xl font-bold text-[#031625]">
                      10+
                    </span>
                    <span className="text-sm">Years Experience</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-4xl font-bold mb-6 text-[#EFD67E]">
                OUR STORY
              </h2>
              <p className="text-lg mb-6 text-gray-300">
                Founded in 2013, NojuSkrr began as a small training studio with
                a big vision: to create a fitness experience that combines
                cutting-edge training methods with a supportive community
                atmosphere.
              </p>
              <p className="text-lg mb-8 text-gray-300">
                Today, we've grown into one of the most respected fitness
                centers in the region, but we've never lost sight of our
                original mission - to help every member discover their strongest
                self.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="bg-[#EFD67E]/20 p-2 rounded-full mr-4">
                    <GiWeightLiftingUp className="text-[#EFD67E] w-5 h-5" />
                  </div>
                  <span className="text-gray-300">
                    State-of-the-art equipment
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="bg-[#EFD67E]/20 p-2 rounded-full mr-4">
                    <FaUserAlt className="text-[#EFD67E] w-5 h-5" />
                  </div>
                  <span className="text-gray-300">
                    Certified professional trainers
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="bg-[#EFD67E]/20 p-2 rounded-full mr-4">
                    <FaRegClock className="text-[#EFD67E] w-5 h-5" />
                  </div>
                  <span className="text-gray-300">Flexible 24/7 access</span>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-[#EFD67E] text-[#031625] rounded-lg font-semibold"
              >
                Learn More About Us
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section className="py-20 bg-gradient-to-b from-[#0a213a] to-[#031625]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-[#EFD67E]">
              POPULAR CLASSES
            </h2>
            <p className="text-xl max-w-2xl mx-auto text-gray-300">
              Our diverse class offerings cater to all fitness levels and goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {classes.map((cls, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-[#112136]/70 rounded-xl border border-[#EFD67E]/10 hover:border-[#EFD67E]/30 transition-all overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={cls.image}
                    alt={cls.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-[#EFD67E] mb-4">{cls.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{cls.name}</h3>
                  <div className="flex items-center text-gray-300 mb-2">
                    <span className="mr-2">⏱️</span>
                    <span>{cls.time}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="mr-2">👤</span>
                    <span>Trainer: {cls.trainer}</span>
                  </div>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="mt-4 flex items-center text-[#EFD67E]"
                  >
                    View details <HiOutlineArrowNarrowRight className="ml-1" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-[#EFD67E] text-[#EFD67E] rounded-lg font-semibold"
            >
              View All Classes
            </motion.button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#031625] relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover" />
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-[#EFD67E]">
              SUCCESS STORIES
            </h2>
            <p className="text-xl max-w-2xl mx-auto text-gray-300">
              Hear from our members about their NojuSkrr journey
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-[#112136]/70 p-8 md:p-12 rounded-xl border border-[#EFD67E]/20"
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#EFD67E] flex-shrink-0">
                    <img
                      src={testimonials[activeTestimonial].image}
                      alt={testimonials[activeTestimonial].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <p className="text-lg italic mb-6 text-gray-300">
                      "{testimonials[activeTestimonial].text}"
                    </p>
                    <div>
                      <h4 className="font-bold text-xl text-[#EFD67E]">
                        {testimonials[activeTestimonial].name}
                      </h4>
                      <p className="text-gray-300">
                        {testimonials[activeTestimonial].role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition ${
                    activeTestimonial === index ? "bg-[#EFD67E]" : "bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#112136] to-[#0a213a]">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#031625]/50 p-8 md:p-12 rounded-xl border border-[#EFD67E]/20 shadow-lg max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#EFD67E]">
              READY TO TRANSFORM YOUR FITNESS JOURNEY?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
              Join NojuSkrr today and get your first week free with no
              commitment
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-[#EFD67E] text-[#031625] rounded-lg font-semibold"
              >
                Start Your Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-[#EFD67E] text-[#EFD67E] rounded-lg font-semibold"
              >
                Book a Tour
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#031625] border-t border-[#EFD67E]/20 pt-12 pb-6">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center mb-4">
                <GiGymBag className="w-10 h-10 bg-[#EFD67E] text-[#031625] rounded-lg mr-3 p-1" />
                <span className="text-xl font-bold text-[#EFD67E]">
                  NojuSkrr
                </span>
              </div>
              <p className="text-gray-300 mb-4">
                Redefining fitness with cutting-edge facilities, expert
                coaching, and a supportive community.
              </p>
              <div className="flex mt-4 space-x-4">
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#EFD67E] transition"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#EFD67E] transition"
                >
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#EFD67E] transition"
                >
                  <FaFacebookF className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#EFD67E] transition"
                >
                  <FaYoutube className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#EFD67E]">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-[#EFD67E] transition"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-[#EFD67E] transition"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-[#EFD67E] transition"
                  >
                    Classes
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-[#EFD67E] transition"
                  >
                    Trainers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-[#EFD67E] transition"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#EFD67E]">
                Classes
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-[#EFD67E] transition"
                  >
                    Strength Training
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-[#EFD67E] transition"
                  >
                    Cardio
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-[#EFD67E] transition"
                  >
                    Yoga
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-[#EFD67E] transition"
                  >
                    HIIT
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-[#EFD67E] transition"
                  >
                    Boxing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#EFD67E]">
                Contact
              </h3>
              <address className="text-gray-300 not-italic">
                <p className="mb-2">123 Fitness Street</p>
                <p className="mb-2">Gym City, 10001</p>
                <p className="mb-2">Phone: (123) 456-7890</p>
                <p>Email: info@nojuskrr.com</p>
              </address>
            </div>
          </div>

          <div className="border-t border-[#EFD67E]/20 pt-6 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} NojuSkrr. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
