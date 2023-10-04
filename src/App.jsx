import { useState } from "react";
import "./App.css";

// components
import Counter from "./Counter/Counter";
import BackgroundChanger from "./BackgroundChanger/BackgroundChanger";
import PasswordGenerator from "./PasswordGenerator/PasswordGenerator";
import CurrencyConverter from "./CurrencyConvertor/CurrencyConvertor";

function App() {
    const [bgColor, setBgColor] = useState("#eee");

    return (
        <div
            className=" w-full min-h-screen flex flex-col items-center py-10"
            style={{ backgroundColor: bgColor }}
        >
            <div className="flex flex-wrap gap-5 justify-center mb-36">
                <Counter />
                <PasswordGenerator />
                <CurrencyConverter />
            </div>
            <BackgroundChanger setBgColor={setBgColor} />
        </div>
    );
}

export default App;
