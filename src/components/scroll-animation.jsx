"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { ChevronDown, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

// Scroll indicator component
function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100
      setIsVisible(!scrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
  }

  return (
    <motion.div
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.button
        onClick={scrollToNext}
        className="flex flex-col items-center text-white/80 hover:text-white transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <ChevronDown className="w-6 h-6" />
      </motion.button>
    </motion.div>
  )
}

function FadeInSection({ children, delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}

function ParallaxBackground() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, -200])

  return (
    <motion.div
      className="absolute inset-0 bg-gradient-to-b from-blue-900 via-purple-900 to-pink-900"
      style={{ y }}
    />
  )
}

function StaggeredCards() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const cards = [
    { title: "Feature One", description: "Amazing functionality that will blow your mind" },
    { title: "Feature Two", description: "Incredible performance with seamless integration" },
    { title: "Feature Three", description: "Beautiful design that users will absolutely love" },
  ]

  return (
    <div ref={ref} className="grid md:grid-cols-3 gap-8">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          whileHover={{ scale: 1.05, y: -10 }}
        >
          <h3 className="text-xl font-bold text-white mb-4">{card.title}</h3>
          <p className="text-white/80">{card.description}</p>
        </motion.div>
      ))}
    </div>
  )
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 origin-left z-50"
      style={{ scaleX }}
    />
  )
}

export default function ScrollAnimation() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ScrollProgress />

      <section className="relative h-screen flex items-center justify-center">
        <ParallaxBackground />
        <div className="relative z-10 text-center text-white">
          <motion.h1
            className="text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Scroll Down Animation
          </motion.h1>
          <motion.p
            className="text-xl mb-8 text-white/80"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience smooth animations as you scroll through the page
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              onClick={() => scrollToSection("features")}
              className="bg-white/20 hover:bg-white/30 text-white border border-white/30"
            >
              Explore Features
              <ArrowDown className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
        <ScrollIndicator />
      </section>

      <section id="features" className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20">
        <div className="container mx-auto px-6">
          <FadeInSection>
            <h2 className="text-4xl font-bold text-center text-white mb-16">Amazing Features</h2>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <StaggeredCards />
          </FadeInSection>
        </div>
      </section>

      <section className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <FadeInSection>
              <h2 className="text-4xl font-bold text-white mb-8">Smooth Scroll Experience</h2>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <p className="text-lg text-white/80 mb-8">
                This page demonstrates various scroll animations including fade-in effects, parallax backgrounds,
                staggered animations, and smooth scrolling between sections.
              </p>
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <motion.div
                  className="bg-white/5 rounded-lg p-6 border border-white/10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-xl font-semibold text-white mb-4">Fade In Animations</h3>
                  <p className="text-white/70">Elements smoothly fade in as they come into view while scrolling.</p>
                </motion.div>

                <motion.div
                  className="bg-white/5 rounded-lg p-6 border border-white/10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-xl font-semibold text-white mb-4">Parallax Effects</h3>
                  <p className="text-white/70">Background elements move at different speeds for depth perception.</p>
                </motion.div>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.6}>
              <div className="text-center">
                <Button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Back to Top
                </Button>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </div>
  )
}
