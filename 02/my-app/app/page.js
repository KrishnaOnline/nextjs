import Image from "next/image";
import Script from "next/script";

export default function Home() {
  return (
    <div>
      <p>Home Page</p>
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
