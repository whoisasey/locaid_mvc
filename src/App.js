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
import { Desktop } from './components/reusables/Logo'
import ScrollArrow from './components/reusables/ScrollArrow'


const App = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("All");
  const [cohorts ] = useState([])
  const [categories, setCategories] = useState([])
  const [locationArr ] = useState([])
  const [locations, setLocation] = useState([])
  const [searchVal, setSearchVal] = useState('')
  const locationsList = [ {
      id: 11,
      name: "Downtown",
      value: "Downtown"
      },
      {
      id: 12,
      name: "East Toronto",
      value: "East_Toronto"
      },
      {
      id: 13,
      name: "West Toronto",
      value: "West_Toronto"
      }, {
      id: 14,
      name: "North Toronto",
      value: "North_Toronto"
      }]
  const [filterList, setFilterList] = useState([
        {
          id: 11,
          name: "Part Time",
          value: "PART_TIME"
        },
        {
          id: 12,
          name: "Full Time",
          value: "FULL_TIME"
        },
        {
          id: 13,
          name: "Freelancer",
          value: "FREELANCER"
        }
      ])
	const [searchLists, setSearchLists] = useState([
        {
          id: 1,
          type: "PART_TIME",
          name: "Akash",
          location: "bangalore",
          experience: 1
        },
        {
          id: 2,
          type: "PART_TIME",
          name: "feroz",
          location: "mumbai",
          experience: 3
        },
        {
          id: 3,
          type: "FULL_TIME",
          name: "Farheen",
          location: "agra",
          experience: 5
        },
        {
          id: 4,
          type: "FREELANCER",
          name: "Raju",
          location: "chennai",
          experience: 6
        },
        {
          id: 5,
          type: "FULL_TIME",
          name: "Asif",
          location: "vegas",
          experience: 7
        }
		])
	const [activeFilter, setActiveFilter] = useState([])
	
	const  onFilterChange = (filter) => {
    if (filter === "ALL") {
      if (activeFilter.length === locationsList.length) {
        setActiveFilter([])
			} else {
				setActiveFilter(locationsList.map(filter=> filter.value))
      }
    } else {
      if (activeFilter.includes(filter)) {
        const filterIndex = activeFilter.indexOf(filter);
        const newFilter = [...activeFilter];
        newFilter.splice(filterIndex, 1);
				setActiveFilter(newFilter)
			} else {
				setActiveFilter([...activeFilter, filter])
      }
    }
  }

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

    let filteredList;
    if (
      activeFilter.length === 0 ||
      activeFilter.length === locationsList.length
    ) {
      filteredList = data;
    } else {
      // eslint-disable-next-line no-unused-vars
      console.log(activeFilter)
      filteredList = data.filter(item =>
        activeFilter.includes(item.type)
      );
    }
  

    return (
      <Router>
        <ScrollArrow />
        {/* <Sidebar /> */}
        <Nav props={data} setSearch={setSearch} Desktop={Desktop} categories={categories} locations={locations} setSearchVal={setSearchVal} searchSpace={searchSpace}/>
        {/* <MobileSidebar props={data} searchVal={searchVal} setSearchVal={setSearchVal} categories={categories} locations={locations} searchSpace={searchSpace }/> */}
          <Switch>
          <Route exact path="/" render={() => <Dashboard props={ data}/>} />
          <Route path="/all" render={() => <AllPages toRender={toRender} search={search} activeFilter={activeFilter} locationsList={locationsList} filteredList={filteredList} onChange={onFilterChange} locations={locations}/> } />
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