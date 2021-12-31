import { Switch, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import Whitepaper from './pages/Whitepaper'
import NotFound from './pages/NotFound'

import ErrorHandler from './components/ErrorHandler'
import ScrollToTop from './components/ScrollToTop'

const App: React.FC = () => (
  <ErrorHandler>
    <ScrollToTop />
    <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route exact path="/whitepaper">
        <Whitepaper />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  </ErrorHandler>
)

export default App
