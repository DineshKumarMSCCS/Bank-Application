import React, { useState, useContext } from "react";
import MyContext from "./Mycontext";
import "bootstrap/dist/css/bootstrap.min.css";
import './login.css';

function CreateAccount(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(true);
    const ctx = useContext(MyContext);

    function create(e){
        e.preventDefault();
        console.log('Create Account Consoles start');
        console.log("User data before creating account:", ctx);
        console.log("Inputs: ", "Name ", name, "Email ", email, "Phone no ", phone, "Date of Birth ", dateOfBirth, "Gender ", gender, "Password ", password);
        console.log("Data type of phone number:", typeof(phone));
        console.log("Phone number length:", phone.length);

        // Validate inputs
        if (name === "") {
            alert("Please enter name");
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Invalid email format");
            return;
        }

        // Add more validation for other fields as needed...

        // Add the user to the context
        ctx.users.push({ name, email, phone, dateOfBirth, gender, password, balance: 0 });
        console.log("User data after account created:", ctx);
        setShow(false);
        console.log('Create Account Consoles end');
    }

    function reset(){
        setName('');
        setEmail('');
        setPhone('');
        setDateOfBirth('');
        setGender('');
        setPassword('');
        setShow(true);
    }

    return(
        <div className="app">
            <div className="login-form">
                <div className="title">Create Account</div>
                <div className="form">
                    {show ?
                    <form>
                        <div className="input-container">
                            <label>Name: </label>
                            <input type="text" name="uname" required value={name} onChange={e=>setName(e.target.value)} />
                        </div>
                        <div className="input-container">
                            <label>Email: </label>
                            <input type="text" name="uname" required value={email} onChange={e=>setEmail(e.target.value)} />
                        </div>
                        <div className="input-container">
                            <label>Phone: </label>
                            <input type="number" name="uname" required value={phone} onChange={e=>setPhone(e.target.value)} />
                        </div>
                        <div className="input-container">
                            <label>Date of Birth: </label>
                            <input type="date" name="dob" required value={dateOfBirth} onChange={e=>setDateOfBirth(e.target.value)} />
                        </div>
                        <div className="input-container">
                            <label>Gender: </label>
                            <select id="Size" name="Size" value={gender} onChange={e=>setGender(e.target.value)}>
                                <option>select</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div className="input-container">
                            <label>Password: </label>
                            <input type="password" name="pass" required value={password} onChange={e=>setPassword(e.target.value)} />
                        </div>
                        <div className="button-container">
                           <button onClick={create}>Submit</button>
                        </div>
                    </form> :
                    <>
                        <h4 id="success">Successfully created</h4>
                        <div className="button-container">
                            <div><button onClick={reset}>Create another Account</button></div>
                        </div>
                    </>}
                </div>       
            </div>
        </div>
    );
}

export default CreateAccount;
