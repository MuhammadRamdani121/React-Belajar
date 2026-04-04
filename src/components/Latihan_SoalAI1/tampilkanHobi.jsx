export default function TampilkanHobi() {
  const hobi = ["Membaca", "Menulis", "Ngoding"];
  return (
    <>
      <h1>
        {hobi.map((hobi, index) => (
          <p key={index}>{hobi}</p>
        ))}
      </h1>
    </>
  );
}
