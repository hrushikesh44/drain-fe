import { Button } from "../components/Button";
import { InputBox } from "../components/InputBox";

export function Signin() {
  return (
    <div className="w-screen h-screen bg-gray-200 flex items-center justify-center   ">
      <div className="bg-white rounded-xl min-w-52 p-6  ">
        <div className="flex justify-center items-center text-2xl font-bold text-primary-color">
          SIGNIN
        </div>
        <div>
          <InputBox placeholder="Username" />
          <InputBox placeholder="Password" />
          <div className="flex justify-center items-center">
            <Button
              variant="primary"
              text="Signin"
              medium={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
