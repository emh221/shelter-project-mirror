import React, {PureComponent} from 'react';
import logo from './logo.svg';
import './App.scss';
import FieldSelector from "./components/FieldSelector";
import NavBlock from "./components/NavigationBlock";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import APIWrapper from "./APIWrapper.js";
import ExclusiveOption from "./components/ExclusiveOption";
import Section from './components/Section';
import { ThemeContext } from './ThemeContext';

const navbar = {};
navbar.brand = {linkTo: "#", text: "Portland Shelters"};
navbar.links = [
  {linkTo: "#", text: "Contact Us"},
  {linkTo: "#", text: "How many links do we need?"},
  {
    dropdown: false, text: "Do we want a Dropdown?",
    links: [
      {linkTo: "#", text: "Dropdown Link 1"},
      {linkTo: "#", text: "Dropdown Link 2"}
    ]
  }
];

const exampleOptions = ['One 1', 'Two 2', 'Three 3'];

const APIKey = process.env.REACT_APP_211_API_KEY
const API = new APIWrapper(APIKey)

class App extends React.Component {

  state = {
    sessionID: null,
    categories: []
  }

  async componentDidMount() {
    await API.initialize()

    this.setState({categories: await API.getCategories()})

    console.log(await API.serviceNameSearch({
      st: API.serviceType.serviceName,
      zip: '99504',
      catid: '',
      sn: 'Domestic Violence Shelters',
      county: ''
    }))

    console.log(await API.getKeywords({
      sn: 'Domestic'
    }))

//    console.log(await API.)
  }
}

function App() {
  return (
    <ThemeContext.Provider value='light'>
      <div className='App'>
        <div id='left-gutter-container'>
          Left Gutter
        </div>

        <div id='main-container'>
          Main Container
          <FieldSelector />
        </div>

        <div id='right-gutter-container'>
          Right Gutter
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
