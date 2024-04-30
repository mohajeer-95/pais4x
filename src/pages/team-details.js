import React from 'react'
import Header from '@/components/Header'
import PageHeader from '@/components/base/PageHeader'
import Newsletter from '@/components/modules/index/Newsletter'
import Mentor from '@/components/modules/team-details/Mentor'
import Footer from '@/components/Footer'
import { useRouter } from 'next/router'


const TeamDetails = () => {
  const router = useRouter();
const data = router.query;

  return (
   <>
   <Header/>
   <PageHeader title={data.name} text={data.name} />
   <Mentor title={data.name}/>
   <Newsletter/>
   <Footer />
   </>
  )
}

export default TeamDetails