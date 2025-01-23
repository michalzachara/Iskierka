import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';
import Link from './Link'; // Import the Link component

const Navbar = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [activeLink, setActiveLink] = useState<string>('home'); // Default active link

	const handleLinkClick = (type: string) => {
		setActiveLink(type); // Update the active link
		setIsOpen(false); // Close the mobile menu if open
	};

	return (
		<>
			<nav className="w-full h-24 bg-gray-100 z-30 flex md:justify-around xs:justify-between items-center shadow-md">
				{/* Animowany gradient w tekście "ISKIERKA WNM" */}
				<div className="xs:ml-10 xs:text-2xl md:text-3xl font-bold animated-gradient">
					ISKIERKA WNM
				</div>
				<div className="md:flex xs:hidden justify-between gap-10">
					<Link
						href="#"
						dataType="home"
						activeLink={activeLink}
						onClick={handleLinkClick}
						child="Home" // Use the `child` prop
					/>
					<Link
						href="#about"
						dataType="about"
						activeLink={activeLink}
						onClick={handleLinkClick}
						child="About" // Use the `child` prop
					/>
					<Link
						href="#therapy"
						dataType="therapy"
						activeLink={activeLink}
						onClick={handleLinkClick}
						child="Therapy" // Use the `child` prop
					/>
					<Link
						href="#contact"
						dataType="contact"
						activeLink={activeLink}
						onClick={handleLinkClick}
						child="Contact" // Use the `child` prop
					/>
				</div>
				<div className="md:hidden cursor-pointer duration-75 transition-all hover:scale-110 xs:mr-10">
					<RxHamburgerMenu onClick={() => setIsOpen(true)} size={35} className="text-[#0087ca]" />
				</div>
			</nav>

			{/* Mobile Menu with Right-to-Left Animation */}
			<div
				className={`md:hidden fixed top-0 right-0 w-full h-full bg-gray-100/95 backdrop-blur-sm backdrop-opacity-95 flex flex-col justify-center items-center gap-16 z-20 transition-all duration-300 ease-in-out ${
					isOpen ? 'translate-x-0' : 'translate-x-full'
				}`}
			>
				<IoClose
					onClick={() => setIsOpen(false)}
					size={40}
					className="cursor-pointer text-[#0087ca] absolute top-7 right-10 hover:rotate-90 transition-transform duration-300"
				/>
				<Link
					href="#"
					dataType="home"
					activeLink={activeLink}
					onClick={handleLinkClick}
					child="Home" // Use the `child` prop
					isMobile
				/>
				<Link
					href="#about"
					dataType="about"
					activeLink={activeLink}
					onClick={handleLinkClick}
					child="About" // Use the `child` prop
					isMobile
				/>
				<Link
					href="#therapy"
					dataType="therapy"
					activeLink={activeLink}
					onClick={handleLinkClick}
					child="Therapy" // Use the `child` prop
					isMobile
				/>
				<Link
					href="#contact"
					dataType="contact"
					activeLink={activeLink}
					onClick={handleLinkClick}
					child="Contact" // Use the `child` prop
					isMobile
				/>
			</div>

			{/* Backdrop Overlay */}
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