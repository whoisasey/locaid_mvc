import React,{useState,useEffect, useCallback} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard';
import AllPages from './components/pages/AllPages'
import Nav from './components/Nav/Nav'
import Sidebar from './components/Nav/Sidebar'
import MobileSidebar from './components/Nav/MobileSidebar'
import SinglePage from './components/pages/SinglePage';
import Footer from './components/Footer'
import About from './components/pages/About'
import HighImpact from './components/pages/HighImpact';
import Loader from './components/reusables/Loader'
import {Desktop} from './components/reusables/Logo'


const App = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("All");
  const [cohorts ] = useState([])
  const [categories, setCategories] = useState([])
  const [locationArr ] = useState([])
  const [locations, setLocation] = useState([])
  	const [searchVal, setSearchVal] = useState('')

	const searchSpace = (e) => {
		const { value, textContent } = e.target
	setSearch(value ||textContent)
	setSearchVal(value || textContent)
  }
  
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

  useEffect(() => {
    // eslint-disable-next-line array-callback-return
    data.map((item) => {
      cohorts.push(item.service_cohort)
      locationArr.push(item.location)
    })
    
    setCategories([...new Set(cohorts)])
    setLocation([...new Set(locationArr)])
  }, [cohorts, data, locationArr])


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
        {/* <Sidebar /> */}
        <Nav props={data} setSearch={setSearch} Desktop={Desktop} categories={categories} locations={locations} setSearchVal={setSearchVal} search={searchSpace}/>
        {/* <MobileSidebar props={data} searchVal={searchVal} setSearchVal={setSearchVal} categories={categories} locations={locations} searchSpace={searchSpace }/> */}
          <Switch>
          <Route exact path="/" render={() => <Dashboard props={ data}/>} />
            <Route path="/all" render={() => <AllPages toRender={toRender}  search={search}/>} />
            <Route exact path="/page/:slug" render={(props) => <SinglePage {...props} data={data} />} />
            <Route path="/search" render={() => <AllPages toRender={toRender} search={search} />} />
            <Route path="/categories/:cohort" render={() => <AllPages toRender={toRender}  search={search}/>} />

            <Route path="/location/:locale" render={() => <AllPages toRender={toRender} search={search}/> }/>
            <Route path="/high-impact" render={() => <HighImpact props={ toRender}/>} />
          <Route path="/about" component={About} />
          </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;