import { Route, Switch } from 'react-router-dom';
import Users from './components/Users';
import ContactForm from './components/ContactForm';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/users" component={Users} />
        <Route path="/contact" component={ContactForm} />
      </Switch>
    </main>
  );
}

export default App;
