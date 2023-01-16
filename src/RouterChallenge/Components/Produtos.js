import React from "react";
import styles from "../Styles/Produtos.module.css";
import Head from "../../Components/Head";
import { Link } from "react-router-dom";

const Produtos = () => {
     const [produtos, setProdutos] = React.useState(null);

     // Efeito que acontecerá toda vez que a pág for recarregada
     React.useEffect(() => {
          fetch('https://ranekapi.origamid.dev/json/api/produto').then(r => r.json()).then(json => setProdutos(json));
     }, [])

     if (produtos === null) return null;

     return(
          <section className={`${styles.produtos} animeLeft`}>
               <Head title="Produtos" description="Produtos"/>
               {produtos.map((produto) => (
                    // Link que levará à uma pág especifica do produto, assim realizando outro efeito
                    <Link to={`produto/${produto.id}`} key={produto.id}>
                         <img src={produto.fotos[0].src} alt={produto.fotos[0].title} />
                         <h2 className={styles.nome}>{produto.nome}</h2>
                    </Link>
               ))}
          </section>
     );
}

export default Produtos;