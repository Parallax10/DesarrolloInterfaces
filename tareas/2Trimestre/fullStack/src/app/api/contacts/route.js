import { createClient } from "@supabase/supabase-js";
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function GET(request) {
  const { data: contacts, error } = await supabase
    .from("contacto")
    .select("*")
    .order("nombre", { ascending: true });

  return new Response(JSON.stringify(contacts), {
    status: 200,
    header: { "Content-Type": "application/json" },
  });
}

export async function POST(request) {
  /**
   * body.contacto.nombre
   * {
   * "contacto":{
   * "nombre":"juanito",
   * "apellidos":"Dernandez"}
   * }
   */

  const body=await request.json();
  const contacto=body.contacto

  if (contacto.nombre!="" && contacto.nombre &&contacto.apellido){
    return new Response(JSON.stringify({error:"Datos incompletos"})
  )
  }

}


export async function DELETE(request){

  
  const body = await request.json();
  const id = body.id;

  const {data: deleteData, error} = await supabase.from("contacto").delete().eq("id", id);

  if(error){
    return new Response(JSON.stringify(error),{status:400, headers:{"Content-Type": "application/json"}})
  }

  return new Response(JSON.stringify({success: "Contacto eliminado con éxito"}),{status: 200});
}