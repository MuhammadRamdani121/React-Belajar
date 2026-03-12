export default function SpreadJsx() {
  const propsSpread = {
    text: "Hai",
    kelas: 12,
  };
  return (
    <>
      <div>
        <HeaderProps {...propsSpread} />
      </div>
    </>
  );
}

function HeaderProps({ text, kelas }) {
  return (
    <>
      <h1>{text.toLowerCase()}</h1>
      <h1>{kelas}</h1>
    </>
  );
}
