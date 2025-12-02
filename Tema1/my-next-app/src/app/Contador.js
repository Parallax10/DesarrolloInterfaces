import { useState } from "react";
export default function Contador() {
const [count, setCount] =useState(0);

const increment = () => setCount(count + 1);
return (
    <div>
    <p>Contador: {count}</p>
    <button onClick={increment}>Incrementar</button>
    </div>
);
}