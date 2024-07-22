import supabase from "./supabase";


export async function getClicksForUrls(urlIds){

    const {data,error} = await supabase
                                        .from('cliks')
                                        .select("*")
                                        .eq('url_id',urlIds);
    if(error){
        console.log(error.message);                                    
        throw new Error("Unable to load Cliks's");
    }


    return data;

}