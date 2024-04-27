"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Ipost {
  id: number;
  judul: string;
  descrip: string;
  image: string;
  tanggal: string;
  url: string;
}

export default function ComponentBeritaTerkini() {
  // const res = await fetch('/api/berita/beritaterkini', { cache: 'no-store' });
  // const posts: Ipost[] = await res.json();

  // console.log(posts);

  //  const [data, setData] = useState([]);

  //  useEffect(() => {

  //    const fetchData = async () => {
  //      try {
  //        const response = await fetch('/api/berita/berkin', {cache: 'no-store'});

  //        if (response.ok) {
  //          const data = await response.json();
  //          setData(data);
  //        } else {
  //          console.error('Failed to fetch data');
  //        }
  //      } catch (error) {
  //        console.error('Error fetching data:', error);
  //      }
  //    };

  //    fetchData();

  //  }, []);

  const [result, setResult] = useState([]);

  useEffect(() => {
    fetch(`https://lab.dima-dan-rendy.shop/berkin`, {
      // assign the token as bearer token on your request headers
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((data) => {
        setResult(data);
      });
  }, []);

  return (
    <>
      <div>
        <h1>
          <a className="font-extrabold ">BERITA TERKINI</a>
        </h1>
        <div className="">
          <progress
            className="progress progress-info w-96"
            value="70"
            max="100"></progress>
        </div>
      </div>
      <div data-aos="zoom-in" className="">
        {result.map((post: Ipost) => (
          <>
            <div key={post.id} className="gap-4">
              <Image
                width={800}
                height={800}
                className="rounded"
                src={post.url}
                alt="Shoes"
                data-aos="zoom-in"
              />
              <time className="px-8 mt-3 -mb-4 text-xs">{post.tanggal}</time>
              <h1 className="px-8 mt-1 mb-4 font-bold">{post.judul}</h1>
              <div>
                <h2>{post.descrip}</h2>
              </div>
            </div>
          </>
        ))}
      </div>

      
    </>
  );
}
