/* eslint-disable react/no-unescaped-entities */
// hajeer About content
// cashback content PAGE 
import Link from "next/link";
import CountUp from "react-countup";
import translations from '@/translations';
import { useRtl } from '@/context/RtlContext';

function About() {
    const { language } = useRtl();
    const t = translations[language] || translations['en'];

    const dataEn = [
        'According to Oxford dictionary, a cashback is “a form of incentive offered to buyers of certain products whereby they receive a cash refund after making their purchase”.',
        'In online trading, cashback is paid to the clients for the trades they close. Usually, the cashback is paid for every trade the client closes under certain terms & conditions, but that does not have to be the case. For example, a broker could announce a temporary cashback promotion that starts on a certain date, and end on another, for example: get $2 for every lot you close in December. Or even, a temporary cash promotion that pays cashback for a certain or some instruments, but not all, for example: get $2 for every gold lot you close in December.',
        'Here at Paid4X.com, and unless stated otherwise, you will be paid for every trade you close, every day, month & year, and for all instruments, given that you do not violate the terms & conditions of the broker you pick.',
        'The cashback is usually a small amount of dollars per standard lot, but this small amount accumulates and its total increases with every trade the client closes, until it reaches a satisfactory amount.',
        'Depending on the size of your trades & account activity level, accumulating $100 in cashback may takes 2-3 months, 2-3 weeks, 2-3 days, 2-3 hours, or even 2-3 minutes!',
        'What is a cashback introducing broker?',
        'An introducing broker (IB) is an individual or a company that works as a promoter for brokerage companies, and introduces prospects & potential clients to these brokerage companies. Once a prospect opens a real account, deposits & starts trading, the agent is entitled to receive commissions for the business they generated.',
        'A classic IB would keep all of these commissions, and would probably offer the clients free services such as training, trading signals, market updates, and so on.',
        'A Cashback Introducing Broker (CIB) on the other hand, shares these commissions with their clients, and may or may not offer other services. Paid4X.com is a CIB, and we give the majority of our net commissions away to you our clients, because we believe that you are the real reason for our success, and you deserve a good portion of the revenue that this business generates.',
        'We are also 100% transparent, and we let our clients know exactly how much we are getting from each trade. We have a lot of expenses to cover, from webhosting, to security, advertisement, social media management, video production, transfer costs, service contracts & salaries. And in spite of all of these heavy expenses, we decided to pay out 50% of all of our revenue to our valued clients who did put their faith in us, and keep 50% as a revenue for our business, knowing that a large portion of it will go to cover expenses, leaving us with well less than 50% in net profit.',
        'Our estimation is that at least 30% of the revenue goes to covering expenses, and with the 50% we pay to our dear clients in mind, that means the net revenue of Paid4X is only 20% of the original commissions.',
        'So, we get 20%, while we give you 50%. We are extremely happy that we pay you more than double what we make!',
        'When are we unable to pay cashback?',
        'Some brokers may set limits, or specific terms & conditions on which trades they will pay commissions for. These terms & conditions are not determined or controlled by Paid4X, but by the brokers themselves. Each broker has their own terms & conditions, which may differ from other brokers. For example, if you open & close your trade in a few seconds, some brokers will pay commissions for that trade, while others will not.',
        'Please make sure to visit the brokers’ pages on Paid4X.com in order to familiarize yourself with the cases in which this may happen. You can find the cases specified by the broker clearly stated on every broker’s page.',
        'Nevertheless, this is extremely rare and is not supposed to happen in the first place if the client abides by the terms & conditions of the broker they have chosen, or, pick a broker that suits their trading style.',
        'Paid4X pledges to pay cashback in all & every case when it is paid these commissions, but cannot & will not pay in cases where the broker, for any reason they may deem appropriate, does not pay us.',
        'So, in short, the only case when we will not pay cashback on trades is if the broker does not pay us. Aside from that, Paid4X will pay cashback for each & every trade that our clients close, for the lifetime of this brand, and for as long as we are conducting business.',
        'The amount of cashback could change, in case the brokerage decided to change our commissions. If we are paid less, for any reason, we will have to cut the cashback amount. If we are paid more, rest assured that we will pay you more. These changes are also beyond the control of Paid4X, and may depend on the trading volumes, or other factors.',
        'Furthermore, we may or may not be able to announce these changes in advance, because that depends on the brokers themselves. We may be informed of changes without prior notice, which means that we will also inform our clients about these changes, without prior notice.',
        'Click here to view our Cashback FAQs',
        'Cashback'
    ];

    const dataAr = [
        'وفقاً لقاموس أوكسفورد فإن الكاشباك هو "نوع من أنواع الحافز يتم تقديمها للمشترين لأنواع معينة من المنتجات، يحصلون من خلاله على إسترجاع نقدي بعد القيام بعملية الشراء".',
        'في التداول عبر الأنترنت، يتم دفع الكاشباك للعملاء على مراكز التداول التي يقومون بإغلاقها. في العادة، يتم دفع الكاشباك لكل عملية يتم أغلاقها وفقاً لشروط وأحكام العرض، لكن هذا ليس هو الحال دائماً. فعلى سبيل المثال، يمكن أن تقوم أحدى شركات الوساطة بالأعلان عن عرض مؤقت لدفع الكاشباك، يبدأ في تاريخ معين وينتهي في أخر. مثلاً: أحصل على 2 دولار عن كل عقد تتداوله في ديسمبر. أو حتى من الممكن أن يكون هذا العرض المؤقت محصوراً بأدوات تداول محددة، دون غيرها. على سبيل المثال: أحصل على 2 دولار لكل عقد ذهب تتداوله في ديسمبر.',
        'هنا في بيدفوركس، وإلا إذا تم ذكر غير ذلك، سندفع لك عن كل عملية يتم أغلاقها، كل يوم، وكل شهر، وكل سنة، لكل أدوات التداول، ما دمت لم تقم بإنتهاك شروط واحكام الوسيط الذي قمت بفتح حسابك لديه.',
        'في العادة، يكون الكاشباك مبلغ قليل من الدولارات لكل عقد قياسي (لوت)، ولكن هذه المبالغ البسيطة تتراكم، ويزيد مجموعها مع كل عملية يتم أغلاقها، حتى يصل إلى مستويات تلقى الأستحسان.',
        'بناءاً على حجم عملياتك ونشاط حسابك، فإن تجميع مبلغ 100 دولار من الكاشباك يمكن أن يستغرق شهرين إلى ثلاثة، أو أسبوعين إلى ثلاثة، أو يومين إلى ثلاثة، أو ساعتين إلى ثلاثة، أو ربما حتى دقيقتين إلى ثلاثة!',
        'ما هو وسيط الكاشباك؟',
        'الوسيط المعرف (الـ آي بي) هو شخص أو شركة تعمل في مجال الترويج لشركات الوساطة، ويقوم بتعريف العملاء المحتملين، والأشخاص الباحثين عن هذا النوع من الخدمات بالشركات التي تقدم هذه الخدمات. وإذا ما أختار الفرد الباحث عن هذه الخدمة شركة وساطة قام الوسيط المعرف بتقديم معلومات له عنها، وقام بفتح حساب لديها وبدأ بالتداول، يصبح مستحقاً لعمولات تسويقية بدل ذلك.',
        'الوسيط المعرف الكلاسيكي يقوم بالأحتفاظ بكامل هذه العمولات، وربما يقدم للعملاء خدمات مجانية بدل إختيارهم فتح الحساب عن طريقه، مثل تدريب مجاني، أو توصيات، أو تقارير أسواق مالية، أو غير ذلك.',
        'أما وسيط الكاشباك، فهو يقوم بمشاركة هذه العمولات مع العملاء الذين قاموا بفتح حساباتهم عن طريقه، وقد يضيف فوق ذلك خدمات أخرى وقد لا يضيف. في بيدفوركس، نحن وسيط كاشباك، نقوم بمنح أغلبية العمولات الصافية إلى العملاء الذين شرفونا بفتح حساباتهم عن طريق موقعنا، لأننا نؤمن حقاً أنكم أنتم سبب نجاحنا، وأنكم تستحقون جزءاً كبيراً من الأيرادات التي تنتج عن أعمالنا.',
        'درجة الشفافية هنا هي 100%، فنحن نقوم بإعلام عملائنا ما هي عمولاتنا التسويقية بالضبط. لدينا الكثير من النفقات التي علينا تغطيتها، من إستضافة الموقع، إلى برمجيات الأمان، إلى الحملات الإعلانية، إلى إدارة حساباتنا على السوشال ميديا، إلى مصاريف إنتاج الفيديو، إلى رسوم تحويل الأموال، إلى عقود الصيانة، وأخيرا الرواتب. ورغم كل هذه التكاليف فأننا أخترنا أن ندفع لعملائنا الأعزاء الذين وضعوا ثقتهم فينا 50% من إيرادتنا، ونحتفظ بالـ 50% الأخرى،ونحن نعلم أن جزءاً كبيراً منها سيذهب لتغطية المصاريف الكثيرة لمشروعنا، مما يترك صافي الإيردات لهذا المشروع عند مستوى أقل بكثير من 50%.',
        'وفقاً لتقديراتنا، فإن مجموع النفقات سيحتاج إلى ما لا يقل عن 30% من الإيرادات، وعندما نخصم أيضاً ألـ 50% ألتي نقوم بدفعها على هيئة كاشباك لعملائنا الأعزاء، فإن تقديراتنا هي أن صافي إيرادات مشروع بيدفوركس تقف عند 20% فقط من أجمالي الإيرادات وعمولات التسويق التي نتلقاها.',
        'أي أننا نحقق 20% بينما تحققون 50%. ويسعدنا جداً أن ندفع لعملائنا الذين نعتز بهم أكثر من ضعف ما نحقق لأنفسنا.',
        'متى لا يمكننا دفع الكاشباك؟',
        'بعض شركات الوساطة تضع شروطاً محددة للعمليات التي تقوم بدفع عمولة تسويقية مقابلها. هذه الشروط والأحكام لا تحددها بيدفوركس، بل الوسطاء أنفسهم. ولكل شركة وساطة شروطها وأحكامها الخاصة، والتي قد تختلف عن شروط وأحكام الشركات الأخرى. على سبيل المثال، إذا قمت بفتح وإغلاق عملية خلال ثوان معدودة، فإن بعض الوسطاء سيقومون بدفع عمولة مقابل هذه العملية، بينما يرفض الأخرون ذلك.',
        'لذلك، نرجو منكم أن تزوروا صفحات الوسطاء على موقعنا، حتى تتعرفوا بشكل كاف على الحالات التي يمكن أن لا يتم دفع الكاشباك فيها. يمكنكم أن تجدوا هذه الحالات محددة بكل وضوح على صفحة كل وسيط.',
        'ولكن هذا الأمر هو نادر الحدوث، ولا يتوقع أن يحدث أصلاً مع المتداول الذي يلتزم بشروط وأحكام الوسيط الذي إختاره، أو، إذا قام المتداول بأختيار وسيط يتناسب مع أسلوب تداوله.',
        'تتعهد بيدفوركس بدفع الكشاباك عن كل عملية يتم دفع عمولة تسويقية لنا مقابلها، بدون أي أستثناء، ولكن لا يمكننا ولن نقوم بدفع الكاشباك عن العمليات التي لا نحصل على عمولة مقابلها، لأي سبب يحدده الوسيط.',
        'أي بإختصار، الحالة الوحيدة التي لن ندفع بها الكاشباك هي أن لا يتم دفع العمولة لنا. أما غير ذلك، فيسرنا أن نقوم بدفع الكاشباك لكم عن كل عملية تقومون بإغلاقها، طوال عمر هذه العلامة التجارية، وطالما بقينا نقوم بوظيفتنا كوسيط معرف.',
        'يمكن لمبلغ الكاشباك أن يتغير، في حال قررت إحدى شركات الوساطة أن تقوم بتغيير عمولاتنا. فإذا قامت شركة ما بدفع عمولة أقل، لاي سبب كان، سوف نضطر لتقليل مبلغ الكاشباك المدفوع لحسابات هذه الشركة. وإذا قررت أحدى شركات الوساطة أن تقوم بدفع عمولة أكثر لنا، تأكدوا أننا سنقوم برفع مبلغ الكاشباك الذي ستحصلون عليه وفقاً لذلك. إن مثل هذه التغييرات لا تقع تحت نطاق سيطرة بيدفوركس، وقد تعتمد على عوامل متعددة أبرزها أحجام التداول، أو عوامل أخرى.',
        'بالإضافة إلى ذلك، قد نتمكن من إعلان هذه التغيرات قبل وقت كاف أو قد لا نتمكن من ذلك، لان هذا بدوره يعتمد على توقيت إعلامنا بها. فإذا قام أحد الوسطاء بإعلامنا عن التغييرات قبل موعد تنفيذها بوقت كاف، فإننا سنقوم بالمثل، أما إذا تم إعلامنا عن التغييرات بأثر فوري، فليس بوسعنا سوى أن نعلن عنها لكم بأثر فوري.',
        'أضغط هنا لقراءة الأسئلة الشائعة عن الكاشباك.',
        'كاشباك'
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
                                    {language === 'ar'?
                                    <h2>{data[21]}</h2>
                                    : <h2>
                                        Cash<span>back</span>
                                    </h2>}
                                    <p className="mb-0" style={{ paddingBottom: 20 }}>
                                        {data[0]}
                                    </p>
                                    <p className="mb-0" style={{ paddingBottom: 20 }}>
                                        {data[1]}
                                    </p>

                                    <p className="mb-0" style={{ paddingBottom: 20, paddingTop: 30 }}>
                                        {data[2]}
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>


                    <p className="mb-0" style={{ paddingBottom: 20, }}>
                        {data[3]}
                    </p>

                    <p className="mb-0" style={{ paddingBottom: 20 }}>
                        {data[4]}
                    </p>

                    {/* <h5 className="mb-0" style={{ paddingBottom: 20 }}>
                        What is a cashback introducing broker?
                    </h5> */}

                    <h5 className="mb-0" style={{ paddingBottom: 20 }}>
                        {data[5]}
                        </h5>
                        <p className="mb-0" style={{ paddingBottom: 20 }}>

                        {data[6]}
                    </p>
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
                    <p className="mb-0" style={{ paddingBottom: 20 }}>
                        {data[13]}
                    </p>
                    <p className="mb-0" style={{ paddingBottom: 20 }}>
                        {data[14]}
                    </p>
                    <p className="mb-0" style={{ paddingBottom: 20 }}>
                        {data[15]}
                    </p>
                    <p className="mb-0" style={{ paddingBottom: 20 }}>
                        {data[16]}
                    </p>
                    <p className="mb-0" style={{ paddingBottom: 20 }}>
                        {data[17]}
                    </p>
                    <p className="mb-0" style={{ paddingBottom: 20 }}>
                        {data[18]}
                    </p>
                    <p className="mb-0" style={{ paddingBottom: 20 }}>
                        {data[19]}
                    </p>
                    <p className="mb-0" style={{ paddingBottom: 20 }}>
                        {data[20]}
                    </p>






                </div>
            </div>
        </section>
    );
}

export default About;
