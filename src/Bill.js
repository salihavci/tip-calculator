function Bill({ onBill, curValue }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        onChange={(e) => onBill(Number(e.target.value))}
        value={curValue}
      />
    </div>
  );
}

export default Bill;
