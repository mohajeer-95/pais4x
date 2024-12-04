import React, { useState, useEffect } from 'react';
import BlogCategories from '@/components/base/BlogCategories'
import BlogCard from '@/components/cards/BlogCard'
import { callApiWithToken } from '../../../../public/api/api'
import { useRtl } from '@/context/RtlContext';
import translations from '@/translations';
const BlogWIthSideBar = () => {
  const { language, toggleDirection } = useRtl();
  const t = translations[language] || translations['en'];

  const [statebuttonText, setStateButtonText] = useState(false);

  const [coursesList, setCourses] = useState([])

  const dataEn = [
    'Here at Paid4X.com, we strongly believe in the quote attributed to Warren Buffet, in which he said: “The best investment you can make is in yourself. The more you learn, the more you’ll earn.” We always encourage newcomers to invest a lot of time & money in themselves first before they invest their first dollar in the market.',
    'That is why, we have prepared a good number of training courses, that aim at giving you enough tools, or as we like to call them “weapons”, so you go into the battleground of the market fully prepared to fight your way to being among the minority of traders who make good money trading.',
    'We also believe that one of the most important factors which contribute to losing money, is not having enough knowledge about the amazing techniques that helps traders in estimating the chances of the direction of the trend.',
    'Money does not grow on trees, to be successful in any business is not an easy task, and that applies to the business of trading. That is why it is strange that a lot of traders think they can watch a few YouTube videos (designed to get as much views as possible, not to educate as much as possible), and boom, they are ready to be successful traders. That is really strange.',
    'As our founder says: “No one buys a guitar & go home expecting to play like Tim Henson, or get behind the wheel for the first time & start driving like Michael Schumacher, so why do many traders expect to open a trading account & start trading like Jesse Livermore?”',
    'Doing anything without enough preparation raises the odds of failure exponentially, and lowers the odds of success to near-zero levels. Don’t be fooled by social media fake gurus & the bits and pieces of education you get here & there. Without a solid knowledge base, you are not qualified to trade the market.',
    'So, how do you get “qualified” to trade the market? By investing in yourself first, and spending a lot of time & money building the knowledge you need to trade, and you should do that before you place your first trade.',
    'There is a lot of techniques, a lot of patterns, a lot of indicators, which have proven decade after decade, that they can help traders achieve the results they crave. Unquestionably, you should familiarize yourself deeply with as much as you can of this previous human knowledge, before you start trading.',
    '“Knowledge is what separates the professionals from the immatures.” — Munthir Marji',
    'This knowledge, which was documented and saved for us, by legendary traders & the fathers of market analysis, is a priceless gift. Why would we refuse it?',
    'Invest in yourself today.',
    'We have a lot of courses for you, which are great for beginners, and very good for experienced traders as well, because they form a comprehensive knowledge base which is mostly brand-new for rookies, but also could include a few bits & pieces which even experienced traders know about for the first time. Even if you already know all of these things, a review to fill the gaps in your memory would be a great way to refresh your trading skills, especially at these extremely competitive prices.',
    'Features of our courses:',
    '1. Built on knowledge, built on experience: All of our training material is written & prepared by our sole coach & mentor Munthir Marji, who is a highly educated coach & a trader himself, and who has long experience in the market. Click here to know more about your instructor.',
    '2. Short focused courses: Instead of publishing one very long, wide-ranging course, which will take you a lot of time to complete, we divided our courses into shorter ones, focused on 1 subject at a time. This way you can save a lot of time, by only studying the courses you need to learn about, while skipping the courses you don’t. Moreover, studying only one subject from the beginning of the course to its finish line, keeps you focused on this subject which helps in gaining deeper understanding, compared to studying 3 or 4 different subjects in one course.',
    '3. Extremely competitive prices: Instead of publishing one very long, expensive course, which will cost you a lot of money, we divided our courses into shorter ones. This allows us to offer most of them at prices that are extremely competitive & affordable even to investors with very small account sizes.',
    '4. Two separate methods: You can learn through one of 2 methods, according to your preference & budget. The first is learning through recorded video courses, and the second is the VIP one-on-one training with your instructor. Recorded video courses are designed to be affordable and available at a time that suits you. Alternatively, the VIP one-on-one training is available for those who prefer a personalized and interactive learning experience.',
    '5. 100% refund: If you are a serious student, you can get back all of the training fees you paid by opening an account with any of the brokers listed on our site and using the links provided. For every 5 dollars of cashback you make, we will refund 1 dollar of training fees until the full amount is refunded. There is no time limit to achieve the required cashback balance for the full refund.',
    '6. Instructor support: We have a dedicated email for our students to contact their instructor directly and ask questions during or even after completing their courses. Each recorded course comes with 30 days of email support, while VIP courses come with 100 days of email support.',
  ];

  const dataAr = [
    'في بيدفوركس، نحن نؤمن إيماناً راسخاً بالمقولة التي تنسب لـ وارن بافت، والتي يقول فيها: "إن افضل استثمار تقوم به هو الاستثمار في نفسك. فكلما تعلمت أكثر، كلما كسبت أكثر." ودائماً ما نشجع القادمين الجدد على ان يستثمروا الكثير من الوقت والمال في أنفسهم أولاً، قبل أن يستثمروا أول دولار لهم في التداول.',
    'لذلك، فلقد حضرنا لك عدداً لا بأس به من الدورات التدريبية، التي تهدف لأعطائك الأدوات الكافية، أو كما نسميها "الأسلحة"، حتى تدخل أرض المعركة مستعداً لتقاتل على طريق الوصول إلى هدفك بأن تصبح من النخبة التي تحقق اموالاً طيبة من التداول.',
    'كذلك، نحن نؤمن ان احد اهم العوامل التي تساهم في الخسارة، هو نقص المعرفة بالأساليب الصحيحة التي لها القدرة الرائعة على مساعدة المتداولين في تحديد إحتمالات الإتجاه (الترند).',
    'المال لا ينمو على الأشجار، وأن تبني من نفسك متداولاً ناجحاً ليس بالمهمة السهلة. لذلك، من الغريب أن يكون هنالك الكثير من المتداولين الذين يظنون انه بمجرد مشاهدة عدد من الفيديوهات على يوتوب (والمصممة أصلاً لحصد أكبر عدد من المشاهدات، وليس لأعطاء اكبر قدر من المعلومات التعليمية)، ويا للروعة، لقد أصبحوا جاهزين لأن يكونوا متداولين ناجحين. إنه أمر لغريب حقاً.',
    'يقول موسسنا: "لا أحد يشتري جيتار ويعود إلى بيته متوقعاً أن يعزف مثل تيم هنسن، ولا أحد يجلس خلف مقود السيارة لاول مرة ويتوقع أن يقود مثل مايكل شوماخر، فلماذا هنالك الكثير جداً من المتداولين الذين يتوقعون انه بمجرد فتح حساب تداول فانهم سيتداولون مثل جيسي ليفيرمور؟"',
    'إن الإقدام على أي عمل بدون تحضير كاف يرفع وبشكل كبير جداً من فرص الفشل، ويخفض من فرص النجاح لمستويات تقترب من الصفر. لا تجعل ما تراه على السوشال ميديا يخدعك، ولا تظن أن فتات التعليم الذي يتم نشره هنا وهناك يكفي لتحقيق النجاح في هذا المجال. بدون قاعدة معرفة صلبة، لن تكون مؤهلاً للتداول في الأسواق المالية.',
    'إذاً، كيف تصبح "مؤهلاً" للتداول في الأسواق المالية؟ بأن تستثمر في نفسك أولاً، وان تنفق الكثير من مالك ووقتك على عملية بناء المعرفة التي تحتاج حتى تتداول، ويجب أن تقوم بكل ذلك قبل أن تفتح عملية التداول الأولى لك.',
    'هنالك الكثير من التقنيات التي يمكن تعلمها، والكثير من الأنماط، والكثير من المؤشرات، التي يمكن ان تساعد المتداولين على تحقيق النتائج التي يتمنون. بلا أدنى شك، يجب عليك ان تتمرس في هذه المعرفة الإنسانية المتراكمة، إلى اقصى حد مستطاع، قبل ان تبدا بالتداول.',
    '"المعرفة هي ما يفصل بين المحترفين والهواة" — منذر مرجي',
    'هذه المعرفة، والتي تم توثيقها وحفظها لنا، من قبل أساطير المتداولين وآباء التحليل، هي عبارة عن هدية لا تقدر بثمن. فلماذا نرفضها؟',
    'إستثمر في نفسك اليوم.',
    'لدينا الكثير من الدورات لك، والتي هي رائعة للمبتدئين، ومناسبة حتى للمتداولين أصحاب الخبرة، لانها تشكل قاعدة معرفة شاملة، جديدة بالكامل للمبتدئين، ولكنها ايضاً تتضمن قطعاً وقصاصات قد يعرف عنها المتداولين أصحاب الخبرة للمرة الاولى. بل حتى ولو كنت تعرف كل ما في هذه الدورات، فأن مراجعة معرفتك حتى ترسخ هذه النقاط في ذاكرتك هي طريقة رائعة لإعطاء الإنتعاش لمهاراتك في التداول، خصوصاً بهذه الاسعار الغير معقولة.',
    'مزايا دوراتنا:',
    '1. مبينة على المعرفة، مبنية على الخبرة: جميع دوراتنا مكتوبة ومحضرة من طرف المرشد والمدرب الخبير منذر مرجي، بدون أي مساهمة من اي طرف أخر، وهو مدرب ذو تعليم عالي في هذ المجال، ومتداول له خبرة طويلة في الأسواق المالية. أضغط هنا لمعرفة المزيد عن المحاضر.',
    '2. دورات قصيرة ومركزة: بدلاً من ان ننشر دورة واحدة طويلة للغاية، وواسعة النطاق، وهو ما سيستهلك منك الكثير من الوقت لإكمالها، قمنا بتقسيم المعلومات إلى دورات أقصر، كل منها تركز على موضوع واحد فقط. بهذه الطريقة، يمكنك ان توفر الكثير من الوقت والجهد، بدراسة تلك الدورات التي تغطي المواضيع التي ترغب في التعمق فيها فحسب، وتخطي تلك الدورات التي لا تحتاج لها. بالإضافة إلى ذلك، فإنك عندما تقوم بدراسة موضوع واحد من بداية الدورة وحتى نهايتها، فإنك ستحتفظ بتركيزك على ذلك الموضوع، مما يساعد في الحصول على معرفة أعمق، مقارنة بدراسة 3 او 4 مواضيع في دورة واحدة.',
    '3. أسعار منافسة للغاية: وبدلاً من نشر تلك الدورة الواحدة الطويلة للغاية، والتي ستكون مكلفة، فإننا بنشرنا دورات قصيرة نوفر عليك المال لان ذلك يمكننا من عرض الاغلبية الساحقة من هذه الدورات بأسعار منافسة للغاية وميسورة التكلفة، حتى للمستثمرين أصحاب الحسابات الصغيرة.',
    '4. طريقتين مختلفتين: يمكنك أن تتعلم بواحدة من طريقتين مختلفتين، وفقاً لتفضيلاتك وميزانيتك. الأولى هي دورات الفيديو المسجلة، والثانية هي دورات كبار المستثمرين المباشرة، والتي تتضمن وجود المدرب. الآن وبفضل التكنولوجيا التي سهلت حياتنا، اصبح بإمكان جميع المستثمرين، بغض النظر عن حجم حساباتهم، الحصول على التعليم الذي يحتاجونه.',
    '5. إسترداد بنسبة 100%: اذا كنت متدرباً جاداً، تتعلم بهدف واضح وهو أن تصبح متداولاً ناجحاً،  يمكنك استعادة رسوم التدريب التي دفعتها بالكامل، سواء كان ذلك بشراء دوراتنا المسجلة على يوديمي، أو عن طريق جلسات تدريب كبار العملاء. يمكنك أن تقوم بذلك بكل بساطة عن طريق فتح حسابك مع أي من الوسطاء الموجودين على موقعنا، وسيكون من دواعي سرورنا أن نرد لك كل دولار دفعته على التدريب.',
    '6. تلقي الدعم من المحاضر: هنالك عنوان بريد إلكتروني مخصص بالكامل للمتدربين، يستطيعون التواصل من خلاله مع مدربهم بشكل مباشر، وارسال أسئلتهم عن أي شي يتعلق بالدورة، خلال دراستهم لها أو حتى بعد الإنتهاء منها. مع كل دورة مسجلة ستقوم بشرائها، ستحصل على الدعم لمدة 30 يوماً (من تاريخ الشراء)، ومع دورات كبار العملاء ستحصل على الدعم لمدة 100 يوم (من تاريخ أخر جلسة).',
  ];
  


  const data = language === 'ar' ? dataAr : dataEn;

  useEffect(() => {
    if (coursesList.length < 1) {
      getCourses()
    }
  }, [])

  const getCourses = async () => {
    const response = await callApiWithToken('https://paid4x.com/broker/public/api/courses', {}, 'GET');
    console.log('response ', response);
    if (response.status == 1) {
      console.log('KKKKKKK', response);
      setCourses(response.courses)
    } else {
      //have Error
    }
  }

  const handleClick = () => {
    if (statebuttonText) {
      setStateButtonText(false);
    } else {
      setStateButtonText(true);
    }
  };

  const openNewWindow = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="blog padding-top padding-bottom section-bg-color">
      <div className="container">
        <div className="blog__wrapper">
          <div className="row g-5">
            <div className="col-lg-8">
              <div className="sidebar__categorie" style={{ marginBottom: 30 }}>



                <h4 style={{ paddingBottom: 15 }}>

                  {data[0]}

                </h4>


                <p style={{ paddingBottom: 15 }}>
                {data[1]}

                </p>

                {statebuttonText ?
                  <p>
                    <p style={{ paddingBottom: 15 }}>
                    {data[2]}

                    </p>

                    <p style={{ paddingBottom: 15 }}>
                    {data[3]}

                    </p>

                    <p style={{ paddingBottom: 15 }}>

                    {data[4]}


                    </p>

                    <p style={{ paddingBottom: 15 }}>
                    {data[5]}
                    </p>
                    <p style={{ paddingBottom: 15 }}>
                    {data[6]}
                    </p>
                    <p style={{ paddingBottom: 15 }}>
                    {data[7]}


                    </p>
                    <p style={{ paddingBottom: 15 }}>
                    {data[8]}
                    </p>

                    <p style={{ paddingBottom: 15 }}>
                    {data[9]}
                    </p>

                    <h4 style={{ paddingBottom: 15 }}>
                    {data[10]}
                    </h4>

                    <p style={{ paddingBottom: 15 }}>
                    {data[11]}
                    </p>

                    <h4 style={{ paddingBottom: 15 }}>
                    {data[12]}
                    </h4>
                    <p style={{ paddingBottom: 15 }}>
                    {data[13]}
                    </p>
                    <p style={{ paddingBottom: 15 }}>
                    {data[14]}
                    </p>
                    <p style={{ paddingBottom: 15 }}>
                    {data[15]}
                    </p>
                    <p style={{ paddingBottom: 15 }}>
                    {data[16]}
                    </p>
                    <p style={{ paddingBottom: 15 }}>
                    {data[17]}
                    </p>
                  </p>
                  : null}


                <button onClick={() => handleClick()}
                  style={styles.btn}>
                  {!statebuttonText ? t.seeMore : t.seeLess}
                </button>


              </div>
              {!statebuttonText ? <div className="row g-4">
                {coursesList.map((item, index) => (
                  // <div key={index} className="col-sm-12 ">
                  <div key={index} className="course-list">

                    <BlogCard withoutDescription={1} data={item} />
                  </div>
                ))}
                {!coursesList.length &&
                  <div
                    style={{ color: 'orange', fontWeight: 'bold', fontSize: 17, textAlign: 'center', marginTop: 40, marginBottom: 40 }}>
                    {t.dataNotFound}
                  </div>}
              </div> : null}
              {/* <div className="paginations" data-aos="fade-up" data-aos-duration="800">
                <ul className="lab-ul d-flex flex-wrap justify-content-center mb-1">
                  <li>
                    <Link scroll={false} href=""><i className="fa-solid fa-angle-left me-2"></i> Prev</Link>
                  </li>
                  <li>
                    <Link scroll={false} href="" className="active">1</Link>
                  </li>
                  <li className="d-none d-sm-block">
                    <Link scroll={false} href="">2</Link>
                  </li>
                  <li className="d-none d-sm-block">
                    <Link scroll={false} href="">3</Link>
                  </li>
                  <li>
                    <Link scroll={false} href="" className="dot">...</Link>
                  </li>
                  <li>
                    <Link scroll={false} href="">12</Link>
                  </li>
                  <li>
                    <Link scroll={false} href="" className="active">Next <i className="fa-solid fa-angle-right ms-2"></i> </Link>
                  </li>
                </ul>
              </div> */}
            </div>
            <div className="col-lg-4 col-md-8  col-12">
              <div className="sidebar" data-aos="fade-left" data-aos-duration="1000">
                <div className="row g-4">

                  <div className="col-12">
                    <BlogCategories />
                  </div>
                  <div className="col-12">
                    {/* <RecentPost /> */}
                  </div>

                  <div className="col-12">
                    <div className="sidebar__social" >
                      <div className="sidebar__head">
                        <h6>{t.socialLinks}</h6>
                      </div>
                      <div className="sidebar__social-body">
                        <div className="sidebar__social-content">
                          <ul className="social mt-25">
                            <li className="social__item">
                              <div onClick={() => openNewWindow('https://www.facebook.com/Paid4X?mibextid=LQQJ4d')} scroll={false} className="social__link social__link--style4 active"><i className="fab fa-facebook-f"></i></div>
                            </li>
                            <li className="social__item">
                              <div onClick={() => openNewWindow('https://www.linkedin.com/company/paid4x/')} scroll={false} className="social__link social__link--style4"><i className="fa-brands fa-linkedin-in"></i></div>
                            </li>
                            <li className="social__item">
                              <div onClick={() => openNewWindow('https://youtube.com/@paid4x?si=r51M6rGhKLeRA18D')} scroll={false} className="social__link social__link--style4"><i className="fab fa-youtube"></i></div>
                            </li>
                            <li className="social__item">
                              <div onClick={() => openNewWindow('https://x.com/paid4x_com?s=11&t=JqEI_h_zgJGVq37XMc3d9w')} className="social__link social__link--style4"><i className="fab fa-x"></i></div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogWIthSideBar


const styles = {

  btn: {
    fontSize: 15,
    color: '#68686A',
    cursor: 'pointer',
    margin: 10,
    padding: 10,
    borderRadius: "8px",
    border: "none",
    boxShadow: "0px 0px 10px 0px grey",
  },
};