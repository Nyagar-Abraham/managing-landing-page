import Image from 'next/image';
import Container from '../Container';
import { footerLinks, icons, socialLinks } from '@/constants';
import Button from '../Button';
import Link from 'next/link';
import Input from '../Input';

const Footer = () => {
	return (
		<footer className="bg-d-blue mt-auto  py-10 lg:py-14">
			<Container>
				<div className="flex gap-5 flex-col-reverse items-center justify-center md:items-stretch md:flex-row md:justify-between  ">
					<p className="md:hidden text-xs text-gray-50">
						{' '}
						Copyright 2020. All Rights Reserved
					</p>
					<div className="flex flex-col justify-between items-center gap-3 md:items-start   ">
						<Image
							src={icons.logo}
							alt="logo"
							width={100}
							className="accent-p-red"
							height={20}
						/>
						<div className="flex gap-2 items-center justify-center">
							{socialLinks.map((link) => (
								<button key={link} className=" p-1">
									<Image src={link} alt="logo" className="hover:fill-p-red" />
								</button>
							))}
						</div>
					</div>
					{/* 2 */}
					<div className="grid grid-cols-2 gap-[150px] md:gap-10 lg:gap-12 p-2">
						<div className="flex gap-1 flex-col">
							{footerLinks.slice(0, 4).map((link) => (
								<Link
									className="text-gray-100 hover:text-gray-300 text-xs font-semibold "
									key={link.href}
									href={link.href}
								>
									{link.label}
								</Link>
							))}
						</div>
						<div className="flex gap-1 flex-col">
							{footerLinks.slice(4, -1).map((link) => (
								<Link
									className="text-gray-100 hover:text-gray-300 text-xs font-semibold "
									key={link.href}
									href={link.href}
								>
									{link.label}
								</Link>
							))}
						</div>
					</div>
					<div className="flex gap-5 flex-col justify-between ">
						<div className="flex gap-4 md:gap-2 items-center ">
							<Input />
							<Button theme="dark">Go</Button>
						</div>
						<p className="max-md:hidden text-xs text-gray-50">
							{' '}
							Copyright 2020. All Rights Reserved
						</p>
					</div>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
