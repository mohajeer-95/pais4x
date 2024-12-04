import React, { useEffect } from 'react'
import Header from '@/components/Header'
import PageHeader from '@/components/modules/about-us/PageHeader'
import Newsletter from "@/components/modules/index/Newsletter";
import Featured from "@/components/modules/index/Featured";
import Footer from '@/components/Footer'
import Partner from "@/components/modules/index/Partner";
import styles from '../styles/css/ImageGrid.module.css';
import { useRtl } from '@/context/RtlContext';
import translations from '@/translations';


const AboutUs = () => {
    const { language } = useRtl();
    const t = translations[language] || translations['en'];
    const data = [
        {
            id: 1,
            img: "/images/media/s8.png",
            ref: "https://www.linkedin.com/company/paid4x/",
            name: "Facebook",
        },
        {
            id: 2,
            img: "/images/media/s1.png",
            ref: "https://www.facebook.com/Paid4X?mibextid=LQQJ4d",
            name: "Facebook",
        },
        {
            id: 3,
            img: "/images/media/s7.png",
            ref: "https://youtube.com/@paid4x?si=r51M6rGhKLeRA18D",
            name: "Facebook",
        },
        {
            id: 4,
            img: "/images/media/s4.avif",
            ref: "https://x.com/paid4x_com?s=11&t=JqEI_h_zgJGVq37XMc3d9w",
            name: "Facebook",
        },
        {
            id: 5,
            img: "/images/media/s5.png",
            ref: "soon",
            name: "Facebook",
        },
        {
            id: 6,
            img: "/images/media/s6.png",
            ref: "soon",
            name: "Facebook",
        },
        {
            id: 7,
            img: "/images/media/s3.png",
            ref: "soon",
            name: "Facebook",
        },
        {
            id: 8,
            img: "/images/media/s2.png",
            ref: "soon",
            name: "Facebook",
        }
    ]

    const openNewWindow = (link) => {
        window.open(link, "_blank");
      };

    return (
        <>
            <Header />
            <PageHeader withSocialComponent={0} title='Socials' page='' />
            <Partner />
            <Featured pageId={16} />

            <div className="section-header section-header--max50">
      <h2 className="mb-15 mt-minus-5">{t.socials}<span></span></h2>
      <p>{t.connectingWithUs}</p>
      <p>{t.findUsOnPlatforms}</p>
    </div>


            <div style={{ display: 'flex', justifyContent: 'center', }}>
                <div className={styles.grid}>
                    {data.map((item, index) => (
                        <div onClick={()=>openNewWindow(item.ref)} key={index}>
                            <div className={styles.imageLink}>
                                <div className={styles.imageWrapper}>
                                    <img src={item.img} alt={item.name} className={styles.image} />
                                    <div className={styles.overlay}>
                                        <span className={styles.text}>{item.ref == 'soon' ? t.soon : t.click}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Newsletter />
            <Footer />
        </>
    )
}

export default AboutUs