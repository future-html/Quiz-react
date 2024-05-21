import React from "react";

const LinkSelectChoice = ({ path, title, description }: { path: string; title: string; description: string }) => {
	return (
		<a
			href={path}
			className="max-w-[800px]"
		>
			<span>
				<li className="list-none">
					<label
						htmlFor=""
						className="inline-flex justify-between items-center p-5 text-gray-400 bg-transparent hover:bg-gray-500 rounded-lg border-2 border-gray-700 cursor-pointer hover:text-white hover:border-gray-500 w-full"
					>
						<div className="bg-transparent">
							<div className="bg-transparent font-bold">{title}</div>
							<div className="bg-transparent">{description}</div>
						</div>
						<svg
							aria-hidden="true"
							className="ml-3 w-6 h-6 bg-transparent"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
								clip-rule="evenodd"
							></path>
						</svg>
					</label>
				</li>
			</span>
		</a>
	);
};

export default LinkSelectChoice;
