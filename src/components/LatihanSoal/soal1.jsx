export default function ComponentReact() {
  const name = "Ramdani";
  function button() {
    alert("Eror");
  }
  return (
    <>
      <div>
        <h1>Soal 1</h1>
        <h1>Hallo,Saya Belajar React </h1>
        <h1>Hallo, {name}</h1>
        <button onClick={button}>Klik Saya</button>
      </div>
    </>
  );
}
