import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";

function App() {
  return (
    <div>
      <div className="flex justify-between mt-11 pl-[20vw] ">
        <div>
          <p className="font-bold text-3xl  ">All Notes</p>
        </div>
        <div className="flex gap-5 mr-5">
          <Button
            variant="secondary"
            text="Share Brain"
            startIcon={<ShareIcon />}
          />
          <Button
            variant="primary"
            text="Add Content"
            startIcon={<PlusIcon />}
          />
        </div>
      </div>
      <div className="flex gap-6 pt-10 ml-[20vw] ">
        <Card
          title="Buttler with warriors"
          link="https://youtu.be/2JG26c2uJ7k?si=42_beJNiaL2UZfoU"
          type="youtube"
        />
        <Card
          title="My Tweet"
          link="https://x.com/KDTrey5/status/1891541979504222218"
          type="twitter"
        />
      </div>
    </div>
  );
}

export default App;
