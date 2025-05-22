import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const TestPrint = () => {
  const ref = useRef();
  const handlePrint = useReactToPrint({
    content: () => ref.current,
  });
  return (
    <>
      <div ref={ref}>
        <h1>Hello Print</h1>
      </div>
      <button onClick={handlePrint}>Print</button>
    </>
  );
};

export default TestPrint;
