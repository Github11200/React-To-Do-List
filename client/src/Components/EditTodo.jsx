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
                className="flex justify-center items-start w-[50vw] flex-row my-5"
            >
                <label htmlFor="addTaskInput" />
                <input
                    type="text"
                    placeholder="Update Task"
                    value={value}
                    className="input w-full mr-3 input-bordered"
                    onChange={(e) => setValue(e.target.value)}
                />
                <button type="submit" className="btn btn-outline">
                    Update Task
                </button>
            </form>
        </div>
    );
};
