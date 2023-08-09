import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./Todo";
import { EditTodo } from "./EditTodo";

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);

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
                    return { todo };
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
            <div className="flex justify-center items-center h-screen w-screen bg-black">
                <div className="bg-purple-700 flex flex-col justify-center w-auto p-[5vw] rounded-3xl">
                    <h1 className="text-center text-5xl font-bungee">
                        To-do List!
                    </h1>
                    <br />
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
