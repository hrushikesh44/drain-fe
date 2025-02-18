interface inputBoxProps {
  placeholder: string;
}

export function InputBox({ placeholder }: inputBoxProps) {
  return (
    <div className="p-2 rounded-sm ">
      <input
        className="border border-main-text p-1"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}
