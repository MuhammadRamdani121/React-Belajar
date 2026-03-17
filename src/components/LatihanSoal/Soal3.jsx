export default function Soal3() {
  const buah = ["Apel", "Mangga", "Jeruk"];

  return (
    <>
      <h1>Nama Buah</h1>
      {buah.map((buah, index) => (
        <p key={index}>{buah}</p>
      ))}
    </>
  );
}
