export default function UserAddress() {
  return (
    <section
      className="flex flex-col w-full h-1/6 justify-center items-center 
        bg-white border-solid border-b-2 border-zinc-400"
    >
      <span className="text-xs">Your temporary email address</span>
      <div className="flex h-10 rounded-md border-solid border-[1px] border-zinc-300">
        <span className="h-full font-bold p-2 border-solid border-r-[1px] border-zinc-300">
          placeholder@placeholder.com
        </span>
        <button className="h-full p-2 text-zinc-500">Copy</button>
      </div>
      <div>
        <span className="text-sm">Autofresh in 10</span>
        <button className="text-sm">Refresh</button>
      </div>
    </section>
  );
}
