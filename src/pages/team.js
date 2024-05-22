import PageHeader from "@/components/base/PageHeader";
import Header from '@/components/Header'
import Advisor from "@/components/modules/Team/Team";
import Newsletter from "@/components/modules/index/Newsletter";
import Footer from "@/components/Footer";
import Partner from "@/components/modules/index/Partner";

const Team = () => {


  return (
    <>
      <Header />
      <PageHeader title="Brokers List" text="Brokers" />
      {/* <Partner title="Paid4x" text="Brokers" /> */}

      <Advisor />
      <Newsletter/>
      <Footer />
    </>
  );
};
export default Team;
