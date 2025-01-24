import classNames from "classnames";

function Panel({ children, className = "", ...rest }) {
  if (typeof className !== "string") {
    throw new Error("className must be a string");
  }
  const finalClassNames = classNames(
    "border rounded p-3 shadow bg-white w-full",
    className
  );

  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  );
}

export default Panel;
