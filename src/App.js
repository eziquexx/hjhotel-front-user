import { RouterProvider } from "react-router-dom";
import RouterObject from "./util/router";
// import './components/common/css/Intro.css'

//24.11.27 지은 [완료] : react-router-dom 신기능 CreateBorwserRouter 적용 
function App() {
  return <RouterProvider router={RouterObject} />;
}

export default App;