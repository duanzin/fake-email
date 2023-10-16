function App() {
  return (
    <>
      <header className="w-full mb-9">
        <h1 className="text-white font-bold text-4xl">Fake Email</h1>
      </header>
      <main className="flex flex-col w-11/12 h-[91vh] m-auto bg-zinc-200">
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
        <section className="flex flex-row w-full h-5/6">
          <nav className="h-full w-1/4 bg-white border-solid border-r-2 border-zinc-400">
            <h2 className="h-10 text-2xl">Inbox</h2>
            <ul className="border-solid border-t-2 border-zinc-400">
              <li className="p-1 border-solid border-b-2 border-zinc-400">
                <span className="font-bold">teste@gmail.com</span>
                <div className="flex justify-between text-sm text-blue-500">
                  <span className="font-bold">assunto</span>
                  <span>16/10/2023</span>
                </div>
                <span className="text-sm text-zinc-500">texto do email...</span>
              </li>
            </ul>
          </nav>
          <article className="h-full w-3/4">
            <h2 className="text-right h-10 w-full border-solid border-b-2 border-zinc-400">
              Something
            </h2>
            <div className="h-[95%] w-full bg-white border-solid border-2 border-zinc-400">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                elit metus, blandit sed nisi sed, pellentesque lacinia nisi.
                Maecenas at interdum ligula. Aenean ultrices augue porta ligula
                tempus, in rhoncus dolor aliquam. Sed sit amet tellus tellus.
                Pellentesque feugiat magna lacus. Duis eleifend sagittis libero,
                sed iaculis nunc placerat id. Nulla facilisi. Praesent a auctor
                orci. Donec aliquam lectus ac varius semper. Aliquam pulvinar
                dignissim pretium. In vitae lacus porttitor, maximus nisi vitae,
                vestibulum nunc. Suspendisse nec eros arcu. Etiam ac ornare
                arcu. Aliquam pretium at velit nec eleifend. Aenean tincidunt
                venenatis sem, vel dignissim magna pulvinar vel. Donec efficitur
                ante sed tempor blandit. Nam feugiat dolor turpis, in auctor
                velit egestas at. Duis tellus sapien, viverra nec viverra sit
                amet, eleifend et elit. Suspendisse sollicitudin et tortor in
                fermentum. Curabitur pharetra purus eu mauris volutpat, ac
                tempor justo hendrerit. Sed et urna convallis, pulvinar lorem
                at, cursus dui.
              </p>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}

export default App;
