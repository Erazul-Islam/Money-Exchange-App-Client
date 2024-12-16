import Expense from "./component/Expense"
import PostData from "./component/PostData"
import Summary from "./component/Summary"

function App() {

  return (
    <>
      <div className="md:flex justify-around">
        <Expense />
        <PostData />
        <Summary />
      </div>
    </>
  )
}

export default App
