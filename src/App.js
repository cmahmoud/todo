import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App() {
	return (
		<div className="container mx-auto px-12 md:px-40">
			<h2 className="text-6xl font-bold text-[#5b7a9d] text-center my-12">
				Todo Tasks App
			</h2>
			<TodoForm />
			<TodoList />
		</div>
	);
}
