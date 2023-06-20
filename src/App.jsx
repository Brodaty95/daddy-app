import "./App.css";

function Main() {
  return (
    <div className="Main">
      <h1>Strona przyszłego ojca</h1>
      <nav>
        <button>Strona główna</button>
        <button>Przydatne funkcje</button>
        <button>Ciekawe funkcje</button>
        <button>O mnie</button>
      </nav>
      <MainGreeting />
    </div>
  );
}

export default Main;
