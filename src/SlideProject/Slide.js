import React from "react";
import slideStyle from "./Slide.module.css";

const Slide = ({ slides }) => {
     // State referente ao slide/imagem ativa no momento de acordo com o index da imagem
     const [active, setActive] = React.useState(0);
     // State referente aos pixes do translateX
     const [position, setPosition] = React.useState(0);
     // Ref da ul content para melhor manipulação
     const contentRef = React.useRef();

     React.useEffect(() => {
          // Puxando a width do metodo getBoudingClientRect que devolve valores de posições
          const {width} = contentRef.current.getBoundingClientRect();
          // Active muda o slide indicando "quantos" foram passados e assim movendo de acordo com o produto da width
          setPosition(-(width * active));
     }, [active]);

     function slidePrev() {
          if (active > 0) setActive(active - 1);
     }

     function slideNext() {
          if (active < slides.length - 1) setActive(active + 1);
     }

     return (
          <section className={slideStyle.container}>
               <ul 
               className={slideStyle.content} 
               style={{ transform:`translateX(${position}px)`}}
               ref={contentRef}
               >
                    {slides.map((slide) => (
                         <li key={slide.id} className={slideStyle.item}><span className={slideStyle.imgSpan}><img src={Object.values(slide.img)} alt="Gatinho fofo" /></span></li>
                    ))}
               </ul>
               <nav className={slideStyle.nav}>
                    <button onClick={slidePrev} className={slideStyle.prev}>&#60;</button>
                    <button onClick={slideNext} className={slideStyle.next}>&#62;</button>
               </nav>
          </section>
     );
}

export default Slide;