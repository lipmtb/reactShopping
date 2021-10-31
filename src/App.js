import {lazy,Suspense} from "react";


import {Route,Switch} from "react-router-dom";

const Layout=lazy(()=>import("./views/layout"))
const LoginPage=lazy(()=>import("./views/loginPage"))
function App() {
  return (  
    <div className="App">
        <Suspense fallback="正在加载中...">
          <Switch>
             <Route  path="/login" component={LoginPage}></Route>
             <Route  path="/" component={Layout}></Route>
          </Switch>
     
        </Suspense>
    </div>
  );
}

export default App;
