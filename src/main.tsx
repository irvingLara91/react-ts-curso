import ReactDOM from 'react-dom/client'
import './index.css'
import App from "./App.tsx";
import {Provider} from "react-redux";
import generateStore from "./redux/store.ts";
const store = generateStore();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
    .render(
        <Provider store={store}>
        <App/>
        </Provider>
    )
