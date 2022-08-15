import React from "react";
import { useStore } from "../store";
import { FaCheckCircle } from "react-icons/fa";

export default function TodoItem({ todo }) {
	const { dispatch } = useStore();
	const { id, text, completed, createdAt } = todo;
	const toggleTodo = () => {
		dispatch({
			type: "TOGGLE_TODO",
			payload: id,
		});
		dispatch({
			type: "SORT_TODOS",
		});
	};
	const formatedTime = new Date(createdAt).toLocaleString("en-Us", {
		minute: "numeric",
		hour: "numeric",
		hour12: true,
	});
	return (
		<>
			<div className="basis-9/12 md:basis-5/6 flex flex-row flex-start items-center gap-2 bg-violet-300 px-2 py-3 rounded w-5/6">
				<div
					className="flex items-center bg-white w-5 h-5 rounded-full transition-all cursor-pointer"
					onClick={toggleTodo}
				>
					{completed && (
						<FaCheckCircle className="fill-violet-600 h-full w-full border-2 border-violet-600 rounded-full" />
					)}
				</div>
				<p
					className={`text-sm font-medium text-[#5b7a9d] ${
						completed ? "line-through" : ""
					}`}
				>
					{text}
				</p>
			</div>
			<div className="basis-3/12 md:basis-1/6 flex items-center justify-center bg-violet-300 px-2 py-3 rounded">
				<p className="text-sm font-medium text-[#5b7a9d]">
					{formatedTime}
				</p>
			</div>
		</>
	);
}
