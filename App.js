
import { Switch ,Route} from 'react-router-dom';
import './App.css';
import StepOne from './components/stepOne'
import Nav from './components/nav';
import StepTwo from './components/stepTwo';
import StepThree from './components/stepThree';
import stepThree from './components/stepThree';
import stepOne from './components/stepOne';

function App() {
  return (
    
    <div className="App">
      <Nav></Nav>
      <Switch>
        <Route exact component={StepOne} path="/stepOne"/>
        <Route exact component={StepTwo} path="/stepTwo"/>
        <Route exact component={StepThree} path="/stepThree"/>
      </Switch>
    </div>
  );
}

export default App;
