import React from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import LinkSelectChoice from "./LinkSelectChoice";

const CardChoice = ({ options }: { options: { path: string; title: string; description: string }[] }) => {
	const location = useLocation();

	const containerVariants = {
		hidden: { opacity: 1 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.05,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, x: -200 },
		show: { opacity: 1, x: 0 },
	};

	return (
		<div className="flex flex-col mx-auto py-5 h-full max-w-[800px]">
			<h1 className="text-2xl font-bold mb-10 dark:text-white text-center">Select a Quiz 📝</h1>
			<motion.ul
				className={`grid gap-6 w-full list-none m-0 p-5 ${
					location.pathname === "/quizzes/topics/hooks" ? "md:grid-cols-2" : "md:grid-cols-1"
				}`}
				variants={containerVariants}
				initial="hidden"
				animate="show"
			>
				{options.map((each, index) => (
					<motion.li
						key={index}
						variants={itemVariants}
					>
						<LinkSelectChoice
							path={each.path}
							title={each.title}
							description={each.description}
						/>
					</motion.li>
				))}
			</motion.ul>
		</div>
	);
};

export default CardChoice;
