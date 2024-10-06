import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.scss';
import { NavLinkHeader } from './common/navigation/NavLinkHeader';
import { Layout } from './layout/Layout';

function App() {
  return (
    <div className="App">
      <NavLinkHeader/>
      <Layout/>
    </div>
  );
}

export default App;
