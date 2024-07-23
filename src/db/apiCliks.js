import {UAParser} from "ua-parser-js";
import supabase from "./supabase";

export async function getClicksForUrls(urlIds){

    const {data,error} = await supabase
                                        .from('clicks')
                                        .select("*")
                                        .eq('url_id',urlIds);

    console.log(data);
    if(error){
        console.log(error.message);                                    
        throw new Error("Unable to load Clicks's");
    }


    return data;

}


const parser = new UAParser();

export const storeClicks = async ({id, originalUrl}) => {
  try {
    const res = parser.getResult();
    const device = res.type || "desktop"; // Default to desktop if type is not detected

    const response = await fetch("https://ipapi.co/json");
    const {city, country_name: country} = await response.json();

    // Record the click
    await supabase.from("clicks").insert({
      url_id: id,
      city: city,
      country: country,
      device: device,
    });

    // Redirect to the original URL
    window.location.href = originalUrl;
  } catch (error) {
    console.error("Error recording click:", error);
  }
};


export async function getCliksForUrl(url_id) {
  let {data, error} = await supabase
      .from("clicks")
      .select("*")
      .eq("url_id",url_id)
      .single();

  if (error) {
      console.error(error.message);
      throw new Error("Enable to load stats");
  }

  return data;
}