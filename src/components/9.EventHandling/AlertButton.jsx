export default function AlertButton({ text, message }) {
  function handleClick() {
    alert(message);
  }
  return (
    <>
      <button
        className="border-2 hover:bg-black hover:text-white"
        onClick={handleClick}
      >
        {text}
      </button>
    </>
  );
}
