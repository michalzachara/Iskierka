const Terapia = () => {
  return (
    <section className="w-full p-6 pb-0 bg-gradient-to-b from-purple-50 to-orange-50 font-sans flex items-center justify-center" id="terapia">
      {/* Sekcja główna */}
      <div className="max-w-4xl w-full bg-transparent p-8 rounded-xl">
        {/* Nagłówek */}
        <h2 className="text-6xl font-bold text-indigo-900 mb-8 text-center animate-fadeIn">
          Terapia Dziecka
        </h2>

        {/* Opis */}
        <p className="text-xl text-gray-700 leading-relaxed mb-8 text-center animate-fadeIn delay-100">
          Terapia dziecka to szczególna forma wsparcia, która pomaga najmłodszym w radzeniu sobie z trudnościami
          emocjonalnymi, społecznymi i rozwojowymi. Iskierka specjalizuje się w pracy z dziećmi, wykorzystując metody
          dostosowane do ich wieku i potrzeb.
        </p>

        {/* Metody terapii i korzyści */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Metody terapii */}
          <div className="bg-orange-100 p-6 rounded-lg transform transition-all hover:scale-105 animate-fadeIn">
            <h3 className="text-3xl font-semibold text-indigo-900 mb-4">Metody terapii dziecka</h3>
            <ul className="list-disc list-inside text-gray-700 text-lg">
              <li className="mb-3">Terapia zabawą – wyrażanie emocji i nauka radzenia sobie z trudnościami.</li>
              <li className="mb-3">Arteterapia – wyrażanie uczuć i rozwijanie kreatywności poprzez sztukę.</li>
              <li className="mb-3">Terapia behawioralna – kształtowanie pozytywnych zachowań.</li>
              <li className="mb-3">Terapia sensoryczna – wsparcie w przetwarzaniu bodźców sensorycznych.</li>
            </ul>
          </div>

          {/* Korzyści z terapii */}
          <div className="bg-orange-100 p-6 rounded-lg transform transition-all hover:scale-105 animate-fadeIn ">
            <h3 className="text-3xl font-semibold text-indigo-900 mb-4">Korzyści z terapii dziecka</h3>
            <ul className="list-disc list-inside text-gray-700 text-lg">
              <li className="mb-3">Poprawa umiejętności komunikacyjnych i społecznych.</li>
              <li className="mb-3">Radzenie sobie z lękami, stresem i trudnymi emocjami.</li>
              <li className="mb-3">Wsparcie w rozwoju emocjonalnym i poznawczym.</li>
              <li className="mb-3">Budowanie pewności siebie i poczucia własnej wartości.</li>
            </ul>
          </div>
        </div>

        {/* Dodatkowy tekst */}
        <p className="text-xl text-gray-700 leading-relaxed mb-12 text-center animate-fadeIn delay-400">
          Pracujemy w ścisłej współpracy z rodzicami, aby zapewnić kompleksowe wsparcie dla całej rodziny. Wierzymy, że
          terapia dziecka to nie tylko pomoc dla najmłodszych, ale także wsparcie dla rodziców w ich roli.
        </p>

        {/* Terapia indywidualna i grupowa */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Terapia indywidualna */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg  duration-100 border border-indigo-100 transform transition-all hover:scale-105 animate-fadeIn">
            <h2 className="text-3xl font-semibold text-indigo-900 mb-4">Terapia Indywidualna</h2>
            <p className="text-gray-700 text-lg">
              Skoncentrowana na Twoich potrzebach, pomaga w rozwiązaniu problemów osobistych i emocjonalnych.
            </p>
          </div>

          {/* Terapia grupowa */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg  duration-300 border border-indigo-100 transform transition-all hover:scale-105 animate-fadeIn">
            <h2 className="text-3xl font-semibold text-indigo-900 mb-4">Terapia Grupowa</h2>
            <p className="text-gray-700 text-lg">
              Wsparcie w grupie osób o podobnych doświadczeniach, prowadzone przez doświadczonego terapeutę.
            </p>
          </div>
        </div>

        {/* Cytat */}
        <div className="bg-orange-100 p-8 rounded-lg text-center  animate-fadeIn delay-700">
          <p className="text-3xl text-indigo-900 font-semibold italic">
            "Terapia to podróż w głąb siebie, a my jesteśmy tu, aby Ci towarzyszyć."
          </p>
        </div>

        {/* Przycisk */}
        
      </div>
    </section>
  );
};
export default Terapia;