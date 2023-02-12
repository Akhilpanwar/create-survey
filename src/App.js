
import './App.css'

import Header from './components/Header/header';
import { Provider } from 'react-redux';
import store  from './components/Redux/store';
import { StyledDiv } from './components/Header/styles';
import { useSelector } from 'react-redux';
function App() {
  
  return (
    <StyledDiv HG="800px">
   <Provider store={store}>
<Header/>
</Provider>
    </StyledDiv>
  );
}
 
export default App;
