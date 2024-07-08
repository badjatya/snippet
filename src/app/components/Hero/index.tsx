import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type Props = {};

const Hero = (props: Props) => {
	return (
		<div>
			<section className='mb-8 flex flex-col justify-between gap-6 sm:gap-10 md:mb-16 md:gap-16 lg:flex-row'>
				{/* <!-- content - start --> */}
				<div className='flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12'>
					<p className='mb-4 font-semibold text-primary md:mb-6 md:text-lg xl:text-xl'>
						Organize and Collaborate
					</p>

					<h1 className='mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl'>
						Vault for your valuable Code Snippets
					</h1>

					<div className='flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start'>
						<Button asChild>
							<Link href='/'>
								Join Now and Boost Your Coding Efficiency
							</Link>
						</Button>
					</div>
				</div>
				{/* <!-- content - end --> */}

				{/* <!-- image - start --> */}
				<div className='relative h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-[380px] lg:w-[650px]'>
					<Image
						src='/home/hero/main.png'
						fill
						alt='Photo by Fakurian Design'
					/>
				</div>
				{/* <!-- image - end --> */}
			</section>

			<section className='flex flex-col items-center justify-between gap-10 border-t pt-8 lg:flex-row lg:gap-8'>
				{/* <!-- stats - start --> */}
				<div className='-mx-6 grid grid-cols-2 gap-4 md:-mx-8 md:flex md:divide-x'>
					<div className='px-6 md:px-8'>
						<span className='block text-center text-lg font-bold text-primary md:text-left md:text-xl'>
							55+
						</span>
						<span className='block text-center text-sm font-semibold text-gray-800 md:text-left md:text-base'>
							Snippets
						</span>
					</div>

					<div className='px-6 md:px-8'>
						<span className='block text-center text-lg font-bold text-primary md:text-left md:text-xl'>
							10+
						</span>
						<span className='block text-center text-sm font-semibold text-gray-800 md:text-left md:text-base'>
							Languages
						</span>
					</div>

					<div className='px-6 md:px-8'>
						<span className='block text-center text-lg font-bold text-primary md:text-left md:text-xl'>
							15+
						</span>
						<span className='block text-center text-sm font-semibold text-gray-800 md:text-left md:text-base'>
							Tags
						</span>
					</div>
				</div>
				{/* <!-- stats - end --> */}

				{/* <!-- social - start --> */}
				<div className='flex items-center justify-center gap-4 lg:justify-start'>
					<span className='text-sm font-semibold uppercase tracking-widest text-gray-400 sm:text-base'>
						Social
					</span>
					<span className='h-px w-12 bg-gray-200'></span>

					<div className='flex gap-4'>
						<a
							href='#'
							target='_blank'
							className='text-gray-400 transition duration-100 hover:text-primary '>
							<svg
								className='h-5 w-5'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='currentColor'
								xmlns='http://www.w3.org/2000/svg'>
								<path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' />
							</svg>
						</a>

						<a
							href='#'
							target='_blank'
							className='text-gray-400 transition duration-100 hover:text-primary '>
							<svg
								className='h-5 w-5'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='currentColor'
								xmlns='http://www.w3.org/2000/svg'>
								<path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
							</svg>
						</a>

						<a
							href='#'
							target='_blank'
							className='text-gray-400 transition duration-100 hover:text-primary '>
							<svg
								className='h-5 w-5'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='currentColor'
								xmlns='http://www.w3.org/2000/svg'>
								<path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
							</svg>
						</a>
					</div>
				</div>
				{/* <!-- social - end --> */}
			</section>
		</div>
	);
};

export default Hero;
