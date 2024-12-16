import Expense from "./component/Expense"
import PostData from "./component/PostData"
import Rate from "./component/Rate"
import Summary from "./component/Summary"

function App() {

  return (
    <>
      <div className="md:flex mt-12 justify-around">
        <Expense />
        <PostData />
        <Rate/>
        <Summary />
      </div>
    </>
  )
}

export default App
