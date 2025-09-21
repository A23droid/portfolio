import emailjs from '@emailjs/browser';
import { motion } from 'motion/react';
import { useContext, useState, useEffect } from 'react';
import ReactGA from 'react-ga4';
import { ThemeContext } from '../App';

// Simple input sanitization function
const sanitizeInput = (input) => {
  return input.replace(/[<>&"']/g, '').trim();
};

// Email format validation
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState(null);
  const [errors, setErrors] = useState({});
  const { theme = 'light' } = useContext(ThemeContext);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!isValidEmail(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (formData.name.length > 100) newErrors.name = 'Name must be under 100 characters';
    if (formData.email.length > 100) newErrors.email = 'Email must be under 100 characters';
    if (formData.message.length > 1000) newErrors.message = 'Message must be under 1000 characters';
    
    // Debug: Log errors to verify state
    console.log('Validation Errors:', newErrors);
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (
      !import.meta.env.VITE_EMAILJS_SERVICE_ID ||
      !import.meta.env.VITE_EMAILJS_TEMPLATE_ID ||
      !import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ) {
      setToast({ type: 'error', message: 'Configuration error. Please try again later.' });
      return;
    }

    setIsLoading(true);
    const sanitizedData = {
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      message: sanitizeInput(formData.message),
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        sanitizedData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (res) => {
          setIsLoading(false);
          setFormData({ name: '', email: '', message: '' });
          setErrors({});
          setToast({ type: 'success', message: 'Message sent successfully!' });
          if (ReactGA.isInitialized) {
            ReactGA.event({
              category: 'Contact Form',
              action: 'Submit',
              label: sanitizedData.email,
            });
          }
        },
        (err) => {
          setIsLoading(false);
          const errorMessage = err.text?.includes('timeout')
            ? 'Request timed out. Please try again.'
            : err.text?.includes('invalid')
            ? 'Invalid configuration. Please try again later.'
            : 'Could not send message. Try again later.';
          setToast({ type: 'error', message: errorMessage });
        }
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  // return (
  //   <section
  //     id="contact"
  //     className={`py-20 px-6 relative overflow-hidden ${
  //       theme === 'dark' ? 'bg-[#1c1c1c]' : 'bg-[#fafafa]'
  //     } sm:px-4 md:px-8 lg:px-12`}
  //     style={{ background: 'transparent', zIndex: 0 }}
  //   >
  //     <div className="absolute inset-0 opacity-10 pointer-events-none">
  //       <svg width="100%" height="100%" fill="none" stroke="currentColor">
  //         <path d="M0 50H200M50 0V200" strokeWidth="2" />
  //       </svg>
  //     </div>

  //     <motion.h2
  //       initial={{ opacity: 0 }}
  //       animate={{ opacity: 1 }}
  //       transition={{ duration: 0.5 }}
  //       className={`text-4xl font-bold text-center mb-12 ${
  //         theme === 'dark' ? 'text-[#b8f2e6]' : 'text-[#5e6472]'
  //       }`}
  //     >
  //       Contact
  //     </motion.h2>

  //     <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
  //       <motion.div
  //         initial={{ opacity: 0, x: -50 }}
  //         animate={{ opacity: 1, x: 0 }}
  //         transition={{ duration: 0.5 }}
  //         className="space-y-4"
  //       >
  //         <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-[#b8f2e6]' : 'text-[#5e6472]'}`}>
  //           Get in Touch
  //         </h3>
  //         <p className={theme === 'dark' ? 'text-[#aed9e0]' : 'text-[#5e6472]'}>Phone: (123) 456-7890</p>
  //         <p className={theme === 'dark' ? 'text-[#aed9e0]' : 'text-[#5e6472]'}>
  //           Email: <a href="mailto:john.doe@example.com">john.doe@example.com</a>
  //         </p>
  //         <div className="flex space-x-4">
  //           <motion.a
  //             href="#"
  //             whileHover={{ scale: 1.1 }}
  //             className={theme === 'dark' ? 'text-[#b8f2e6]' : 'text-[#5e6472]'}
  //             aria-label="Social media link"
  //           >
  //             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
  //               <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
  //             </svg>
  //           </motion.a>
  //         </div>
  //       </motion.div>

  //       <form onSubmit={handleSubmit} className="space-y-4" noValidate>
  //         {['Name', 'Email', 'Message'].map((label) => (
  //           <motion.div key={label} className="relative">
  //             <label
  //               htmlFor={label.toLowerCase()}
  //               className={`block text-sm mb-1 ${theme === 'dark' ? 'text-[#b8f2e6]' : 'text-[#5e6472]'}`}
  //             >
  //               {label}
  //             </label>
  //             {label !== 'Message' ? (
  //               <motion.input
  //                 whileFocus={{ borderColor: '#ffa69e' }}
  //                 type={label.toLowerCase() === 'email' ? 'email' : 'text'}
  //                 id={label.toLowerCase()}
  //                 placeholder={label}
  //                 name={label.toLowerCase()}
  //                 value={formData[label.toLowerCase()]}
  //                 onChange={handleChange}
  //                 className={`w-full p-3 border rounded-lg focus:outline-none ${
  //                   theme === 'dark'
  //                     ? errors[label.toLowerCase()]
  //                       ? 'border-red-500 bg-[#5e6472] text-[#b8f2e6]'
  //                       : 'border-[#b8f2e6] bg-[#5e6472] text-[#b8f2e6]'
  //                     : errors[label.toLowerCase()]
  //                     ? 'border-red-500 bg-[#faf3dd] text-[#5e6472]'
  //                     : 'border-[#aed9e0] bg-[#faf3dd] text-[#5e6472]'
  //                 }`}
  //                 style={errors[label.toLowerCase()] ? { border: '2px solid #ef4444' } : {}}
  //                 aria-invalid={!!errors[label.toLowerCase()]}
  //                 aria-describedby={`${label.toLowerCase()}-error`}
  //                 required
  //               />
  //             ) : (
  //               <motion.textarea
  //                 whileFocus={{ borderColor: '#ffa69e' }}
  //                 id="message"
  //                 placeholder={label}
  //                 rows="4"
  //                 name="message"
  //                 value={formData.message}
  //                 onChange={handleChange}
  //                 className={`w-full p-3 border rounded-lg focus:outline-none ${
  //                   theme === 'dark'
  //                     ? errors.message
  //                       ? 'border-red-500 bg-[#5e6472] text-[#b8f2e6]'
  //                       : 'border-[#b8f2e6] bg-[#5e6472] text-[#b8f2e6]'
  //                     : errors.message
  //                     ? 'border-red-500 bg-[#faf3dd] text-[#5e6472]'
  //                     : 'border-[#aed9e0] bg-[#faf3dd] text-[#5e6472]'
  //                 }`}
  //                 style={errors.message ? { border: '2px solid #ef4444' } : {}}
  //                 aria-invalid={!!errors.message}
  //                 aria-describedby="message-error"
  //                 required
  //               />
  //             )}
  //             {errors[label.toLowerCase()] && (
  //               <p id={`${label.toLowerCase()}-error`} className="text-red-500 text-sm mt-1">
  //                 {errors[label.toLowerCase()]}
  //               </p>
  //             )}
  //           </motion.div>
  //         ))}

  //         <motion.button
  //           type="submit"
  //           whileHover={{ scale: 1.05, boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}
  //           whileTap={{ scale: 0.95 }}
  //           disabled={isLoading}
  //           className={`px-6 py-3 rounded-lg ${
  //             theme === 'dark' ? 'bg-[#b8f2e6] text-[#5e6472]' : 'bg-[#ffa69e] text-[#5e6472]'
  //           } ${isLoading ? 'opacity-60 cursor-not-allowed' : ''}`}
  //           aria-label="Send message"
  //         >
  //           {isLoading ? 'Sending...' : 'Send Message'}
  //         </motion.button>
  //       </form>

  //       {toast && (
  //         <motion.div
  //           initial={{ opacity: 0, y: 50 }}
  //           animate={{ opacity: 1, y: 0 }}
  //           exit={{ opacity: 0, y: 50 }}
  //           className={`fixed bottom-5 right-5 px-4 py-3 rounded shadow-lg ${
  //             toast.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
  //           }`}
  //           role="alert"
  //         >
  //           {toast.message}
  //         </motion.div>
  //       )}
  //     </div>
  //   </section>
  // );

  return (
    <section
      id="contact"
      className={`py-20 px-6 relative overflow-hidden ${
        theme === 'dark' ? 'bg-[#1c1c1c]' : 'bg-[#fafafa]'
      } sm:px-4 md:px-8 lg:px-12`}
      style={{ background: 'transparent', zIndex: 0 }}
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" fill="none" stroke="currentColor">
          <path d="M0 50H200M50 0V200" strokeWidth="2" />
        </svg>
      </div>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`text-4xl font-bold text-center mb-12 ${
          theme === 'dark' ? 'text-[#b8f2e6]' : 'text-[#5e6472]'
        }`}
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
          <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-[#b8f2e6]' : 'text-[#5e6472]'}`}>
            Get in Touch
          </h3>
          <p className={theme === 'dark' ? 'text-[#aed9e0]' : 'text-[#5e6472]'}>Phone: (123) 456-7890</p>
          <p className={theme === 'dark' ? 'text-[#aed9e0]' : 'text-[#5e6472]'}>
            Email: <a href="mailto:john.doe@example.com">john.doe@example.com</a>
          </p>
          <div className="flex space-x-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              className={theme === 'dark' ? 'text-[#b8f2e6]' : 'text-[#5e6472]'}
              aria-label="Social media link"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
              </svg>
            </motion.a>
          </div>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          {['Name', 'Email', 'Message'].map((label) => (
            <motion.div key={label} className="relative">
              <label
                htmlFor={label.toLowerCase()}
                className={`block text-sm mb-1 ${theme === 'dark' ? 'text-[#b8f2e6]' : 'text-[#5e6472]'}`}
              >
                {label}
              </label>
              {label !== 'Message' ? (
                <motion.input
                  whileFocus={{ borderColor: '#ffa69e' }}
                  type={label.toLowerCase() === 'email' ? 'email' : 'text'}
                  id={label.toLowerCase()}
                  placeholder={label}
                  name={label.toLowerCase()}
                  value={formData[label.toLowerCase()]}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg focus:outline-none ${
                    theme === 'dark'
                      ? errors[label.toLowerCase()]
                        ? 'border-red-500 bg-[#5e6472] text-[#b8f2e6]'
                        : 'border-[#b8f2e6] bg-[#5e6472] text-[#b8f2e6]'
                      : errors[label.toLowerCase()]
                      ? 'border-red-500 bg-[#ffffff] text-[#5e6472]'
                      : 'border-[#5e6472] bg-[#ffffff] text-[#5e6472]'
                  }`}
                  style={errors[label.toLowerCase()] ? { border: '2px solid #ef4444' } : {}}
                  aria-invalid={!!errors[label.toLowerCase()]}
                  aria-describedby={`${label.toLowerCase()}-error`}
                  required
                />
              ) : (
                <motion.textarea
                  whileFocus={{ borderColor: '#ffa69e' }}
                  id="message"
                  placeholder={label}
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg focus:outline-none ${
                    theme === 'dark'
                      ? errors.message
                        ? 'border-red-500 bg-[#5e6472] text-[#b8f2e6]'
                        : 'border-[#b8f2e6] bg-[#5e6472] text-[#b8f2e6]'
                      : errors.message
                      ? 'border-red-500 bg-[#ffffff] text-[#5e6472]'
                      : 'border-[#5e6472] bg-[#ffffff] text-[#5e6472]'
                  }`}
                  style={errors.message ? { border: '2px solid #ef4444' } : {}}
                  aria-invalid={!!errors.message}
                  aria-describedby="message-error"
                  required
                />
              )}
              {errors[label.toLowerCase()] && (
                <p id={`${label.toLowerCase()}-error`} className="text-red-500 text-sm mt-1">
                  {errors[label.toLowerCase()]}
                </p>
              )}
            </motion.div>
          ))}

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05, boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}
            whileTap={{ scale: 0.95 }}
            disabled={isLoading}
            className={`px-6 py-3 rounded-lg ${
              theme === 'dark' ? 'bg-[#b8f2e6] text-[#5e6472]' : 'bg-[#aed9e0] text-[#5e6472]'
            } ${isLoading ? 'opacity-60 cursor-not-allowed' : ''}`}
            aria-label="Send message"
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </motion.button>
        </form>

        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className={`fixed bottom-5 right-5 px-4 py-3 rounded shadow-lg ${
              toast.type === 'success' ? 'bg-[#aed9e0] text-white' : 'bg-[#ffa69e] text-white'
            }`}
            role="alert"
          >
            {toast.message}
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default Contact;