import {UseEffectHook,WindowWidth} from "./components/UseEffectHook";
import UseMemoHook from "./components/UseMemoHook";
import UseRefHook from "./components/UseRefHook";
import UseStateHook from "./components/UseStateHook";
function App() {
  return (
    <div className="App">
      {/* <UseStateHook/> */}
      {/* <UseEffectHook/> */}
      {/* <WindowWidth/> */}
      {/* <UseMemoHook/> */}
      <UseRefHook/>
    </div>
  );
}

export default App;
