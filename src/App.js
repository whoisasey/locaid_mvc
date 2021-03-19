import React,{useState,useEffect, useCallback} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard';
import AllPages from './components/pages/AllPages'
import Nav from './components/Nav'
// import NavBar from './components/nav/NavBar'
import SinglePage from './components/pages/SinglePage';
import Footer from './components/Footer'
// import {DropdownMenu, Navbar, NavItem} from './components/DropdownMenu'

const App = () => {
  	const [data, setData] = useState([]);

  const getData = useCallback(async function () {
    try {
      const response = await fetch('/api/locaid')
      const json = await response.json();
      if (!response.ok) {
        throw new Error(json.message);
      }
      setData(json.data)
    } catch (err) {
      setData([])
    }
  }, [])
  
  useEffect(() => {
    getData()

  }, [getData])
  // console.log(data)

  return (
    <Router>
      {/* <NavBar /> */}
      <Nav />
      {/* <Navbar>
        <NavItem props={`Trusted Charities`}>
          <DropdownMenu />
        </NavItem>

        <NavItem props={ `About`}/>
      </Navbar> */}

        <div className="wrapper">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/all" render={()=> <AllPages data={data}/> }/>
          <Route exact path="/page/:slug" render={(props) => <SinglePage {...props} data={data}/> }/>
        </Switch>
      </div>
      <Footer />
      </Router>
  );
}

export default App;
