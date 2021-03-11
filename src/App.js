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
          <Route path={['/', '/rapidinno-task']} component={Home} exact />
          <Route path="/rapidinno-task/users" component={Users} />
          <Route path="/rapidinno-task/contact" component={ContactForm} />
        </Switch>
      </main>
    </>
  );
}

export default App;
