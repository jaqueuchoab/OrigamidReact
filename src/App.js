import React from 'react';
import useFetch from './useFetch';

const App = () => {
  const { request, data, loading, error } = useFetch();

  React.useEffect(() => {
     async function fetchData() {
          const [response, json] = await request('https://ranekapi.origamid.dev/json/api/produto/notebook');
          console.log(response, json);
     }
     fetchData();

  }, [request]);

  if (error) return <p>Erro</p>;
  if (loading) return <p>Carregando...</p>;

  if (data) {
     return(
          <div>
               {data.map((produto) => (
                    <div key={produto.id}>
                         <h1>{produto.nome}</h1>
                    </div>
               ))}
          </div>
       );
  } else {
     return null;
  }
}

export default App;