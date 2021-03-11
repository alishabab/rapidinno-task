import { Route, Switch } from 'react-router-dom';
import {
  Navbar, Users, ContactForm, Home,
} from './components';

import './App.css';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/users" component={Users} />
          <Route path="/contact" component={ContactForm} />
        </Switch>
      </main>
    </>
  );
}

export default App;
