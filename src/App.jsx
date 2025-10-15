import Lottery from "./Lottery"
import './App.css'

function App() {


  let winCondition = (ticket) => {
    return ticket[0] === 0;
  }
  return (
    <>
      <Lottery n={3} winCondition={winCondition} />
    </>
  )
}

export default App
