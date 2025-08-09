import React, { useRef, useState } from 'react'
import TitleHeader from '../components/TitleHeader'
import { socialImgs } from '../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useGSAP(() => {
    gsap.fromTo('.contact-form', 
      {
        x: -50,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '.contact-form',
          start: "top 85%",
        }
      }
    );

    gsap.fromTo('.contact-info', 
      {
        x: 50,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: '.contact-info',
          start: "top 85%",
        }
      }
    );

    const socialIcons = gsap.utils.toArray('.social-icon');
    socialIcons.forEach((icon, index) => {
      gsap.fromTo(icon, 
        {
          y: 30,
          opacity: 0,
          scale: 0.8
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          delay: index * 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: icon,
            start: "top 90%",
          }
        }
      );
    });
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" ref={sectionRef} className="w-full section-padding">
      <div className="w-full h-full">
        <TitleHeader 
          title="Let's Work Together" 
          sub="Get in Touch"
        />
        
        <div className="mt-16 grid-2-cols gap-16">
          {/* Contact Form */}
          <div className="contact-form">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="w-full">
                Send Message
                <img src="/images/arrow-right.svg" alt="arrow" className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info space-y-8">
            <div className="card-border rounded-xl p-8">
              <h3 className="text-white text-2xl font-semibold mb-4">Let's Connect</h3>
              <p className="text-white-50 text-lg mb-6">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">📧</span>
                  </div>
                  <span className="text-white-50">vishnu.portfolio@example.com</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">📍</span>
                  </div>
                  <span className="text-white-50">Bengaluru, India</span>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="card-border rounded-xl p-8">
              <h4 className="text-white text-xl font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialImgs.map(({ name, url, imgPath }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon bg-black-100 border border-black-50 rounded-xl size-12 flex items-center justify-center hover:bg-black-50 transition-all duration-300"
                  >
                    <img src={imgPath} alt={name} className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
