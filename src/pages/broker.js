import React from 'react'
import Header from '@/components/Header'
import PageHeader from '@/components/modules/about-us/PageHeader'
import Newsletter from '@/components/modules/index/Newsletter'
import Mentor from '@/components/modules/team-details/Mentor'
import Footer from '@/components/Footer'
import { useRouter } from 'next/router'
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Partner from "@/components/modules/index/Partner";
import Story from '@/components/modules/about-us/Story'
import Featured from "@/components/modules/index/Featured";


const TeamDetails = () => {
  const router = useRouter();
  const data = router.query;

  return (
    <>
      <Header />
      <PageHeader title={data.name + ' Broker'} page={data.name} />
      <Partner title={data.name} text={data.name} />
      <Featured />
      <Mentor title={data.name} />
      {/* <PageHeader title={data.name} text={data.name} /> */}
      <Newsletter />
      <Footer />
    </>
  )
}

export default TeamDetails
