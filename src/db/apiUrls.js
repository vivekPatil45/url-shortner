import supabase from "./supabase";


export async function getUrls(user_id){

    const {data,error} = await supabase
                                        .from('urls')
                                        .select("*")
                                        .eq('user_id',user_id);
    if(error){
        console.log(error.message);                                    
        throw new Error("Unable to load URL's");
    }


    return data;

}

export async function deleteUrl(id) {
    const {data, error} = await supabase.from("urls").delete().eq("id", id);
  
    if (error) {
      console.error(error);
      throw new Error("Unable to delete Url");
    }
  
    return data;
}
  