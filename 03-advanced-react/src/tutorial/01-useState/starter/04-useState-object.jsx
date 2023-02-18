import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Peter',
    age: 24,
    enjoys: 'read books'
  })

  const displayPerson = () => {
    setPerson({
      name: 'John',
      age: 28,
      enjoys: 'studying'
    })
  }

  return (
    <div>
      <h2>useState object example</h2>
      <h4>{person.name}</h4>
      <h4>{person.age}</h4>
      <h4>Enjoys: {person.enjoys}</h4>
      <button onClick={displayPerson}>Show John</button>
    </div>
  );
};

export default UseStateObject;
