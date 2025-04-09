import { useNavigate } from 'react-router-dom';

function CardOficina(props){

    
    const navigate = useNavigate();    


    const navegarPagina = () =>{

       
        navigate(`/oficina/${props.id}`);
    }

    

    return (
        <div className="cardStand">

            <img src={props.imgSrc} />

            <div>                
           
                <h1>{props.titulo}</h1>

                <p>{props.responsavel}</p>

                <p>{props.local} • {props.data}, às {props.horario} </p>

            </div>
            
            

            <button onClick={navegarPagina} className="botaoEvento">Detalhes</button>        
            
            
        </div>
            
            
    );

}

export default CardOficina;



