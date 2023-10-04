import React, { useCallback, useEffect, useRef, useState } from "react";

function PasswordGenerator() {
    const [length, setLength] = useState(8);
    const [numAllowed, setNumAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState("");
    const [btnText, setBtnText] = useState("Copy");

    const passwordRef = useRef(null);

    const PasswordGenerator = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if (numAllowed) str += "0123456789";
        if (charAllowed) str += "!@#$%^&*()_+=-{}[]~`";

        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char);
        }
        setPassword(pass);
        setBtnText('Copy');
    }, [length, numAllowed, charAllowed, setPassword]);

    useEffect(() => {
        PasswordGenerator();
    }, [length, numAllowed, charAllowed, PasswordGenerator]);

    const copyPassword = () => {
        passwordRef.current?.select();
        window.navigator.clipboard.writeText(password);
        setBtnText('Copied');
    };

    return (
        <div className="bg-gray-500 my-5 mx-2 p-5 flex flex-col rounded-lg sm:w-[450px]">
            <h1 className="text-2xl text-center font-semibold text-orange-300">
                Password Generator
            </h1>
            <div className="flex rounded-md overflow-hidden my-5">
                <input
                    type="text"
                    className="px-5 py-2 text-xl outline-none flex items-center w-full"
                    placeholder="password"
                    value={password}
                    ref={passwordRef}
                    readOnly
                />
                <button
                    className="px-5 py-2 bg-blue-500 hover:bg-blue-600 outline-none flex items-center shrink-0"
                    onClick={copyPassword}
                >
                    {btnText}
                </button>
            </div>
            <div className="flex flex-wrap gap-5 items-center my-3">
                <div className="flex gap-2 items-center">
                    <input
                        type="range"
                        min={6}
                        max={50}
                        value={length}
                        className="cursor-pointer"
                        onChange={(e) => setLength(e.target.value)}
                    />
                    <label>length: {length}</label>
                </div>
                <div className="flex gap-1 items-center">
                    <input
                        type="checkbox"
                        checked={numAllowed}
                        className="cursor-pointer"
                        onChange={(e) => setNumAllowed((prev) => !prev)}
                    />
                    <label>Number</label>
                </div>
                <div className="flex gap-1 items-center">
                    <input
                        type="checkbox"
                        checked={charAllowed}
                        className="cursor-pointer"
                        onChange={(e) => setCharAllowed((prev) => !prev)}
                    />
                    <label>Character</label>
                </div>
            </div>
        </div>
    );
}

export default PasswordGenerator;
