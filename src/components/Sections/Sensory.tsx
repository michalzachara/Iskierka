import { FaHands, FaEye, FaChild } from 'react-icons/fa'
import { FaEarDeaf } from 'react-icons/fa6'
import './Sensory.css'

const Sensory = () => {
	return (
		<section
			className="w-full h-auto bg-gradient-to-b from-teal-100 to-blue-50 py-12 px-4 sm:px-6 lg:px-8"
			id="integracja">
			{/* Nagłówek */}
			<div className="text-center max-w-3xl mx-auto mb-12 fade-in">
				<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-teal-900 mb-4">
					Czym jest integracja sensoryczna?
				</h1>
				<p className="text-lg sm:text-xl lg:text-2xl text-teal-700">
					poznaj informacje na temat integracji sensorycznej
				</p>
			</div>

			{/* Treść z kartami */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
				{/* Karta 1 */}
				<div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover-scale fade-in">
					<div className="flex justify-center mb-4">
						<FaHands className="text-4xl lg:text-5xl text-teal-600 rotate-icon" />
					</div>
					<h2 className="text-2xl lg:text-3xl font-bold text-teal-900 mb-4">Co to jest integracja sensoryczna?</h2>
					<p className="text-gray-700 lg:text-lg leading-relaxed mb-4">
						Integracja sensoryczna to proces, w którym mózg organizuje i interpretuje informacje zmysłowe (dotyk, wzrok,
						słuch, smak, węch, ruch) w celu efektywnego reagowania na otoczenie. Jest kluczowa dla rozwoju dziecka,
						ponieważ wpływa na umiejętności ruchowe, emocjonalne, społeczne i poznawcze.
					</p>
				</div>

				{/* Karta 2 */}
				<div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover-scale fade-in">
					<div className="flex justify-center mb-4">
						<FaEye className="text-4xl lg:text-5xl text-teal-600 rotate-icon" />
					</div>
					<h2 className="text-2xl lg:text-3xl font-bold text-teal-900 mb-4">Objawy zaburzeń integracji sensorycznej</h2>
					<p className="text-gray-700 lg:text-lg leading-relaxed mb-4">
						Zaburzenia integracji sensorycznej mogą objawiać się poprzez:
						<ul className="list-disc list-inside mt-2">
							<li>Nadwrażliwość na dźwięki, światło lub dotyk.</li>
							<li>Trudności z koncentracją i uczeniem się.</li>
							<li>Problemy z koordynacją ruchową.</li>
							<li>Niepokój lub wycofanie w nowych sytuacjach.</li>
							<li>Nadmierną ruchliwość lub przeciwnie — brak energii.</li>
						</ul>
					</p>
				</div>

				{/* Karta 3 */}
				<div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover-scale fade-in">
					<div className="flex justify-center mb-4">
						<FaEarDeaf className="text-4xl lg:text-5xl text-teal-600 rotate-icon" />
					</div>
					<h2 className="text-2xl lg:text-3xl font-bold text-teal-900 mb-4">Korzyści z terapii sensorycznej</h2>
					<p className="text-gray-700 lg:text-lg leading-relaxed mb-4">
						Terapia integracji sensorycznej może pomóc dziecku w:
						<ul className="list-disc list-inside mt-2">
							<li>Lepszym przetwarzaniu bodźców zmysłowych.</li>
							<li>Rozwijaniu umiejętności społecznych i emocjonalnych.</li>
							<li>Poprawie koncentracji i wyników w nauce.</li>
							<li>Zwiększeniu pewności siebie i samodzielności.</li>
						</ul>
					</p>
				</div>

				{/* Karta 4 */}
				<div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover-scale fade-in">
					<div className="flex justify-center mb-4">
						<FaChild className="text-4xl lg:text-5xl text-teal-600 rotate-icon" />
					</div>
					<h2 className="text-2xl lg:text-3xl font-bold text-teal-900 mb-4">Jak wygląda terapia sensoryczna?</h2>
					<p className="text-gray-700 lg:text-lg leading-relaxed mb-4">
						Terapia sensoryczna to indywidualnie dostosowane zajęcia, które obejmują:
						<ul className="list-disc list-inside mt-2">
							<li>Ćwiczenia stymulujące zmysły.</li>
							<li>Zabawy ruchowe i manualne.</li>
							<li>Techniki relaksacyjne i wyciszające.</li>
							<li>Gry i aktywności dostosowane do potrzeb dziecka.</li>
						</ul>
					</p>
				</div>

				{/* Karta 5 */}
				<div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover-scale fade-in">
					<div className="flex justify-center mb-4">
						<FaHands className="text-4xl lg:text-5xl text-teal-600 rotate-icon" />
					</div>
					<h2 className="text-2xl lg:text-3xl font-bold text-teal-900 mb-4">Znaczenie integracji sensorycznej</h2>
					<p className="text-gray-700 lg:text-lg leading-relaxed mb-4">
						Prawidłowa integracja sensoryczna pozwala dziecku na:
						<ul className="list-disc list-inside mt-2">
							<li>Lepsze radzenie sobie z codziennymi wyzwaniami.</li>
							<li>Rozwijanie umiejętności motorycznych i koordynacji.</li>
							<li>Budowanie pewności siebie i niezależności.</li>
							<li>Skuteczniejsze uczenie się i koncentrację.</li>
						</ul>
					</p>
				</div>

				{/* Karta 6 */}
				<div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover-scale fade-in">
					<div className="flex justify-center mb-4">
						<FaEye className="text-4xl lg:text-5xl text-teal-600 rotate-icon" />
					</div>
					<h2 className="text-2xl lg:text-3xl font-bold text-teal-900 mb-4">Dla kogo jest terapia sensoryczna?</h2>
					<p className="text-gray-700 lg:text-lg leading-relaxed mb-4">
						Terapia sensoryczna jest zalecana dla dzieci, które:
						<ul className="list-disc list-inside mt-2">
							<li>Mają trudności z koncentracją.</li>
							<li>Są nadpobudliwe lub wycofane.</li>
							<li>Mają problemy z koordynacją ruchową.</li>
							<li>Wykazują nadwrażliwość lub podwrażliwość na bodźce.</li>
						</ul>
					</p>
				</div>
			</div>
		</section>
	)
}

export default Sensory
