import emailjs from '@emailjs/browser';
import { motion } from 'motion/react';
import { useContext, useState } from 'react';
import { ThemeContext } from '../App';

function Contact() {
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
    const [isLoading, setIsLoading] = useState(false);
    const [toast, setToast] = useState(null);  // null | { type: 'success' | 'error', message: string }

    const {theme} = useContext(ThemeContext);

    const handleSubmit = (e) => {
      e.preventDefault();
      setIsLoading(true);
      
      emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then((res) => {
        setIsLoading(false);
        console.log("Email sent: ", res.text);
        setFormData({name: '', email: '', message: ''});
        setToast({ type: 'success', message: 'Message sent successfully!' });
      }, (err) => {
        setIsLoading(false);
        console.log("Error sending email: ", err.text);
        setToast({ type: 'error', message: 'Could not send message. Try again later.' });
      });
    };

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section
  id="contact"
  className={`py-20 px-6 relative overflow-hidden ${
    theme === "dark" ? "bg-[#1c1c1c]" : "bg-[#fafafa]"
  }`}
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
      theme === "dark" ? "text-[#b8f2e6]" : "text-[#5e6472]"
    }`}
  >
    Contact
  </motion.h2>

  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
    {/* Contact info */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      <h3 className={`text-2xl font-bold ${theme === "dark" ? "text-[#b8f2e6]" : "text-[#5e6472]"}`}>
        Get in Touch
      </h3>
      <p className={theme === "dark" ? "text-[#aed9e0]" : "text-[#5e6472]"}>Phone: (123) 456-7890</p>
      <p className={theme === "dark" ? "text-[#aed9e0]" : "text-[#5e6472]"}>Email: john.doe@example.com</p>
      <div className="flex space-x-4">
        <motion.a
          href="#"
          whileHover={{ scale: 1.1 }}
          className={theme === "dark" ? "text-[#b8f2e6]" : "text-[#5e6472]"}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
          </svg>
        </motion.a>
      </div>
    </motion.div>

    {/* Contact form */}
   <form onSubmit={handleSubmit} className="space-y-4">
  {["Name", "Email", "Message"].map((label) => (
    <motion.div key={label} className="relative">
      {label !== "Message" ? (
        <motion.input
          whileFocus={{ borderColor: "#ffa69e" }}
          type={label.toLowerCase() === "email" ? "email" : "text"}
          placeholder={label}
          name={label.toLowerCase()}
          value={formData[label.toLowerCase()]}
          onChange={handleChange}
          className={`w-full p-3 border rounded-lg focus:outline-none ${
            theme === "dark"
              ? "border-[#b8f2e6] bg-[#5e6472] text-[#b8f2e6]"
              : "border-[#aed9e0] bg-[#faf3dd] text-[#5e6472]"
          }`}
        />
      ) : (
        <motion.textarea
          whileFocus={{ borderColor: "#ffa69e" }}
          placeholder={label}
          rows="4"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={`w-full p-3 border rounded-lg focus:outline-none ${
            theme === "dark"
              ? "border-[#b8f2e6] bg-[#5e6472] text-[#b8f2e6]"
              : "border-[#aed9e0] bg-[#faf3dd] text-[#5e6472]"
          }`}
        />
      )}
    </motion.div>
  ))}

    <motion.button
    type="submit"
    whileHover={{ scale: 1.05, boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}
    whileTap={{ scale: 0.95 }}
    disabled={isLoading}
    className={`px-6 py-3 rounded-lg ${theme === "dark" ? "bg-[#b8f2e6] text-[#5e6472]" : "bg-[#ffa69e] text-[#5e6472]"} ${isLoading ? "opacity-60 cursor-not-allowed" : ""}`}
  >
    {isLoading ? 'Sending...' : 'Send Message'}
  </motion.button>

</form>

   {/* Toast notification */}
    {toast && (
      <div
        className={`fixed bottom-5 right-5 px-4 py-3 rounded shadow-lg ${
          toast.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
        }`}
      >
        {toast.message}
      </div>
    )}
  </div>
</section>

  );
}

export default Contact;