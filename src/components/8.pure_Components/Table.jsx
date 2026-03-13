import Row from "./Row";
export default function Table() {
  return (
    <>
      <table>
        <tbody className="border-2">
          <Row id="1" text="Satu" />
          <Row id="2" text="Dua" />
          <Row id="2" text="Dua" />
        </tbody>
      </table>
    </>
  );
}
