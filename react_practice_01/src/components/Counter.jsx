import { useState } from "react"

const Counter = ({name}) => {
  const [isOnline, setIsOnline] = useState(false);

  return (
    <div>
      <h2>{name}</h2>
      <p>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}

export default Counter      