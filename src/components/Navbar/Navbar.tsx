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
			<nav className="w-full xs:h-[5rem] md:h-24 bg-gray-100 z-30 flex justify-around items-center shadow-md">
				<div className="xs:text-2xl md:text-3xl font-bold text-[#0087ca]">ISKIERKA</div>
				<div className="md:flex xs:hidden justify-between gap-10">
					<Link
						href="#"
						dataType="home"
						activeLink={activeLink}
						onClick={handleLinkClick}
					>
						Home
					</Link>
					<Link
						href="#"
						dataType="about"
						activeLink={activeLink}
						onClick={handleLinkClick}
					>
						About
					</Link>
					<Link
						href="#"
						dataType="therapy"
						activeLink={activeLink}
						onClick={handleLinkClick}
					>
						Therapy
					</Link>
					<Link
						href="#"
						dataType="contact"
						activeLink={activeLink}
						onClick={handleLinkClick}
					>
						Contact
					</Link>
				</div>
				<div className="md:hidden cursor-pointer duration-75 transition-all hover:scale-110">
					
						{/* <IoClose onClick={() => setIsOpen(false)} size={35} className="text-[#0087ca]" /> */}
					
						<RxHamburgerMenu onClick={() => setIsOpen(true)} size={35} className="text-[#0087ca]" />
				</div>
			</nav>
			{isOpen && (
				<div className="md:hidden fixed top-0 left-0 w-full h-full bg-gray-100/95 backdrop-blur-sm flex flex-col justify-center items-center gap-10 z-20">
					<IoClose onClick={() => setIsOpen(false)} size={35} className="text-[#0087ca] absolute top-10 right-10" />
					<Link
						href="#"
						dataType="home"
						activeLink={activeLink}
						onClick={handleLinkClick}
						isMobile
					>
						Home
					</Link>
					<Link
						href="#"
						dataType="about"
						activeLink={activeLink}
						onClick={handleLinkClick}
						isMobile
					>
						About
					</Link>
					<Link
						href="#"
						dataType="therapy"
						activeLink={activeLink}
						onClick={handleLinkClick}
						isMobile
					>
						Therapy
					</Link>
					<Link
						href="#"
						dataType="contact"
						activeLink={activeLink}
						onClick={handleLinkClick}
						isMobile
					>
						Contact
					</Link>
				</div>
			)}
		</>
	);
};

export default Navbar;