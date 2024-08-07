import Link from "next/link";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
const PageHeader = ({ title, text, pageCode }) => {
  return (
    <>
      <section className=" bg--cover" style={{ backgroundImage: `url(/images/header/1.png)` }}>
        <div className="container">
          <div className="page-header__content" data-aos="fade-right" data-aos-duration="1000">
            <h2>{title}</h2>
            <nav style={{
              '--bs-breadcrumb-divider': "'/'",
            }} aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item "><Link href="/">Homess</Link></li>
                <li className="breadcrumb-item active" aria-current="page">{text}</li>
              </ol>
            </nav>
            {1 == 1 && <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ul className="social">
                <li className="social__item">
                  <Link scroll={false} href="" className="social__link social__link--style22"><i className="fab fa-facebook-f"></i></Link>
                </li>
                <li className="social__item">
                  <Link scroll={false} href="" className="social__link social__link--style22 "><i className="fab fa-instagram"></i></Link>
                </li>
                <li className="social__item">
                  <Link scroll={false} href="" className="social__link social__link--style22"><i className="fa-brands fa-linkedin-in"></i></Link>
                </li>
                <li className="social__item">
                  <Link scroll={false} href="" className="social__link social__link--style22"><i className="fab fa-youtube"></i></Link>
                </li>
                <li className="social__item">
                  <Link scroll={false} href="" className="social__link social__link--style22 "><i className="fab fa-x"></i></Link>
                </li>
                <li className="social__item">
                  <Link scroll={false} href="" className="social__link social__link--style22 "><i className="fab fa-u"></i></Link>
                </li>
              </ul>
            </div>}


            {/* {1 == 1 && <div style={{ display: 'flex', justifyContent: 'center' }}>


              <Row>
                <Col>
                  <Row>
                    <Col style={{  textAlign: 'center' }}>
                      <div style={{  backgroundColor: 'rgb(224, 250, 242, 0.4)', borderRadius: 9, minHeight: 140 }} className="card__footer">
                        <div style={{}} className="card__Footer__first">
                          <div>
                            <p style={{opacity: 0.9, color: '#ffffff' }}>{'40 $'}</p>
                          </div>
                          <label style={{ fontFamily: 'monospace', color: '#ffffff' }}>My credit</label>
                        </div>
                      </div>
                    </Col>
                    <Col style={{ textAlign: 'center' }}>
                      <div style={{ backgroundColor: 'rgb(224, 250, 242, 0.4', borderRadius: 9, minHeight: 140 }} className="card__footer">
                        <div className="card__Footer__first">
                          <div>
                            <p style={{ color: '#ffffff' }}>{'77'}</p>
                          </div>
                          <label style={{ fontFamily: 'monospace', color: '#ffffff' }}>total cashback</label>
                        </div>
                      </div>
                    </Col>
                    <Col style={{ textAlign: 'center' }}>
                      <div style={{ backgroundColor: 'rgb(224, 250, 242, 0.4', borderRadius: 9, minHeight: 140 }} className="card__footer">
                        <div className="card__Footer__first">
                          <div>
                            <p style={{ color: '#ffffff' }}>{'55'}</p>
                          </div>
                          <label style={{ fontFamily: 'monospace', color: '#ffffff' }}>Total Payment</label>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>



            </div>} */}


          </div>
        </div>
      </section>
    </>
  );
};

export default PageHeader;
