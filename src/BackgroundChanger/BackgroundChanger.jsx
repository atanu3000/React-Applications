import React from "react";
import Button from "./Components/ColorButton";

function BackgroundChanger({setBgColor}) {
    return (
        <div className="fixed flex flex-wrap gap-3 justify-center bottom-4 sm:bottom-12 bg-white px-5 py-3 rounded-3xl max-w-[calc(100vw-16px)]">
            <Button color="red" changecolor={setBgColor} />
            <Button color="violet" changecolor={setBgColor} />
            <Button color="blue" changecolor={setBgColor} />
            <Button color="orange" changecolor={setBgColor} />
            <Button color="salmon" changecolor={setBgColor} />
            <Button color="purple" changecolor={setBgColor} />
            <Button color="lightgreen" changecolor={setBgColor} />
            <Button color="navy" changecolor={setBgColor} />
            <Button color="pink" changecolor={setBgColor} />
        </div>
    );
}

export default BackgroundChanger;
