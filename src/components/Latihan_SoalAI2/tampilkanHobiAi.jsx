export default function TampilkanHobiProps(props) {
  return (
    <>
      <h1>
        {props.hobi.map((hobi, index) => (
          <p key={index}>{hobi}</p>
        ))}
      </h1>
    </>
  );
}
