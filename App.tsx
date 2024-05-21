import "./App.css";
import Navbar from "./Navbar";
import Body from "./Body";
import Footer from "./Footer";
import CardChoice from "./CardChoice";
import { listOfChoiceReactQuiz, hooks } from "./ChooseTopicReactQuiz";
import { listState } from "./ChooseTopicReactQuiz";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { listOfChoiceReactNativeQuiz } from "./ChooseTopicReactNativeQuiz";
import Question from "./Question/Question";
import Privacy from "./Privacy";
function App() {
	return (
		<div className="flex flex-col justify-between min-h-screen">
			<Navbar />

			<Router>
				<Routes>
					<Route
						path="/"
						element={<Body />}
					/>

					<Route
						path="/quizzes"
						element={<CardChoice options={listOfChoiceReactQuiz} />}
					/>
					<Route
						path="/quizzes/topics"
						element={<CardChoice options={hooks} />}
					/>
					<Route
						path="/quizzes/topics/hooks"
						element={<CardChoice options={listState} />}
					/>

					<Route
						path="/privacy-policy"
						element={<Privacy />}
					/>
					<Route
						path="/react-native-quizzes"
						element={<CardChoice options={listOfChoiceReactNativeQuiz} />}
					/>
					<Route
						path="/react-native-quizzes/components-and-ui"
						element={<Question />}
					/>
				</Routes>
			</Router>
			<Footer />
		</div>
	);
}

export default App;
