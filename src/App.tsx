function App() {
  return (
    <>
      <header className="w-full mb-9">
        <h1 className="text-white font-bold text-4xl">Fake Email</h1>
      </header>
      <main className="flex flex-col w-11/12 h-[91vh] m-auto bg-zinc-300">
        <section className="flex flex-col w-full h-1/6 justify-center items-center bg-white">
          <span>Your temporary email address</span>
          <div>
            <span>placeholder@placeholder.com</span>
            <button>Copy</button>
          </div>
          <div>
            <span>Autofresh in 10</span>
            <button>Refresh</button>
          </div>
        </section>
        <section className="flex flex-row w-full h-5/6">
          <nav className="h-full w-1/4 bg-white">
            <h2 className="text-2xl">Inbox</h2>
            <ul>
              <li>teste</li>
            </ul>
          </nav>
          <article className="h-full w-3/4 px-4 pt-10">
            <h3>Something</h3>
            <div className="h-[95%] w-full bg-white">
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
