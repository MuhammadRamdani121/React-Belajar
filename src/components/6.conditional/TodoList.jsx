import Todo from "../6.conditional/Todo";
import TenaryOperation from "./tenary_Operator/TenaryOperator";
export default function TodoList() {
  return (
    <>
      <ul className=" bg-amber-200 text-center">
        <Todo isCompleted={true} text="Learn Html" isDeleted={true} />
        <Todo isCompleted={true} text="2.Learn Html" />
        <Todo isCompleted={true} text="3.Learn Html" />
        <Todo isCompleted={false} text="4.Learn Html" />
        <br />
        <TenaryOperation
          isCompleted={true}
          text="Leard Html"
          isDeleted={true}
        />
        <TenaryOperation isCompleted={true} text="Leard Html" />
        <TenaryOperation isCompleted={true} text="Leard Html" />
        <TenaryOperation isCompleted={false} text="Leard Html" />
      </ul>
    </>
  );
}
