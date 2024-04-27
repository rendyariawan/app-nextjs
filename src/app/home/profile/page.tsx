import type { Metadata } from 'next'
import Image from 'next/image'
import kantor from '../../../../public/foto2.jpg'
import PDFViewer from '../components/pdf/pdfView'

export const metadata: Metadata = {
  title: 'BAKEUDA - Profile',
}


const Profile = () => {
  return (
    <>

    <PDFViewer/>
    </>
  )
}

export default Profile
