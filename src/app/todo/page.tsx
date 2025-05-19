import { getTodo } from "@/lib/api";
export default async function TodoPage() {
    const todos = await getTodo();
  
    if (!todos || todos.length === 0) {
      return <div className="text-red-500 text-center py-10">Not found TODO</div>;
    }
  
    return (
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.title}</span>
            <span>{todo.completed ? "✅" : "❌"}</span>
          </li>
        ))}
      </ul>
    );
  }
  