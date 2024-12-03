import React from "react";
import { useRtl } from '@/context/RtlContext';
import translations from '@/translations';


const Seminars = () => {
    const { language } = useRtl();
    const t = translations[language] || translations['en'];
  
    return (
        <section className="pricing padding-top " style={{ paddingBottom: 40 }}>
             <div className="section-header section-header--max65">
      <h2 className="mb-15 mt-minus-5">{t.seminarsTitle} <span></span></h2>
      <p>{t.seminarsDescription1}</p>
      <p>{t.seminarsDescription2}</p>
      <p>{t.seminarsDescription3}</p>
      <p>{t.provideDetails}</p>
    </div>
        </section>
    )
}
export default Seminars;