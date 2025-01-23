
interface LinkProps {
	href: string;
	dataType: string;
	activeLink: string;
	onClick: (type: string) => void;
	child: string;
	className?: string;
	isMobile?: boolean;
}

const Link = ({ href, dataType, activeLink, onClick, child, className, isMobile = false }: LinkProps) => {
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
			{child}
		</a>
	);
};

export default Link;