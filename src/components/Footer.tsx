import { motion } from 'framer-motion';

const Footer = () => {
  // Animacje
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.2, // Opóźnienie między animacjami dzieci
      },
    },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      variants={staggerContainer}
      viewport={{ once: true }}
      className="bg-purple-900 text-white py-12"
    >
      <div className="container mx-auto px-6">
        {/* Górna sekcja stopki */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {/* Sekcja 1: Informacje kontaktowe */}
          <motion.div variants={fadeInUp} className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">Kontakt</h3>
            <ul className="space-y-2">
              <li>ul. Terapeutyczna 123, 00-001 Warszawa</li>
              <li>+48 123 456 789</li>
              <li>kontakt@iskierka.pl</li>
            </ul>
          </motion.div>

          {/* Sekcja 2: Linki szybkiego dostępu */}
          <motion.div variants={fadeInUp} className="text-center">
            <h3 className="text-2xl font-bold mb-4">Szybkie linki</h3>
            <ul className="space-y-2">
              <li>
                <a href="#integracja" className="hover:text-purple-300 transition-colors">
                  Integracja
                </a>
              </li>
              <li>
                <a href="#iskierka" className="hover:text-purple-300 transition-colors">
                  Iskierka
                </a>
              </li>
              <li>
                <a href="#terapia" className="hover:text-purple-300 transition-colors">
                  Terapia
                </a>
              </li>
              <li>
                <a href="#kontakt" className="hover:text-purple-300 transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Sekcja 3: Social media */}
          <motion.div variants={fadeInUp} className="text-center md:text-right">
            <h3 className="text-2xl font-bold mb-4">Social media</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-300 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8"
                >
                  <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.19 2.24.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7c4.78-.75 8.44-4.9 8.44-9.9 0-5.53-4.5-10.02-10-10.02z" />
                </svg>
              </a>
             
            </div>
          </motion.div>
        </motion.div>

        {/* Sekcja copyright */}
        <motion.div
          variants={fadeInUp}
          className="text-center border-t border-purple-700 pt-8"
        >
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Iskierka Brzesko. Wszystkie prawa zastrzeżone.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;