import { useState } from "react";
import { BUTTONS } from "../utils/constants";
import Button from "./common/Button";

const ButtonLists = (props: Props) => {
  const [selectedBtn, setSelectedBtn] = useState(1);

  return (
    <div className="w-full overflow-x-auto no-scrollbar">
      <div className="flex items-center gap-4 flex-nowrap">
        {BUTTONS?.map((btn) => (
          <Button
            key={btn.id}
            btnName={btn.title}
            btnClass={`px-3 py-1 rounded-lg font-semibold bg-[#272727] break-all whitespace-nowrap cursor-pointer ${
              selectedBtn === btn.id ? " bg-white text-black" : "text-white"
            }`}
            onClick={() => setSelectedBtn(btn.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ButtonLists;
