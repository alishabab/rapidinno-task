import { Route, Switch } from 'react-router-dom';
import Users from './components/Users';

import './App.css';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/users" component={Users} />
      </Switch>
    </main>
  );
}

export default App;
