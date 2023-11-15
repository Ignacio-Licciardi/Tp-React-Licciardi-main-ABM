import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

const Footer = () => {
    return(
    <>

<footer className="footer py-3">
      <div className="container">
        <nav className="row row-cols-1">
          {/* Redes */}
          <ul className="col-4 list-unstyled my-4">
            <li className="justify-content-between">
              {/* Facebook */}
              <span className="d-inline-block" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Facebook" data-bs-trigger="hover focus">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
                    <path d="M25.1852 0.484375C11.2743 0.484375 0 11.7587 0 25.6696C0 39.5805 11.2743 50.8548 25.1852 50.8548C39.0961 50.8548 50.3704 39.5805 50.3704 25.6696C50.3704 11.7587 39.0961 0.484375 25.1852 0.484375ZM30.7437 21.3999L30.4584 25.1678H26.592V38.2523H21.7124V25.1678H19.1053V21.3999H21.7124V18.8715C21.7124 17.7598 21.7419 16.0382 22.5486 14.9659C23.4045 13.8345 24.5752 13.0671 26.592 13.0671C29.8779 13.0671 31.2552 13.5394 31.2552 13.5394L30.6059 17.3958C30.6059 17.3958 29.5237 17.081 28.5104 17.081C27.4971 17.081 26.592 17.445 26.592 18.4583V21.3999H30.7437Z" fill="white"/>
                  </svg>
                </div>
              </span>
              {/* Instagram */}
              <span className="d-inline-block" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Instagram" data-bs-trigger="hover focus">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="52" height="51" viewBox="0 0 52 51" fill="none">
                  <path d="M26.0097 30.0985C28.4495 30.0985 30.4466 28.1112 30.4466 25.6615C30.4466 24.6974 30.1318 23.8022 29.6104 23.0741C28.8037 21.9625 27.4952 21.2246 26.0195 21.2246C24.5438 21.2246 23.2354 21.9526 22.4287 23.0741C21.9073 23.8022 21.5924 24.6974 21.5924 25.6615C21.5826 28.1112 23.5699 30.0985 26.0097 30.0985Z" fill="white"/>
                  <path d="M35.6902 20.2506V16.5319V15.981H35.1393L31.4205 15.9908L31.4402 20.2605L35.6902 20.2506Z" fill="white"/>
                  <path d="M32.8963 25.6714C32.8963 29.4688 29.8072 32.5579 26.0097 32.5579C22.2122 32.5579 19.1231 29.4688 19.1231 25.6714C19.1231 24.7564 19.31 23.8809 19.6347 23.084H15.8766V33.3942C15.8766 34.7223 16.9588 35.8045 18.2869 35.8045H33.7325C35.0606 35.8045 36.1428 34.7223 36.1428 33.3942V23.084H32.3847C32.7192 23.8809 32.8963 24.7564 32.8963 25.6714Z" fill="white"/>
                  <path d="M26.0097 0.486328C12.0988 0.486328 0.824463 11.7606 0.824463 25.6715C0.824463 39.5824 12.0988 50.8567 26.0097 50.8567C39.9206 50.8567 51.1949 39.5824 51.1949 25.6715C51.1949 11.7606 39.9206 0.486328 26.0097 0.486328ZM38.6023 23.0841V33.3943C38.6023 36.0801 36.4182 38.2641 33.7325 38.2641H18.2869C15.6011 38.2641 13.4171 36.0801 13.4171 33.3943V23.0841V17.9389C13.4171 15.2531 15.6011 13.0691 18.2869 13.0691H33.7325C36.4182 13.0691 38.6023 15.2531 38.6023 17.9389V23.0841Z" fill="white"/>
                  </svg>
                </div>
              </span>
              {/* WhatsApp */}
              <span className="d-inline-block" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="WhatsApp" data-bs-trigger="hover focus">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="47" viewBox="0 0 35 35" fill="none" style={{ borderRadius: '100%' }}>
                  <g clip-path="url(#clip0_685_116)">
                    <path d="M17.6626 7.90479C12.2927 7.90479 7.92395 12.2735 7.92395 17.6434C7.92395 19.5145 8.45573 21.3315 9.46167 22.8979L9.70343 23.2744L8.75622 26.6387L12.2369 25.7427L12.5959 25.9619C14.1178 26.891 15.8699 27.3821 17.6626 27.3821C23.0325 27.3821 27.4012 23.0133 27.4012 17.6434C27.4012 12.2735 23.0325 7.90479 17.6626 7.90479ZM23.6344 20.6366L23.5129 21.2041C23.3759 21.8444 22.9956 22.4108 22.4439 22.7637C21.7474 23.2093 20.8445 23.428 19.6969 23.1035C16.1356 22.0965 14.1215 19.7386 13.0408 18.2649C11.9601 16.7912 11.5426 15.3175 11.8127 14.114C11.9939 13.3069 12.5838 12.6876 12.9528 12.3671C13.1335 12.2102 13.368 12.1303 13.6069 12.1433L14.3679 12.1848C14.5178 12.193 14.65 12.2855 14.709 12.4236L15.8176 15.0173C15.8769 15.1559 15.8519 15.3161 15.7534 15.4301L14.7884 16.5464C14.7101 16.6369 14.6965 16.7659 14.7516 16.872C16.0225 19.3201 18.3387 20.2902 19.0302 20.5332C19.148 20.5746 19.2786 20.5355 19.3549 20.4365L20.3646 19.1276C20.4769 18.982 20.6749 18.9334 20.8419 19.0104L23.4138 20.1959C23.5814 20.2732 23.673 20.4562 23.6344 20.6366Z" fill="white"/>
                    <path d="M0.8573 0.881348V34.4616H34.4376V0.881348H0.8573ZM17.6626 29.3718C15.6475 29.3718 13.6744 28.856 11.9289 27.8766L5.90424 29.4274L7.5491 23.5854C6.49136 21.7885 5.93445 19.744 5.93445 17.6437C5.93445 11.1768 11.1957 5.91554 17.6626 5.91554C24.1295 5.91554 29.3906 11.1768 29.3906 17.6437C29.3906 24.1106 24.1295 29.3718 17.6626 29.3718Z" fill="white"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_685_116">
                      <rect width="33.5803" height="33.5803" fill="white" transform="translate(0.8573 0.881348)"/>
                    </clipPath>
                  </defs>
                </svg>
                </div>
              </span>
              {/* Email */}
              <span className="d-inline-block" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Email" data-bs-trigger="hover focus">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="47" viewBox="0 0 48 47" fill="none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="47" viewBox="0 0 48 47" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M47.1125 23.6702C47.1125 36.5492 36.6718 46.9899 23.7929 46.9899C10.9138 46.9899 0.473267 36.5492 0.473267 23.6702C0.473267 10.7911 10.9138 0.350586 23.7929 0.350586C36.6718 0.350586 47.1125 10.7911 47.1125 23.6702ZM34.4558 17.5722C35.0539 17.9394 35.4422 18.6005 35.4422 19.3561L35.4527 29.8499C35.4527 31.0043 34.5082 31.9487 33.3539 31.9487H16.5638C15.4095 31.9487 14.465 31.0043 14.465 29.8499V19.3561C14.465 18.6005 14.8638 17.9394 15.4619 17.5722L24.9589 12.0104L34.4558 17.5722ZM33.3434 19.3666V19.3561L24.9589 14.445L16.5638 19.3561L24.9589 24.603L33.3434 19.3666ZM16.5638 29.8499V21.8117L24.9589 27.0796L33.3434 21.8431L33.3539 29.8499H16.5638Z" fill="white"/>
                </svg>
                  </svg>
                </div>
              </span>
              {/* Ubicación */}
              <span className="d-inline-block" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Ubicación" data-bs-trigger="hover focus">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
                  <ellipse cx="25.1852" cy="25.6686" rx="25.1852" ry="25.1852" fill="white"/>
                <path d="M22.2882 37.0807C20.9618 35.7093 19.0743 33.5218 17.5716 30.8629L16.701 31.3549L17.5716 30.8628C15.8476 27.8122 15 24.8272 15 21.9834C15 16.7459 19.2626 12.4834 24.5001 12.4834C29.7375 12.4834 34 16.7459 34 21.9833C34 24.8272 33.1524 27.8122 31.4284 30.8628C29.9257 33.5217 28.0381 35.7093 26.7118 37.0807L26.7118 37.0807C26.1256 37.6868 25.3443 38.018 24.5 38.018C23.6557 38.018 22.8744 37.6868 22.2882 37.0807ZM22.2882 37.0807L21.5694 37.7759L22.2882 37.0807ZM19.4593 21.9834C19.4593 24.7637 21.7197 27.0241 24.5001 27.0241C27.2804 27.0241 29.5408 24.7637 29.5408 21.9834C29.5408 19.2031 27.2804 16.9427 24.5001 16.9427C21.7197 16.9427 19.4593 19.2031 19.4593 21.9834Z" stroke="#CF5C36" stroke-width="2"/>
                  </svg>
                </div>
              </span>
            </li>
          </ul>
          {/* Logo */}
          <div className="col-4 d-flex justify-content-center">
            <img src="images/logoFooter.svg" alt="" />
          </div>
          {/* Métodos de pago */}
          <ul className="col-4 list-unstyled d-flex align-items-center flex-column g-3">
            <li className="text-white"> Métodos de pago</li>
            <li className="py-2">
              <img src="images/MetodoPago1.svg" alt="Tarjeta Mastercad" />
              <img src="images/metodoPago2.svg" alt="paypal" />
              <img src="images/MetodoPago3.svg" alt="mercadoPago" />
            </li>
            <li>
              <img src="images/copyright.png" alt="" />
            </li>
          </ul>
        </nav>
      </div>
    </footer>
 </>
    )
}

export default Footer;