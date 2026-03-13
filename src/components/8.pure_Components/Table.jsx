import Row from "./Row";
export default function Table() {
  return (
    <>
      <table>
        <tbody className="border-2">
          <Row text="Satu" />
          <Row text="Dua" />
          <Row text="Tiga" />
        </tbody>
      </table>
    </>
  );
}
