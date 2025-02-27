import AddToDo from "@/components/AddToDo";
import ToDoList from "@/components/todolist";

export default function Home() {
  return (
    <div>
      <AddToDo />
      <ToDoList />
    </div>;
  );
}
