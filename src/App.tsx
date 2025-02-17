import { Button } from "./components/Button"
import { PlusIcon } from "./icons/PlusIcon"
import { ShareIcon } from "./icons/ShareIcon"

function App() {
  return <div>
    <div className="flex justify-between mt-11 pl-[20vw] ">
      <div>
        <p className="font-bold text-3xl  ">All Notes</p>
      </div>
      <div className="flex gap-5 mr-5">
        <Button variant="secondary" text="Share Brain" startIcon= { <ShareIcon /> } />
        <Button variant="primary" text="Add Content" startIcon= { <PlusIcon /> } />
      </div>
    </div>
  </div> 
}

export default App
