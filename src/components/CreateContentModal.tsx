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
        <>
          <div className="bg-gray-900 opacity-70 w-screen h-screen fixed flex justify-center "></div>
          <div className="w-screen h-screen fixed top-0 left-0 flex justify-center ">
            <div className="flex items-center backdrop-opacity-0 ">
              <span className=" bg-white p-5 rounded-md ">
                <div
                  className="flex justify-between pr-6 cursor-pointer hover:text-red-700"
                  onClick={onClose}
                >
                  <p className="font-medium text-xl text-black pl-2">
                    Add Content
                  </p>
                  <CloseIcon size={"size-6"} />
                </div>
                <div className="mt-5 gap-5 ml-1">
                  <InputBox placeholder={"Title"} />
                  <InputBox placeholder={"Link"} />
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
        </>
      )}
    </div>
  );
}
