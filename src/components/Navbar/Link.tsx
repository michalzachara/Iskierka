import { ReactNode } from 'react';

interface LinkProps {
	href: string;
	dataType: string;
	activeLink: string;
	onClick: (type: string) => void;
	children: ReactNode;
	className?: string;
	isMobile?: boolean;
}

const Link = ({ href, dataType, activeLink, onClick, children, className, isMobile = false }: LinkProps) => {
	const isActive = activeLink === dataType;

	return (
		<a
			href={href}
			data-type={dataType}
			onClick={() => onClick(dataType)}
			className={`${className} ${
				isActive ? 'active' : ''
			} ${isMobile ? 'link-mobile' : 'link-computer'}`}
		>
			{children}
		</a>
	);
};

export default Link;