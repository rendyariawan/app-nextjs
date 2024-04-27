import Image from "next/image";
import { useEffect, useState } from "react";

interface Ipost {
  id: number,
  name: string,
  image: string
  url: string
}

export default function CardList() {
  //  const res = await fetch('/api/berita/cardlist', { cache: 'no-store' });
  //  const posts: Ipost[] = await res.json();

   const [data, setData] = useState([]);

   useEffect(() => {
    fetch(`https://lab.dima-dan-rendy.shop/banner`, {
      // assign the token as bearer token on your request headers
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <>
    <div className='flex items-center justify-center mb-4'>
    {data.map((post: Ipost) => (
          <>
           <div key={post.id}>
            <div className=''>
            <Image width={800} height={800} className='rounded-md space-y-4' src={post.url} alt="Shoes"/>
            </div>
           </div>
          </>
        ))}
    </div>
    </>
  )
}
