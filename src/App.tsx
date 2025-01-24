import Navbar from "./components/Navbar/Navbar"
import Heading from "./components/Heading/Heading"
import Sensory from "./components/Sections/Sensory"
import Contact from "./components/Contact/Contact"
import Iskierka from "./components/Sections/Iskierka" 
import Terapia from "./components/Sections/Terapia"

const App = () => {
  return (
    <>
      <Navbar />
      <Heading />
      <main className=" bg-gray-200 w-full  flex flex-col justify-start items-center">
        <Sensory />
        <Iskierka />
        <Terapia />
        <Contact />
      </main>
    </>
  )
}
export default App
