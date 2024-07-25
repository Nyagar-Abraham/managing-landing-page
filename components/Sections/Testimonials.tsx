import { testimonials } from '@/constants';
import Button from '../Button';
import Heading from '../Heading';
import Image from 'next/image';

const Testimonials = () => {
	return (
		<div className="my-14 ">
			<Heading
				className="!text-center"
				text="What they've said
"
				type="h2"
			/>

			<div className="flex mt-4 gap-6 items-center overflow-x-scroll no-scrollbar snap-x snap-proximity">
				{testimonials.map((item) => (
					<div
						key={item.name}
						className="snap-center text-center px-4 py-3 bg-white flex flex-col gap-3 flex-none max-w-[360px]"
					>
						<div className="flex items-center justify-center">
							<Image src={item.avatar} width={70} height={79} alt="avatar" />
						</div>
						<p className="text-xl font-semibold text-gray-900">{item.name}</p>
						<p className="text-sm text-gray-600 ">{item.text}</p>
					</div>
				))}
			</div>
			<div className="flex items-center justify-center pt-8">
				<Button theme="dark">Get Started</Button>
			</div>
		</div>
	);
};

export default Testimonials;
