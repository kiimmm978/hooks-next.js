import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <ul>
        <li>
          useReducer Hook - <a href="/useReducer">/useReducer</a>
        </li>
        <li>
          useContext Hook - <a href="/useContext">/useContext</a>
        </li>
        <li>
          useCallback Hook - <a href="/useCallback">/useCallback</a>
        </li>
      </ul>
    </div>
  );
}
