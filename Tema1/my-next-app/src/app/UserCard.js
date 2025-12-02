const usuarios=[
{usuario:"Paco",contraseña:"123456"},
{usuario:"JUan",contraseña:"58798525"},
{usuario:"Maria",contraseña:"987654"}
];
export default function UserCard(){
return(
    <div>
    {usuarios.map((item,index)=>(
        <div key={index}> 
        <h2>Usuario:{item.usuario}</h2>
        <p>Contraseña: {item.contraseña}</p>
        </div>
    ))}
    </div>
);
}