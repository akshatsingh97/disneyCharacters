import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom/client';
import ReadDisneyCharacter from './components/ReadDisneyCharacters';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import ShortFilms from './components/ShortFilms';
import TvShows from './components/TvShows';
import Header from './components/Header';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <ReadDisneyCharacter show="Hello"/>
      },
      {
        path: "/shortfilms",
        element: <ShortFilms/>
      },
      {
        path: "/tvshows",
        element: <TvShows/>
      }
    ]
  },
])


function App() {
  return (
    <div className="App">
      <h1>Welcome Disney Characters!!</h1>
      <Header/>
      <Outlet/>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);
