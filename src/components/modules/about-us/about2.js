/* eslint-disable react/no-unescaped-entities */
// hajeer About content
// cashback content PAGE 
import Link from "next/link";
import CountUp from "react-countup";

function About() {
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
                                        Cash<span>back</span>
                                    </h2>

                                    <p className="mb-0" style={{ paddingBottom: 20 }}>
                                        {' According to Oxford dictionary, a cashback is “a form of incentive offered to buyers of certain products whereby they receive a cash refund after making their purchase”'}
                                    </p>

                                    <p className="mb-0" style={{ paddingBottom: 20 }}>
                                        {'In online trading, cashback is paid to the clients for the trades they close. Usually, the cashback is paid for every trade the client closes under certain terms & conditions, but that does not have to be the case. For example, a broker could announce a temporary cashback promotion that starts on a certain date, and end on another, for example: get $2 for every lot you close in December. Or even, a temporary cash promotion that pays cashback for a certain or some instruments, but not all, for example: get $2 for every gold lot you close in December.'}
                                    </p>

                                    <p className="mb-0" style={{ paddingBottom: 20, paddingTop: 30 }}>
                                        {'Here at Paid4X.com, and unless stated otherwise, you will be paid for every trade you close, every day, month & year, and for all instruments, given that you do not violate the terms & conditions of the broker you pick. '}
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>


                    <p className="mb-0" style={{ paddingBottom: 20, }}>
                        {'The cashback is usually a small amount of dollars per standard lot, but this small amount accumulates and its total increases with every trade the client closes, until it reaches a satisfactory amount. '}
                    </p>

                    <p className="mb-0" style={{ paddingBottom: 20 }}>
                        {'Depending on the size of your trades & account activity level, accumulating $100 in cashback may takes 2-3 months, 2-3 weeks, 2-3 days, 2-3 hours, or even 2-3 minutes! '}
                    </p>

                    <h5 className="mb-0" style={{ paddingBottom: 20 }}>
                        What is a cashback introducing broker?                    </h5>

                    <p className="mb-0" style={{ paddingBottom: 20 }}>
                        {'An introducing broker (IB) is an individual or a company that works as a promoter for brokerage companies, and introduces prospects & potential clients to these brokerage companies. Once a prospect opens a real account, deposits & starts trading, the agent is entitled to receive commissions for the business they generated. '}
                    </p>
                    <p className="mb-0" style={{ paddingBottom: 20 }}>

                        {'A classic IB would keep all of these commissions, and would probably offer the clients free services such as training, trading signals, market updates, and so on.'}
                    </p>
                    <p className="mb-0" style={{ paddingBottom: 20 }}>
                        {'A Cashback Introducing Broker (CIB) on the other hand, shares these commissions with their clients, and may or may not offer other services. Paid4X.com is a CIB, and we give the majority of our net commissions away to you our clients, because we believe that you are the real reason for our success, and you deserve a good portion of the revenue that this business generates.'}
                    </p>
                    <p className="mb-0" style={{ paddingBottom: 20 }}>
                        {'We are also 100% transparent, and we let our clients know exactly how much we are getting from each trade. We have a lot of expenses to cover, from webhosting, to security, advertisement, social media management, video production, transfer costs, service contracts & salaries. And in spite of all of these heavy expenses, we decided to pay out 50% of all of our revenue to our valued clients who did put their faith in us, and keep 50% as a revenue for our business, knowing that a large portion of it will go to cover expenses, leaving us with well less than 50% in net profit. '}
                    </p>
                    <p className="mb-0" style={{ paddingBottom: 20 }}>
                        {'Our estimation is that at least 30% of the revenue goes to covering expenses, and with the 50% we pay to our dear clients in mind, that means the net revenue of Paid4X is only 20% of the original commissions.'}
                    </p>
                    <p className="mb-0" style={{ paddingBottom: 20 }}>
                        {'So, we get 20%, while we give you 50%. We are extremely happy that we pay you more than double what we make!'}
                    </p>






                </div>
            </div>
        </section>
    );
}

export default About;
