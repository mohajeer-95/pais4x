import Header from '@/components/Header'
import PageHeader from '@/components/modules/about-us/PageHeader';
import ContactCard from "./../components/modules/contact/ContactCard";
import Footer from "@/components/Footer";
import Featured from "@/components/modules/index/Featured";
import Partner from "@/components/modules/index/Partner";
import translations from '@/translations';
import { useRtl } from '@/context/RtlContext';

const Contact = () => {
  const { language } = useRtl();
const t = translations[language] || translations['en'];
  return (
    <>
      <Header />
       <PageHeader withSocialComponent={0} title={t.contact} page={t.contact}/>
      <Partner />
      <Featured pageId={6}/>
      <ContactCard />
      <Footer />
    </>
  );
};

export default Contact;
