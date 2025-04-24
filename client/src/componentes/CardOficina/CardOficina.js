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
                <p>{props.tipo}</p>
                
                <h1>{props.titulo}</h1>

                {props.foto && (
                    <img src={props.foto} alt={`Foto de ${props.responsavel}`} />
                )}


                <p>{props.responsavel}</p>

                <p>{props.local} • {props.data}, {props.horario} </p>

            </div>
            
            

            <button onClick={navegarPagina} className="botaoEvento">Detalhes</button>        
            
            
        </div>
            
            
    );

}

export default CardOficina;



