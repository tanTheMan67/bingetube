import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import Appstore from './components/Utils/appStore';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './components/Main';
import Watchpage from './components/Watchpage';
const appRouter = createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element:<Main/>
    },
    {
      path:"Watch",
      element:<Watchpage/>
    }
  ]
}])
function App() {
  return (
  <Provider store={Appstore}>
     <Header/>
    <RouterProvider router={appRouter}/>
    </Provider>
  );
}

export default App;
