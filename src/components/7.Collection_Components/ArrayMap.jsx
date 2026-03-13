import Todo from "../6.conditional/Todo";

export default function ArrayMap() {
  const data = [
    {
      text: "learn HTML",
      isCompleted: true,
    },
    {
      text: "learn HTML",
      isCompleted: true,
    },
    {
      text: "learn HTML",
      isCompleted: false,
    },
  ];
  //cara pertama simple
  const todos = data.map((todo) => <Todo {...todo} />);

  // cara kedua
  //   const todos = data.map((todo) => {
  //     return <Todo {...todo} />;
  //   });

  return (
    <>
      <li>{todos}</li>
    </>
  );
}
