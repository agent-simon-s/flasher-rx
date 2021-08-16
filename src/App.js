import { Route, Switch } from 'react-router-dom';
import './App.css';
import AllMeetUpPage from './pages/all.jsx';
import FavoritesPage from './pages/favorites.jsx';
import NewMeetUpPage from './pages/new.jsx';
import LayoutPageDef from './layouts/layout-page-default/layout-page-default.jsx'

function App() {
  return (
    <div className="App">
      <LayoutPageDef>
        <Switch>
          <Route path="/favorites">
            <FavoritesPage></FavoritesPage>
          </Route>
          <Route path="/new">
            <NewMeetUpPage></NewMeetUpPage>
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
