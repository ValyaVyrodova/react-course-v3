import { useState } from "react";

const ErrorExample = () => {
  const [count, setCount] = useState(0)
  
  return (
    <div>
      <h2>{count}</h2>
      <div>
        <button type='button' className='btn' onClick={()=> setCount(count - 1)}>decrease</button>
        <button type='button' className='btn' onClick={()=> setCount(count + 1)}>increase</button>
      </div>

    </div>
  );

};

export default ErrorExample;
