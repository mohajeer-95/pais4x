import React, { useState, useEffect } from 'react'
import PageHeader from '@/components/modules/about-us/PageHeader';
import Header from '@/components/Header'
import Advisor from "@/components/modules/Team/Team";
import Newsletter from "@/components/modules/index/Newsletter";
import Footer from "@/components/Footer";
import Partner from "@/components/modules/index/Partner";
import Featured from "@/components/modules/index/Featured";

const Team = () => {

  return (
    <>
      <Header />
      <PageHeader withSocialComponent={0} title="Brokers List" page="Brokers" />
      <Partner title="Paid4x" text="Brokers" />
      <Featured pageId={4}/>
      <Advisor />
      <Newsletter />
      <Footer />
    </>
  );
};
export default Team;




// pages/index.js or components/Grid.js
// import React from 'react';

// const cardData = [

//   {
//     imageSrc: 'https://c7.alamy.com/comp/2RCTC80/fxc-logo-fxc-letter-fxc-letter-logo-design-initials-fxc-logo-linked-with-circle-and-uppercase-monogram-logo-fxc-typography-for-technology-busines-2RCTC80.jpg',
//     name: 'Card 2',
//     cashback: '10%',
//     rate: '4.7/5'
//   },
//   {
//     imageSrc: 'https://c7.alamy.com/comp/2RCTC80/fxc-logo-fxc-letter-fxc-letter-logo-design-initials-fxc-logo-linked-with-circle-and-uppercase-monogram-logo-fxc-typography-for-technology-busines-2RCTC80.jpg',
//     name: 'Card 2',
//     cashback: '10%',
//     rate: '4.7/5'
//   },
//   {
//     imageSrc: 'https://c7.alamy.com/comp/2RCTC80/fxc-logo-fxc-letter-fxc-letter-logo-design-initials-fxc-logo-linked-with-circle-and-uppercase-monogram-logo-fxc-typography-for-technology-busines-2RCTC80.jpg',
//     name: 'Card 2',
//     cashback: '10%',
//     rate: '4.7/5'
//   },
//   {
//     imageSrc: 'https://c7.alamy.com/comp/2RCTC80/fxc-logo-fxc-letter-fxc-letter-logo-design-initials-fxc-logo-linked-with-circle-and-uppercase-monogram-logo-fxc-typography-for-technology-busines-2RCTC80.jpg',
//     name: 'Card 2',
//     cashback: '10%',
//     rate: '4.7/5'
//   },
//   {
//     imageSrc: 'https://c7.alamy.com/comp/2RCTC80/fxc-logo-fxc-letter-fxc-letter-logo-design-initials-fxc-logo-linked-with-circle-and-uppercase-monogram-logo-fxc-typography-for-technology-busines-2RCTC80.jpg',
//     name: 'Card 2',
//     cashback: '10%',
//     rate: '4.7/5'
//   },
//   {
//     imageSrc: 'https://c7.alamy.com/comp/2RCTC80/fxc-logo-fxc-letter-fxc-letter-logo-design-initials-fxc-logo-linked-with-circle-and-uppercase-monogram-logo-fxc-typography-for-technology-busines-2RCTC80.jpg',
//     name: 'Card 2',
//     cashback: '10%',
//     rate: '4.7/5'
//   },
//   {
//     imageSrc: 'https://c7.alamy.com/comp/2RCTC80/fxc-logo-fxc-letter-fxc-letter-logo-design-initials-fxc-logo-linked-with-circle-and-uppercase-monogram-logo-fxc-typography-for-technology-busines-2RCTC80.jpg',
//     name: 'Card 2',
//     cashback: '10%',
//     rate: '4.7/5'
//   },
//   {
//     imageSrc: 'https://c7.alamy.com/comp/2RCTC80/fxc-logo-fxc-letter-fxc-letter-logo-design-initials-fxc-logo-linked-with-circle-and-uppercase-monogram-logo-fxc-typography-for-technology-busines-2RCTC80.jpg',
//     name: 'Card 2',
//     cashback: '10%',
//     rate: '4.7/5'
//   },
//   // Add more cards as needed
// ];

// const Grid = () => {
//   return (
//     <div className="grid-container">
//       {cardData.map((card, index) => (
//             <div key={index}className="card">
//             <div className="card-image">
//               <img src={card.imageSrc} alt={card.name} />
//             </div>
//             <div className="card-content">
//               <h3 className="card-title">{card.name}</h3>
//               <div className="card-info">
//                 <span className="label">Cashback:</span>
//                 <span className="value">{card.cashback}</span>
//               </div>
//               <div className="card-info">
//                 <span className="label">Rate:</span>
//                 <span className="value">{card.rate}</span>
//               </div>
//             </div>
//           </div>
//       ))}
//     </div>
//   );
// };

// export default Grid;
