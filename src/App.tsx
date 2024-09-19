import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Counter } from './features/counter/counter';
import withLogger from './common/hoc/logger';

function App() {
  /**
   * Custom React components must always start with an uppercase letter (WithLoggerCounter).
    Intrinsic Elements are native HTML elements (like <div> or <button>), and trying to use a lowercase component name will make React interpret it as an intrinsic element, leading to this error.
    If you receive TS2339, check the capitalization of your component.
    This should resolve the issue, and your wrapped component should work as expected.
   */
  //Always keep HOC component in Capital letter otherwise it will show this error TS2339 insrtict type error.
  const WithLoggerCounter = withLogger(Counter);
  return (
    <div className="App">
      <header>App Badges</header>
      <WithLoggerCounter>
        <div>JAY</div>
      </WithLoggerCounter>
    </div>
  );
}

export default App;
