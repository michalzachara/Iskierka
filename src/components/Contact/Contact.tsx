import { motion } from 'framer-motion';

const Contact = () => {
  // Definicje animacji
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
    <section className="w-full p-6 bg-orange-50 font-sans flex items-center justify-center" id="kontakt">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true }}
        className="max-w-4xl w-full bg-orange-50 p-8 rounded-xl"
      >
        {/* Nagłówek */}
        <motion.h2
          variants={fadeInUp}
          className="text-5xl font-bold text-purple-900 mb-4 text-center"
        >
          Kontakt
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-xl text-gray-700 mb-8 text-center"
        >
          Umów się na terapię lub konsultację
        </motion.p>

        {/* Dane kontaktowe */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {/* Lewa kolumna - Informacje kontaktowe */}
          <motion.div
            variants={fadeInUp}
            className="bg-gradient-to-br from-orange-100 to-purple-100 p-6 rounded-lg"
          >
            <h3 className="text-2xl font-semibold text-purple-900 mb-4">Dane kontaktowe</h3>
            <ul className="text-gray-700 text-lg space-y-4">
              <li>
                <strong>Telefon:</strong> +48 123 456 789
              </li>
              <li>
                <strong>E-mail:</strong> kontakt@iskierka.pl
              </li>
              <li>
                <strong>Adres:</strong> ul. Terapeutyczna 123, 00-001 Warszawa
              </li>
              <li>
                <strong>Godziny otwarcia:</strong> Poniedziałek - Piątek, 8:00 - 18:00
              </li>
            </ul>
          </motion.div>

          {/* Prawa kolumna - Mapa Google */}
          <motion.div
            variants={fadeInUp}
            className="bg-gradient-to-br from-orange-100 to-purple-100 p-6 rounded-lg"
          >
            <h3 className="text-2xl font-semibold text-purple-900 mb-4">Lokalizacja</h3>
            <div className="overflow-hidden rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.600634816468!2d21.01221531579683!3d52.22967597976101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72a9c6e6d8f7a8a1!2sPa%C5%82ac%20Kultury%20i%20Nauki!5e0!3m2!1spl!2spl!4v1622541234567!5m2!1spl!2spl"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Mapa lokalizacji"
              ></iframe>
            </div>
          </motion.div>
        </motion.div>

        {/* Przycisk */}
        <motion.div
          variants={fadeInUp}
          className="text-center"
        >
          <a href="tel:+48123456789">

          <button className="bg-orange-400 text-white px-12 py-4 rounded-lg hover:bg-orange-500  duration-300 text-lg font-semibold transform transition-all hover:scale-105">
            Zadzwoń
          </button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;