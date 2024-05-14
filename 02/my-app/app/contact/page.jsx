"use client";
import React, { useRef } from 'react'
import { submitAction } from '@/actions/form';
// we can import server actions like this and use anywhere...

const contact = () => {
  /*const submitAction = async (e) => {
    "use server"     // with this, this block will be executed in the Server...
    console.log(e.get("name"), e.get("mail"));
    let a = await fs.writeFile("sampleDemo.txt", `Written from Server Actions in Contact Page \nName: ${e.get("name")} \nEmail: ${e.get("mail")}`);
    const data = await fs.readFile("sampleDemo.txt");
    console.log(data);
  }*/
  // OR import submitAction action from @/actions/form.js
  let ref = useRef();

  return (
    <div>
      <div>Contact Page</div>
      <div>
        <form ref={ref} action={(e) => {submitAction(e); ref.current.reset()}} className="flex flex-col gap-1">
          <div className="flex gap-2">
            <label htmlFor="name">Name:</label>
            <input name="name" id="name" className="text-black" type="text" />
          </div>
          <div className="flex gap-2">
            <label htmlFor="mail">Email:</label>
            <input name="mail" id="mail" className="text-black" type="email" />
          </div>
          <button type='submit' className="border w-fit p-1">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default contact