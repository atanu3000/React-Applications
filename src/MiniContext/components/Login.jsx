import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { setUser } = useContext(UserContext);

    const submitHandler = (e) => {
        e.preventDefault();
        if (username.trim() !== '' && password.trim() !== '') {
            setUser({ username, password });
        }
    };
    return (
        <div className="flex flex-col gap-4 p-5 border border-red-300 rounded-lg">
            <h2>Welcome User</h2>
            <form className="flex flex-col gap-4">
            <input
            className="py-1 px-2 rounded-lg"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="username"
                required
            />
            <input
            className="py-1 px-2 rounded-lg"
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                required
            />
            <button
                className="bg-gray-300 rounded-lg py-2"
                onClick={submitHandler}
            >
                Login
            </button>
            </form>
        </div>
    );
};

export default Login;
