import './App.css';
import StepOne from './Components/step1/stepOne';
import Step2 from './Components/step2/step2';
import SideMenu from './Components/sideMenu/sideMenu';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <section className="App">
      <SideMenu />
      <Routes>
        <Route path="/" element={
          <StepOne/>}
        />
        <Route path="/step2" 
          element={
          <Step2/>}
        />
      </Routes>
    </section>
  );
}

export default App;
