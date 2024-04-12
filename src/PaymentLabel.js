function PaymentLabel({ bill, myTip, friendTip }) {
  const avgTip = (myTip + friendTip) / 2;
  const tipAmount = (avgTip / 100) * bill;
  const totalAmount = bill + tipAmount;
  return (
    <div>
      <h1>
        You pay ${totalAmount} (${bill} + ${tipAmount} tip)
      </h1>
    </div>
  );
}

export default PaymentLabel;
