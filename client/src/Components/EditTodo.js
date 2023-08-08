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
                    className="p-3 pr-7 rounded-lg flex-grow basis-10/12 mt-2"
                    onChange={(e) => setValue(e.target.value)}
                />
                <button
                    type="submit"
                    className="w-4 basis-2/12 bg-purple-300 p-[0.8vw] ml-[1vw] rounded-lg hover:bg-purple-400"
                >
                    Update Task
                </button>
            </form>
        </div>
    );
};
