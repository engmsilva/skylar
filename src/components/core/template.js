import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header';
import useCoreHooks from './useCustomHooks';

export function CoreTemplate(props) {
 
  const { children } = props
 
  // eslint-disable-next-line
  const { state } = useCoreHooks(); 

  return (
    <>
    <Header />    
    {children}
    </>
  );
}

CoreTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};
