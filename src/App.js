import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { NotFound } from './components/pages/NotFound';
import { Home } from './components/pages/Home';

function App() {
  return (
    <>
      <Header />
      <main className="container content">

        <Switch>
          <Route exact path='/' component={Home} />

          <Route component={NotFound} />
        </Switch>

      </main>
      <Footer />
    </>
  );
}

export default App;
