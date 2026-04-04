import { useState } from "react";

export default function TambahUmur() {
  const [umur, setUmur] = useState(0);

  return (
    <>
      <p>{umur}</p>
      <button onClick={() => setUmur(umur + 1)}>Tambah</button>
    </>
  );
}
