import React from "react";

const Top = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div className="top">
      <h1>Top</h1>
      <p>
        <button onClick={() => setCount(count + 1)}>
          you clicked {count} time{count === 1 ? "" : "s"}
        </button>
      </p>
    </div>
  );
};

export default Top;
