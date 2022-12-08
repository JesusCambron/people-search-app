import "./App.css";
import Form from "./components/form";
import Header from "./components/Header";
import PeopleList from "./components/PeopleList";
import { PeopleProvider } from "./context/people/PeopleContext";

function App() {
  return (
    <PeopleProvider>
      <div className="App">
        <Header />
        <main className="main">
          <Form />
          <PeopleList />
        </main>
      </div>
    </PeopleProvider>
  );
}

export default App;
