import React, { Suspense, lazy } from 'react';
import { useRoutes } from 'hookrouter';
import Core from './components/core';
import './App.sass';

// Cofigura o carregamento lento
const Home = lazy(() => import('./components/home'));
const List = lazy(() => import('./components/list'));
const FormEdit = lazy(() => import('./components/form/edit'));
const FormCreate = lazy(() => import('./components/form/create'));

// configura as rotas
const appRoute = {
  '/': () => <Home />,
  '/list': () => <List />, 
  '/form': () => <FormCreate />,   
  '/form/:id': ({id}) => <FormEdit id={id}/>
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
