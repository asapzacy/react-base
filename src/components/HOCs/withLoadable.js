import Loadable from 'react-loadable'
import { Spinner } from 'components'

const withLoadable = opts => {
  return Loadable({
    loading: Spinner,
    delay: 200,
    ...opts
  })
}

export default withLoadable
