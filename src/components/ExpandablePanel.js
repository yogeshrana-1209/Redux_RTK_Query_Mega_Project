import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function ExpandablePanel({ header, children }) {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="mb-2 sm:mb-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mx-2 sm:mx-0">
      <div className="flex p-2 sm:p-4 justify-between items-center">
        <div className="flex flex-row items-center gap-2 sm:gap-4 w-full">
          {header}
        </div>
        <div onClick={handleClick} className="cursor-pointer">
          {expanded ? <GoChevronDown /> : <GoChevronLeft />}
        </div>
      </div>
      {expanded && <div className="p-2 border-t">{children}</div>}
    </div>
  );
}

export default ExpandablePanel;
