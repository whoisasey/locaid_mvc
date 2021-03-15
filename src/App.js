import React,{useState,useEffect, useCallback} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard';
import AllPages from './components/pages/AllPages'
import Nav from './components/Nav'
import SinglePage from './components/pages/SinglePage';
// import DB from './data.json'

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
    <div className="wrapper">
      <Router>
      <Nav />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/all" render={()=> <AllPages data={data}/> }/>
          <Route exact path="/page/:slug" render={(props) => <SinglePage {...props} data={data}/> }/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
