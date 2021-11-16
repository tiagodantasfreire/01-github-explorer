import { useState, useEffect } from "react";

import RepositoryItem from "./RepositoryItem";
import '../styles/repositories.scss';

const RepositoryList = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data => setRepos(data));
  }, [])

  return (
    <section className="repositoryList">
      <h1>Lista de Repositórios</h1>
      <ul>
        {repos.map((repo) => (
          <RepositoryItem  key={repo.id} repo={repo} />
        ))}
      </ul>
    </section>
  );
};

export default RepositoryList;
