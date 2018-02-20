
/* -------  HOCs  ------- */
import withLoadable from './HOCs/withLoadable'

/* -------  Core  ------- */
import Loading from './Core/Loading/Loading'
import Spinner from './Core/Spinner/Spinner'

/* -------  Base  ------- */
const App = withLoadable({ loader: () => import('./Base/App/App') })
const Header = withLoadable({ loader: () => import('./Base/Header/Header') })

/* -------  Views  ------- */
const Home = withLoadable({ loader: () => import('./Views/Home/Home') })
const About = withLoadable({ loader: () => import('./Views/About/About') })
const Contact = withLoadable({ loader: () => import('./Views/Contact/Contact') })
const NotFound = withLoadable({ loader: () => import('./Views/NotFound/NotFound') })

/* -------  Utils  ------- */

export {
  App,
  Header,
  Home,
  About,
  Contact,
  NotFound,
  Spinner,
  Loading
}
