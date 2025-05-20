import { getTodoById } from "@/lib/api"
import { TodoPage } from "@/types/type"
import { Metadata } from "next";
import { notFound } from "next/navigation";

type PropsSingleTodoPage = {
    params:{
        todoId: string;
    }
}

export async function generateMetadata({params}: PropsSingleTodoPage): Promise<Metadata> {
    const todo = await getTodoById(params.todoId)

    if(!todo){
        return{
            title: "not found",
            description: "not  found with userId"
        }
    }
    return{
        title:`post: ${todo.title}`,
        description: todo.title.slice(0,100)
    }
}

export default async function SingleTodoPage({params}: PropsSingleTodoPage) {
    const todo: TodoPage | null = await getTodoById(params.todoId)

    if (!todo){
        notFound();
    }
    return(
        <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 py-10">
            <div className="max-w-2xl w-full bg-white border border-gray-200 shadow-xl rounded-xl p-8">
            <span className="text-xl font-bols text-blue-900 mb-2 line-clamp-2">{todo.title}</span>
                <p className="mb-4">Complete: {todo.completed ? "✅" : "❌"}</p>
            </div>
        </div>
    )
}