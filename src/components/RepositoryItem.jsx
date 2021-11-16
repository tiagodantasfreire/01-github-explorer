const RepositoryItem = ({ repo }) => {
  return (
    <li>
      <strong>{repo.name}</strong>
      <p>{repo.description}</p>
      <a href={repo.html_url} target="_blank">Acessar repositório</a>
    </li>
  );
};

export default RepositoryItem;
