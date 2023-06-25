import React from "react";
import Todo from "./Todo";
import Count from "./Count";
import Memo from "./Memo";

const App = () => {
   return (
      <div id="main">
         <h1>React.useMemo</h1>
         <Todo />
         <Count />
         <Memo />
      </div>
   );
};

export default App;<p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>

