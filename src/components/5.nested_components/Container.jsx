export default function Container({ children }) {
  return (
    <>
      <div className="bg-red-200">
        <h1>Proggrammer Junior</h1>
        {children}
        <p>Programmer 2026</p>
      </div>
    </>
  );
}
