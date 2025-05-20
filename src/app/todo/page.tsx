import { getTodo } from "@/lib/api";
export default async function TodoPage() {
    const todos = await getTodo();
  
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
  