import React, { useEffect, useState} from 'react'
import { Home } from './views/Home/Home.jsx';
import { setContext } from '@apollo/client/link/context';
import { useRouteContext } from './util/routingContext/routeContext.jsx';
// import { ChatContainer } from './components/ChatBot/ChatContainer.jsx';
// import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

  // Set up an Apollo client to point towards graphql backend
// const httpLink = createHttpLink({
//   uri: 'http://localhost:4000', // GraphQL endpoint 'http://localhost:3002/graphql'
// });

//   context for JWT
// const authLink = setContext((_, { headers }) => {
// //   Get token from local storage
// const token = localStorage.getItem('id_token');
//   // Return the headers to the context
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

// httpLink defines where the GraphQL server is hosted. 
// authLink used for setting any headers that need to be attached to your requests.
// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

function App() {
// routing context this allows access to routes selected in all parts of the app 
// all routes that use 'const { dispatch } = useRouteContext();' and dispatch their routes to the context API, will be able to controll routing
  const routeContext = useRouteContext();
  const [currentView, setCurrentView] = useState('/');


  useEffect(() => {
    let pathBase = '/'
    // Loop through each property in the object
    
      for (const key in routeContext) {
          if (routeContext[key] === 1) {
            if(key === 'Home'){
              setCurrentView(`/`)
            }else{
              setCurrentView(`${pathBase}${key}`)   
              console.log(currentView)
            }
          }

        }
        
      console.log(routeContext)

  }, [routeContext]);

// proper routing
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" index element={<Home currRoute={currentView} />} />
          {/* create Service and booking routed in another route called protected routes */}
          {/* <Route path="/aboutUs" index element={<Home />} /> */}
          {/* <Route path="/gallery" index element={<Home />} /> */}
          {/* <Route path="/blog" index element={<Home />} /> */}
     
          {/* <Route path="/contact" index element={<Home />} /> */}
          {/* <Route path="/search" index element={<Home />} /> */}
          {/* Reviews page Route */}
          {/* <Route path="/reviews" element={<ProtectedRoutes element={<Reviews />} />} /> */}

          {/* Privacy Policy Route */}
          {/* <Route path="/privacy" element={<PrivacyPolicy />} /> */}
          {/* Terms of use Route */}
          {/* <Route path="/terms" element={<TermsAndConditions />} /> */}
      </>
      )
    )
  return (
    <>
     
      {/* <ApolloProvider client={client}> */}
        <RouterProvider router={router}/>
        {/* <ChatContainer/> */}
      {/* </ApolloProvider> */}

    </>
  )
}

export default App
