import PageHeader from "@/components/base/PageHeader";
import Header from '@/components/Header'
import Advisor from "@/components/modules/Team/Team";
import Newsletter from "@/components/modules/index/Newsletter";
import Footer from "@/components/Footer";
const Team = () => {


  return (
    <>
      <Header />
      <PageHeader title="Team" text="Team" />
      <Advisor />
      <Newsletter />
      <Footer />
    </>
  );
};
export default Team;
