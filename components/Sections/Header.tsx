import Image from 'next/image';
import Container from '../Container';
import { icons, navLinks } from '@/constants';
import Link from 'next/link';
import Button from '../Button';
import MobileNav from '../MobileNav';

const Header = () => {
	return (
		<Container>
			<header className=" mt-2 flex items-center justify-between">
				<div>
					<Image
						src={icons.logo}
						alt="logo"
						width={100}
						height={22}
						className=""
					/>
				</div>
				<nav className="max-sm:hidden flex items-center gap-2">
					{navLinks.map((link) => (
						<Link
							href={link.href}
							key={link.href}
							className="sm:text-xs md:text-sm font-semibold text-gray-900 hover:text-gray-700"
						>
							{link.label}
						</Link>
					))}
				</nav>
				<div className="max-sm:hidden">
					<Button theme="dark">Get Started</Button>
				</div>
				<MobileNav />
			</header>
		</Container>
	);
};

export default Header;
