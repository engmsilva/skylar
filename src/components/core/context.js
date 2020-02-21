import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { initialState, reducer} from './reduncer';

const CoreContext = React.createContext([{}, () => {}]);

const CoreProvider = (props) => {
  const { children } = props  
  
  const [ stateCore, dispatchCore ] = useReducer(reducer, initialState );  

  return (
    <CoreContext.Provider value={[ stateCore, dispatchCore ]}>
      {children}
    </CoreContext.Provider>
  );
}

CoreProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export { CoreContext, CoreProvider };
