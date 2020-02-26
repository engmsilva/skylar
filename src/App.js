import React, { Suspense, lazy } from 'react';
import { useRoutes } from 'hookrouter';
import Core from './components/core';
import './App.sass';

// Cofigura o carregamento lento
const Home = lazy(() => import('./components/home'));
const List = lazy(() => import('./components/list'));
const Form = lazy(() => import('./components/form/form'));

// configura as rotas
const appRoute = {
  '/': () => <Home />,
  '/list': () => <List />, 
  '/form': () => <Form />,   
  '/form/:id': ({id}) => <Form id={id}/>
};

function App() {
  const routerResult = useRoutes(appRoute);
  return (
    <>
    <Core>
      <Suspense
        fallback={(
          <div key="a23" className="spinner loader">
          
          </div>
)}
      >        
            {routerResult }          
      </Suspense>
    </Core>
  
    </>
  );
}

export default App;
