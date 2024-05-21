export const listOfChoiceReactQuiz = [
	{ path: "/quizzes/basic", title: "Basic", description: "Basic react js concept you should must know" },
	{ path: "/quizzes/topics", title: "Choose by Topic", description: "Choose a quiz on specific topic" },
];

export const hooks = [
	{
		path: "/quizzes/topics/hooks",
		title: "Hooks",
		description: "take a quiz on react node",
	},
];

const arrayState = [
	"useState",
	"useEffect",
	"useContext",
	"useRef",
	"useReducer",
	"useCallback",
	"useMemo",
	"useImperativeHandle",
];

var listState: { path: string; title: string; description: string }[] = [];
for (const array of arrayState) {
	listState.push({
		path: "/quizzes/topics/hooks/" + array,
		title: array + "( )",
		description: `Take a quiz on react ${array} hook`,
	});
}

export { listState };
