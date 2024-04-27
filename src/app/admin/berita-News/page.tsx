"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import PostBeritaNews from "./ModalPost";
import EditBeritaNews from "./ModalEdit";
import ModalHapusBeritaNews from "./ModalHapus";
import ViewFotoBerita from "../components/ModalViewFoto";
import {useRouter} from "next/navigation";
import Link from 'next/link'

interface Ipost {
  id: number;
  judul: string;
  name: string;
  descrip: string;
  tanggal: string;
  image: string;
  url: string;
}

export default function BeritaNews() {
  const router = useRouter();
  const [result, setResult] = useState([]);
  const { data: session, status }: {data: any, status: string} = useSession();
  const uuid = session?.user?.uuid;
  useEffect(() => {
    if(status === 'unauthenticated') {
		router.push("/api/auth/signin")
	}else{
      fetch(`https://lab.dima-dan-rendy.shop/bernews`, {
        // assign the token as bearer token on your request headers
        headers: {
          Authorization: `${uuid}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setResult(data);
        });
    }
  }, [uuid, status, router]);
  return (
    <>
		<div className="flex">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link href="/admin">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 mr-2 stroke-current">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                </svg>
                Dashboard
              </Link>
            </li>
            <li>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 mr-2 stroke-current">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                </svg>
                Berita News
              </a>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-4 h-4 mr-2 stroke-current">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <PostBeritaNews />
      </div>
      <div className="mr-10">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th>Judul</th>
                <th>Deskripsi</th>
                <th>Tanggal</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>
            {result.map((post: Ipost, i) => (
              <tbody key={post.id}>
                <tr>
                  <th>{i + 1}</th>
                  <td>{post.judul}</td>
                  <td>{post.descrip}</td>
                  <td>{post.tanggal}</td>
                  <td>
                    <ViewFotoBerita {...post} />
                  </td>
                  <td>
                    <EditBeritaNews {...post} />
                    <ModalHapusBeritaNews {...post} />
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </>
  );
}
