import { render } from 'preact'

import App from './app.tsx'
import './index.css'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
render(<App />, document.getElementById('app')!)
