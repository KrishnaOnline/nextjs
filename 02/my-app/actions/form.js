"use server";
import fs from "fs/promises";

export const submitAction = async (e) => {
    // "use server"     // with this, this block will be executed in the Server...
    console.log(e.get("name"), e.get("mail"));
    let a = await fs.writeFile("sampleDemo.txt", `Written from Server Actions in Contact Page \nName: ${e.get("name")} \nEmail: ${e.get("mail")}`);
    // const data = await fs.readFile("sampleDemo.txt");
    // console.log(data);
}