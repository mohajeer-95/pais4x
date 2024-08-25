import Header from '@/components/Header'
import PageHeader from '@/components/modules/about-us/PageHeader';
import ContactCard from "./../components/modules/contact/ContactCard";
import Footer from "@/components/Footer";
import Featured from "@/components/modules/index/Featured";
import Partner from "@/components/modules/index/Partner";

const Contact = () => {
  return (
    <>
      <Header />
      <PageHeader withSocialComponent={0} title="Contact Us" page="Contact Us" />
      <Partner />
      <Featured pageId={6}/>
      <ContactCard />
      <Footer />
    </>
  );
};

export default Contact;
