import React, {Fragment, useState, useEffect, useCallback} from 'react'
const App = () => {
  const [data, setData] = useState([])

  const getData = useCallback(async function () {
    try {
      const response = await fetch('/api/locaid')
      const json = await response.json();
      if (!response.ok) {
        throw new Error(json.message);
      }
      console.log(json)
      setData(json.data)
    } catch (err) {
      setData([])
    }
  }, [])
  useEffect( () => {
    getData()
  }, [getData])
  

  console.log(data)
  return (
    <Fragment>
      <h1>hello app</h1>
      <p>{JSON.stringify(data)}</p>
    </Fragment>
  );
}

export default App;
