import { useState, useEffect } from 'react';

import RepositoryItem from './RepositoryItem';
import '../styles/repositories.scss';

interface Repository {
  id: string,
  name: string,
  description: string,
  html_url: string
}

const RepositoryList = () => {
  const [repos, setRepos] = useState<Repository[]>([]);

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
          <RepositoryItem  key={repo.id} repository={repo} />
        ))}
      </ul>
    </section>
  );
};

export default RepositoryList;
