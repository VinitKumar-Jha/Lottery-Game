import Lottery from "./Lottery"
import './App.css'
import TicketNum from "./TicketNum"

function App() {

  return (
    <>
      {/* <Lottery /> */}
      <TicketNum num={4} />
      <TicketNum num={4} />
      <TicketNum num={4} />
    </>
  )
}

export default App
