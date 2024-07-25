import About from '@/components/Sections/About';
import Cta from '@/components/Sections/Cta';
import Footer from '@/components/Sections/Fotter';
import Header from '@/components/Sections/Header';
import Hero from '@/components/Sections/Hero';
import Testimonials from '@/components/Sections/Testimonials';
import bg from '@/public/images/bg-simplify-section-desktop.svg';
import Image from 'next/image';

export default function Home() {
	return (
		<main className="transition-all duration-300 flex flex-col min-h-screen relative ">
			<div>
				<Header />
				<Hero />
			</div>

			<About />
			<Testimonials />
			<Cta />
			<Footer />
		</main>
	);
}
