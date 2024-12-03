import { useRtl } from '@/context/RtlContext';
import translations from '@/translations';


function About() {
    const { language } = useRtl();
    const t = translations[language] || translations['en'];
  
  
    return (
        <section className="about about--style1 ">
            <div className="container">
                <div className="about__wrapper">
                    <div className="row gx-5  gy-4 gy-sm-0 ">




                        <div className="col-lg-5" style={{ marginBottom: 40 }}>
                            <div
                                className="about__thumb pe-lg-5"
                                data-aos="fade-right"
                                data-aos-duration="800"
                            >
                                <div className="about__thumb-inner">
                                    <div className="about__thumb-image floating-content">
                                        <img
                                            className="dark"
                                            src="/images/about/8.jpg"
                                            alt="about-image"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div
                                className="about__content"
                                data-aos="fade-left"
                                data-aos-duration="800"
                            >
                                <div className="about__content-inner">
                                <h2><span>{t.refund}</span></h2>
        <p className="mb-0" style={{ paddingBottom: 20 }}>{t.refundDescription}</p>

        <h5 className="mb-0" style={{ marginTop: 10 }}>{t.recordedCoursesUdemy}</h5>
        <p className="mb-0" style={{ paddingBottom: 20 }}>{t.recordedCoursesUdemyDescription}</p>

        <h5 className="mb-0" style={{ marginTop: 10 }}>{t.vipOneOnOne}</h5>
        <p className="mb-0" style={{ paddingBottom: 20 }}>{t.vipOneOnOneDescription}</p>
 
        <h5 className="mb-0" style={{ marginTop: 10 }}>{t.fullRefundTitle}</h5>
        <p className="mb-0" style={{ paddingBottom: 20 }}>{t.fullRefundDescription}</p>
     

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
