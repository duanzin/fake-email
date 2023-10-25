import EmailBox from "./components/emailBox";
import EmailList from "./components/emailList";
import UserAddress from "./components/userAddress";

function App() {
  return (
    <>
      <header className="w-full mb-9">
        <h1 className="text-white font-bold text-4xl">Fake Email</h1>
      </header>
      <main className="flex flex-col w-11/12 h-[91vh] m-auto bg-zinc-200">
        <UserAddress />
        <section className="flex flex-row w-full h-5/6">
          <nav className="h-full w-1/4 bg-white border-solid border-r-2 border-zinc-400">
            <h2 className="h-10 text-2xl border-solid border-b-2 border-zinc-400">
              Inbox
            </h2>
            <EmailList />
          </nav>
          <EmailBox />
        </section>
      </main>
    </>
  );
}

export default App;
