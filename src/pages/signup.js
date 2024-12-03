/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react'
import { useRtl } from '@/context/RtlContext';
import translations from '../translations'; 
import Header from '@/components/Header'
import PageHeader from '@/components/modules/about-us/PageHeader';
import Footer from "@/components/Footer";
import Link from 'next/link';
import Toast from 'react-bootstrap/Toast'
import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBInput,
  MDBBtn,
} from "mdb-react-ui-kit";
import { callApiWithToken } from '../../public/api/api'
import Spinner from 'react-bootstrap/Spinner';
import { setCookie, getCookie } from 'cookies-next';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';



const SignUp = () => {
  const { language, toggleDirection } = useRtl();
  const t = translations[language];

  const [staticModal, setStaticModal] = useState(true);

  const toggleOpen = () => setStaticModal(!staticModal);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const toggleModal = (content) => {
    setModalContent(content);
    setModalOpen(!modalOpen);
  };

  const [dataMethods, setDataMethods] = useState([])
  const [getMethod, setMethod] = useState(null)
  const [firstname, setFirstname] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [conPassword, setConPassword] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [successRegistration, setSuccessRegistration] = useState(false);
  const [varyingModal, setVaryingModal] = useState(false);
  const [otpLoading, setOtpLoading] = useState(false);
  const [otpSuccess, setOtpSuccess] = useState(false);

  const [age, setAge] = useState(null);
  const [vipTraining, setVipTraining] = useState(null);
  const [trainingBuy, setTrainingBuy] = useState(null);
  const [numExp, setNumExp] = useState(null);
  const [membership, setMembership] = useState(null);
  const [favoriteInstruments, setFavoriteInstruments] = useState(null);
  const [favoriteBroker, setFavoriteBroker] = useState('');
  const [telegramUsername, setTelegramUsername] = useState('');


  const [reference, setReference] = useState('');

  const [errors, setErrors] = useState({});
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  const paymentMethodOptions = [
    'Paypal',
    'western union',
    'Bank Transfers',
    'Skrill',
    'MoneyGram',
  ]

  const AgeOptions = [
    '18 - 29',
    '30 - 39',
    '40 - 49',
    '+50',
  ]

  const numExpOptions = [
    '1 - 3 years',
    '3 - 5 years',
    '5 - 10 years',
    '10+ years',
  ]

  const trainingBuyOptions = [
    'Yes & I loved it',
    'Yes & it was not as good as I thought',
    'No',
    "No & I do not need training",
    'No but I plan to in the future No & I do not need training',
  ]

  const vipTrainingOptions = [
    'Yes & I loved it',
    'Yes & it was not as good as I thought',
    'No',
    "No & I do not need training",
    'No but I plan to in the future No & I do not need training',
  ]

  const membershipOptions = [
    '  The cashback',
    'The training courses',
    'Both',
    "It's free what's the harm?",
    'I was bored',
    'Other (please specify)',
  ]

  const favoriteInstrumentsOptions = [
    "FX",
    "Commodities",
    "Stocks Indices",
    "ETFs",
    "Cryptos"]
  let handleNumExp = (e) => {
    setNumExp(e.target.value)
  }

  let handleVipTraining = (e) => {

    setVipTraining(e.target.value)
  }

  let handleFavoriteInstruments = (e) => {
    setFavoriteInstruments(e.target.value)
  }

  let handleTrainingBuy = (e) => {
    setTrainingBuy(e.target.value)
  }
  let handleAge = (e) => {
    setAge(e.target.value)
  }

  let handleMembership = (e) => {
    setMembership(e.target.value)
  }

  let handlePaymentMethod = (e) => {
    setMethod(e.target.value)
  }
  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  const termsContent = `
    <h2>PAID4X Terms & Conditions</h2>
    <p>By merely continuing to browse and use Paid4X.com, you legally agree to comply with, and be bound by the below Terms & Conditions of use, which in their latest version, always govern Paid4X's relationship with you in relation to the services provided by our website, and used by you.</p>
    
    <p>These Terms & Conditions may be updated at any time, and you are required to regularly check for updates, if any, by checking the date at the end of these terms & conditions.</p>
    
    <p>Wherever the term "site" or "Paid4X.com" is used, it refers to the site, its owners, managers, employees, agents, associates, or any individual or business entity related to the site in any way. Wherever the term "user" is used, it refers to the any person who browses the website published on the domain Paid4X.com, and gets any kind of information from the site, promotional or otherwise, with or without registering for a membership on the site.</p>
    
    <p>You are kindly requested to carefully read, review & assess these Terms and Conditions, before agreeing to them. By merely viewing any part of Paid4X.com, you agree to all of the Terms and Conditions without objecting to any of them.</p>
    
    <h3>User & General Terms</h3>
    <ul>
      <li>You must be 18 years of age or older to use the website. You warrant that you are indeed 18 years, or older at time of registering for a membership on Paid4X.com, and that you are fully able and competent to enter into, and abide by, the contract created by these Terms and Conditions, and any future additions or updates that they may have.</li>
      <li>Membership is free, Paid4X.com does not charge membership fees. You can register & use the offers advertised on the site with your free membership, and we will never charge membership fees. Ergo, the user acknowledges that there is no refund policy or fees claim that they can present to the site in order to get a refund.</li>
      <li>Membership is open to any individual or entity, from any country or territory, who can open, verify & successfully fund, at least one trading account with at least one of the brokers promoted on the site at the time of registration. However, Paid4X.com reserves the right to temporarily suspend, or permanently cancel the membership of any user at its sole discretion, with no legal or financial liability assumed, in case there is reason to believe that the user has violated the terms & conditions, or that they are causing harm to the site or the Paid4X business.</li>
      <li>Paid4X.com will cancel memberships not used for 365 calendar days, and will keep the wallet balance of the user for 90 days beyond that, and will try every attempt possible to contact, and transfer the balance to the user. After the end of the 90-day period, the balance may no longer be available for a withdrawal.</li>
    </ul>


        <h3>Financial Relationship & Liability</h3>
    <ul>
      <li>The user acknowledges their understanding that Paid4X.com does not provide any trading services, and that this site is only a promotional site for brokers who provide trading services themselves, and that the financial relationship that includes the transfer of the trading capital whether in the form of deposits, withdrawals, profit, loss, or other, is established only between the user and the broker or brokers chosen, and that Paid4X is not in any way a part of this business relationship.</li>
      <li>The user also admits that they have not transferred any amount of the trading capital to Paid4X.com, its owners, managers, employees, agents, associates, or any individual or business entity related to the site in any way, and that on this legal basis, the user cannot hold the site, its owners, managers, employees, agents, associates, or any individual or business entity related to the site in any way, liable for loss of capital due to any reason, trading related, or otherwise.</li>
      <li>It is the duty of the user & only the user, to perform due diligence, and evaluate the risks which are associated with trading by nature, when they open an account or several accounts with one or more of the brokers promoted on Paid4X.com.</li>
      <li>Any kind of trading, financial or otherwise, comes with a significant possibility of resulting in financial loss. The user acknowledges that they completely understand the risks associated with trading a leveraged CFD account, FX account, and other types of accounts which can be opened with any of the brokers promoted on the site.</li>
      <li>The user fully understands & acknowledges that the only financial obligation & liability that Paid4X.com has towards the user, is in paying them the advertised cashback per unit of volume traded on the account(s) of the user.</li>
      <li>The user understands that the cashback is limited to a certain percentage of some of promotional fees the site receives from promoted brokers, and acknowledges that this percentage is decided on the sole discretion of Paid4X.com, and can be changed by the site at any time, with or without prior notice.</li>
      <li>The user acknowledges that the cashback is paid only for qualified accounts, which must be opened using the specified links on the site, not using links on the broker site, or any other website aside from Paid4X.com. The user acknowledges that if the account is not opened through Paid4X.com, the user cannot claim cashback to be paid in any way.</li>
      <li>The user acknowledges that the cashback is paid only for qualified instruments, which the broker pays promotional/marketing incentive for trading. According to the promotional & partnership policy of the broker, some instruments may be paid less than others, or none at all. The user acknowledges that if the broker does not pay Paid4X.com promotional fees for trading these instruments, the user cannot claim cashback to be paid in any way.</li>
      <li>The user acknowledges that Paid4X.com has the right to remove a broker from the site, and stop paying cashback for users who have accounts with this broker at any time, and for any reason deemed appropriate by Paid4X.com on its sole discretion. The user acknowledges that once a broker is removed by Paid4X.com, the site liability to pay the user cashback on trading in their account(s) opened with this broker is immediately ceased.</li>
      <li>In any case & with no exception whatsoever, the user acknowledges that if the broker does not pay Paid4X.com incentive for the trades closed on the user’s account(s), the user cannot request to be paid for these trades.</li>
      <li>The user acknowledges full understanding that the only financial liability Paid4X.com has towards the user, is to pay them a certain percentage of the promotional fees that Paid4X.com receives from the promoted brokers, and only for trades on the user account(s) & qualified instruments, not extending to other fees, or to accounts of other users in any way.</li>
      <li>The user acknowledges that if for any kind of reason, the broker they have their account with, refuses to pay the due promotional fees on trades that the user has closed, then Paid4X.com is completely freed, from any financial or legal liability towards the user. The reason for such an incident may be: conflict between Paid4X.com & the broker, dispute over trading volumes on the user account(s), temporary or permanent failure of the broker in transferring the fees to Paid4X.com, bankruptcy of the broker, or any other reason whatsoever.</li>
      <li>The user acknowledges their approval of Paid4X.com deducting the cashback transaction fees, in part or in full, from the cashback withdrawal amount, or the user wallet balance on the site, if necessary.</li>
    </ul>
    
    <h3>INFORMATION & DATA ON THE SITE</h3>
    <ul>
      <li>The information published on the site, for informational purposes only. Paid4X.com, its owners, managers, employees, agents, associates, or any individual or business entity related to the site in any way, are not, and do not claim to be, financial advisors.</li>
      <li>Paid4X.com does not intend to provide, nor should it be considered as providing, any investment or financial advice of any kind, directly, indirectly, or by proxy, in any part of site, which includes any kind of information or media. The user acknowledges full understanding that no content on the site should be considered as a substitute for professional financial advice.</li>
      <li>The information published in the site is provided by the promoted brokers themselves and is checked for accuracy at the time of publishing both by Paid4X.com & by the broker. Paid4X.com makes every effort possible to assure that all information on the site is accurate & correct as far as our knowledge extends, but we do not provide any assurance that the information is 100% accurate, updated & error-free. The user agrees not to hold Paid4X.com liable for any inaccuracy, errors, or outdates information found on the site.</li>
      <li>All investment decisions made in reliance on information, data, media & advertisement available on Paid4X.com, or as a result of opening trading accounts using the site or the offers it promotes, are completely & exclusively at your own risk.</li>
      <li>Paid4X.com, its owners, managers, employees, agents, associates, or any individual or business entity related to the site in any way, will not be liable for any losses that the user may sustain, as a result of opening one account or more, with one or more of the brokers promoted on the site.</li>
      <li>The user acknowledges that they are solely and exclusively responsible for determining whether any product or service promoted on the site with no exception, is appropriate for their financial investments & the objectives they seek from such investments.</li>
      <li>Some brokers offer social trading features, including copying the trades of service providers. A user who decides to use such services, do so on their own sole & exclusive responsibility. No other party can be held liable for the losses realized, not the copy trading service provider, not the broker the user has the account with, and certainly not Paid4X.com, its owners, managers, employees, agents, associates, or any individual or business entity related to the site in any way.</li>
      <li>The accuracy of the information mentioned in the advertisements that other sites companies, brokers, or service providers of any sort, buy on Paid4X.com cannot be confirmed by us. In case an offer, a banner, a video, a link, a document, an article, or the text of any advertisement by other parties includes inaccurate information or falsified data, Paid4x.com does not assume any financial or legal liability. It is solely the responsibility of the user to evaluate & assess the accuracy of the information & data presented in all advertisement before buying any products or subscribing to any services advertised on our site.</li>
      <li>All content published on the site, including but not limited to offers, cashback amounts, bonuses, and all other content & information & data, is subject to change without prior notice.</li>
      <li>Paid4X.com promotes links to other websites, be that through advertisement of 3rd party service providers, or direct links to the sites of our partners. In all cases, Paid4X.com have no responsibility to verify the accuracy of the content on the sites that these links lead to.</li>
      <li>To the maximum extent permitted by applicable law, and with no exception, Paid4X.com, its owners, managers, employees, agents, associates, or any individual or business entity related to the site in any way, will not be held legally or financially liable for any losses, direct or indirect damages, expenses or any form of cost, nor for other financial mishap, which may arise, directly or indirectly, from using any sort of content published on the site or through communications with the user.</li>
    </ul>


     <h3>PRIVACY</h3>
    <ul>
      <li>By registering for a free membership, the user acknowledges their consent of Paid4X.com sharing their submitted information, including but not limited to, their full name, email, phone number & country of residence with brokers who are advertised or promoted on the site, or other partners that Paid4X.com does business with, or any other third party, including government agencies & law enforcement officials, if asked.</li>
      <li>Paid4X.com does not have any obligation to conserve the confidentiality of the user, regarding personal or other information submitted on the site. The user acknowledges that Paid4X.com are not obligated to conserve the user’s data, and that the user approves with the current applicable privacy policy, under which Paid4X.com cannot be held liable, or asked to cease, sharing the information of members with business partners or government officials.</li>
      <li>The user acknowledges & understands that they are responsible for maintaining the confidentiality of the combination of their membership password & username.</li>
      <li>The user acknowledges & agrees that the provided email address will be used by Paid4X.com to send correspondence when needed, and that it constitutes the main method of communication with the user. The user also claims the responsibility of updating that address, when a change is made.</li>
    </ul>

    <h3>Legal & Dispute</h3>
    <ul>
      <li>In the event that any article or part of these Terms and Conditions is deemed unenforceable, the validity or enforceability of the remaining parts of the terms & conditions will not be affected.</li>
      <li>When using the site, you testify that you will comply with all applicable laws, that apply to your investment & usage of our services.</li>
      <li>You are responsible for all taxes (if any) associated with the service. All payments to you in relation to the service will be treated as inclusive of tax (if applicable) and will not be adjusted.</li>
      <li>In the case of a dispute arising, both parties agree to try to solve the conflict in good faith, and in consistence with the general business practices of the field in specific.</li>
      <li>If the conflict persists, and Paid4X.com chooses to take legal action, the user irrevocably agrees that:</li>
        <ul>
          <li>a. The courts of The Hashemite Kingdom of Jordan shall have exclusive jurisdiction to determine any proceedings.</li>
          <li>b. Waives any objection which the user may have at any time to the bringing of any proceedings in any such court.</li>
          <li>c. Agrees not to claim that such proceedings have been brought in an inconvenient forum or that such court does not have jurisdiction over the user.</li>
        </ul>
    </ul>
  `;

  const termsContentAr = `
  <h2>شروط وأحكام PAID4X</h2>
  <p>بمجرد الاستمرار في التصفح واستخدام Paid4X.com، أنت توافق قانونياً على الالتزام بشروط وأحكام الاستخدام التي يتم تحديثها دائماً لتنظم علاقتك مع موقع Paid4X وخدماته.</p>
  
  <p>يمكن تحديث هذه الشروط في أي وقت، ويجب عليك التأكد من التحديثات بشكل منتظم عن طريق الاطلاع على تاريخ آخر تحديث.</p>
  
  <p>حيثما تُستخدم كلمة "الموقع" أو "Paid4X.com" فهي تشير إلى الموقع ومالكيه، مديريه، موظفيه، وكافة المرتبطين به، وأي كيان آخر مرتبط بالموقع بأي شكل من الأشكال.
  </p>

  <p>الرجاء منك قراءة واستعاب هذه الشروط والأحكام بعناية، والموافقة عليها قبل استخدام الموقع.</p>
  
  <h3>الأحكام العامة للمستخدم</h3>
  <ul>
    <li>يجب أن تكون بلغت العمر القانوني 18 عاما أو أكثر لاستخدام الموقع. أنت تضمن أنك بالفعل تبلغ من العمر 18 عامًا أو أكثر وقت التسجيل لعضوية على Paid4X.com، وأنك قادر بشكل كامل على الالتزام بشروط وأحكام هذا العقد، وأي إضافات أو تحديثات مستقبلية قد تكون.</li>
    <li>العضوية مجانية، ولا يفرض موقع Paid4X.com أي رسوم عضوية. يمكنك التسجيل واستخدام العروض المعلن عنها على الموقع بعضويتك المجانية، ولن نفرض أي رسوم عضوية. وبالتالي، يقر المستخدم بأنه لا توجد سياسة لاسترداد الرسوم يمكنه تقديمها للموقع لاسترداد الأموال.</li>
    <li>العضوية متاحة لأي فرد أو كيان من أي بلد أو إقليم يمكنه فتح، والتحقق من، وتمويل حساب تداول واحد على الأقل بنجاح مع واحد من الوسطاء المروجين على الموقع وقت التسجيل. ومع ذلك، يحتفظ موقع Paid4X.com بالحق في تعليق أو إلغاء عضوية أي مستخدم بشكل مؤقت أو دائم وفقًا لتقديره الخاص، دون تحمل أي مسؤولية قانونية أو مالية، في حالة وجود سبب للاعتقاد بأن المستخدم قد انتهك الشروط والأحكام، أو أنه يسبب ضررًا للموقع أو لأعمال Paid4X.</li>
    <li>سيتم إلغاء العضويات التي لم تُستخدم لمدة 365 يومًا تقويميًا، وسيتم الاحتفاظ برصيد المحفظة الخاص بالمستخدم لمدة 90 يومًا إضافيًا، وسيتم بذل كل الجهود الممكنة للاتصال بالمستخدم وتحويل الرصيد له. بعد انتهاء فترة الـ 90 يومًا، قد لا يكون الرصيد متاحًا للسحب.</li>
  </ul>

  <h3>العلاقة المالية والمسؤولية</h3>
  <ul>
    <li>يقر المستخدم بفهمه أن موقع Paid4X.com لا يقدم أي خدمات تداول، وأن هذا الموقع هو موقع ترويجي فقط للوسطاء الذين يقدمون خدمات التداول بأنفسهم، وأن العلاقة المالية التي تشمل تحويل رأس المال التجاري سواء في شكل ودائع أو سحوبات أو أرباح أو خسائر، تُنشأ فقط بين المستخدم والوسيط أو الوسطاء المختارين، وأن Paid4X ليست بأي حال من الأحوال جزءًا من هذه العلاقة التجارية.</li>
    <li>يقر المستخدم أيضًا بأنه لم يقم بتحويل أي مبلغ من رأس المال التجاري إلى Paid4X.com، أو مالكيه، أو مديريه، أو موظفيه، أو أي كيان أو فرد مرتبط بالموقع بأي شكل من الأشكال، وعلى هذا الأساس القانوني، لا يمكن للمستخدم تحميل الموقع أو أي من مالكيه أو مديريه أو موظفيه أو أي كيان أو فرد مرتبط بالموقع بأي شكل من الأشكال، المسؤولية عن خسارة رأس المال لأي سبب كان، سواء كان ذلك متعلقًا بالتداول أو غيره.</li>
    <li>من واجب المستخدم وحده أن يقوم بالعناية الواجبة وتقييم المخاطر المرتبطة بالتداول بطبيعتها عند فتح حساب أو عدة حسابات مع واحد أو أكثر من الوسطاء المروجين على Paid4X.com.</li>
    <li>أي نوع من التداول، سواء كان ماليًا أو غيره، يأتي مع إمكانية كبيرة للتعرض لخسائر مالية. يقر المستخدم بأنه يفهم تمامًا المخاطر المرتبطة بتداول حساب CFD ذو رافعة مالية، أو حساب فوركس، أو أنواع أخرى من الحسابات التي يمكن فتحها مع أي من الوسطاء المروجين على الموقع.</li>
    <li>يقر المستخدم ويفهم أن الالتزام المالي الوحيد الذي يقع على عاتق Paid4X.com تجاه المستخدم هو دفع الكاش باك المعلن لكل وحدة من الحجم المتداول على حسابات المستخدم.</li>
    <li>يفهم المستخدم أن الكاش باك محدود بنسبة معينة من بعض الرسوم الترويجية التي يتلقاها الموقع من الوسطاء المروجين، ويقر بأن هذه النسبة تقرر وفقًا لتقدير Paid4X.com ويمكن تغييرها من قبل الموقع في أي وقت مع أو بدون إشعار مسبق.</li>
    <li>يقر المستخدم بأن الكاش باك يُدفع فقط للحسابات المؤهلة، والتي يجب فتحها باستخدام الروابط المحددة على الموقع، وليس باستخدام الروابط على موقع الوسيط أو أي موقع آخر بخلاف Paid4X.com. يقر المستخدم بأنه إذا لم يتم فتح الحساب من خلال Paid4X.com، فلا يمكن للمستخدم المطالبة بدفع الكاش باك بأي شكل من الأشكال.</li>
    <li>يقر المستخدم بأن الكاش باك يُدفع فقط للأدوات المؤهلة التي يدفع الوسيط حوافز ترويجية/تسويقية لتداولها. وفقًا لسياسة الترويج والشراكة للوسيط، قد يتم دفع حوافز لبعض الأدوات أكثر من غيرها أو لا تدفع إطلاقًا. يقر المستخدم بأنه إذا لم يدفع الوسيط رسومًا ترويجية لـ Paid4X.com لتداول هذه الأدوات، فلا يمكن للمستخدم المطالبة بدفع الكاش باك بأي شكل من الأشكال.</li>
    <li>يقر المستخدم بأن Paid4X.com يملك الحق في إزالة وسيط من الموقع وإيقاف دفع الكاش باك للمستخدمين الذين لديهم حسابات مع هذا الوسيط في أي وقت ولأي سبب يراه الموقع مناسبًا وفقًا لتقديره الخاص. يقر المستخدم بأنه بمجرد إزالة الوسيط من قبل Paid4X.com، تنتهي مسؤولية الموقع في دفع الكاش باك على التداول في حسابات المستخدم المفتوحة مع هذا الوسيط على الفور.</li>
    <li>في أي حالة وبلا استثناء على الإطلاق، يقر المستخدم بأنه إذا لم يدفع الوسيط رسومًا تحفيزية لـ Paid4X.com عن الصفقات التي أُغلقت على حسابات المستخدم، فلا يمكن للمستخدم المطالبة بدفع الكاش باك عن هذه الصفقات.</li>
    <li>يقر المستخدم بالفهم الكامل أن الالتزام المالي الوحيد الذي يقع على عاتق Paid4X.com تجاه المستخدم هو دفع نسبة معينة من الرسوم الترويجية التي يتلقاها Paid4X.com من الوسطاء المروجين، وفقط عن التداولات على حسابات المستخدم والأدوات المؤهلة، دون أن يمتد ذلك إلى رسوم أخرى أو إلى حسابات مستخدمين آخرين بأي شكل من الأشكال.</li>
    <li>يقر المستخدم بأنه إذا كان لأي سبب من الأسباب، رفض الوسيط الذي لديه حساب معه دفع الرسوم الترويجية المستحقة على الصفقات التي أغلقها المستخدم، فإن Paid4X.com يتم إعفاؤه تمامًا من أي مسؤولية مالية أو قانونية تجاه المستخدم. قد يكون سبب ذلك: نزاع بين Paid4X.com والوسيط، أو خلاف حول أحجام التداول على حسابات المستخدم، أو فشل الوسيط في تحويل الرسوم إلى Paid4X.com، أو إفلاس الوسيط، أو أي سبب آخر كان.</li>
    <li>يقر المستخدم بموافقته على قيام Paid4X.com بخصم رسوم المعاملات للكاش باك، جزئيًا أو كليًا، من مبلغ سحب الكاش باك أو من رصيد محفظة المستخدم على الموقع إذا لزم الأمر.</li>
  </ul>
  
  <h3>المعلومات والبيانات على الموقع</h3>
  <ul>
    <li>المعلومات المنشورة على الموقع هي لأغراض إعلامية فقط. Paid4X.com، ومالكيه، ومديريه، وموظفيه، أو أي كيان أو فرد مرتبط بالموقع بأي شكل من الأشكال، ليسوا مستشارين ماليين ولا يدعون ذلك.</li>
    <li>لا يعتزم Paid4X.com تقديم أي نصيحة استثمارية أو مالية من أي نوع، سواء بشكل مباشر أو غير مباشر أو بواسطة وكيل، في أي جزء من الموقع، بما في ذلك أي نوع من المعلومات أو الوسائط. يقر المستخدم بفهمه الكامل بأن أي محتوى على الموقع لا يجب أن يُعتبر بديلاً عن النصيحة المالية المهنية.</li>
    <li>المعلومات المنشورة على الموقع يتم توفيرها من قبل الوسطاء المروجين ويتم التحقق من دقتها وقت النشر من قبل Paid4X.com والوسيط. يبذل Paid4X.com كل الجهود الممكنة لضمان أن جميع المعلومات على الموقع دقيقة وصحيحة بقدر ما يمتد علمنا، لكننا لا نقدم أي ضمان بأن المعلومات دقيقة بنسبة 100٪ أو محدثة وخالية من الأخطاء. يوافق المستخدم على عدم تحميل Paid4X.com المسؤولية عن أي عدم دقة أو أخطاء أو معلومات قديمة موجودة على الموقع.</li>
    <li>جميع القرارات الاستثمارية التي تُتخذ بالاعتماد على المعلومات أو البيانات أو الوسائط أو الإعلانات المتوفرة على Paid4X.com، أو نتيجة فتح حسابات تداول باستخدام الموقع أو العروض التي يروج لها، هي بالكامل وعلى مسؤوليتك الخاصة.</li>
    <li>Paid4X.com، ومالكيه، ومديريه، وموظفيه، أو أي كيان أو فرد مرتبط بالموقع بأي شكل من الأشكال، لن يكونوا مسؤولين عن أي خسائر قد يتكبدها المستخدم نتيجة فتح حساب واحد أو أكثر مع واحد أو أكثر من الوسطاء المروجين على الموقع.</li>
    <li>يقر المستخدم بأنه وحده المسؤول عن تحديد ما إذا كان أي منتج أو خدمة مروج لها على الموقع مناسبة لاستثماراته المالية والأهداف التي يسعى لتحقيقها من تلك الاستثمارات.</li>
    <li>بعض الوسطاء يقدمون ميزات التداول الاجتماعي، بما في ذلك نسخ صفقات مزودي الخدمات. المستخدم الذي يقرر استخدام هذه الخدمات، يقوم بذلك على مسؤوليته الخاصة والحصرية. لا يمكن تحميل أي طرف آخر المسؤولية عن الخسائر المحققة، لا مزود خدمة النسخ، ولا الوسيط الذي لدى المستخدم حساب معه، وبالتأكيد ليس Paid4X.com أو أي كيان مرتبط بالموقع بأي شكل من الأشكال.</li>
    <li>دقة المعلومات الواردة في الإعلانات التي تشتريها مواقع أو شركات أو وسطاء أو مقدمو خدمات من أي نوع على Paid4X.com لا يمكن تأكيدها من قبلنا. في حالة وجود عرض أو لافتة أو فيديو أو رابط أو مستند أو مقال أو نص لأي إعلان من أطراف أخرى يتضمن معلومات غير دقيقة أو بيانات مزورة، لا يتحمل Paid4x.com أي مسؤولية مالية أو قانونية. تقع على عاتق المستخدم وحده مسؤولية تقييم دقة المعلومات والبيانات المقدمة في جميع الإعلانات قبل شراء أي منتجات أو الاشتراك في أي خدمات معلنة على موقعنا.</li>
    <li>جميع المحتويات المنشورة على الموقع، بما في ذلك على سبيل المثال لا الحصر العروض، مبالغ الكاش باك، المكافآت، وجميع المحتويات والمعلومات والبيانات الأخرى، قابلة للتغيير دون إشعار مسبق.</li>
    <li>يروج Paid4X.com روابط لمواقع أخرى، سواء من خلال إعلانات مقدمي الخدمات من أطراف ثالثة أو الروابط المباشرة لمواقع شركائنا. في جميع الحالات، لا يتحمل Paid4X.com أي مسؤولية للتحقق من دقة المحتوى على المواقع التي تؤدي إليها هذه الروابط.</li>
    <li>إلى أقصى حد مسموح به بموجب القانون المعمول به، وبدون استثناء، لن يكون Paid4X.com أو أي كيان مرتبط بالموقع مسؤولين قانونيًا أو ماليًا عن أي خسائر أو أضرار مباشرة أو غير مباشرة أو نفقات أو أي نوع من التكاليف أو أي شكل آخر من الخسائر المالية التي قد تنشأ بشكل مباشر أو غير مباشر نتيجة استخدام أي نوع من المحتويات المنشورة على الموقع أو من خلال الاتصالات مع المستخدم.</li>
  </ul>

  <h3>الخصوصية</h3>
  <ul>
    <li>بتسجيلك للحصول على عضوية مجانية، يقر المستخدم بموافقته على مشاركة Paid4X.com للمعلومات المقدمة، بما في ذلك على سبيل المثال لا الحصر، الاسم الكامل، البريد الإلكتروني، رقم الهاتف وبلد الإقامة مع الوسطاء المعلن عنهم أو الشركاء الذين يتعامل معهم Paid4X.com أو أي طرف ثالث بما في ذلك الجهات الحكومية والمسؤولين القانونيين إذا طُلب منهم ذلك.</li>
    <li>لا يلتزم Paid4X.com بالحفاظ على سرية المستخدم بخصوص المعلومات الشخصية أو غيرها المقدمة على الموقع. يقر المستخدم بأن Paid4X.com غير ملزم بالحفاظ على بيانات المستخدم، وأن المستخدم يوافق على سياسة الخصوصية الحالية المطبقة، والتي بموجبها لا يمكن تحميل Paid4X.com المسؤولية أو طلب إيقاف مشاركة معلومات الأعضاء مع شركاء الأعمال أو المسؤولين الحكوميين.</li>
    <li>يقر المستخدم ويفهم أنه مسؤول عن الحفاظ على سرية كلمة المرور واسم المستخدم لعضويته.</li>
    <li>يقر المستخدم ويوافق على أن عنوان البريد الإلكتروني المقدم سيتم استخدامه من قبل Paid4X.com لإرسال المراسلات عند الحاجة، ويعتبر الوسيلة الرئيسية للتواصل مع المستخدم. كما يتحمل المستخدم مسؤولية تحديث هذا العنوان عند حدوث أي تغيير.</li>
  </ul>

  <h3>القانون والنزاعات</h3>
  <ul>
    <li>في حال تبين أن أي مادة أو جزء من هذه الشروط والأحكام غير قابلة للتنفيذ، فلن تتأثر صلاحية أو قابلية تنفيذ باقي أجزاء الشروط والأحكام.</li>
    <li>عند استخدام الموقع، تشهد بأنك ستلتزم بجميع القوانين المعمول بها التي تنطبق على استثمارك واستخدامك لخدماتنا.</li>
    <li>أنت مسؤول عن جميع الضرائب (إن وجدت) المرتبطة بالخدمة. سيتم اعتبار جميع المدفوعات لك فيما يتعلق بالخدمة شاملة للضرائب (إن وجدت) ولن يتم تعديلها.</li>
    <li>في حالة نشوء نزاع، يوافق الطرفان على محاولة حل النزاع بحسن نية ووفقًا للممارسات التجارية العامة في المجال المحدد.</li>
    <li>إذا استمر النزاع واختار Paid4X.com اتخاذ إجراءات قانونية، يوافق المستخدم بشكل لا رجعة فيه على:</li>
    <ul>
      <li>أ. أن تكون محاكم المملكة الأردنية الهاشمية لها الولاية القضائية الحصرية لتحديد أي إجراءات.</li>
      <li>ب. التنازل عن أي اعتراض قد يكون لدى المستخدم في أي وقت على رفع أي إجراءات في تلك المحاكم.</li>
      <li>ج. يوافق على عدم الادعاء بأن هذه الإجراءات قد رفعت في محكمة غير مناسبة أو أن هذه المحكمة ليس لها اختصاص على المستخدم.</li>
    </ul>
  </ul>
`;



  const [data, setData] = useState([])
  const [getcountry, setCountry] = useState(null)
  const [getstates, setStates] = useState([])
  const [selectedState, setSelectedState] = useState(null)
  const [getcities, setCities] = useState([])
  const [otp, setOtp] = useState('')
  const [otpError, setOtpError] = useState('')
  const [token, setToken] = useState('')

  useEffect(() => {
    console.log('translations[language]',language);
    // console.log('sssssssssssssssssssssss',translations);
    
    if (getCookie('token')) {
      window.location.href = '/';
      return
    }


    const url = 'https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json'
    let promise = fetch(url)
    promise.then((response) => {
      return response.json()
    }).then((pdata) => {
      // var pdata = JSON.stringify(pdata)
      setData(data => pdata)
    }).catch((error) => {
    })
  }, [])

  const country = [... new Set(data.map((item) => {
    return item.country
  }))]
  country.sort()

  let handleCountry = (e) => {
    setSelectedCountry(e.target.value)
    let states = data.filter((states) => {
      return states.country === e.target.value
    })

    states = [...new Set(states.map((item) => {
      return item.subcountry
    }))]
    states.sort()
    setStates(getstates => states)
  }
  let handleState = (e) => {
    setSelectedState(e.target.value)
    let cities = data.filter((city) => {
      return city.subcountry === e.target.value
    })
    cities = [...new Set(cities.map((item) => {
      return item.name
    }))]
    cities.sort()
    setCities(getcities => cities)
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const validateForm = () => {
    let valid = true;
    const errors = {};
    if (!age) {
      errors.age = 'Please select your age';
      valid = false;
    }

    if (!vipTraining) {
      errors.vipTraining = 'Please select';
      valid = false;
    }
    if (!trainingBuy) {
      errors.trainingBuy = 'Please select';
      valid = false;
    }
    if (!numExp) {
      errors.numExp = 'Please select';
      valid = false;
    }
    if (!membership) {
      errors.membership = 'Please select';
      valid = false;
    }
    if (!favoriteInstruments) {
      errors.favoriteInstruments = 'Please select';
      valid = false;
    }
    if (!favoriteBroker) {
      errors.favoriteBroker = 'Favorite broker is required';
      valid = false;
    }
    if (!isTermsAccepted) {
      errors.terms = 'You must accept the terms and conditions';
      valid = false;
    }

    if (!firstname) {
      errors.firstname = 'First name is required';
      valid = false;
    }
    if (!lastName) {
      errors.lastName = 'Last name is required';
      valid = false;
    }
    if (!email) {
      errors.email = 'Your email is required';
      valid = false;
    }
    if (!phone) {
      errors.phone = 'Your phone is required';
      valid = false;
    }
    if (!password) {
      errors.password = 'Password is required';
      valid = false;
    }
    if (!conPassword) {
      errors.conPassword = 'Password is required';
      valid = false;
    }
    if (!getMethod) {
      errors.getMethod = 'Citizenship is required';
      valid = false;
    }
    if (!selectedState) {
      errors.selectedState = 'State is required';
      valid = false;
    }
    if (!selectedCountry) {
      errors.selectedCountry = 'City is required';
      valid = false;
    }
    if (password !== conPassword) {
      errors.matchPassword = 'The password do not match';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };


  const submit = async (e) => {

    setLoading(true)
    e.preventDefault();
    if (!validateForm()) {
      setLoading(false);
      return;
    }

    const resErrors = {};

    const response = await callApiWithToken('https://paid4x.com/broker/public/api/register', {
      name: firstname,
      email: email,
      password: password,
      payment_type: telegramUsername,
      phone: phone,
      last_name: lastName,
      city: selectedCountry,
      country: selectedState,
      age: age,
      did_you_receive_vip_training: vipTraining,
      did_you_buy_training_courses: trainingBuy,
      trading_experience: numExp,
      what_made_you_get_a_paid4x: membership,
      favorite_instruments: favoriteInstruments,
      favorite_broker: favoriteBroker,
      citizenship: getMethod
    }, 'POST');

    if (response.status == 1) {
      await setToken(response.access_token.token)
      await setReference(response.reference)
      // await setAuthOtp(response.otp)
      await loginSuccess(response.access_token)


    } else if (response.email) {
      setLoading(false)
      errors.response = response.email[0]
      setErrors(errors);
    } else {
      setLoading(false)
      errors.response = 'Something is wrong'
      setErrors(errors);
    }
  };

  const loginSuccess = async (token) => {



    // setCookie('token', token);
    setLoading(false)
    setSuccessRegistration(true)

    setTimeout(() => {
      setVaryingModal(true)
    }, 1000);
  }

  const sendOtp = async () => {
    setOtpError('')

    if (!otp) {
      setOtpLoading(false);
      setOtpError('verification code is requerd')
      return;
    }

    setOtpLoading(true);

    const response = await callApiWithToken('https://paid4x.com/broker/public/api/verify-otp', {
      otp: otp,
      reference: reference
    }, 'POST', token);

    if (response.status == 1) {
      // setOtpLoading(false)
      setOtpSuccess(true)
      setCookie('token', token);
      setTimeout(() => {
        window.location.href = '/';
      }, 4000);
    } else {
      setOtpLoading(false)
      setOtpSuccess(false)
      setOtpError('Pleas try later')
    }

  }

  return (
    <>
      <>

        <MDBModal staticBackdrop open={varyingModal} onClose={() => setVaryingModal(false)} tabIndex='-1'>
          <MDBModalDialog>

            {!otpLoading ? <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>Email Verification</MDBModalTitle>
                <MDBBtn className='btn-close' color='none' onClick={() => setVaryingModal(false)}></MDBBtn>
              </MDBModalHeader>
              <MDBModalBody>
                <form>
                  {/* <p>We have sent a verification code to your email...</p> */}
                  <p>
                    Please verification code from your Email to complete the registration...
                  </p>
                  <h6>Enter OTP:  <span class="badge badge-primary">New</span></h6>
                  <div className='mb-3'>
                    <MDBInput
                      type='number'
                      disabled={false}
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      labelClass='col-form-label'
                    />
                  </div>
                </form>
                {otpError && <p style={{ color: 'red' }}>{otpError}</p>}

              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn className='ms-1' color='secondary' onClick={() => setVaryingModal(!varyingModal)}>
                  Close
                </MDBBtn>
                <MDBBtn className="ms-1" onClick={() => sendOtp()}>sent</MDBBtn>
              </MDBModalFooter>

            </MDBModalContent>

              :

              <MDBModalContent>

                <div className="logo text-center" style={{ marginTop: 30, marginBottom: 30 }}>
                  <Link href="/">
                    <img style={{ maxHeight: 70, }} className="dark" src="/images/global/logo.png" alt="logo" />
                  </Link>
                </div>

                {otpLoading && !otpSuccess ? <div className="text-center" style={{ marginTop: 30, marginBottom: 30 }}>
                  <Spinner animation="border" variant="info" />
                </div> :

                  <div className="logo text-center" style={{ marginTop: 30, marginBottom: 30 }}>
                    <img style={{ maxHeight: 70, }} className="dark" src="/images/global/success.png" alt="logo" />
                  </div>

                }

                <div className="text-center" style={{ marginTop: 30, marginBottom: 30 }}>
                  {otpLoading && !otpSuccess ? <h4>Loading...</h4> : <h4 style={{ color: 'green' }}>Success...</h4>}
                </div>

                <div className="text-center" style={{ marginTop: 30, marginBottom: 30 }}>
                  {otpError && <p style={{ color: 'red' }}>{otpError}</p>}
                </div>


              </MDBModalContent>}

          </MDBModalDialog>
        </MDBModal>
      </>

      <Header />
      <PageHeader withSocialComponent={0} title={t.register} text={t.register} />
      <section className="account padding-top padding-bottom sec-bg-color2">
        <div className="container">
          <div
            className="account__wrapper"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="row g-4">
              <div className="col-12">
                <div className="account__content account__content--style1">
                  <div className="account__header">
                    <h2>{t.CreateYourAccount}</h2>
                    <p>{t.readyToJoin}</p>
                  </div>



                  <form
                    onSubmit={submit}
                    className="account__form needs-validation"
                    noValidate
                  >
                    <div className="row g-4">
                    {/* <h2>{t.CreateYourAccount}</h2> */}

<div className="col-12 col-md-6">
  <div>
    <label htmlFor="first-name" className="form-label">
      {t.firstName}
    </label>
    <input
      className="form-control"
      type="text"
      id="first-name"
      placeholder={t.enterYourFirstName}
      onChange={(res) => setFirstname(res.target.value)}
    />
    {errors.firstname && <p style={{ color: 'red' }}>{t.errorFirstName}</p>}
  </div>
</div>

<div className="col-12 col-md-6">
  <div>
    <label htmlFor="last-name" className="form-label">
      {t.lastName}
    </label>
    <input
      required
      className="form-control"
      type="text"
      id="last-name"
      placeholder={t.enterYourLastName}
      onChange={(res) => setLastName(res.target.value)}
    />
    {errors.lastName && <p style={{ color: 'red' }}>{t.errorLastName}</p>}
  </div>
</div>

<div className="col-12">
  <div className="form-pass">
    <label htmlFor="account-pass" className="form-label">
      {t.age}
    </label>
    <select className="form-control" onChange={(e) => handleAge(e)}>
      <option>{t.selectYourAge}</option>
      {AgeOptions.map((item, index) => (
        <option value={age} key={index}>
          {item}
        </option>
      ))}
    </select>
    {errors.age && <p style={{ color: 'red' }}>{t.errorAge}</p>}
  </div>
</div>

<div className="col-12">
  <div>
    <label htmlFor="account-email" className="form-label">
      {t.email}
    </label>
    <input
      type="email"
      className="form-control"
      id="account-email"
      placeholder={t.enterYourEmail}
      required
      onChange={(res) => setEmail(res.target.value)}
    />
    {errors.email && <p style={{ color: 'red' }}>{t.errorEmail}</p>}
  </div>
</div>

<div className="col-12">
  <div>
    <label htmlFor="account-phone" className="form-label">
      {t.phone}
    </label>
    <input
      type="phone"
      className="form-control"
      id="account-phone"
      placeholder={t.enterYourPhoneNumber}
      required
      onChange={(res) => setPhone(res.target.value)}
    />
    {errors.phone && <p style={{ color: 'red' }}>{t.errorPhone}</p>}
  </div>
</div>



<div className="col-12">
  <div>
    <label htmlFor="telegram-username" className="form-label">
      {t.telegramUsername}
    </label>
    <input
      className="form-control"
      type="text"
      id="telegram-username"
      placeholder={t.enterTelegramUsername}
      onChange={(res) => setTelegramUsername(res.target.value)}
    />
    {errors.telegramUsername && <p style={{ color: 'red' }}>{t.errorTelegramUsername}</p>}
  </div>
</div>

<div className="col-12 col-md-6">
  <div>
    <label htmlFor="country" className="form-label">
      {t.country}
    </label>
    <select className="form-control" onChange={(e) => handleCountry(e)}>
      <option>{t.selectCountry}</option>
      {country.map((item, index) => (
        <option value={getcountry} key={index}>
          {item}
        </option>
      ))}
    </select>
    {errors.selectedCountry && <p style={{ color: 'red' }}>{t.errorCountry}</p>}
  </div>
</div>

<div className="col-12 col-md-6">
  <div>
    <label htmlFor="city-town" className="form-label">
      {t.cityTown}
    </label>
    <select className="form-control" onChange={(e) => handleState(e)}>
      <option>{t.selectCity}</option>
      {getstates.map((item, index) => (
        <option value={selectedState} key={index}>
          {item}
        </option>
      ))}
    </select>
    {errors.selectedState && <p style={{ color: 'red' }}>{t.errorCityTown}</p>}
  </div>
</div>

<div className="col-12">
  <div className="form-pass">
    <label htmlFor="citizenship" className="form-label">
      {t.citizenship}
    </label>
    <select className="form-control" onChange={(e) => handlePaymentMethod(e)}>
      <option>{t.selectCitizenship}</option>
      {country.map((item, index) => (
        <option value={getcountry} key={index}>
          {item}
        </option>
      ))}
    </select>
    {errors.getMethod && <p style={{ color: 'red' }}>{t.errorCitizenship}</p>}
  </div>
</div>

<div className="col-12">
  <div className="form-pass">
    <label htmlFor="trading-experience" className="form-label">
      {t.tradingExperience}
    </label>
    <select className="form-control" onChange={(e) => handleNumExp(e)}>
      <option>{t.selectTradingExperience}</option>
      {numExpOptions.map((item, index) => (
        <option value={numExp} key={index}>
          {item}
        </option>
      ))}
    </select>
    {errors.numExp && <p style={{ color: 'red' }}>{t.errorTradingExperience}</p>}
  </div>
</div>



<div className="col-12">
  <div className="form-pass">
    <label htmlFor="favorite-instruments" className="form-label">
      {t.favoriteInstruments}
    </label>
    <select className="form-control" onChange={(e) => handleFavoriteInstruments(e)}>
      <option>{t.selectFavoriteInstruments}</option>
      {favoriteInstrumentsOptions.map((item, index) => (
        <option value={favoriteInstruments} key={index}>
          {item}
        </option>
      ))}
    </select>
    {errors.favoriteInstruments && <p style={{ color: 'red' }}>{t.errorFavoriteInstruments}</p>}
  </div>
</div>

<div className="col-12">
  <div>
    <label htmlFor="favorite-broker" className="form-label">
      {t.favoriteBroker}
    </label>
    <input
      className="form-control"
      type="text"
      id="favorite-broker"
      placeholder={t.enterFavoriteBroker}
      onChange={(res) => setFavoriteBroker(res.target.value)}
    />
    {errors.favoriteBroker && <p style={{ color: 'red' }}>{t.errorFavoriteBroker}</p>}
  </div>
</div>

<div className="col-12">
  <div className="form-pass">
    <label htmlFor="training-buy" className="form-label">
      {t.trainingBuy}
    </label>
    <select className="form-control" onChange={(e) => handleTrainingBuy(e)}>
      <option>{t.selectTrainingBuy}</option>
      {trainingBuyOptions.map((item, index) => (
        <option value={trainingBuy} key={index}>
          {item}
        </option>
      ))}
    </select>
    {errors.trainingBuy && <p style={{ color: 'red' }}>{t.errorTrainingBuy}</p>}
  </div>
</div>

<div className="col-12">
  <div className="form-pass">
    <label htmlFor="vip-training" className="form-label">
      {t.vipTraining}
    </label>
    <select className="form-control" onChange={(e) => handleVipTraining(e)}>
      <option>{t.selectVipTraining}</option>
      {vipTrainingOptions.map((item, index) => (
        <option value={vipTraining} key={index}>
          {item}
        </option>
      ))}
    </select>
    {errors.vipTraining && <p style={{ color: 'red' }}>{t.errorVipTraining}</p>}
  </div>
</div>

<div className="col-12">
  <div className="form-pass">
    <label htmlFor="membership" className="form-label">
      {t.membership}
    </label>
    <select className="form-control" onChange={(e) => handleMembership(e)}>
      <option>{t.selectMembership}</option>
      {membershipOptions.map((item, index) => (
        <option value={membership} key={index}>
          {item}
        </option>
      ))}
    </select>
    {errors.membership && <p style={{ color: 'red' }}>{t.errorMembership}</p>}
  </div>
</div>


<div className="col-12">
  <div className="form-pass">
    <label htmlFor="account-pass" className="form-label">
      {t.password}
    </label>
    <input
      type="password"
      className="form-control showhide-pass"
      id="account-pass"
      placeholder={t.password}
      required
      onChange={(res) => setPassword(res.target.value)}
    />
    {errors.password && <p style={{ color: 'red' }}>{t.errorPassword}</p>}
    {/* <button
      type="button"
      id="btnToggle"
      className="form-pass__toggle"
    >
      <i id="eyeIcon1" className="fa fa-eye"></i>
    </button> */}
  </div>
</div>

<div className="col-12">
  <div className="form-pass">
    <label htmlFor="account-cpass" className="form-label">
      {t.confirmPassword}
    </label>
    <input
      type="password"
      className="form-control showhide-pass"
      id="account-cpass"
      placeholder={t.retypePassword}
      required
      onChange={(res) => setConPassword(res.target.value)}
    />
    {errors.conPassword && <p style={{ color: 'red' }}>{t.errorConPassword}</p>}
    {/* <button
      type="button"
      id="btnCToggle"
      className="form-pass__toggle"
    >
      <i id="eyeIcon2" className="fa fa-eye"></i>
    </button> */}
  </div>
</div>

<div style={{ marginTop: 15, display: 'flex' }}>
  <input
    type="checkbox"
    className="form-check-input"
    checked={isTermsAccepted}
    onChange={(e) => setIsTermsAccepted(e.target.checked)}
  />
  {/* <label style={{ paddingInline: 5, fontSize: 15 }}>
    {t.agreeToTerms} <span onClick={() => toggleModal('terms')} style={{ fontWeight: 'bold', color: '#18e8ef', cursor: 'pointer', textDecoration: 'underline' }}>aaaa</span>
  </label> */}

<label style={{ paddingInline: 5, fontSize: 15 }}>
                       {t.agreeToTerms}{' '}
                        <span
                          onClick={() => toggleModal('terms')}
                          style={{ fontWeight: 'bold', color: '#18e8ef', cursor: 'pointer', textDecoration: 'underline' }}
                        >
                          {t.termsAndConditions}
                        </span>{' '}

                      </label>

</div>
{errors.terms && <p style={{ color: 'red', marginLeft: '8px' }}>{t.errorTerms}</p>}

{!isLoading && !successRegistration && (
  <div>
    <button
      type="submit"
      className="trk-btn trk-btn--border trk-btn--primary d-block mt-4"
    >
      {t.signUp}
    </button>
    {errors.matchPassword && <p style={{ color: 'red' }}>{t.errorMatchPassword}</p>}
    {errors.response && <p style={{ color: 'red' }}>{t.errorResponse}</p>}
  </div>
)}

{isLoading && !successRegistration && (
  <div style={{ textAlign: 'center' }}>
    <Spinner animation="border" variant="info" />
  </div>
)}

{successRegistration && (
  <Toast className="d-inline-block m-1" bg="success" style={{ width: '100%' }}>
    <Toast.Header>
      <img
        src="holder.js/20x20?text=%20"
        className="rounded me-2"
        alt=""
      />
      <strong className="me-auto">{t.successRegistration}</strong>
    </Toast.Header>
    <Toast.Body className="text-white">
      {t.verificationSent}
    </Toast.Body>
  </Toast>
)}
</div>
                  </form>
                  <div className="account__switch">
                  <p>
  {t.dontHaveAccount} <Link href={"signin"}>{t.login}</Link>
</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="account__shape">
          <span className="account__shape-item account__shape-item--1">
            <img src="/images/contact/4.png" alt="shape-icon" />
          </span>
        </div>


        <Modal isOpen={modalOpen} toggle={() => setModalOpen(!modalOpen)}>
          <ModalHeader toggle={() => setModalOpen(!modalOpen)}>
          {t.termsAndConditions}
          </ModalHeader>
          <ModalBody>
            <div
              dangerouslySetInnerHTML={{ __html: language == 'en' ? termsContent : termsContentAr }}
              style={{
                maxHeight: '400px',
                overflowY: 'scroll',
                padding: '15px',
                fontFamily: "'Arial', sans-serif",
                lineHeight: '1.5',
              }}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => setModalOpen(!modalOpen)}>
              Close
            </Button>
          </ModalFooter>
        </Modal>


      </section>
      <Footer />
    </>
  );
};
export default SignUp;
