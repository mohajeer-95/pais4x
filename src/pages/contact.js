import Header from '@/components/Header'
import PageHeader from '@/components/modules/about-us/PageHeader';
import ContactCard from "./../components/modules/contact/ContactCard";
import Footer from "@/components/Footer";
const Contact = () => {
  return (
    <>
      <Header />
      <PageHeader withSocialComponent={0} title="Contact Us" text="Contact Us" />
      <ContactCard />
      <Footer />
    </>
  );
};

export default Contact;
