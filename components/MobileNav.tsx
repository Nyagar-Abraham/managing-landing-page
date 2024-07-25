'use client';

import { icons, navLinks } from '@/constants';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
// @ts-ignore
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

const MobileNav = () => {
	const [open, setOpen] = useState(false);

	const toggleNav = () => {
		if (!open) {
			disablePageScroll();
		} else {
			enablePageScroll();
		}
		setOpen(!open);
	};

	return (
		<div className="sm:hidden relative">
			<button
				onClick={(e) => {
					e.stopPropagation();
					toggleNav();
				}}
				className="p-3"
			>
				{!open && <Image src={icons.hamburger} alt="Open Menu" />}
				{open && <Image src={icons.close} alt="Close Menu" />}
			</button>
			<div
				onClick={() => {
					toggleNav();
				}}
				className={`fixed inset-0 bg-black z-10 opacity-50 transition-opacity duration-300 ${
					open ? 'visible opacity-50' : 'invisible opacity-0'
				}`}
			/>
			<nav
				className={`fixed top-0 left-0 bottom-0 w-8/12 bg-gray-100 px-4 py-3 z-20 transform transition-transform duration-700 ${
					open ? 'translate-x-0' : '-translate-x-full'
				}`}
			>
				<div className="flex justify-end">
					<Image
						src={icons.close}
						alt="Close Menu"
						onClick={toggleNav}
						className="cursor-pointer"
					/>
				</div>
				<div className="mt-8 flex flex-col gap-3">
					{navLinks.map((link) => (
						<Link
							onClick={toggleNav}
							href={link.href}
							key={link.href}
							className="text-sm font-semibold text-center text-gray-900 hover:text-gray-700"
						>
							{link.label}
						</Link>
					))}
				</div>
			</nav>
		</div>
	);
};

export default MobileNav;
