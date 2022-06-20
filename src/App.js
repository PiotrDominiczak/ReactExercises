import './App.css';
// import { MouseMoveClass } from './ex4/MouseMoveClass';
import { StyleTest } from './ex7/StyleTest';
import { ButtonContainer } from './ex8/ButtonContainer';
import { Container } from './ex6/Container';
import { List } from './ex2/List';
import { NameContainer} from './ex1/NameContainer';

import { MouseMove } from './ex4/MouseMove';
import {Calculator} from './ex3/Calculator'
import { DisplayNumber } from './ex5/DisplayNumber';
import {
  Link,
  Routes,
  Route,
} from "react-router-dom";
import { Dogs } from './ex9/Dogs';


function App() {
  return (
    <div className="App" >
      <div>
        <Link to="/">test</Link><br/>
        <Link to="/mouse-move">Mouse move</Link><br/>
        <Link to="/button-container">Button container</Link><br/>
        <Link to="/name-container">Name container</Link><br/>
        <Link to="/container">Container</Link><br/>
        <Link to="/calculator">Calculator</Link><br/>
        <Link to="/list">List</Link><br/>
        <Link to="/display-number">Display number</Link><br/>
        <Link to="/dogs">Dogs</Link><br/>
      </div>
<Routes>
      {/* <NameContainer />  */}
      
      {/* <List /> */}
      {/* <Calculator/> */}
      {/* <DisplayNumber/> */}
      {/* <Container/>/\ */}
      {/* <MouseMoveClass/> */}
      {/* <StyleTest /> */}
        {/* <ButtonContainer /> */}
        <Route path="/" element={<StyleTest />}></Route>
        <Route path="/mouse-move" element={<MouseMove />}></Route>
        <Route path="/button-container" element={<ButtonContainer />}></Route>
        <Route path="/name-container" element={<NameContainer />}></Route>
        <Route path="/calculator" element={<Calculator />}></Route>
        <Route path="/container" element={<Container />}></Route>
        <Route path="/display-number" element={<DisplayNumber />}></Route>
        <Route path="/list" element={<List />}></Route>
        <Route path="/dogs" element={<Dogs />}></Route>
        </Routes>
    </div>
  );
}

export default App;