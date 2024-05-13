import os from "os";
import fs from "fs/promises"
import Test from "@/components/Test";

export default function serverDemo() {
    // Using Node.js Server Stuff in Next.js
    console.log(os.userInfo().username);
    let a = fs.readFile(".gitignore");
    a.then(e => console.log(e.toString()));

    return (
        <>
            <div>Server Side Demo</div>
            <Test/>
        </>
    )
};