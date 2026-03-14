export default function ButtonSmash({ text, onSmash }) {
  return (
    <>
      <button onClick={onSmash}>{text}</button>
    </>
  );
}
