import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({ task, toggleCompleted, deleteTodo, editTodo }) => {
    return (
        <div
            key={task.id}
            className="grid-rows-1 grid grid-cols-2 bg-purple-400 p-[0.7vw] rounded-xl m-5 pl-[4%]"
        >
            <p
                // className={task.isCompleted ? "completed" : ""}
                className="text-xl inline justify-self-start"
                onClick={() => {
                    toggleCompleted(task.id);
                }}
            >
                {task.task}
            </p>
            <span className="inline-flex items-center place-content-end">
                <FontAwesomeIcon
                    icon={faPenToSquare}
                    className="hover:cursor-pointer mx-6"
                    onClick={() => editTodo(task.id)}
                />
                <FontAwesomeIcon
                    icon={faTrash}
                    className="hover:cursor-pointer mr-3"
                    onClick={() => deleteTodo(task.id)}
                />
            </span>
        </div>
    );
};
