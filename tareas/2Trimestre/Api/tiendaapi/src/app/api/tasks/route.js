let tareas=[
    {id:1,title:"Sacar al perro",completed:false},
    {id:2,title:"Sacar al 2perro",completed:true},
    {id:3,title:"Sacar al 3perro",completed:false}
];

export async function GET(request) {
    return new Response(JSON.stringify(tareas)
    ,{status:200,headers:{"Content-type":"application/json"}}
);
}

export async function POST(request) {
    try{

        const body=await request.json()
        tareas.push({
            id:tareas.length+1,
            title:body.tarea,
            completed:false
        });

        return new Response(JSON.stringify({mensaje:"Todo correcto",nuevalista:tareas}),
    {status:201,headers:{"Content-type":"aplication.json"}}
    )
    }catch(error){
        return new Response();
    }

    
}