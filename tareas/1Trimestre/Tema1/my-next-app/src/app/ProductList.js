const productos=[
{nombre:"Zanahorias",precio:3.20,descripcion:"Paquete de 10"},
{nombre:"Huevos",precio:6.20,descripcion:"Paquete por docena"}
];
export default function ProductList(){
return(
    <div>
    {productos.map((item,index)=>(
        <div key={index}>
        <h2>{item.nombre}</h2>
        <p>{item.descripcion}</p>
        <p>Precio: ${item.precio}</p>
        </div>
    ))}
    </div>
);
}