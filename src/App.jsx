import Lottery from "./Lottery"
import './App.css'
import Ticket from "./Ticket"

function App() {

  return (
    <>
      {/* <Lottery /> */}
      <Ticket ticket={[0, 1, 2]} />
    </>
  )
}

export default App
