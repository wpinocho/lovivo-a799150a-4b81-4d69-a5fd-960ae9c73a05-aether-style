import { useEffect } from 'react'

/**
 * ScrollReveal - Adds smooth fade-in animations on scroll
 * Auto-initializes on mount for all sections
 */
export const ScrollReveal = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    // Observe all sections
    const sections = document.querySelectorAll('section')
    sections.forEach((section) => {
      section.style.opacity = '0'
      section.style.transform = 'translateY(30px)'
      section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out'
      observer.observe(section)
    })

    // Add revealed class styles
    const style = document.createElement('style')
    style.textContent = `
      .revealed {
        opacity: 1 !important;
        transform: translateY(0) !important;
      }
    `
    document.head.appendChild(style)

    // Initial reveal for hero
    const hero = document.querySelector('section:first-of-type')
    if (hero) {
      setTimeout(() => {
        hero.classList.add('revealed')
      }, 100)
    }

    // Force dark mode
    document.documentElement.classList.add('dark')

    return () => {
      observer.disconnect()
      document.head.removeChild(style)
    }
  }, [])

  return null
}