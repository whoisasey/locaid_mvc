import React,{useState,useEffect, useCallback} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard';
import AllPages from './components/pages/AllPages'
import Nav from './components/Nav'
import SinglePage from './components/pages/SinglePage';
import Footer from './components/Footer'
import CatView from './components/CatView'
import TopViewd from './components/pages/TopViewd'
import HighImpact from './components/pages/HighImpact';

const App = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("")
  // const [navFilter, setNavFilter] = useState("")
  console.log("search", search)
  // console.log("filter",navFilter)

  // ! if navFilter !== "", render view and set /: param

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

  let toRender = []
  data.forEach((item) => {
      if(search === "" ) {
				 toRender.push(item)
      }

      else {
        if(
          item.service_cohort.toString().toLowerCase().includes(search.toString().toLowerCase()) || 
          item.location.toString().toLowerCase().includes(search.toString().toLowerCase()) || 
          	item.address_object.toString().toLowerCase().includes(search.toString().toLowerCase()) || 
					// item.name.toString().toLowerCase().includes(search.toString().toLowerCase())) {
          item.name.toString().toLowerCase().includes(search.toString().toLowerCase())
          
            
        ) {
          // console.log(item.name == search)
          // console.log("service", item.service_cohort, "filter", navFilter)
          toRender.push(item)
				} 
			} 
  })
  

  return (
    <Router>
      <Nav props={data} setSearch={setSearch} />
        <div className="wrapper">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/all" render={()=> <AllPages  toRender={toRender}/> }/>
          <Route exact path="/page/:slug" render={(props) => <SinglePage {...props} data={data} />} />
          <Route path="/search" render={() => <AllPages toRender={toRender} />} />
          <Route pat="/categories" render={()=> <AllPages toRender={toRender}/> }/>
          <Route path="/category/:cohort" render={() => <AllPages toRender={toRender}  />}/>
          {/* <Route path="/top-viewed" component={TopViewd} /> */}
          <Route path="/high-impact" component={HighImpact} />
        </Switch>
      </div>
      <Footer />
      </Router>
  );
}

export default App;

// ! routes
// /categories/:service_cohort --> 
// onClick, setsearch to value of LI, render new view based on search