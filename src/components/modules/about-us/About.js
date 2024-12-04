
import { useRtl } from '@/context/RtlContext';
import translations from '@/translations';

function About() {
  const { language } = useRtl();
  const t = translations[language] || translations['en'];

  const dataEn = [
    'Paid4X is a brand created by veteran analyst, coach & trader Munther Marji in 2023, after spending almost 23 years in the business. Mr. Marji started working in the FX/CFD business as a junior broker in Dec 2000, and filled almost every position possible from junior broker up to a general manager of a brokerage company. He worked with brokers & financial market educational establishments from Switzerland, Cyprus, Turkey, South Korea, Saudi Arabia, Bahrain, Egypt, Syria & his homeland Jordan.',
    'Paid4X brand is mainly a mix between a cashback IB service (or CIB if you will) & a trading education service.',
    'The cashback unit offers clients the chance to be “Paid2Trade”, meaning getting a certain amount of dollars for each trade they close, accumulate these dollars, and withdraw them at any time, via one of several withdrawal methods available. ',
    'The trading education unit focuses on coaching traders, and on building their knowledge in the art & science of technical analysis, in addition to trading techniques, strategies, risk management & monetary policy. Our courses are available in 2 languages, English & Arabic, on the training platform Udemy, at prices affordable to all types of investors. We also offer a more expensive VIP one-on-one training service, for interested high-net-worth investors (HNWIs) who can afford this kind of training. ',
    'One of the things we believe you will really like about our courses is that instead of offering one comprehensive & expensive course, we divided our educational material into shorter, inexpensive courses, each of which talks about one subject. This division resulted in the fact that almost all courses are offered at very low prices. ',
    'By presenting our training in smaller chunks, traders can pick the subjects they want to learn about and only spend money & time on them, without having to buy & pay for, or waste time on, the subjects they do not feel the need to learn about, which saves them money, effort & time!',
    'Not only that, but because we are also a cashback site, after paying for the course, traders can pick any broker from our sponsors, to open a real account with, and get a full refund of all training fees paid, be that one course, or all of them, affordable recorded courses, or the much more expensive VIP ones. That is of course, in addition to what they can make through our Paid2Trade cashback program.',
    'Very Important Note: Because the cashback & full refund offer is provided to you by Paid4X & not by your broker, you need to open your account using the links available on our site in order to use this offer. Accounts opened from the broker’s website directly, or any other site, do not qualify to benefit from any of our offers, current or future.',
  ]


  const dataAr = [
    'بيدفوركس هي علامة تجارية تم إنشاؤها من قبل المتداول المخضرم، والمدرب منذر مرجي في 2023، بعد أن قضى قرابة 23 عاماً في مجال الأسواق المالية. بدأ مؤسسنا العمل في قطاع الفوركس وعقود الفروقات كوسيط مبتدىء في شهر ديسمبر من عام 2000، وعمل في الكثير من المناصب الوظيفية حتى وصل إلى منصب مدير عام شركة وساطة مالية. كما عمل مع شركات وساطة وأكاديميات تعليمية من سويسرا، قبرص، تركيا، كوريا الجنوبية، السعودية، البحرين، مصر، سوريا، ووطنه الأردن.',
    'في الأساس، تمثل هذه العلامة التجارية مشروعاً يتم من خلاله الجمع بين خدمات تعليم التداول وتحليل الأسواق المالية، وخدمة الكاشباك.',
    'تقدم وحدة الكاشباك للعملاء والمتداولين فرصة الإنضمام المجاني لبرنامج "بيد تو تريد"، الذي يؤهلهم للحصول على مبلغ يصل إلى عدة دولارات عن كل عقد (لوت) يقومون بأغلاقه، وأن يقوموا بجمع هذه الدولارات، ومن ثم سحبها في أي وقت عن طريق أحدى طرق الدفع المتوفرة.',
    'أما الوحدة التعليمية، فهي تركز على تدريب المتداولين، وعلى بناء معرفتهم بفن وعلم التحليل الفني، بالإضافة إلى طرق وأستراتيجات التداول، وإدارة المخاطر، والسياسة النقدية. تتوفر دوراتنا التدريبة بلغتين هي العربية والإنجليزية، على موقع التدريب الشهير يوديمي بأسعار تناسب كل فئات المستثمرين. كما تتوفر خدمة الدورات المباشرة لكبار العملاء والمستثمرين القادرين على تحمل تكاليفها. ',
    'أحد الأمور التي نتوقع أن تعجبكم بشكل كبير هي أنه بدل أن نقوم بعرض دورات شاملة تمتد لعشرات الساعات وتكلف مئات الدولارات، قمنا بتقسيم موادنا التعليمية إلى دورات أقصر وأقل تكلفة، تتخصص كل منها في موضوع واحد فقط. أدى هذا التقسيم إلى أننا أصبحنا قادرين على عرض كل دوراتنا تقريباً بأسعار منخفضة للغاية.',
    'ولأننا نقوم بتقديم هذه الدورات بقطع أصغر لكم، فإنكم ستكونو قادرين على أختيار المواضيع التي تريدون معرفة المزيد عنها، وأن تنفقوا أموالكم ووقتكم الثمين على هذه المواضيع فحسب، بدون أن يكون هنالك حاجة إلى أنفاق المال، أو إهدار الوقت على مواضيع أخرى لا تشعرون بحاجتكم للتعلم عنها، مما يساهم في توفير أموالكم ووقتكم!',
    'وليس هذا فقط! فلأننا نقدم خدمة الكاشباك كذلك، فأن المتدرب يمكنه، بعد أن يكون قد دفع ثمن دورة ما، أن يختار أي وسيط من الوسطاء الموجودين على موقعنا، وأن يقوم بفتح حسابه مع ذلك الوسيط، حتى يسترد كامل المبلغ المدفوع، سواءاً كان ذلك عن دورة واحدة، أو جميع دوراتنا، وسواءاً كان قد دفع مقابل دورة مسجلة على موقع يوديمي، أو حصل على تدريب كبار العملاء الأغلى ثمناً. هذا طبعاً، بالإضافة إلى الكاشباك الذي سيحصل عليه المتدرب من كل عملية يغلقها عندما يصبح متداولاً منخرطاً في برنامج "بيد تو تريد".',
    'ملاحظة مهمة جداً: لأن عرض الكاشباك والأسترداد النقدي لرسوم التدريب مقدم من قبل بيدفوركس وليس من قبل الوسيط، فإنه حتى تستفيد من هذا العرض، يجب عليك فتح حسابك عن طريق روابط فتح الحسابات الموجودة على موقعنا فقط، ولا يُعتبر أي حساب تم فتحه من موقع الوسيط مباشرة أو عن طريق أي موقع أخر، مؤهلاً للإستفادة من عروضنا الحالية أو المستقبلية. '
  ]
  const data = language === 'ar' ? dataAr : dataEn;

  return (
    <section className="about about--style1 ">
      <div className="container">
        <div className="about__wrapper">
          <div className="row gx-5  gy-4 gy-sm-0  align-items-center">




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
                      src="/images/global/about.jpg"
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
                  <h2>
                    {t.meetOurCompany}
                  </h2>
                  <p className="mb-0" style={{ paddingBottom: 20 }}>
                    {data[0]}
                  </p>

                  <p className="mb-0" style={{ paddingBottom: 20 }}>
                  {data[1]}
                  </p>

                  <p className="mb-0" style={{ paddingBottom: 20 }}>
                  {data[2]}
                  </p>

                </div>
              </div>
            </div>

          </div>
          <p className="mb-0" style={{ paddingBottom: 20, paddingTop: 30 }}>
          {data[3]}
          </p>

          <p className="mb-0" style={{ paddingBottom: 20 }}>
          {data[4]}
          </p>

          <p className="mb-0" style={{ paddingBottom: 20 }}>
          {data[5]}
          </p>

          <p className="mb-0" style={{ paddingBottom: 20 }}>
          {data[6]}
          </p>
          <p className="mb-0" style={{ paddingBottom: 20 }}>
          {data[7]}
          </p>






        </div>
      </div>
    </section>
  );
}

export default About;
