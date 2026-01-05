import './Termos.css';

const Institucional = () => {
  return (
    <div className="termos-container">
      <div className="termos-content">
        <h1 id='institucional'>Institucional — enoticiapara.com.br</h1>
        <p style={{textAlign:"justify", width:"70rem"}}>
       O É Notícia Pará é uma ampla rede de portais de notícias que cobre as diversas regiões do estado do Pará e também traz informações relevantes de todo o Brasil.
Como uma poderosa ferramenta de comunicação, tem desempenhado um papel essencial na disseminação de notícias e conteúdos informativos, conectando comunidades e promovendo o acesso democrático à informação.

Focado em amplificar vozes locais e estimular o diálogo entre diferentes públicos, o É Notícia Pará se destaca por sua credibilidade, impacto social e capacidade de engajamento.

Ao longo dos anos, consolidou-se como uma plataforma indispensável para integrar comunidades, fortalecer laços regionais e contribuir para o desenvolvimento social e cultural do estado e do país.
        </p>
        <br></br>
        <p style={{textAlign:"justify", width:"70rem"}}>
          <img src="./../images/VISAO.png" alt="" style={{width:"74rem"}}  />
          Promover a informação, a conexão e a transformação das comunidades
paraenses por meio de uma comunicação inclusiva, acessível e de excelência,
que valorize as realidades locais, amplifique as vozes comunitárias e fomente o
diálogo entre diferentes perspectivas.
        </p>
        <br></br>
        <p style={{textAlign:"justify", width:"70rem"}}>
          <img src="./../images/MISSAO.png" alt="" style={{width:"74rem"}}  />
          Ser a referência em portais de notícias no Pará, reconhecida pela credibilidade,
impacto social e alcance em todas as regiões do estado. Comprometida com a
transparência e ética jornalística, oferece conteúdo relevante e atualizado,
promovendo o desenvolvimento regional e o fortalecimento da cidadania.
        </p>
        <br></br>
        <p style={{textAlign:"justify", width:"70rem"}}>
          <h1 style={{color:"#2b2b2b"}}>VALORES</h1>
          <h3 style={{bottom:"1rem", position:"relative"}}>Compromisso com a verdade e respeito a diversidade</h3>

          O jornalismo de qualidade deve
ser fundamentado na busca pela
verdade, garantindo precisão e
imparcialidade, ao mesmo
tempo em que valoriza as
diferentes culturas, origens e
realidades sociais das
comunidades.
</p>
<br></br>
<p style={{textAlign:"justify", width:"70rem"}}>
            <h3 style={{bottom:"1rem", position:"relative"}}>Promoção da participação  comunitária</h3>
Incentivar o diálogo e o
engajamento local é essencial
para fortalecer a relação entre a
mídia e os moradores, criando
uma comunicação mais
inclusiva, que reflete as
necessidades e aspirações da
população.
</p>

<div className='imgInstitucional' style={{width:"70rem",}}>
<img style={{width:"40rem",position:"relative",left:"15rem", paddingTop:"4rem",}} src="./../images/EN - MAPA INSTITUCIONAL.png" alt="" />
</div>
       
     
      </div>
    </div>
  );
};

export default Institucional;