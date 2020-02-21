import { useContext } from 'react';
import { CoreContext } from './context';

const useCoreHooks = () => {

  const [ stateCore ] = useContext(CoreContext);   
  

  return {  
    stateCore, 
   
    
  }
};

export default useCoreHooks;
