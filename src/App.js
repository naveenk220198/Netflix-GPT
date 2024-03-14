import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/appStore";

function App() {
  return (
    // <div className="App">
    //   <h1 className="text-3xl font-bold text-red-600">Hi, lets learn React!</h1>
    // </div>
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
