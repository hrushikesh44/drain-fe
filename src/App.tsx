import { useState } from "react";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { CreateContentModal } from "./components/CreateContentModal";
import { Sidebar } from "./components/Sidebar";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";

function App() {
  const [ModalOpen, SetModalOpen] = useState(false);

  return (
    <div className="flex">
      <CreateContentModal
        open={ModalOpen}
        onClose={() => {
          SetModalOpen(false);
        }}
      />
      <div>
        <Sidebar />
      </div>
      <div className="w-[80vw] pl-6 bg-main-bg ">
        <div className=" flex justify-between mt-11 ">
          <div>
            <p className="font-bold text-3xl  ">All Notes</p>
          </div>
          <div className="flex gap-5 pr-5">
            <Button
              variant="secondary"
              text="Share Brain"
              startIcon={<ShareIcon />}
            />
            <Button
              variant="primary"
              text="Add Content"
              startIcon={<PlusIcon />}
              onClick={() => {
                SetModalOpen(true);
              }}
            />
          </div>
        </div>
        <div className="flex gap-6 pt-10 ">
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
    </div>
  );
}

export default App;
