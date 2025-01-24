import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/swiper-bundle.css';


const Iskierka = () => {
	// Animacje
	const fadeInUp = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
	}

	// const fadeIn = {
	//   hidden: { opacity: 0 },
	//   visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
	// };

	const staggerChildren = {
		visible: { transition: { staggerChildren: 0.3 } },
	}

	const scaleUp = {
		hidden: { scale: 0.9, opacity: 0 },
		visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
	}

	// Przykładowe zdjęcia do slidera
	const images = [
		'/header/img3.jpg', // Upewnij się, że ścieżki są poprawne
		'/header/img3.jpg', // Upewnij się, że ścieżki są poprawne
		'/header/img3.jpg', // Upewnij się, że ścieżki są poprawne
	]

	return (
		<section
			className="w-full mx-auto p-6 pb-0 bg-gradient-to-b from-blue-50 to-purple-50 rounded-xl shadow-lg font-sans"
			id="iskierka">
			{/* Nagłówek */}
			<motion.h1
				initial="hidden"
				whileInView="visible"
				variants={fadeInUp}
				viewport={{ once: true }}
				className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 text-center mb-8">
				Iskierka Brzesko
			</motion.h1>

			{/* Kontener z dwoma kolumnami: slider i opis */}
			<div className="flex flex-col md:flex-row gap-8 items-center xl:ml-[20%] xl:mr-[20%]">
				{/* Slider */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					variants={scaleUp}
					viewport={{ once: true }}
					className="w-full md:w-1/2 h-64 md:h-96 overflow-hidden rounded-lg shadow-lg">
					<Swiper
						modules={[Autoplay, Pagination, Navigation]}
						spaceBetween={30}
						slidesPerView={1}
						autoplay={{ delay: 3000, disableOnInteraction: false }}
						pagination={{ clickable: true }}
						navigation
						loop
						className="w-full h-full">
						{images.map((src, index) => (
							<SwiperSlide key={index}>
								<motion.img
									src={src}
									alt={`Slide ${index + 1}`}
									className="w-full h-full object-cover"
									whileHover={{ scale: 1.05 }}
									transition={{ duration: 0.3 }}
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</motion.div>

				{/* Opis miejsca */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					variants={staggerChildren}
					viewport={{ once: true }}
					className="w-full md:w-1/2 space-y-6">
					<motion.p
						variants={fadeInUp}
						className="text-xl text-gray-800 leading-loose bg-gradient-to-r from-purple-100 to-indigo-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-purple-500">
						<span className="font-bold text-purple-900">Witaj w Iskierce</span> – miejscu, gdzie terapia sensoryczna
						pomaga dzieciom lepiej radzić sobie z wyzwaniami dnia codziennego. Poprawiamy koncentrację, koordynację
						ruchową i umiejętności społeczne.
					</motion.p>

					<motion.p
						variants={fadeInUp}
						className="text-xl text-gray-800 leading-loose bg-gradient-to-r from-indigo-100 to-purple-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-indigo-500">
						Pracujemy z dziećmi z nadwrażliwością lub podwrażliwością sensoryczną, zaburzeniami SI, autyzmem i ADHD.
						Dzięki indywidualnym ćwiczeniom i zabawom sensorycznym wspieramy ich rozwój.
					</motion.p>

					<motion.p
						variants={fadeInUp}
						className="text-xl text-gray-800 leading-loose bg-gradient-to-r from-purple-100 to-indigo-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-purple-500">
						Wykorzystujemy metody takie jak integracja sensoryczna, ćwiczenia proprioceptywne i terapię ruchową. Każde
						dziecko traktujemy indywidualnie, dostosowując program do jego potrzeb.
					</motion.p>
				</motion.div>
			</div>
			<div className="text-center animate-fadeIn delay-800 mt-10 mb-0">
				<a href="#kontakt">
					<button className="bg-purple-900 text-white px-16 py-5 rounded-lg hover:bg-purple-800  duration-300 text-xl font-semibold transform transition-all hover:scale-105">
						Umów się na konsultację
					</button>
				</a>
			</div>
		</section>
	)
}

export default Iskierka
