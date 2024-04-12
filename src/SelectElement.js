function SelectElement({ act, curValue, children }) {
  return (
    <div>
      <label>{children}</label>
      <select onChange={(e) => act(Number(e.target.value))} value={curValue}>
        <option value={0}>It was worst (0%)</option>
        <option value={5}>It was bad (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>It was best (20%)</option>
      </select>
    </div>
  );
}

export default SelectElement;
