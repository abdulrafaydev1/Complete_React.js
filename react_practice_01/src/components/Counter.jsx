import { useState } from "react"

const Counter = () => {
  const [isOnline, setIsOnline] = useState(true);

  return (
    <div>
      <h2>{name}</h2>
      <p>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}

export default Counter      