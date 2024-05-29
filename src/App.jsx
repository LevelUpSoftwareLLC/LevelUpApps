import React, { useEffect, useState} from 'react'
import { Home } from './views/Home/Home.jsx';
// import { setContext } from '@apollo/client/link/context';
import { useRouteContext } from './util/routingContext/routeContext.jsx';

import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';



function App() {
// routing context this allows access to routes selected in all parts of the app 
// all routes that use 'const { dispatch } = useRouteContext();' and dispatch their routes to the context API, will be able to controll routing
  const routeContext = useRouteContext();
  const [currentView, setCurrentView] = useState('/');
  const [routeKey, setRouteKey] = useState('/');

  useEffect(() => {
    let pathBase = '/'

    
      for (const key in routeContext) {
          if (routeContext[key] === 1) {
            if(key === 'Home'){
              setCurrentView(`/`)
            }else{
              setCurrentView(`${pathBase}${key}`)   
              // setRouteKey(key)

            }
          }

        }
        
      // console.log(routeContext)

  }, [routeContext]);

  useEffect(() => {
    // console.log(currentView)

  }, [currentView]);


// proper routing
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" index element={<Home currRoute={currentView} />} />
      </>
      )
    )
  return (
    <>
     {currentView === '/' ? <Home currRoute={'currentView'} /> : <Home currRoute={currentView} />}
    </>
  )
}

export default App
