import { Route, Switch } from 'react-router-dom';
import Users from './components/Users';
import ContactForm from './components/ContactForm';
import './App.css';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/users" component={Users} />
        <Route path="/contact" component={ContactForm} />
      </Switch>
    </main>
  );
}

export default App;
