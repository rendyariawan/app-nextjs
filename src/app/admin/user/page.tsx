"use client";
import { useSession } from "next-auth/react";
import React, { SyntheticEvent, useEffect, useState } from "react";
import { cookies } from "next/headers";
import ModalUser from "./ModalUser";
import ModalUserEdit from "./ModalUserEdit";
import ModalUserHapus from "./ModalHapusUser";
import {useRouter} from "next/navigation";
import Link from 'next/link'

interface Ipost {
  uuid: string;
  name: string;
  email: string;
  role: string;
}



export default function ListUser() {
  const router = useRouter();
  const [result, setResult] = useState([]);
  const { data: session, status }: {data: any, status: string} = useSession();
  const role = session?.user?.role;
  const uuid = session?.user?.uuid;

 useEffect(() => {
		if(status === 'unauthenticated') {
			router.push('/api/auth/signin')
		}
		if(role !== 'admin'){
			router.push('/admin')
		}
 },[router, status, role])
  

  useEffect(() => {
	if(uuid){
      fetch(`https://lab.dima-dan-rendy.shop/users`, {
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
  }, [uuid]);

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
                List Users
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
      <div className="mt-2">
        <ModalUser />
      </div>

      <div className="mr-10">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            {result.map((post: Ipost, i) => (
              <tbody key={post.uuid}>
                <tr>
                  <th>{i + 1}</th>
                  <th>{post.name}</th>
                  <td>{post.email}</td>
                  <td>{post.role}</td>
                  <td>
                    <ModalUserEdit {...post} />
                    <ModalUserHapus {...post} />
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
