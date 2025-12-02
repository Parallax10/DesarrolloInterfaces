export default function Card({titulo,descripcion,imagen}){
return(
    <div>
    <h1>{titulo}</h1>
    <p>{descripcion}</p>
    <img src={imagen}/>
    </div>
);
}