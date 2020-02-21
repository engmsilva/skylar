import React from 'react';
import { CoreProvider } from './context';
import {CoreTemplate} from './template';

export default function Core(props) {
  return (
    <CoreProvider>
      <CoreTemplate {...props}/>
    </CoreProvider>
  );
}
