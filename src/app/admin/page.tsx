"use client"
import {useRouter} from "next/navigation";
import { useSession } from "next-auth/react";
import {useEffect} from "react";

export default function Admin() {
const router = useRouter();
  const { data: session, status }: {data: any, status: string} = useSession();
  useEffect(() => {
    if(status === 'unauthenticated') {
		router.push("/api/auth/signin")
	}
  }, [status, router]);
  return (
    <div></div>
  )
}
