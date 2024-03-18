import { TodoForm } from "@/components/todoForm";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-ful flex items-center justify-center flex-col text-center">
        <h1 className="text-3xl font-bold m-2">Add items in todo</h1>
        <TodoForm />
      </div>
    </>
  );
}
