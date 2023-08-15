import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        addTodo(value);
        setValue("");
    };

    return (
        <div className="mt-10">
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
                    className="input w-full mr-3 input-bordered input-accent"
                />
                <button type="submit" className="btn btn-outline">
                    Add Task
                </button>
            </form>
        </div>
    );
};
