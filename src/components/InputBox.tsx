interface inputBoxProps {
  placeholder: string;
}

export function InputBox({ placeholder }: inputBoxProps) {
  return (
    <div className="p-2 rounded-sm w-[20vw] ">
      <input
        className="border border-main-text p-1 w-[18vw] "
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}
