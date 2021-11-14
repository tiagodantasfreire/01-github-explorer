const RepositoryItem = ({ repositoryData }) => {
  return (
    <li>
      <strong>{repositoryData.name}</strong>
      <p>{repositoryData.description}</p>
      <a href={repositoryData.link}>Acessar repositório</a>
    </li>
  );
};

export default RepositoryItem;
