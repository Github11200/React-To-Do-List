import React, { useContext, useEffect, useState } from "react";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./Todo";
import { EditTodo } from "./EditTodo";
import { themeContext } from "../App";

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);
    const [checked, setChecked] = useState(false);
    const [theme, setTheme] = useContext(themeContext);

    useEffect(() => {
        checked === true ? setTheme("forest") : setTheme("winter");
    }, [checked]);

    const addTodo = (todo) => {
        setTodos([
            ...todos,
            { task: todo, id: uuidv4(), isCompleted: false, isEditing: false },
        ]);
    };

    const toggleCompleted = (id) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, isCompleted: !todo.isCompleted };
                } else {
                    return { ...todo };
                }
            })
        );
    };

    const deleteTodo = (id) => {
        setTodos(
            // eslint-disable-next-line array-callback-return
            todos.filter((todo) => {
                if (todo.id !== id) return todo;
            })
        );
    };

    const editTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
            )
        );
    };

    const editTask = (id, value) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id
                    ? { ...todo, task: value, isEditing: !todo.isEditing }
                    : todo
            )
        );
    };

    return (
        <>
            <div className="flex justify-center h-screen w-screen prose">
                <div className="flex flex-col w-auto p-[5vw] rounded-3xl">
                    <h1 className="text-center text-5xl">To-do List!</h1>
                    <div className="mx-auto">
                        {checked === false ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-7 h-7 inline mb-4 mr-4"
                            >
                                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-7 h-7 inline mb-4 mr-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                                />
                            </svg>
                        )}
                        <input
                            type="checkbox"
                            checked={checked}
                            onClick={() => setChecked(!checked)}
                            className="toggle mx-auto mt-10"
                        />
                        {checked === true ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-7 h-7 inline mb-4 ml-4"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-7 h-7 inline mb-4 ml-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                                />
                            </svg>
                        )}
                    </div>
                    <div>
                        <TodoForm addTodo={addTodo} />
                    </div>
                    <div>
                        {todos.map((task, index) =>
                            task.isEditing ? (
                                <EditTodo
                                    todo={task}
                                    editTask={editTask}
                                    key={index}
                                />
                            ) : (
                                <Todo
                                    task={task}
                                    key={index}
                                    toggleCompleted={toggleCompleted}
                                    deleteTodo={deleteTodo}
                                    editTodo={editTodo}
                                />
                            )
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};
