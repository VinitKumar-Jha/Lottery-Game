import { useState } from "react"
import { genTicket, sum } from "./helper"
import Ticket from "./Ticket";

export default function Lottery({ n, winningSum }) {

    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = sum(ticket) === winningSum;

    let buyTicket = () => {
        setTicket(genTicket(n));
    }
    return (
        <div>
            <h2>Lottery Game!</h2>
            <Ticket ticket={ticket}/>
            <button onClick={buyTicket}>Buy New Ticket</button>
            <h3>{isWinning && "Congratulations, You won!"}</h3>
        </div>
    )
}