import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        addTodo(value);
        setValue("");
    };

    return (
        <div>
            <form
                onSubmit={submitHandler}
                className="flex justify-center items-start w-[50vw] flex-row"
            >
                <label htmlFor="addTaskInput" />
                <input
                    type="text"
                    placeholder="What are your tasks today?"
                    id="addTaskInput"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="p-3 pr-7 rounded-lg flex-grow basis-10/12"
                />
                <button
                    type="submit"
                    className="w-4 basis-2/12 bg-purple-300 p-[0.8vw] ml-[1vw] rounded-lg hover:bg-purple-400"
                >
                    Add Task
                </button>
            </form>
        </div>
    );
};
