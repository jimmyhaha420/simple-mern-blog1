import React, { useState, useEffect } from "react";

function Articles() {
  const [articlesList, setArticlesList] = useState({});

  useEffect(() => {
    fetch("/articles", { method: "GET" }).then((response) =>
      setArticlesList(response)
    );
    console.log(articlesList);
  
  });

  return (
    <div>
      <h1>Here are all the articles</h1>

    </div>
  );
}

export default Articles;