import Parent from "./components/Context/Parent";
import { UseEffectHook, WindowWidth } from "./components/UseEffectHook";
import UseMemoHook from "./components/UseMemoHook";
import UseReducerHook from "./components/UseReducerHook";
import UseRefHook from "./components/UseRefHook";
import UseStateHook from "./components/UseStateHook";
import UseReducerTodoExample from "./components/UseReducerTodoExample";
function App() {
  return (
    <div className="App">
      {/* <UseStateHook/> */}
      {/* <UseEffectHook/> */}
      {/* <WindowWidth/> */}
      {/* <UseMemoHook/> */}
      {/* <UseRefHook/> */}
      {/* <Parent/> */}
      {/* <UseReducerHook/> */}
      <UseReducerTodoExample />
    </div>
  );
}

export default App;
