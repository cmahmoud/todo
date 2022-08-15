import React from "react";
import { useStore } from "../store";
import TodoItem from "./TodoItem";
import { motion, AnimatePresence } from "framer-motion";

export default function TodoList() {
	const { state } = useStore();
	return (
		<AnimatePresence>
			{state.todos &&
				state.todos.map((todo) => {
					return (
						<motion.div
							initial={{ opacity: 0, x: -100 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -100 }}
							transition={{ duration: 0.4 }}
							key={todo.id}
							className="flex flex-row items-center mb-2 gap-2"
						>
							<TodoItem todo={todo} />
						</motion.div>
					);
				})}
		</AnimatePresence>
	);
}
