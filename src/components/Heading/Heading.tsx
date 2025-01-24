import './Header.css'

const Heading = () => {
	return (
		<header className="mt-24 w-full h-[40em] bg-teal-200 flex justify-center items-center bg-[url('/header/img2.jpg')] bg-cover relative z-10 overflow-hidden">
			<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/50 to-black/70 -z-10"></div>

			<div className="h-[20em] flex flex-col items-center justify-evenly z-30 xs:gap-20 md:gap-7 lg:gap-10 text-center">
				<h1 className="xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xs:ml-2 font-medium text-white animate-fade-in-up delay-100">
					Centrum Wspierania Rozwoju Dziecka
				</h1>
				<h1 className="xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold animated-gradient animate-fade-in-up delay-200">
					ISKIERKA WNM
				</h1>
				<h1 className="xs:text-2xl sm:text-3xl md:text-4xl lg-text-5xl font-medium text-white animate-fade-in-up delay-300 xs:mr-5">
					W Brzesku
				</h1>
			</div>

			<div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/30 to-transparent z-40 animate-slide-up"></div>
		</header>
	)
}
export default Heading
