import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(10);

    const add = () => {
        count >= 20 ? setCount(count) : setCount(count + 1);
    };

    const remove = () => {
        count <= 0 ? setCount(count) : setCount(count - 1);
    };
    return (
        <div className="flex flex-col items-center p-5 bg-gray-500 rounded-lg w-64">
            <h1 className="text-2xl font-semibold mb-5">React Tutorial</h1>
            <h3>Counter Value: {count}</h3>
            <div className="my-3">
                <button
                    className="bg-gray-300 px-4 py-2 rounded-lg"
                    onClick={add}
                >
                    Add {count}
                </button>
                &nbsp;&nbsp;
                <button
                    className="bg-gray-300 px-4 py-2 rounded-lg"
                    onClick={remove}
                >
                    Remove {count}
                </button>
            </div>
            <p className="font-bold">
                {count === 20 ? (
                    <span className="text-red-500">
                        Counter value reached at highest point : {count}
                    </span>
                ) : count === 0 ? (
                    <span className="text-red-500">
                        Counter value reached at lowest point : {count}
                    </span>
                ) : (
                    <span className="text-green-400">
                        Counter value is : {count}
                    </span>
                )}
            </p>
        </div>
    );
}

export default Counter;
