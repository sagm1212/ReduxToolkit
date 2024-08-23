import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import MiRouter from './router/MiRouter'
import { Provider } from 'react-redux'
import store from './store/store'


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider store={store}>
       <BrowserRouter>
         <MiRouter/>
       </BrowserRouter>
     </Provider>
  </StrictMode>,
)
