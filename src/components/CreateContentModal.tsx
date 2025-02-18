import { CloseIcon } from "../icons/CloseIcon";
import { Button } from "./Button";
import { InputBox } from "./InputBox";

interface contentModalProps {
  open: boolean;
  onClose: () => void;
}

export function CreateContentModal({ open, onClose }: contentModalProps) {
  return (
    <div>
      {open && (
        <div className="bg-gray-900 opacity-70 w-screen h-screen fixed flex justify-center ">
          <div className="flex items-center">
            <span className=" bg-white p-5 rounded-md ">
              <div
                className="flex justify-between pr-1 cursor-pointer"
                onClick={onClose}
              >
                <p className="font-medium text-xl text-black">Add Content</p>
                <CloseIcon size={"size-6"} />
              </div>
              <div>
                <InputBox placeholder={"Title"} />
                <InputBox placeholder={"link"} />
              </div>
              <div className="flex justify-center font-medium items-cen">
                <Button
                  text="Submit"
                  variant="primary"
                />
              </div>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
