export default function EmailBox() {
  return (
    <article className="h-full w-3/4">
      <h2 className="text-right h-10 w-full border-solid border-b-2 border-zinc-400">
        teste@gmail.com
      </h2>
      <div className="h-[92%] w-full p-1.5">
        <h3>assunto</h3>
        <p className="w-full h-[98%] p-1.5 bg-white border-solid border-2 border-zinc-400">
          texto do email há coisas coisas coisas coisas coisas coisas coisas
          coisas coisas coisas coisas
        </p>
      </div>
    </article>
  );
}
