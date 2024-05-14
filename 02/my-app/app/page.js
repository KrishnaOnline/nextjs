"use client";
import Image from "next/image";
import Script from "next/script";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);

  const handleClick = async () => {
    let data = {name: "Krish", role: "Coder"};
    let res = await fetch("/api/add-item", {
      method: "POST", headers: {
        "Content-Type": "application/json",
      }, body: JSON.stringify(data),
    })
    let response = await res.json();
    console.log(response);
    setData(response);
  }

  return (
    <div>
      <p>Home Page</p>
      <div>
        <p>Next.js API Endpoint Demo</p>
        <div>
          <button onClick={handleClick}>Click Me</button>
          <div>
            {
              data && (
                <div>
                  <div>Name: {data.data.name}</div>
                  <div>Role: {data.data.role}</div>
                </div>
              )
            }
          </div>
        </div>
      </div>
      <div className="">
        <Image /*img*/
          className="h-[500px] m-10"
          height={500}
          width={900}
          src="https://i.ytimg.com/vi/JTckTjJAE6s/maxresdefault.jpg"
        />
      </div>
    </div>
  );
}
