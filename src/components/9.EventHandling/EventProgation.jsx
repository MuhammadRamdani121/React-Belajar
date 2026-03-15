export default function Toolbar({ onClick }) {
  return (
    <>
      <div onClick={onClick} className="bg-yellow-200">
        <button onClick={onClick}>First</button>
        <button onClick={onClick}>Second</button>
      </div>
    </>
  );
}
