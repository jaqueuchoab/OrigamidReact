import React from 'react';
import { useParams } from 'react-router-dom';
import styles from '../Styles/Produto.module.css';
import Head from '../../Components/Head.js'

const Produto = () => {
  const [produto, setProduto] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const { id } = useParams();

  React.useEffect(() => {
    // Função async para melhor funcionamento do efeito
    async function fetchProduto(url) {
      try {
        // Try: trata o state loading, para indicar o carregamento do fetch e receber as responses 
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduto(json);
      } catch (erro) {
        // Catch: trata o state error, para indicar algum erro passado no try
        setError('Ocorreu um erro');
      } finally {
        // Finally: independentemente do que ocorrer no try/catch o finally dá um set no loading para o valor false
        setLoading(false);
      }
    }
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if(loading) return <div className='loading'></div>;
  if(produto === null) return null; 
  if(error) return <p>{error}</p>;
  return (
    <section className={styles.produto + ' animeLeft'}>
      <Head title={produto.nome} description={produto.nome}/>
      <div>
        {produto.fotos.map((foto) => (
          <img key={foto.src} src={foto.src} alt={foto.titulo} />
        ))}
      </div>
      <div>
        <h1>{produto.nome}</h1>
        <span className={styles.preco}>R$ {produto.preco}</span>
        <p className={styles.descricao}>{produto.descricao}</p>
      </div>
    </section>
  )
}

export default Produto;
