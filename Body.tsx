import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
const Body = () => {
	const [isExiting, setIsExiting] = useState(false);

	const navigate = useNavigate();

	const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		const href = e.currentTarget.href;
		setIsExiting(true);

		setTimeout(() => {
			navigate(new URL(href).pathname);
		}, 500); // Duration of fade-out effect
	};
	return (
		<AnimatePresence>
			{!isExiting && (
				<motion.div
					className="flex flex-col mx-auto py-5 h-full"
					initial={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.2 }}
				>
					<h1 className="text-2xl font-bold mb-10 dark:text-white text-center">Welcome to React JS Quiz 📝</h1>
					<div className="md:flex md:items-center">
						<a
							href="/quizzes"
							className="no-underline"
							onClick={handleLinkClick}
						>
							<span className="max-w-sm flex items-center flex-col md:p-3 bg-white text-center rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
								<img
									alt="Quiz Icon"
									loading="lazy"
									width="200"
									height="200"
									decoding="async"
									data-nimg="1"
									src="https://reactjsquiz.com/icons/web.svg"
									className="bg-transparent"
								></img>
								<h5 className="text-2xl text-gray-900 dark:text-white tracking-tighter bg-transparent mt-2">
									React Js Quiz
								</h5>
							</span>
						</a>

						<a
							href="/react-native-quizzes"
							className="no-underline"
							onClick={handleLinkClick}
						>
							<span className="md:ml-8 flex flex-col items-center p-3 max-w-sm bg-white text-center rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
								<img
									alt="Quiz Icon"
									loading="lazy"
									width="200"
									height="200"
									decoding="async"
									data-nimg="1"
									src="https://reactjsquiz.com/icons/mobile.svg"
									className="bg-transparent"
								></img>
								<h5 className="text-2xl text-gray-900 dark:text-white tracking-tighter bg-transparent mt-2">
									React Native Quiz
								</h5>
							</span>
						</a>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Body;
