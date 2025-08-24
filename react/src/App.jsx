import React from "react";

function App() {
  const [home, setHome] = React.useState([]);
  const [test, setTest] = React.useState([]);
  const STRAPI_URL = "http://localhost:1337";

  const fetchHome = async () => {
    const response = await fetch(`${STRAPI_URL}/api/home?populate=*`);
    const data = await response.json();
    console.log(data);
    return data.data;
  };

  const fetchTest = async () => {
    const response = await fetch(`${STRAPI_URL}/api/test?populate=*`);
    const data = await response.json();
    console.log(data);
    return data.data;
  };

  React.useEffect(() => {
    fetchHome().then(setHome);
    fetchTest().then(setTest);
  }, []);

  return (
    <>
      {test && (
        <div key={test.id} className={`${test.id}`}>
          <h2>{test.title}</h2>
          <p>{test.bodycopy}</p>
        </div>
      )}
      {home.header && (
        <div>
          <h3>{home.header.title}</h3>
          <p>{home.header.bodycopy}</p>
          <button>{home.header.btn}</button>
        </div>
      )}
    </>
  );
}

export default App;
