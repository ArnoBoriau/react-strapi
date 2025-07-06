import React from "react";

function App() {
  const [articles, setArticles] = React.useState([]);
  const STRAPI_URL = "http://localhost:1337";

  const fetchArticles = async () => {
    const response = await fetch(`${STRAPI_URL}/api/articles?populate=*`);
    const data = await response.json();
    console.log(data);
    return data.data;
  };

  React.useEffect(() => {
    fetchArticles().then(setArticles);
  }, []);

  return (
    <>
      {articles.map((article) => (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
        </div>
      ))}
    </>
  );
}

export default App;
