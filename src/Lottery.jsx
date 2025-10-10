import { useState } from "react"
import "./Lottery.css"
import { genTicket } from "./helper"

export default function Lottery() {

    let [tickets, setTickets] = useState(genTicket(3))
    return (
        <div>
            <h2>Lottery Game!</h2>
            <div className="tickets">
                <span>{tickets[0]}</span>
                <span>{tickets[1]}</span>
                <span>{tickets[2]}</span>
            </div>
        </div>
    )
}