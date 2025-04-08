import { useNavigate } from 'react-router-dom';

function CardStand(props){

    
    const navigate = useNavigate();    


    const navegarPagina = () =>{

       
        navigate(`/stand/${props.id}`);
    }

    

    return (
        <div className="cardStand">

            <img src={props.imgSrc} />

            <div>                
           
                <h1>{props.titulo}</h1>

                <p>{props.responsavel}</p>

                <p>Stand {props.stand}, {props.local} • {props.data}, às {props.horario} </p>

            </div>
            
            

            <button onClick={navegarPagina} className="botaoEvento">Detalhes</button>        
            
            
        </div>
            
            
    );

}

export default CardStand;



