import { useState } from "react"
import { genTicket, sum } from "./helper"
import Ticket from "./Ticket";
import Button from "./Button";

export default function Lottery({ n = 3, winCondition }) {

    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = winCondition(ticket);

    let buyTicket = (action) => {
        setTicket(genTicket(n));
    }
    return (
        <div>
            <h2>Lottery Game!</h2>
            <Ticket ticket={ticket} />
            <button action={buyTicket} />
            <h3>{isWinning && "Congratulations, You won!"}</h3>
        </div>
    )
}