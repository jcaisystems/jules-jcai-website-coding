"use client";

import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { ArrowRight, Zap, Puzzle, Target, Users, Bot, Layers, CheckCircle, BrainCircuit, Eye, Workflow, Cpu } from 'lucide-react';
import Link from 'next/link';
import MagicCard from '@/components/MagicCard';
import { Boxes } from "@/components/ui/background-boxes";

// This is the Client Component that contains all the interactive logic
// It receives the isMobile prop from the server and does not need its own detection hook.
const EnhancedHomepageClient = ({ isMobile }: { isMobile: boolean }) => {
  // Magnetic Button Component
  interface MagneticButtonProps {
    children: ReactNode;
    className?: string;
    [key: string]: any;
  }

  const MagneticButton: React.FC<MagneticButtonProps> = ({ children, className = "", ...props }) => {
    const ref = useRef<HTMLButtonElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 300, damping: 30 });
    const springY = useSpring(y, { stiffness: 300, damping: 30 });

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      x.set((e.clientX - centerX) * 0.1);
      y.set((e.clientY - centerY) * 0.1);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    return (
      <motion.button
        ref={ref}
        style={{ x: springX, y: springY }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full
                 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300
                 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/25
                 transform hover:scale-105 active:scale-95 flex items-center ${className}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0
                      hover:opacity-100 transition-opacity duration-300 blur-sm" />
      </motion.button>
    );
  };

  // 3D Stars Component
  function Stars(props: any) {
    const ref = useRef<any>(null);
    const [sphere] = useState(() => random.inSphere(new Float32Array(3000 * 3), { radius: 1.5 }));

    useFrame((_, delta) => {
      if (!ref.current) return;
      ref.current.rotation.x -= delta / 12;
      ref.current.rotation.y -= delta / 18;
    });

    return (
      <group rotation={[0, 0, Math.PI / 4]}>
        <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
          <PointMaterial
            transparent
            color="#06b6d4"
            size={0.004}
            sizeAttenuation={true}
            depthWrite={false}
          />
        </Points>
      </group>
    );
  }

  // Revolutionary Hero Section (FINAL, CORRECTED VERSION)
  const RevolutionaryHero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll();
  
    // Call all hooks unconditionally
    const transformedOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
    const transformedScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.9]);
    const transformedTextY = useTransform(scrollYProgress, [0, 0.15], [0, -50]);
  
    // Conditionally use the results based on the prop from the server
    const heroOpacity = isMobile ? 1 : transformedOpacity;
    const heroScale = isMobile ? 1 : transformedScale;
    const textY = isMobile ? 0 : transformedTextY;
  
    const titleWords = "The Last Hire You'll Ever Make.".split(' ');
    const subtitleChars = "We build custom AI operating systems that run your business for you.".split('');
  
    return (
      <section ref={containerRef} className="relative h-[100vh] flex flex-col justify-center text-white bg-slate-900 overflow-hidden">
        
        {/* Place background components INSIDE the hero section and conditionally render them */}
        {!isMobile && (
          <>
            <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
            <Boxes />
          </>
        )}
  
        <motion.div
          className="relative z-30 text-center container mx-auto px-6 -mt-20"
          style={{ opacity: heroOpacity, scale: heroScale, y: textY }}
        >
          <div className="mb-6">
            {titleWords.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block text-5xl md:text-8xl font-extrabold mr-4 mb-2
                           text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-blue-300"
                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{
                  scale: 1.05,
                  textShadow: "0 0 20px rgba(6, 182, 212, 0.5)"
                }}
              >
                {word}
              </motion.span>
            ))}
          </div>
  
          <motion.div className="max-w-4xl mx-auto mb-8">
            <div className="text-xl md:text-2xl text-slate-300 leading-relaxed">
              {subtitleChars.map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.03,
                    delay: 1 + i * 0.02
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </motion.div>
  
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 3 }}
            className="flex justify-center"
          >
            <Link href="/booking-page">
              <MagneticButton>
                Book My Free Operations Audit <ArrowRight className="ml-2" />
              </MagneticButton>
            </Link>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-30"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ opacity: heroOpacity }}
        >
          <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
              animate={{ scaleY: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>
    );
  };

  // Problem Section
  const ImmersiveProblemSection = () => {
    const problems = [
      { icon: <Zap className="h-8 w-8 text-cyan-400" />, title: "Lost Leads", description: "Hot leads contact you, but by the time someone follows up, they've gone cold—or gone to a competitor." },
      { icon: <Puzzle className="h-8 w-8 text-cyan-400" />, title: "\"Frankenstein\" Software", description: "You're paying for a dozen different apps that don't communicate, forcing your team into hours of manual data entry." },
      { icon: <Target className="h-8 w-8 text-cyan-400" />, title: "Founder Bottleneck", description: "The entire business relies on you. You can't take a vacation without the fear of it all falling apart." },
      { icon: <Users className="h-8 w-8 text-cyan-400" />, title: "Talent Waste", description: "Your best people are stuck managing schedules and sending reminders instead of driving revenue." },
    ];

    return (
      <section className="py-32 bg-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" 
              style={{
                backgroundImage: `
                  linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                  linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px'
              }} 
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              The Hidden Leaks 
              <motion.span 
                className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Sinking Your Profit
              </motion.span>
            </motion.h2>
            <motion.p 
              className="text-slate-400 max-w-3xl mx-auto text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Your business is losing time and money in places you can't see. Does any of this sound familiar?
            </motion.p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <MagicCard className="h-full bg-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700">
                  <div 
                    className="mb-6 w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center"
                  >
                    {problem.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">{problem.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{problem.description}</p>
                </MagicCard>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="mt-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-2xl shadow-cyan-500/10 aspect-video">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/7AX57K86g1Y"
                title="Why 90% of AI Tools Fail"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
    );
  };

  // Services Section
  const DynamicServicesSection = () => {
    const services = [
      { icon: <Workflow className="h-8 w-8 text-cyan-400" />, title: "Intelligent Workflow Automation", description: "Automating multi-step processes across HR, Finance, Marketing, and Operations to boost efficiency." },
      { icon: <Bot className="h-8 w-8 text-cyan-400" />, title: "Custom AI Agent Development", description: "Building bespoke AI agents for customer service, data analysis, internal knowledge retrieval, and more." },
      { icon: <Layers className="h-8 w-8 text-cyan-400" />, title: "Seamless System Integration", description: "Connecting disparate software and APIs to ensure smooth data flow and create a unified operational hub." },
      { icon: <Cpu className="h-8 w-8 text-cyan-400" />, title: "Automated Data Processing", description: "Streamlining data extraction, transformation, cleaning, and the generation of insightful reports." },
    ];

    return (
      <section className="py-32 bg-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="md:pr-8"
            >
              <h2 
                className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
              >
                The JCAI 
                <span 
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
                >
                  Autonomous Engine
                </span>
                <span className="text-slate-400 text-2xl block mt-2">Your Business, Systematized.</span>
              </h2>
              
              <div className="space-y-8">
                {services.map((service, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start space-x-6 group cursor-pointer"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ x: 10, transition: { duration: 0.2 } }}
                  >
                    <motion.div 
                      className="flex-shrink-0 w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center group-hover:bg-cyan-500/20 transition-all duration-300"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {service.icon}
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="relative h-96 md:h-[600px]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-3xl backdrop-blur-sm border border-cyan-500/30">
                <div className="absolute inset-4 rounded-2xl bg-slate-800/50 p-8 overflow-hidden">
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-3 h-3 bg-cyan-400 rounded-full"
                      style={{
                        left: `${20 + (i % 4) * 20}%`,
                        top: `${20 + Math.floor(i / 4) * 25}%`,
                      }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.4, 1, 0.4],
                      }}
                      transition={{
                        duration: 2 + i * 0.2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                  
                  <svg className="absolute inset-0 w-full h-full">
                    {[...Array(8)].map((_, i) => (
                      <motion.line
                        key={i}
                        x1={`${25 + (i % 3) * 25}%`}
                        y1={`${30 + Math.floor(i / 3) * 20}%`}
                        x2={`${45 + (i % 3) * 25}%`}
                        y2={`${50 + Math.floor(i / 3) * 20}%`}
                        stroke="rgba(6, 182, 212, 0.3)"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: i * 0.3, repeat: Infinity, repeatType: "reverse" }}
                      />
                    ))}
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };

  // Process Section
  const TimelineProcessSection = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: sectionRef,
      offset: ["start end", "end start"]
    });

    const steps = [
      { icon: <Eye className="h-8 w-8 text-cyan-400" />, title: "Discover & Define", description: "We conduct a deep-dive analysis of your current processes to map out your custom Autonomous Engine blueprint." },
      { icon: <Layers className="h-8 w-8 text-cyan-400" />, title: "Design & Architect", description: "We map out the optimal custom solution, defining technology, workflows, and integration points." },
      { icon: <Bot className="h-8 w-8 text-cyan-400" />, title: "Build & Develop", description: "Our expert team builds your custom workflows and integrates your new central dashboard." },
      { icon: <CheckCircle className="h-8 w-8 text-cyan-400" />, title: "Implement & Optimize", description: "We launch your system and provide ongoing support to ensure you see a tangible return on investment immediately." },
    ];

    const lineHeight = useTransform(scrollYProgress, [0.3, 0.8], ["0%", "100%"]);

    return (
      <section ref={sectionRef} className="py-32 bg-slate-800 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Your Path to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Autonomy
              </span>
              in 4 Steps
            </h2>
            <p className="text-slate-400 max-w-3xl mx-auto text-lg">
              A seamless, collaborative journey to transform your operations.
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 top-0 w-1 bg-slate-700 h-full">
              <motion.div
                className="w-full bg-gradient-to-b from-cyan-400 to-blue-500"
                style={{ height: lineHeight }}
              />
            </div>

            <div className="space-y-16">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className="relative flex flex-col md:grid md:grid-cols-2 md:gap-12 items-center"
                >
                  <motion.div 
                    className="md:hidden mb-8 w-16 h-16 bg-slate-900 border-4 border-cyan-400 rounded-full flex items-center justify-center relative z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <span className="text-cyan-400 font-bold text-xl">{index + 1}</span>
                  </motion.div>

                  <motion.div
                    className={`w-full ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <MagicCard className="bg-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700">
                      <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <motion.div
                          className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mb-6"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          {step.icon}
                        </motion.div>
                        <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
                        <p className="text-slate-400 leading-relaxed">{step.description}</p>
                      </div>
                    </MagicCard>
                  </motion.div>

                  <div className={`hidden md:flex justify-center items-center relative ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                    <motion.div
                      className="w-16 h-16 bg-slate-900 border-4 border-cyan-400 rounded-full flex items-center justify-center relative z-10"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <span className="text-cyan-400 font-bold text-xl">{index + 1}</span>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };

  // Final CTA
  const FinalCTA = () => {
      const [dots, setDots] = useState<any[]>([]);

      useEffect(() => {
          const newDots = [...Array(20)].map(() => ({
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              duration: 4 + Math.random() * 4,
              delay: Math.random() * 4,
          }));
          setDots(newDots);
      }, []);

      return (
          <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
              <div className="absolute inset-0">
                  {dots.map((dot, i) => (
                      <motion.div
                          key={i}
                          className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
                          style={{
                              left: dot.left,
                              top: dot.top,
                          }}
                          animate={{
                              scale: [0, 1, 0],
                              opacity: [0, 0.6, 0],
                          }}
                          transition={{
                              duration: dot.duration,
                              repeat: Infinity,
                              delay: dot.delay,
                          }}
                      />
                  ))}
              </div>

              <div className="container mx-auto px-6 text-center relative z-10">
                  <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                  >
                      <motion.h2
                          className="text-4xl md:text-6xl font-bold mb-6"
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                      >
                          Ready to Build Your
                          <motion.span
                              className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
                              initial={{ opacity: 0, rotateX: -90 }}
                              whileInView={{ opacity: 1, rotateX: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: 0.5 }}
                          >
                              Autonomous Enterprise?
                          </motion.span>
                      </motion.h2>

                      <motion.p
                          className="text-slate-400 max-w-3xl mx-auto mb-12 text-lg leading-relaxed"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.6 }}
                      >
                          Your next step is a complimentary, no-obligation Operations Audit.
                          We'll analyze your processes and provide a custom blueprint showing
                          the top 3 areas you can streamline for maximum ROI.
                      </motion.p>

                      <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.8 }}
                          className="flex justify-center"
                      >
                          <Link href="/booking-page">
                              <MagneticButton className="text-lg px-12 py-6">
                                  Book My Free Audit Now <ArrowRight className="ml-3" />
                              </MagneticButton>
                          </Link>
                      </motion.div>

                      <motion.div
                          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mt-16 text-slate-500"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 1 }}
                      >
                          <div className="flex items-center space-x-2">
                              <CheckCircle className="h-5 w-5 text-green-400" />
                              <span>No Commitment Required</span>
                          </div>
                          <div className="flex items-center space-x-2">
                              <CheckCircle className="h-5 w-5 text-green-400" />
                              <span>30-Minute Call</span>
                          </div>
                          <div className="flex items-center space-x-2">
                              <CheckCircle className="h-5 w-5 text-green-400" />
                              <span>Custom ROI Blueprint</span>
                          </div>
                      </motion.div>
                  </motion.div>
              </div>
          </section>
      );
  };

  // Floating Testimonials
  const FloatingTestimonials = () => {
    const testimonials = [
      { name: "Anna, Freelance Consultant", quote: "Working with JCAI wasn't just an improvement, it was a transformation. We reclaimed over 15 hours a week of administrative time, allowing our sales team to focus on what they do best. Our lead conversion has increased by 30% in just two months." },
      { name: "Mark, Operations Director", quote: "We partnered with JCAI to automate our client onboarding process. Their team built a custom solution that was a perfect fit. We've reduced manual data entry by over 30% and eliminated errors. It's a strategic investment that paid for itself in months." },
      { name: "Emily, Real Estate Broker", quote: "As a small business owner, I wear many hats. The JCAI assistant is the best employee I've ever hired. From generating reports to managing my calendar, it has truly reduced my daily stress and allowed me to focus on growing the business." }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(timer);
    }, [testimonials.length]);

    return (
      <section className="py-32 bg-slate-800 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Stop Juggling.
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
                Start Scaling.
              </span>
            </h2>
            <p className="text-slate-400 max-w-3xl mx-auto mb-16 text-lg">
              See how we've transformed businesses just like yours.
            </p>
          </motion.div>

          <div className="relative h-96 md:h-80 max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, rotateY: -90, scale: 0.8 }}
                animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                exit={{ opacity: 0, rotateY: 90, scale: 0.8 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <MagicCard className="h-full bg-slate-900/80 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-slate-700 flex flex-col justify-center">
                  <motion.p
                    className="text-lg md:text-xl italic text-slate-300 mb-8 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    "{testimonials[currentIndex].quote}"
                  </motion.p>
                  <motion.p
                    className="font-bold text-cyan-400 text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    - {testimonials[currentIndex].name}
                  </motion.p>
                </MagicCard>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center space-x-3 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  i === currentIndex ? 'bg-cyan-400 w-8' : 'bg-slate-500 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  return (
    <div className="bg-slate-900 min-h-screen">
      <RevolutionaryHero />
      <ImmersiveProblemSection />
      <DynamicServicesSection />
      <TimelineProcessSection />
      <FloatingTestimonials />
      <FinalCTA />
    </div>
  );
};

export default EnhancedHomepageClient;
