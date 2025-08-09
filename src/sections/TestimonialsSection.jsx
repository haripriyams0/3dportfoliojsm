import React, { useRef } from 'react'
import TitleHeader from '../components/TitleHeader'
import { testimonials } from '../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const TestimonialsSection = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const testimonialCards = gsap.utils.toArray('.testimonial-card');
    
    testimonialCards.forEach((card, index) => {
      gsap.fromTo(card, 
        {
          x: index % 2 === 0 ? -100 : 100,
          opacity: 0,
          rotation: index % 2 === 0 ? -5 : 5
        },
        {
          x: 0,
          opacity: 1,
          rotation: 0,
          duration: 1,
          delay: index * 0.15,
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
    <section id="testimonials" ref={sectionRef} className="w-full section-padding">
      <div className="w-full h-full">
        <TitleHeader 
          title="What Clients Say About My Work" 
          sub="Client Testimonials"
        />
        
        <div className="mt-16 grid-3-cols">
          {testimonials.map(({ name, mentions, review, imgPath }) => (
            <div key={name} className="testimonial-card card-border rounded-xl p-8 flex flex-col gap-6 group hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-4">
                <img 
                  src={imgPath} 
                  alt={name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-white text-xl font-semibold">{name}</h3>
                  <p className="text-blue-50 text-sm">{mentions}</p>
                </div>
              </div>
              
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <img 
                    key={i}
                    src="/images/gold-star.png" 
                    alt="star"
                    className="w-5 h-5"
                  />
                ))}
              </div>
              
              <p className="text-white-50 text-base leading-relaxed">
                "{review}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
