import React, { useRef } from 'react'
import TitleHeader from '../components/TitleHeader'
import { techStackImgs } from '../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const SkillsSection = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.tech-card');
    
    cards.forEach((card, index) => {
      gsap.fromTo(card, 
        {
          y: 50,
          opacity: 0,
          scale: 0.8
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: index * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          }
        }
      );
    });

    gsap.fromTo(sectionRef.current, 
      { opacity: 0 }, 
      { 
        opacity: 1, 
        duration: 1.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
        }
      }
    );
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="w-full section-padding">
      <div className="w-full h-full">
        <TitleHeader 
          title="Technical Skills & Expertise" 
          sub="My Tech Stack"
        />
        
        <div className="tech-grid">
          {techStackImgs.map(({ name, imgPath }) => (
            <div key={name} className="tech-card card-border rounded-xl relative overflow-hidden group cursor-pointer">
              <div className="tech-card-animated-bg"></div>
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <img 
                    src={imgPath} 
                    alt={name}
                    className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <p>{name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
