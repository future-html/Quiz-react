import { useState } from "react";
import { motion } from "framer-motion";
const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false);

	const variants = {
		open: {
			opacity: 1,
			height: "auto",
			transition: { duration: 0.5 },
		},
		closed: {
			opacity: 0,
			height: 0,
			transition: { duration: 0.5 },
		},
	};

	return (
		<div className="sticky top-0">
			<header className="border-b flex items-center justify-between px-6 py-3">
				<div className="">
					<a href="/">
						<span className="whitespace-nowrap text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300">
							React Js Quiz
						</span>
					</a>
				</div>
				<div
					className="flex md:hidden "
					aria-label="toggle-menu"
				>
					<button
						className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
						onClick={() => {
							setShowMenu((prev) => !prev);
						}}
					>
						<svg
							viewBox="0 0 24 24"
							className="w-6 h-6 fill-current"
						>
							<path
								fill-rule="evenodd"
								d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
							></path>
						</svg>
					</button>
				</div>

				<div className="hidden md:flex">
					<a href="/">
						<span className="px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2">
							Home
						</span>
					</a>
					<a href="/privacy-policy">
						<span className="px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2">
							Privacy
						</span>
					</a>
					<a href="/contact">
						<span className="px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2">
							Contact Us
						</span>
					</a>
				</div>
			</header>
			<motion.div
				initial={false}
				animate={showMenu ? "open" : "closed"}
				variants={variants}
				className="md:hidden overflow-hidden border-b"
			>
				<a
					href="/"
					className="block w-full"
				>
					<span className="w-full block  px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2 text-center">
						Home
					</span>
				</a>
				<a
					href="/privacy-policy"
					className="block w-full"
				>
					<span className="block w-full px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2 text-center">
						Privacy
					</span>
				</a>
				<a
					href="/contact"
					className="block w-full"
				>
					<span className="block w-full px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2 text-center">
						Contact Us
					</span>
				</a>
			</motion.div>
		</div>
	);
};

export default Navbar;
