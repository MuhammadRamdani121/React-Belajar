import Todo from "../6.conditional/Todo";
export default function TodoList() {
  return (
    <>
      <ul className=" bg-amber-200 text-center">
        <Todo isCompleted={true} text="Learn Html" isDeleted={true} />
        <Todo isCompleted={true} text="2.Learn Html" />
        <Todo isCompleted={true} text="3.Learn Html" />
        <Todo isCompleted={false} text="4.Learn Html" />
      </ul>
    </>
  );
}
