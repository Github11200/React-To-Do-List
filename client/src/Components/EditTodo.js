import React, { useState } from "react";

export const EditTodo = ({ todo, editTask }) => {
    const [value, setValue] = useState(todo.task);

    const submitHandler = (e) => {
        e.preventDefault();
        editTask(todo.id, value);
        setValue("");
    };

    return (
        <div>
            <form
                onSubmit={submitHandler}
                id="TodoForm"
                className="flex justify-center items-start w-[50vw] flex-row"
            >
                <label htmlFor="addTaskInput" />
                <input
                    type="text"
                    placeholder="Update Task"
                    value={value}
                    className="p-3 pr-7 rounded-lg flex-grow basis-10/12 focus:ring-purple-400 focus:ring focus:ring-offset-1 focus:outline-none mt-2"
                    onChange={(e) => setValue(e.target.value)}
                />
                <button
                    type="submit"
                    className="w-4 basis-2/12 bg-purple-300 p-3 ml-[1vw] mt-2 rounded-lg hover:bg-purple-400"
                >
                    Update Task
                </button>
            </form>
        </div>
    );
};
