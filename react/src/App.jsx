import React from "react";

function App() {
  const [home, setHome] = React.useState([]);
  const STRAPI_URL = "http://localhost:1337";

  const fetchHome = async () => {
    const response = await fetch(`${STRAPI_URL}/api/home`);
    const data = await response.json();
    console.log(data);
    return data.data;
  };

  React.useEffect(() => {
    fetchHome().then(setHome);
  }, []);

  return (
    <>
      {home && (
        <div key={home.id} className={`${home.id}`}>
          <h2>{home.title}</h2>
          <p>{home.bodycopy}</p>
        </div>
      )}
    </>
  );
}

export default App;
