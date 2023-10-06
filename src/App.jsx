import { useState } from "react";
import "./App.css";

// components
import Counter from "./Counter/Counter";
import BackgroundChanger from "./BackgroundChanger/BackgroundChanger";
import PasswordGenerator from "./PasswordGenerator/PasswordGenerator";
import CurrencyConverter from "./CurrencyConvertor/CurrencyConvertor";
import UserContextProvider from "./MiniContext/context/UserContextProvider";
import Login from "./MiniContext/components/Login";
import Profile from "./MiniContext/components/Profile";

function App() {
    const [bgColor, setBgColor] = useState("#eee");

    return (
        <UserContextProvider>
            <div
                className=" w-full min-h-screen flex flex-col items-center py-10"
                style={{ backgroundColor: bgColor }}
            >
                <div className="flex flex-wrap gap-5 justify-center mb-40">
                    <Counter />
                    <PasswordGenerator />
                    <CurrencyConverter />
                    <Login />
                    <Profile />
                </div>
                <BackgroundChanger setBgColor={setBgColor} />
            </div>
        </UserContextProvider>
    );
}

export default App;
