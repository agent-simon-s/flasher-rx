import { Route, Switch } from 'react-router-dom';
import './app.css';
import IntroPage from './pages/intro.jsx';
import AllCardPage from './pages/all.jsx';
import FAQPage from './pages/faq.jsx';
import QuizPage from './pages/quiz.jsx';
import FavoritesPage from './pages/favorites.jsx';
import AddCardPage from './pages/add.jsx';
import LayoutPageDef from './layouts/layout-page-default/layout-page-default.jsx'

function App() {
  return (
    <div className="App">
      <LayoutPageDef>
        <Switch>
           <Route path="/favorites">
             <FavoritesPage></FavoritesPage>
           </Route>
           <Route path="/favorites">
             <FAQPage></FAQPage>
           </Route>
          <Route path="/add">
            <AddCardPage></AddCardPage>
          </Route>
          <Route path="/quiz">
            <QuizPage></QuizPage>
          </Route>
          <Route path="/all">
            <AllCardPage></AllCardPage>
          </Route>
          <Route path="/">
            <IntroPage></IntroPage>
          </Route>
        </Switch>
      </LayoutPageDef>
    </div>
  );
}

export default App;
