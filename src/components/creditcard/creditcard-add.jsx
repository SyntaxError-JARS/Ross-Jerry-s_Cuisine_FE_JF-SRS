import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function CreditCardAdd(){

    const navigate = useNavigate();
<<<<<<< HEAD
    const url = "https://rossrestaurant.azurewebsites.net";
=======
    const url = "https://rossandjerry.azurewebsites.net";
>>>>>>> main

    const ccNumberInput = useRef();
    const ccNameInput = useRef();
    const cvvInput = useRef();
    const expDateInput = useRef();
    const zipInput = useRef();
    const limitInput = useRef();
    const customerUsernameInput = useRef();

    async function createcc() {
        const user = {
            ccNumber: ccNumberInput.current.value,
            ccName: ccNameInput.current.value,
            cvv: cvvInput.current.value,
            expDate: expDateInput.current.value,
            zip: zipInput.current.value,
            limit: limitInput.current.value,
            customerUsername: customerUsernameInput.current.value,
        };
        try {
            const response = await axios.post(`${url}/creditcards`, user);
            console.log(response.data);
            navigate("/dashboard");
        } catch (error) {
            console.error(error.response.data);
            alert(error.response.data);
        }

    }

    async function dashboardReturn(){
        navigate("/dashboard");
    }
    
    return (
        <>
            <h4>Please add your credit card information below. </h4>
            <button onClick={dashboardReturn}>Return to Dashboard</button>
            <input placeholder="Enter Credit Card Number" ref={ccNumberInput}></input>
            <input placeholder="Enter Credit Card Name" ref={ccNameInput}></input>
            <input placeholder="Enter Credit Card cvv" ref={cvvInput}></input>
            <input placeholder="Enter Credit Card expiration date" ref={expDateInput}></input>

            <br></br>
            <br></br>
            <br></br>
            <input placeholder="Enter zip code" ref={zipInput}></input>
            <input placeholder="Enter Credit Card limit" ref={limitInput}></input>
            <input placeholder="Enter Your Username" ref={customerUsernameInput}></input>
            <br></br>
            <button onClick={createcc}>Add Credit Card</button>
        </>
    )
}
