import React,{useState,useEffect, useCallback} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard';
import AllPages from './components/pages/AllPages'
import Nav from './components/Nav'
import SinglePage from './components/pages/SinglePage';
import Footer from './components/Footer'
import About from './components/pages/About'
// import TopViewd from './components/pages/TopViewd'
import HighImpact from './components/pages/HighImpact';
import Loader from './components/reusables/Loader'

export const logo = "Second Life"

const App = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("All");
  // console.log(search)

  const getData = useCallback(async function () {
    try {
      const response = await fetch('/api/locaid');
      const json = await response.json();
      if (!response.ok) {
        throw new Error(json.message);
      }
      setData(json.data);
    } catch (err) {
      setData([]);
    }
  }, []);
  
  useEffect(() => {
    getData();
  }, [getData]);

  if (data === []) {
    return (
      <Loader />
    );
  } else {

    let toRender = [];
    data.forEach((item) => {
      if (search === "All") {
        toRender.push(item);
      }
      else {
        if (
          item.service_cohort.toString().toLowerCase().includes(search.toString().toLowerCase()) ||
          item.location.toString().toLowerCase().includes(search.toString().toLowerCase()) ||
          item.address_object.toString().toLowerCase().includes(search.toString().toLowerCase()) ||
          item.name.toString().toLowerCase().includes(search.toString().toLowerCase()) ||
          item.location.toString().toLowerCase().includes(search.toString().toLowerCase()) ||
          item.service_cohort === search
        ) {
          toRender.push(item);
        }
      }
    });
  

    return (
      <Router>
        <Nav props={data} setSearch={setSearch} logo={logo} />
        <div className="wrapper">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/all" render={() => <AllPages toRender={toRender}  search={search}/>} />
            <Route exact path="/page/:slug" render={(props) => <SinglePage {...props} data={data} />} />
            <Route path="/search" render={() => <AllPages toRender={toRender} />} />
            {/* <Route pat="/categories" render={() => <AllPages toRender={toRender} />} /> */}
            <Route path="/categories/:cohort" render={() => <AllPages toRender={toRender}  search={search}/>} />

            {/* <Route path="/top-viewed" component={TopViewd} /> */}
            <Route path="/location/:locale" render={() => <AllPages toRender={toRender} search={search}/> }/>
            <Route path="/high-impact" render={() => <HighImpact props={ toRender}/>} />
            <Route path="/about" component={About }/>
          </Switch>
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;

// ! routes
// /categories/:service_cohort --> 
// onClick, setsearch to value of LI, render new view based on search