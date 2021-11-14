import RepositoryItem from "../RepositoryItem/RepositoryItem";

const RepositoryList = () => {
  return (
    <section className="repositoryList">
      <h1>Lista de Repositórios</h1>
      <ul>
        <RepositoryItem repositoryData={{
            name: 'repo 1',
            description: 'Forms in React',
            link: 'https://github.com/unform/unform'
          }}
        />
        <RepositoryItem repositoryData={{
            name: 'repo 2',
            description: 'Teste',
            link: 'https://github.com/unform/unform'
          }}
        />
      </ul>
    </section>
  );
};

export default RepositoryList;
