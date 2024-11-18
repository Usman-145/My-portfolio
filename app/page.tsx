"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, MailIcon, MousePointerClick, ArrowDown, Code2Icon, BrainCircuitIcon, RocketIcon } from "lucide-react";
import Scene3D from "@/components/Scene3D";
import ProjectSlider from "@/components/ProjectSlider";
import { projects } from "@/lib/data";
import { useRef } from "react";
import AnimatedText from "@/components/AnimatedText";

export default function Home() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <main className="min-h-screen bg-black text-white relative">
      {/* Animated Background */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,0,0,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.7),rgba(0,0,0,0.3))]" />
      </div>

      {/* Hero Section */}
      <section ref={targetRef} className="relative h-screen flex flex-col items-center justify-center px-4">
        <motion.div 
          style={{ opacity, scale }}
          className="absolute inset-0 md:inset-x-20 lg:inset-x-40"
        >
          <Scene3D />
        </motion.div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <AnimatedText 
            text="Ch Usman" 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight"
          />
          <AnimatedText 
            text="Full Stack Developer & Mern Stack Developer"
            className="text-xl md:text-2xl text-red-400 mb-8"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button
              variant="outline"
              className="bg-red-500/20 border-red-500 hover:bg-red-500/40 text-white group"
            >
              <RocketIcon className="mr-2 h-4 w-4 group-hover:animate-bounce" />
              View Projects
            </Button>
            <Button
              variant="outline"
              className="bg-white/10 border-white/20 hover:bg-white/20 text-white group"
            >
              <MailIcon className="mr-2 h-4 w-4 group-hover:rotate-12" />
              Contact Me
            </Button>
          </motion.div>
        </div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="text-red-400 h-8 w-8" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Code2Icon,
              title: "Clean Code",
              description: "Writing elegant, maintainable, and efficient code to build scalable, reliable, and high-performance solutions."
            },
            {
              icon: BrainCircuitIcon,
              title: "Innovation",
              description: "Innovative Full-Stack Developer using cutting-edge technologies to create dynamic, scalable applications."
            },
            {
              icon: RocketIcon,
              title: "Performance",
              description: "Creating ultra-fast, scalable apps optimized for speed, efficiency, and seamless user experiences across all devices."
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <Card className="p-6 bg-gradient-to-br from-red-950/50 to-black/50 border-red-900/50 backdrop-blur-sm hover:bg-red-900/20 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                <feature.icon className="h-12 w-12 text-red-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <AnimatedText 
            text="Featured Projects" 
            className="text-3xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent" 
          />
          <ProjectSlider projects={projects} />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 relative">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <AnimatedText 
            text="Let's Work Together" 
            className="text-3xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent" 
          />
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: GithubIcon, label: "GitHub", href: "https://github.com/Usman-145" },
              { icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/ch-usman-213807309/" },
              { icon: MailIcon, label: "Email", href: "mailto:usmanaliwcc1@gmail.com" },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group"
              >
                <Button
                  variant="outline"
                  className="bg-gradient-to-r from-red-950/50 to-black/50 border-red-900/50 hover:bg-red-900/30 transition-all duration-300"
                >
                  <item.icon className="mr-2 h-4 w-4 group-hover:text-red-400 transition-colors" />
                  <span className="group-hover:text-red-400 transition-colors">{item.label}</span>
                </Button>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}