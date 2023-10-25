export default function EmailList() {
  return (
    <ul>
      <li className="p-1 border-solid border-b-2 border-zinc-400">
        <span className="font-bold">teste@gmail.com</span>
        <div className="flex justify-between text-sm text-blue-500">
          <span className="font-bold">assunto</span>
          <span>16/10/2023</span>
        </div>
        <span className="text-sm text-zinc-500">texto do email...</span>
      </li>
    </ul>
  );
}
