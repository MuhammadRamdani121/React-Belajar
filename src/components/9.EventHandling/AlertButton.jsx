export default function AlertButton({ text }) {
  function handleClick() {
    alert("Button Clicked");
  }
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  );
}
