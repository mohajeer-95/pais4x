import React from 'react'
import Header from '@/components/Header'
import PageHeader from '@/components/base/PageHeader'
import Newsletter from '@/components/modules/index/Newsletter'
import Mentor from '@/components/modules/team-details/Mentor'
import Footer from '@/components/Footer'
const TeamDetails = () => {
  return (
   <>
   <Header/>
   <PageHeader title="Team Details" text="Team Details" />
   <Mentor/>
   <Newsletter/>
   <Footer />
   </>
  )
}

export default TeamDetails