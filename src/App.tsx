import "./styles.css";
import { User } from "./user";

export default function App() {
  // here createAdder function takes addBy as a parameter and returns another function
  const createAdder = (num: number) => (addWith: number) => addWith + num;
  console.log(createAdder(5)(5));

  return (
    <div className="App">
      <User
        user={{
          name: "Niranjan A S",
          username: "niranjan",
          gmail: "niranjan0881@gmail.com"
        }}
      />
    </div>
  );
}
