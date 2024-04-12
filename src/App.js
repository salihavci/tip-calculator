import { useState } from "react";
import Bill from "./Bill";
import PaymentLabel from "./PaymentLabel";
import Reset from "./Reset";
import SelectElement from "./SelectElement";

function App() {
  const [bill, setBill] = useState("0");
  const [myTip, setMyTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  function resetValues() {
    setBill("0");
    setMyTip(0);
    setFriendTip(0);
  }

  return (
    <div>
      <Bill onBill={setBill} curValue={bill} />
      <SelectElement act={setMyTip} curValue={myTip}>
        How did you like the service?
      </SelectElement>
      <SelectElement act={setFriendTip} curValue={friendTip}>
        How did your friend like the service?
      </SelectElement>
      {bill > 0 && (
        <>
          <PaymentLabel bill={bill} myTip={myTip} friendTip={friendTip} />
          <Reset resetAct={resetValues} />
        </>
      )}
    </div>
  );
}

export default App;
