import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import appStore from './utils/appStore';
function App() {

  return (

  // Providing redux store(appStore) to my entire  body comp so anyone can use
  <Provider store={appStore}> <Body/> </Provider> 

  );

}

export default App;
