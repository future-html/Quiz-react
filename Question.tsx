import { useEffect, useState } from "react";
import { quizComponentAndUI } from "./QuestionReactNative";
import { listOfChoiceReactNativeQuiz } from "../ChooseTopicReactNativeQuiz";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Question = () => {
	const [activeIndexQuestion, setActiveIndexQuestion] = useState(0);
	const [quizData, setQuizData] = useState(quizComponentAndUI);
	const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
	const [isTransitioning, setIsTransitioning] = useState<boolean | undefined>(undefined);
	const [isTransitioningExplain, setIsTransitioningExplain] = useState(false);

	let location = useLocation();
	const filterPathNavigate = listOfChoiceReactNativeQuiz.find((each) => {
		return each.path === location.pathname ? each.title : undefined;
	});

	const toggleExplaination = (index: number) => {
		// Update quizData to toggle isShowExplaination for the current question
		console.log("toggle are used ");
		setQuizData((prevQuizData) => {
			// Create a new array to avoid direct mutation
			const updatedQuizData = [...prevQuizData];
			// Toggle the isShowExplaination for the active question
			updatedQuizData[activeIndexQuestion] = {
				...updatedQuizData[activeIndexQuestion],
				isShowExplaination: !updatedQuizData[activeIndexQuestion].isShowExplaination,
			};
			return updatedQuizData;
		});

		// Update selectedAnswer to the clicked index
		setSelectedAnswer(index);
		setIsTransitioning(false);

		// Update showExplaination state based on its previous value

		console.log(quizData[activeIndexQuestion].isShowExplaination, "ishsow"); // Note: This will log the stale state due to async state updates
	};

	const handleAnswerSelect = (index: number | null) => {
		setSelectedAnswer(index);
		setIsTransitioning(true);
		setQuizData((prevQuizData) =>
			prevQuizData.map((each, index) =>
				index === activeIndexQuestion ? { ...each, isSelectedAnswer: true ? true : !each.isSelectedAnswer } : each
			)
		);
		// setQuizData((prevQuizData) => {
		// 	// Create a new array to avoid direct mutation
		// 	const updatedQuizData = [...prevQuizData];
		// 	// Toggle the isShowExplaination for the active question
		// 	updatedQuizData[activeIndexQuestion] = {
		// 		...updatedQuizData[activeIndexQuestion],
		// 		isShowExplaination: updatedQuizData[activeIndexQuestion].isShowExplaination ? false : true,
		// 	};
		// 	return updatedQuizData;
		// });
	};

	useEffect(() => {
		setSelectedAnswer(null); // Reset the selected answer when the question changes
	}, [activeIndexQuestion]);

	const variantsForQuestion = {
		initial: { x: 300, opacity: 0 },
		animate: { x: 0, opacity: 1 },
		exit: { x: -300, opacity: 0 },
	};

	const variantstoshowExplain = {
		open: {
			opacity: 1,
			height: "auto",
			transition: { duration: 5 },
		},
		closed: {
			opacity: 0,
			height: 0,
			transition: { duration: 5 },
		},
	};

	return (
		<AnimatePresence>
			<div>
				{quizData.map((each, index) => {
					return (
						<div key={index}>
							{index === activeIndexQuestion && (
								<motion.div
									className={`flex flex-col mx-auto py-5 h-full max-w-[764px] `}
									key={JSON.stringify(each) + index}
									initial={isTransitioning ? "initial" : undefined}
									animate={isTransitioning ? "animate" : isTransitioningExplain ? "open" : "closed"}
									exit={isTransitioning ? "exit" : undefined}
									variants={isTransitioningExplain ? variantsForQuestion : variantsForQuestion}
									transition={{ duration: 0.5 }}
								>
									<h1 className="text-2xl dark:text-white text-center font-normal">
										React Native {filterPathNavigate?.title} Quiz
									</h1>
									<h1 className="text-2xl font-bold mb-10 dark:text-white text-center">{each.question}</h1>
									<div className="p-5">
										<ul className="grid gap-6 w-full list-none m-0 p-0">
											{each.answer.map((each, index) => {
												const isSelected = selectedAnswer === index; // true / false
												const isCorrect = each.correct;

												const answers = quizComponentAndUI[activeIndexQuestion].answer;
												const correctAnswerIndex = answers.findIndex((answer) => answer.correct);
												return (
													<li
														key={JSON.stringify(each) + index}
														className="list-none ml-0 pl-0"
													>
														<div
															className={
																quizData[activeIndexQuestion].isShowExplaination &&
																each.correct &&
																quizData[activeIndexQuestion].isSelectedAnswer
																	? `border-2 rounded-lg border-green-500`
																	: undefined
															}
														>
															<input
																type="checkbox"
																name=""
																id={`choice${index}`}
																className="peer hidden"
																checked={
																	isSelected ||
																	(!isSelected &&
																		isCorrect &&
																		quizData[activeIndexQuestion].isSelectedAnswer)
																}
																onChange={() => handleAnswerSelect(index)}
															/>
															<label
																htmlFor={`choice${index}`}
																className={`${
																	(isSelected && !quizData[activeIndexQuestion].isShowExplaination) ||
																	(isCorrect &&
																		!isSelected &&
																		!quizData[activeIndexQuestion].isShowExplaination)
																		? isCorrect
																			? "dark:peer-checked:text-green-500 peer-checked:text-green-500 peer-checked:border-green-500 inline-flex justify-between items-center p-5 text-gray-400 bg-transparent hover:bg-gray-700 rounded-lg border-2 border-gray-700 cursor-pointer hover:text-white w-full"
																			: "dark:peer-checked:text-red-500 peer-checked:text-red-500 peer-checked:border-red-500 inline-flex justify-between items-center p-5 text-gray-400 bg-transparent hover:bg-gray-700 rounded-lg border-2 border-gray-700 cursor-pointer hover:text-white w-full"
																		: "inline-flex justify-between items-center p-5 text-gray-400 bg-transparent hover:bg-gray-700 rounded-lg border-2 border-gray-700 cursor-pointer hover:text-white w-full"
																}`}
															>
																<div className="bg-transparent">
																	<div className="bg-transparent font-bold">{each.choice}</div>
																</div>

																{quizData[activeIndexQuestion].isSelectedAnswer && isCorrect && (
																	<button
																		className="bg-transparent cursor-pointer"
																		onClick={() => {
																			toggleExplaination(correctAnswerIndex);
																			setIsTransitioningExplain((prev) => !prev);
																			console.log(isTransitioningExplain, "inside func");
																		}}
																	>
																		<small className="text-gray-400 bg-transparent">
																			{quizData[activeIndexQuestion].isShowExplaination
																				? "Hide  "
																				: "Show "}
																			explanation
																		</small>
																	</button>
																)}
															</label>
															{isCorrect && quizData[activeIndexQuestion].isShowExplaination && (
																<div className="p-5 font-light bg-gray-900 rounded">
																	<p className="text-gray-500 dark:text-gray-200 mb-2 block bg-gray-900">
																		{quizData[activeIndexQuestion].explaination}
																	</p>
																</div>
															)}
														</div>
													</li>
												);
											})}
										</ul>
										{quizData.length !== activeIndexQuestion + 1 ? (
											<button
												disabled={!quizData[activeIndexQuestion].isSelectedAnswer}
												onClick={() => {
													setActiveIndexQuestion(activeIndexQuestion + 1);
													setIsTransitioning(true);
												}}
												className="w-full disabled:opacity-50 flex justify-center items-center cursor-pointer rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 mt-8 text-white bg-[#2563EB] text-lg py-2 px-3 "
											>
												Next Question {activeIndexQuestion + 1} / 20
												<svg
													aria-hidden="true"
													className="ml-2 -mr-1 w-4 h-4 bg-transparent"
													fill="currentColor"
													viewBox="0 0 20 20"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														fillRule="evenodd"
														d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
														clipRule="evenodd"
													></path>
												</svg>
											</button>
										) : (
											<a
												href={quizData[activeIndexQuestion].isSelectedAnswer ? "/" : "#"}
												className={`${
													!quizData[activeIndexQuestion].isSelectedAnswer ? "opacity-50" : ""
												}  w-full flex justify-center items-center cursor-pointer rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 mt-8 text-white bg-[#2563EB] text-lg py-2 px-3 `}
											>
												Go to Home Page
												<svg
													aria-hidden="true"
													className="ml-2 -mr-1 w-4 h-4 bg-transparent"
													fill="currentColor"
													viewBox="0 0 20 20"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														fillRule="evenodd"
														d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
														clipRule="evenodd"
													></path>
												</svg>
											</a>
										)}
									</div>
								</motion.div>
							)}
						</div>
					);
				})}
			</div>
		</AnimatePresence>
	);
};

export default Question;

// framer motion
