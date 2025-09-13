// components/Contact.jsx
import { motion } from 'motion/react';

function Contact() {
  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden bg-[#faf3dd] dark:bg-[#5e6472]">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" fill="none" stroke="currentColor">
          <path d="M0 50H200M50 0V200" strokeWidth="2" />
        </svg>
      </div>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-[#5e6472] dark:text-[#b8f2e6] text-center mb-12"
      >
        Contact
      </motion.h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h3 className="text-2xl font-bold text-[#5e6472] dark:text-[#b8f2e6]">Get in Touch</h3>
          <p className="text-[#5e6472] dark:text-[#aed9e0]">Phone: (123) 456-7890</p>
          <p className="text-[#5e6472] dark:text-[#aed9e0]">Email: john.doe@example.com</p>
          <div className="flex space-x-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              className="text-[#5e6472] dark:text-[#b8f2e6]"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <div className="relative">
            <motion.input
              whileFocus={{ borderColor: '#ffa69e' }}
              type="text"
              placeholder="Name"
              className="w-full p-3 border border-[#aed9e0] dark:border-[#b8f2e6] rounded-lg focus:outline-none bg-[#faf3dd] dark:bg-[#5e6472] text-[#5e6472] dark:text-[#b8f2e6]"
            />
          </div>
          <div className="relative">
            <motion.input
              whileFocus={{ borderColor: '#ffa69e' }}
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-[#aed9e0] dark:border-[#b8f2e6] rounded-lg focus:outline-none bg-[#faf3dd] dark:bg-[#5e6472] text-[#5e6472] dark:text-[#b8f2e6]"
            />
          </div>
          <div className="relative">
            <motion.textarea
              whileFocus={{ borderColor: '#ffa69e' }}
              placeholder="Message"
              className="w-full p-3 border border-[#aed9e0] dark:border-[#b8f2e6] rounded-lg focus:outline-none bg-[#faf3dd] dark:bg-[#5e6472] text-[#5e6472] dark:text-[#b8f2e6]"
              rows="4"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-[#ffa69e] dark:bg-[#b8f2e6] text-[#5e6472] dark:text-[#5e6472] rounded-lg"
          >
            Send Message
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;