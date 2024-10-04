import './App.scss';
import { Counter } from './features/counter/counter';
import withLogger from './common/hoc/logger';
import { Icons } from './features/icons/Icons';
import { useGetIconsQuery } from './api/apiSlice';
import withLoaderAndErrorHandling from './common/hoc/loader';

function App() {
  /**
   * Custom React components must always start with an uppercase letter (WithLoggerCounter).
    Intrinsic Elements are native HTML elements (like <div> or <button>), and trying to use a lowercase component name will make React interpret it as an intrinsic element, leading to this error.
    If you receive TS2339, check the capitalization of your component.
    This should resolve the issue, and your wrapped component should work as expected.
   */
  //Always keep HOC component in Capital letter otherwise it will show this error TS2339 insrtict type error.
  const WithLoggerCounter = withLogger(Counter);
  const WithLoading = withLoaderAndErrorHandling(Icons);
  const {data, isLoading, error} = useGetIconsQuery();
  return (
    <div className="App">
      <header>App Badges</header>
      <WithLoggerCounter/>
      <WithLoading loading={isLoading} icons={data} err={error} />
    </div>
  );
}

export default App;
