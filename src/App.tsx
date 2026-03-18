import Authentication from "./routes/AuthPageRoute";
import UserPageRoute from "./routes/UserPageRoute";

function App() {
  return (
    <>
      <Authentication />
      <UserPageRoute />
    </>
  );
}

export default App;
