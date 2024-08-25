import React, { useEffect } from 'react'
import Header from '@/components/Header'
import PageHeader from '@/components/modules/about-us/PageHeader'
import Newsletter from "@/components/modules/index/Newsletter";
import Featured from "@/components/modules/index/Featured";
import Footer from '@/components/Footer'
import Partner from "@/components/modules/index/Partner";
import styles from '../styles/css/ImageGrid.module.css';
import Link from 'next/link';

const AboutUs = () => {

    const data = [
        {
            id: 1,
            img: "/images/media/s2.png",
            ref: "link",
            name: "Facebook",
        },
        {
            id: 2,
            img: "/images/media/s1.png",
            ref: "link",
            name: "Facebook",
        },
        {
            id: 3,
            img: "/images/media/s3.png",
            ref: "link",
            name: "Facebook",
        },
        {
            id: 4,
            img: "/images/media/s4.avif",
            ref: "link",
            name: "Facebook",
        },
        {
            id: 5,
            img: "/images/media/s5.png",
            ref: "link",
            name: "Facebook",
        },
        {
            id: 6,
            img: "/images/media/s6.png",
            ref: "link",
            name: "Facebook",
        },
        {
            id: 7,
            img: "/images/media/s7.png",
            ref: "link",
            name: "Facebook",
        },
        {
            id: 7,
            img: "/images/media/s8.png",
            ref: "link",
            name: "Facebook",
        }
    ]
    return (
        <>
            <Header />
            <PageHeader withSocialComponent={0} title='Refund' page='Refund' />
            <Partner />
            <Featured pageId={16} />

            <div style={{display: 'flex', justifyContent: 'center',}}>
                <div className={styles.grid}>
                    {data.map((item, index) => (
                        <Link href={'item.ref'} key={index}>
                            <div className={styles.imageLink}>
                                <div className={styles.imageWrapper}>
                                    <img src={item.img} alt={item.name} className={styles.image} />
                                    <div className={styles.overlay}>
                                        <span className={styles.text}>View</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <Newsletter />
            <Footer />
        </>
    )
}

export default AboutUs