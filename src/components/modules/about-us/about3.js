/* eslint-disable react/no-unescaped-entities */
// Instructor content PAGE 
import translations from '@/translations';
import { useRtl } from '@/context/RtlContext';


function About() {
    const { language } = useRtl();
    const t = translations[language] || translations['en'];



    const dataEn = [
        'Who is lecturing in these courses?',
        'Hello, my name is Munther Marji & I am the founder of Paid4X.',
        'All of our training courses are completely prepared by me. No one else is involved.',
        'I have a bachelor’s degree in economics (1996), a master’s degree in finance (1999) & in 2015 I became the first Jordanian to receive the prestigious CMT designation (Chartered Market Technician), and also the first Jordanian full member of the MTA (Market Technicians Association) in NY, USA, currently known as the CMT Association.',
        'I entered this business as a junior broker in December 2000. From there, a wonderful & exciting journey that lasted 23 years has been giving me fulfillment, and a purpose for my life.',
        'When I was only 13 years old, I started collecting the local stock market data sheet from the daily newspaper, and I used to imagine myself buying & selling stocks. I even came up with a formula, be it a very primitive one as you would expect from a 13-year old boy, to pick stocks based on their 52-week high & low, at that age, and I used to check on the prices of these stocks later to see what happened to them.',
        'My analysis was published online in 15 languages, I am frequently featured on the international markets segment on CNBC Arabia, I worked as an advisor to fund manager, for a fund with offices in London & Istanbul, moving more than 70 million dollars (before leverage) in the FX market, based exclusively on my advice. Not a huge fund, but I am particularly proud of that, and I also made some good money on that job. I also reached as high as a general manager of a brokerage company, in Bahrain.',
        'I worked with brokers from 10 countries: Switzerland, Cyprus, Turkey, South Korea, Saudi Arabia, Bahrain, Egypt, Syria, Iraq & my home country Jordan, gave seminars, webinars & training courses in 8 of these countries, both to employees & investors.',
        'I am blessed that I spent almost my whole working years doing something I love. The market is a passion for me, it was never a position. It is this passion that you will see obvious in my training, this spirit is infectious, you will fall in love with the market because of our training material.',
        'My first training course was given in the summer of 2002, and I have trained literally thousands of employees & investors, face to face & on live video, throughout my training career.',
        'I am blessed that I can offer people who are interested in market education, services which are built on: 1. High education (Master’s degree in finance + a CMT), 2. experience (23 years of market experience, 21 years in training market education) & 3. Passion. A combination which is sure to give you the solid ground you need in order to sail full of hope, into the sea of the financial markets, which is filled with opportunities & risks.',
        'I will teach you how to spot the best opportunities, how to handle the risk, and what tools to use in order to become a successful trader, while helping you avoid the mistakes that are usually committed by traders, especially beginners.',
        'Being a successful trader is no easy task, a lot of traders cannot achieve that. But if you believe you can be one of the winners, and you want to get the right education & learn about the best tools to use in your quest, you are in the right place. Let your exciting journey in financial markets start the right way, by picking up one of our courses today!'
    ];

    const dataAr = [
        'من الذي يحاضر في هذه الدورات؟',
        'مرحباً، إسمي منذر مرجي وأنا مؤسس بيدفوركس.',
        'جميع دوراتنا التدريبية من إعدادي، ولا يوجد أي شخص أخر له علاقة بإعداد هذه الدورات.',
        'أحمل بكالورويس في الإقتصاد (1996) ودرجة الماجستير في العلوم المالية (1999). في عام 2015 أصبحت أول أردني يحصل على لقب (سي أم تي) المرموق، والذي هو أختصار لـ محلل فني معتمد. وفي ذات العام أصبحت كذلك أول أردني يحصل على العضوية الكاملة في جمعية المحللين الفنيين للأسواق المالية (إم تي آيه) في نيويورك، الولايات المتحدة، والتي أصبحت تعرف الأن بإسمها الجديد: جمعية المحللين الفنيين المعتمدين.',
        'في ديسمبر من عام 2000، دخلت مجال الأسواق المالية عبر وظيفة وسيط مبتدىء. ومن هناك، بدأت رحلة رائعة ومثيرة أستمرت في أعطائي الشعور بالرضى على مدى 23 عاماً، بل أنها أعطت لحياتي هدفاً آسمى.',
        'عندما كان عمري 13 عاماً فقط، بدأت بجمع نشرة سوق الأسهم المحلية من الصحيفة اليومية، وكنت أتخيل أنني أقوم بعمليات شراء وبيع الأسهم. بل أنني حتى أخترعت معادلة لأختيار أي أسهم هي التي يُفضل شراؤها، بالإعتماد على أعلى وأدنى سعر في 52 أسبوعاً، وهي أيضاً من المعلومات التي كانت تتوفر في النشرة. لقد كانت معادلة بدائية بكل تأكيد، تتناسب مع مستوى تفكير صبي عمره 13 عاماً. بعد أن كنت أختار الأسهم التي أتمنى شرائها، كنت أعود إلى النشرات التالية، لأرى ما الذي حصل لسعر السهم الذي أخترته.',
        'لقد تم نشر تحليلاتي بـ 15 لغة، ويمكنكم معرفة ما يقوله تحليلي الخاص، عندما أظهر بين الحين والأخر ضيفاً على قناة سي إن بي سي عربية، وتحديداً في فقرة الأسواق العالمية. عملت في وظيفة مستشار مدير الصندوق، لدى صندوق إستثماري لديه مكاتب في لندن وأسطنبول، كان يقوم بتحريك أكثر من 70 مليون دولار بناءاً على تحليلاتي فقط. ربما لا يكون هذا الصندوق الإستثماري عملاقاً، لكنني فخور جداً بهذه الوظيفة، والتي جنيت منها بعض الأموال الجيدة جداً. كما أنني عملت بوظيفة مدير عام لشركة وساطة في البحرين.',
        'عملت في وظائف مع وسطاء من 10 دول،: سويسرا، قبرص، تركيا، كوريا الجنوبية، السعودية، البحرين، مصر، سوريا، العراق وبلدي الحبيب الأردن. أعطيت سمينارات، وويبينارات، ودورات تدريبية في 8 من هذه الدول، لجماهير من الموظفين، والمستثمرين.',
        'أحس بالنعمة لانني قضيت كل مسرتي المهنية تقريباً في العمل في مجال أعشقه. بالنسبة لي، كانت الأسواق المالية هي حالة عشق، ولم أنظر لها يوماً أنها مجرد وظيفة. وحالة العشق هذه ستراها واضحة في دوراتي التدريبية، فالروح الإيجابية التي تبحث عن الفرص ستنتقل إليك، وستقع في حب الأسواق المالية بسبب المواد التدريبية التي نقدمها هنا.',
        'في صيف عام 2002، قمت بإعداد وتقديم أول دورة تدريبية لي، ومنذ ذلك الحين قمت بتدريب الآف من الموظفين والمستثمرين، أما وجهاً لوجه، أو عن طريق الفيديو المباشر.',
        'يسعدني أن أكون قادراً على أن أقدم للمهتمين بالأسواق المالية تعليماً على مستوى، وخدمات مبنية على 1. التعليم العالي (ماجستير علوم مالية + شهادة الـ سي إم تي)، و 2. الخبرة (23 عاماً من الخبرة في الأسواق المالية، منها 21 عاماً كمدرب)، و 3. العشق. هذا الخليط سيعطيك كمتدرب الأرضية الصلبة التي تحتاجها، وتنطلق منها للإبحار مليئاً بالأمل، في عالم التداول والأسواق المالية، المليء بالفرص والمخاطر.',
        'سأعلمك كيف تتعرف على أفضل الفرص، كيف تتعامل مع المخاطر، وما هي الأدوات التي عليك أستخدامها لتصبح متداولاً ناجحاً. وفي ذات الوقت، سأساعدك على تجنب الأخطاء التي يقع فيها المتداولون في العادة، خصوصاً المبتدئين.',
        'أن يصبح المرء متداولاً ناجحاً ليس بالأمر الهين. الكثير من المتداولين لا يمكنهم تحقيق ذلك. لكن أن كنت تؤمن بانه بإمكانك أن تكون واحداً ممن سيحققون النجاح في هذا المجال، وكنت ترغب في الحصول على التعليم الصحيح، وترغب في أن تتعلم كيفية أستخدام أفضل الأدوات في مهمتك، فأنت في المكان الصحيح.',
        'إجعل رحلتك المثيرة في الأسواق المالية تبدأ على الفور، بإختيار أحدى دوراتنا التدريبية اليوم!'
    ];
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
                                            src="/images/global/Instructor.jpg"
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
                                        {data[0]}
                                    </h2>
                                    <h5 className="mb-0" style={{ paddingBottom: 20 }}>
                                        {data[1]}
                                    </h5>
                                    <p className="mb-0" style={{ paddingBottom: 20 }}>
                                        {data[2]}
                                    </p>
                                    <p className="mb-0" style={{ paddingBottom: 20 }}>
                                        {data[3]}
                                    </p>
                                    <p className="mb-0" style={{ paddingBottom: 20, }}>
                                        {data[4]}
                                    </p>

                                    <p className="mb-0" style={{ paddingBottom: 20 }}>
                                        {data[5]}
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <h5 className="mb-0" style={{ paddingBottom: 20, paddingTop: 30 }}>
                        {data[6]}
                    </h5>

                    <p className="mb-0" style={{ paddingBottom: 20 }}>
                        {data[7]}
                    </p>
                    <p className="mb-0" style={{ paddingBottom: 20 }}>
                        {data[8]}
                    </p>
                    <p className="mb-0" style={{ paddingBottom: 20 }}>
                        {data[9]}
                    </p>
                    <p className="mb-0" style={{ paddingBottom: 20 }}>
                        {data[10]}
                    </p>
                    <p className="mb-0" style={{ paddingBottom: 20 }}>
                        {data[11]}
                    </p>
                    <p className="mb-0" style={{ paddingBottom: 20 }}>
                        {data[12]}
                    </p>






                </div>
            </div>
        </section>
    );
}

export default About;
