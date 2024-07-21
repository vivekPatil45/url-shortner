import supabase, { supabaseUrl } from "./supabase";

export async function login({email,password}){

    const {data,error} = await supabase.auth.signInWithPassword({
        email,
        password
    });

    if(error) throw new Error(error.message);

    return data;
}

export async function getCurrentUser(){
    const {data:session,error} = await supabase.auth.getSession();

    if(!session.session) return null;
    if(error) throw Error(error.message);


    return session.session?.user;

}


export async function signup({name,email,password,profile_pic}){

    const fileName = `dp-${name.split(" ").join("-")}-${Math.random()}`;


    const{error:storageError }  = await supabase.storage.from("profile_pic").upload(fileName,profile_pic);

    const {data,error} = await supabase.auth.signUp({
        email,
        password,
        options:{
            data:{
                name,
                profile_pic:`${supabaseUrl}/storage/v1/object/public/profile_pic/${fileName}`,
                // profile_pic1:`https://spputmrydfwhspwxvxvi.supabase.co/storage/v1/object/public/profile_pic/dp-Om-Patil-0.5213247147700388`
            },
        },
    });

    if(error) throw new Error(error.message);

    return data;
}
export async function logout(){
    const {error} = await supabase.auth.signOut();
    if(error) throw new Error(error.message);

}