import { useState } from "react"
import "./Lottery.css"
import { genTicket, sum } from "./helper"

export default function Lottery() {

    let [ticket, setTicket] = useState(genTicket(3));
    let isWinning = sum(ticket) === 15;

    let buyTicket = () => {
        setTicket(genTicket(3));
    }
    return (
        <div>
            <h2>Lottery Game!</h2>
            <div className="tickets">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <button onClick={buyTicket}>Buy New Ticket</button>
            <h3>{isWinning && "Congratulations, You won!"}</h3>
        </div>
    )
}