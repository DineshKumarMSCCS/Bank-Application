import React, { useState } from "react";
import styles from './App.module.css';
import { useContext } from "react";
import MyContext from "./Mycontext";

export default function Deposite1(){
    const [amount , setAmount] = useState("");
    const [error, setError] = useState('');
    const ctx = useContext(MyContext);

    let index = 0;
    let userbalance = 0;
    let i = 0;

    for(i = 0; i < ctx.currentUser.length; i++) {
        index = ctx.users.findIndex(user => user.email === ctx.currentUser[i].email);
        userbalance = ctx.currentUser[i].balance;
    }

    const [balance, setBalance] = useState(userbalance);

    const handleTransactions = (e) => {
        e.preventDefault();

        if (!ctx.currentUser.length) {
            alert("Please log in to deposit.");
            return;
        }

        if (!amount) {
            alert("Please enter the amount.");
            return;
        }

        if (amount > 0) {
            let bala = userbalance + Number(amount);
            setBalance(bala);
            ctx.users[index].balance = bala;
            setError(`Successfully Deposited ${amount}`);
        }
        setAmount("");
    };

    return (
        <>
            <div className={styles.withdraw}>
                <div key="balance">Account Balance: ${balance}</div>
                <input
                    className={styles.input}
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount "
                />
                <button
                    className={styles.btn}
                    type="submit"
                    onClick={(e) => handleTransactions(e)}
                >
                    Submit
                </button> 
            </div>
            <div className={styles.withdraws}>
                <p>{error}</p>
            </div>
        </>
    );
}
