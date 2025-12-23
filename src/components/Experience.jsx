import { motion } from 'framer-motion';
import { useContext } from 'react';
import { ThemeContext } from '../App';

function Experience() {
  const { theme } = useContext(ThemeContext);

  const accentColor = theme === 'dark' ? '#b8f2e6' : '#5e6472';
  const secondaryText = theme === 'dark' ? '#aed9e0' : '#5e6472';
  const cardBg = theme === 'dark' ? 'bg-[#5e6472]/50' : 'bg-[#ffffff]';

  const experience = {
    title: 'SWE Intern',
    company: 'Labdox',
    period: 'Nov 2025 – Present',
    description: [
      'Developed and maintained production frontend components using HTML, CSS, and JavaScript.',
      'Built responsive, mobile-first interfaces and implemented UI enhancements focused on usability and performance.',
      'Translated product and design requirements into functional, user-facing features.',
      'Collaborated remotely in a fast-paced startup environment to deliver features within tight timelines.',
    ],
  };

  return (
    <section
      id="experience"
      className={`py-20 px-6 relative ${
        theme === 'dark' ? 'bg-[#1c1c1c]' : 'bg-[#fafafa]'
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`text-4xl md:text-5xl font-bold mb-12 text-center tracking-tight`}
          style={{ color: accentColor }}
        >
          Experience
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          whileHover={{ scale: 1.02, rotate: 0.5 }}
          className={`relative overflow-hidden backdrop-blur-sm p-7 md:p-9 rounded-xl shadow-lg border border-transparent ${cardBg}`}
        >
          {/* Subtle diagonal pattern background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg width="100%" height="100%" fill="none" stroke="currentColor">
              <path d="M0 0L200 200M200 0L0 200" strokeWidth="2" />
            </svg>
          </div>

          {/* Content */}
          <div className="relative z-10">
            {/* Title & Period */}
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-4 mb-6">
              <h3
                className="text-2xl md:text-3xl font-bold tracking-tight"
                style={{ color: accentColor }}
              >
                {experience.title}
              </h3>

              <div
                className={`text-sm font-medium px-4 py-1.5 rounded-full self-start sm:self-auto ${
                  theme === 'dark' ? 'bg-[#b8f2e6]/20' : 'bg-[#5e6472]/10'
                }`}
                style={{ color: accentColor }}
              >
                {experience.period}
              </div>
            </div>

            {/* Company */}
            <p
              className="text-xl font-medium mb-7"
              style={{ color: accentColor }}
            >
              {experience.company}
            </p>

            {/* Description */}
            <ul className="space-y-4">
              {experience.description.map((point, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  className="flex items-start gap-3.5"
                >
                  <span
                    className="mt-2 block w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: accentColor }}
                  />
                  <span
                    className="text-base leading-relaxed"
                    style={{ color: secondaryText }}
                  >
                    {point}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;