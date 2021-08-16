import { Route, Switch } from 'react-router-dom';
import './App.css';
import AllMeetUpPage from './pages/all.jsx';
import FavoritesPage from './pages/favorites.jsx';
import AddCardPage from './pages/new.jsx';
import LayoutPageDef from './layouts/layout-page-default/layout-page-default.jsx'

function App() {
  return (
    <div className="App">
      <LayoutPageDef>
        <Switch>
          <Route path="/favorites">
            <FavoritesPage></FavoritesPage>
          </Route>
          <Route path="/add">
            <AddCardPage></AddCardPage>
          </Route>
          <Route path="/">
            <AllMeetUpPage></AllMeetUpPage>
          </Route>
          {/*<Route path="/">
            <AllMeetUpPage></AllMeetUpPage>
          </Route>*/}
        </Switch>
      </LayoutPageDef>
    </div>
  );
}

export default App;
