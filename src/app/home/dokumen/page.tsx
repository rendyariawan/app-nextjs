
import type { Metadata } from "next"

export const metadata:Metadata = {
    title: "BAKEUDA - Dokumen"
}

import DokPer from "../components/dokumen/dokPer"
import DokPera from "../components/dokumen/dokPera"
import DokPela from "../components/dokumen/dokPela"
import DokPenganggaran from "../components/dokumen/dokPenganggaran"
import DokPenata from "../components/dokumen/dokPenata"
import DokPendapatan from "../components/dokumen/dokPendapatan"


const Dokumen = async() => {
  return(
    <>
    <div className="px-16 py-10">
    <DokPer/>
    <DokPera/>
    <DokPenganggaran/>
    <DokPenata/>
    <DokPela/>
    <DokPendapatan/>
    </div>
    </>
  )

}

export default Dokumen;