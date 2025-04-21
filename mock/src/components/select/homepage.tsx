import { useRef, useState } from "react";
import "../../styles/main.css";
import { ControlledInput } from "./controlledInput";

export function HomePage() {
    const [calorieString, setCalorie] = useState<string>('');
    const [proteinString, setProtein] = useState<string>('');
    const [carbString, setCarb] = useState<string>('');
    const [sugarString, setSugar] = useState<string>('');

    const searchRef = useRef<HTMLInputElement | null>(null);

    // to finish -- this saves the inputted information
    // const handleSubmitInformation
    // <button onClick={() => handleSubmitInformation()}>Save Information</button>
    return (
        <div className="homepage-container">
            Track Your Daily Diet!
            <p>Enter Your Daily Calories</p>
            <ControlledInput
            value={calorieString}
            setValue={setCalorie}
            ariaLabel="calorie input"
            ref={searchRef}/>
            
            <p>Enter Your Daily Carbohydrates</p>
            <ControlledInput
            value={carbString}
            setValue={setCarb}
            ariaLabel="carb input"
            ref={searchRef}/>
            
            <p>Enter Your Daily Sugars</p>
            <ControlledInput
            value={sugarString}
            setValue={setSugar}
            ariaLabel="sugar input"
            ref={searchRef}/>
            
            <p>Enter Your Daily Protein</p>
            <ControlledInput
            value={proteinString}
            setValue={setProtein}
            ariaLabel="protein input"
            ref={searchRef}/>
        </div>
    )
}
