import { useState, useEffect } from 'react'; // Dodaj useEffect
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';
// import { FaMoon } from "react-icons/fa";
import Link from './Link'; // Import the Link component
import './Navbar.css';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [activeLink, setActiveLink] = useState<string>('home'); 
	const links : string[] = ['integracja', 'iskierka', 'terapia', 'kontakt'];

	// Blokowanie przewijania strony, gdy menu jest otwarte
	useEffect(() => {
		if (isOpen) {
			document.body.classList.add('no-scroll');
		} else {
			document.body.classList.remove('no-scroll');
		}

		// Cleanup: Usuń klasę, gdy komponent jest odmontowywany
		return () => {
			document.body.classList.remove('no-scroll');
		};
	}, [isOpen]);

	const handleLinkClick = (type: string) => {
		setActiveLink(type); // Update the active link
		setIsOpen(false); // Close the mobile menu if open
	};

	return (
		<>
			<nav className="w-full fixed top-0 h-24 bg-gray-100 z-30 flex md:justify-around xs:justify-between items-center shadow-md">
				<div className="xs:ml-10 xs:text-2xl md:text-3xl font-bold animated-gradient">
				<a href="">ISKIERKA WNM</a>
				</div>
				<div className="md:flex xs:hidden justify-between gap-10">
					{
						links.map((link) => (
							<Link
								key={link}
								href={`#${link}`}
								dataType={link}
								activeLink={activeLink}
								onClick={handleLinkClick}
								child={link.charAt(0).toUpperCase() + link.slice(1)} 
							/>
						))
					}
				</div>
					{/* <FaMoon size={25}/> */}
				<div className="md:hidden cursor-pointer duration-75 transition-all hover:scale-110 xs:mr-10">
					<RxHamburgerMenu onClick={() => setIsOpen(true)} size={35} className="text-[#0087ca]" />
				</div>
			</nav>

			{/* Mobile Menu */}
			<div
				className={`md:hidden fixed top-0 right-0 w-full h-full bg-gray-100/95 backdrop-blur-sm backdrop-opacity-95 flex flex-col justify-center items-center gap-16 z-40 transition-all duration-300 ease-in-out ${
					isOpen ? 'translate-x-0' : 'translate-x-full'
				}`}
			>
				<IoClose
					onClick={() => setIsOpen(false)}
					size={40}
					className="cursor-pointer text-[#0087ca] absolute top-7 right-10 hover:rotate-90 transition-transform duration-300"
				/>
				{
					links.map((link) => (
						<Link
							key={link+"1"}
							href={`#${link}`}
							dataType={link}
							activeLink={activeLink}
							onClick={handleLinkClick}
							child={link.charAt(0).toUpperCase() + link.slice(1)} 
							isMobile
						/>
					))
				}
			</div>
			{isOpen && (
				<div
					className="md:hidden fixed top-0 left-0 w-full h-full bg-black/30 backdrop-blur-sm z-10"
					onClick={() => setIsOpen(false)}
				/>
			)}
		</>
	);
};

export default Navbar;