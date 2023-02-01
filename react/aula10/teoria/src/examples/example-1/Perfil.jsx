import { useContext } from "react";
import UserContext from "./UserContext";
function Example1() {
  const user = useContext(UserContext);

  return (
    <div>
      <strong>{user.name}</strong>
      <br />
      <span>{user.age}</span>
    </div>
  );
}
export default Example1;
