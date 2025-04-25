import { useNavigate } from 'react-router-dom';

function CardCampeonato(props){

    
    const navigate = useNavigate();    


    const navegarPagina = () =>{

       
        navigate(`/campeonato/${props.id}`);
    }

    

    return (
        <div className="cardStand">

            <img src={props.imgSrc} />

            <div>                
                            
                <h1>{props.titulo}</h1>

                <img className={props.tipo=="freefire" ? "logoFreefire" : ""} src={props.logo} />

                <p>Stand {props.stand} - {props.local} • {props.data}, {props.horario}</p>

            </div>
            
            

            <button onClick={navegarPagina} className="botaoEvento">Detalhes</button>        
            
            
        </div>
            
            
    );

}

export default CardCampeonato;



