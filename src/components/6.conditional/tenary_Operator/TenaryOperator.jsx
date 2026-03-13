export default function TenaryOperation({
  text,
  isCompleted,
  isDeleted = false,
}) {
  if (isDeleted) {
    return null;
  } else {
    return (
      <>
        {/* <li>{isCompleted ? <del>{text}</del> : text}</li> */}
        <li>
          {/* Logical And */}
          {text} {isCompleted && "✔"}
        </li>
      </>
    );
  }
}
