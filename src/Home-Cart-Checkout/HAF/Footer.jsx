import React, { useState } from "react";
import "../css/Footer.css";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebook,
  FaYoutube,
  FaTiktok,
  FaComments,
  FaStore,
  FaTruck,
  FaShieldAlt,
  FaCreditCard,
  FaStar,
  FaArrowRight,
  FaPaperPlane,
  FaCheckCircle,
  FaHeadset,
  FaShoppingCart,
  FaTag,
  FaPercent,
  FaGift,
  FaBoxOpen,
  FaWrench,
  FaTv,
  FaSnowflake,
  FaBlender,
  FaFan,
  FaMobileAlt,
  FaLaptop,
  FaTabletAlt,
  FaCamera,
  FaGamepad,
  FaHome,
  FaCogs,
  FaUserCheck,
  FaShippingFast,
  FaExchangeAlt,
  FaBan,
  FaLock,
  FaFileContract,
  FaQuestionCircle,
  FaRegNewspaper,
  FaRegEnvelope,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Cảm ơn bạn đã đăng ký nhận tin với email: ${email}`);
      setEmail("");
    }
  };

  return (
    <footer className="electronic-footer">
      {/* TOP PROMOTION BANNER */}
      <div className="footer-top">
        <div className="container">
          <div className="promotion-banner">
            <div className="promotion-content">
              <div className="promotion-icon">
                <FaTag size={32} />
              </div>
              <div className="promotion-text">
                <h3 className="promotion-title">SIÊU SALE CUỐI NĂM</h3>
                <p className="promotion-description">
                  Giảm đến <span className="highlight">50%</span> + Quà tặng hấp
                  dẫn + Trả góp 0%
                </p>
              </div>
            </div>

            <div className="promotion-actions">
              <button className="btn-hotline">
                <FaPhone size={20} />
                <span>GỌI NGAY: 1800 1061</span>
              </button>
              <button className="btn-promotion">
                <FaGift size={20} />
                <span>XEM KHUYẾN MÃI</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER CONTENT */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* COLUMN 1: COMPANY INFO */}
            <div className="footer-column">
              <div className="company-logo">
                <div className="logo-icon">
                  <FaStore size={32} />
                </div>
                <div className="logo-text">
                  <h3 className="company-name">ĐIỆN MÁY CHỢ LỚN</h3>
                  <p className="company-slogan">
                    Uy tín - Chất lượng - Giá tốt nhất
                  </p>
                </div>
              </div>

              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaMapMarkerAlt size={22} />
                  </div>
                  <div className="contact-details">
                    <h4>HỆ THỐNG 35 CỬA HÀNG</h4>
                    <p>Trụ sở: 123 Nguyễn Văn Linh</p>
                    <p>Quận 1, TP. Hồ Chí Minh</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <FaPhone size={22} />
                  </div>
                  <div className="contact-details">
                    <h4>TỔNG ĐÀI MIỄN PHÍ</h4>
                    <p className="hotline">1800 1061</p>
                    <p>Hotline: 0912 345 678</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <FaEnvelope size={22} />
                  </div>
                  <div className="contact-details">
                    <h4>EMAIL HỖ TRỢ</h4>
                    <p>cskh@dienmaycholon.vn</p>
                    <p>sales@dienmaycholon.vn</p>
                  </div>
                </div>
              </div>
            </div>

            {/* COLUMN 2: PRODUCT CATEGORIES */}
            <div className="footer-column">
              <h3 className="column-title">DANH MỤC SẢN PHẨM</h3>
              <div className="product-categories">
                <div className="category-group">
                  <h4>ĐIỆN LẠNH</h4>
                  <ul className="category-links">
                    <li>
                      <FaSnowflake className="category-icon" />
                      <a href="/category/tu-lanh">Tủ lạnh</a>
                    </li>
                    <li>
                      <FaSnowflake className="category-icon" />
                      <a href="/category/may-lanh">Máy lạnh</a>
                    </li>
                    <li>
                      <FaFan className="category-icon" />
                      <a href="/category/may-giat">Máy giặt</a>
                    </li>
                    <li>
                      <FaTv className="category-icon" />
                      <a href="/category/tivi">Tivi</a>
                    </li>
                  </ul>
                </div>

                <div className="category-group">
                  <h4>GIA DỤNG</h4>
                  <ul className="category-links">
                    <li>
                      <FaBlender className="category-icon" />
                      <a href="/category/may-xay-sinh-to">Máy xay sinh tố</a>
                    </li>
                    <li>
                      <FaHome className="category-icon" />
                      <a href="/category/noi-com-dien">Nồi cơm điện</a>
                    </li>
                    <li>
                      <FaCogs className="category-icon" />
                      <a href="/category/may-hut-bui">Máy hút bụi</a>
                    </li>
                    <li>
                      <FaBoxOpen className="category-icon" />
                      <a href="/category/thiet-bi-nha-bep">Thiết bị nhà bếp</a>
                    </li>
                  </ul>
                </div>

                <div className="category-group">
                  <h4>ĐIỆN TỬ</h4>
                  <ul className="category-links">
                    <li>
                      <FaMobileAlt className="category-icon" />
                      <a href="/category/dien-thoai">Điện thoại</a>
                    </li>
                    <li>
                      <FaLaptop className="category-icon" />
                      <a href="/category/laptop">Laptop</a>
                    </li>
                    <li>
                      <FaTabletAlt className="category-icon" />
                      <a href="/category/tablet">Tablet</a>
                    </li>
                    <li>
                      <FaCamera className="category-icon" />
                      <a href="/category/may-anh">Máy ảnh</a>
                    </li>
                  </ul>
                </div>

                <div className="category-group">
                  <h4>KHÁC</h4>
                  <ul className="category-links">
                    <li>
                      <FaGamepad className="category-icon" />
                      <a href="/category/do-choi-cong-nghe">
                        Đồ chơi công nghệ
                      </a>
                    </li>
                    <li>
                      <FaTv className="category-icon" />
                      <a href="/category/phu-kien">Phụ kiện</a>
                    </li>
                    <li>
                      <FaWrench className="category-icon" />
                      <a href="/category/sua-chua">Sửa chữa</a>
                    </li>
                    <li>
                      <FaGift className="category-icon" />
                      <a href="/category/qua-tang">Quà tặng</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* COLUMN 3: POLICIES & SUPPORT */}
            <div className="footer-column">
              <h3 className="column-title">CHÍNH SÁCH</h3>
              <div className="policy-links">
                <ul>
                  <li>
                    <FaShippingFast className="policy-icon" />
                    <a href="/chinh-sach-giao-hang">Giao hàng toàn quốc</a>
                  </li>
                  <li>
                    <FaExchangeAlt className="policy-icon" />
                    <a href="/doi-tra">Đổi trả 30 ngày</a>
                  </li>
                  <li>
                    <FaPercent className="policy-icon" />
                    <a href="/tra-gop">Trả góp 0%</a>
                  </li>
                  <li>
                    <FaShieldAlt className="policy-icon" />
                    <a href="/bao-hanh">Bảo hành chính hãng</a>
                  </li>
                </ul>
              </div>

              <h3 className="column-title mt-6">HỖ TRỢ KHÁCH HÀNG</h3>
              <div className="support-links">
                <ul>
                  <li>
                    <FaHeadset className="policy-icon" />
                    <a href="/ho-tro">Hướng dẫn mua hàng</a>
                  </li>
                  <li>
                    <FaQuestionCircle className="policy-icon" />
                    <a href="/faq">Câu hỏi thường gặp</a>
                  </li>
                  <li>
                    <FaFileContract className="policy-icon" />
                    <a href="/dieu-khoan">Điều khoản sử dụng</a>
                  </li>
                  <li>
                    <FaLock className="policy-icon" />
                    <a href="/bao-mat">Chính sách bảo mật</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* COLUMN 4: NEWSLETTER & SOCIAL */}
            <div className="footer-column">
              <div className="newsletter-section">
                <h3 className="column-title">NHẬN KHUYẾN MÃI</h3>
                <p className="newsletter-desc">
                  Đăng ký nhận thông tin khuyến mãi và ưu đãi đặc biệt từ Điện
                  Máy Chợ Lớn
                </p>
                <form
                  onSubmit={handleNewsletterSubmit}
                  className="newsletter-form"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Nhập email của bạn"
                    className="newsletter-input"
                    required
                  />
                  <button type="submit" className="newsletter-btn">
                    <FaPaperPlane size={18} />
                    <span>ĐĂNG KÝ</span>
                  </button>
                </form>
                <p className="newsletter-note">
                  <FaCheckCircle />
                  <span>Cam kết không spam email</span>
                </p>
              </div>

              <div className="social-section">
                <h4 className="social-title">
                  <FaComments />
                  <span>KẾT NỐI VỚI CHÚNG TÔI</span>
                </h4>
                <div className="social-links">
                  <a
                    href="#"
                    className="social-link facebook"
                    aria-label="Facebook"
                  >
                    <FaFacebook size={24} />
                  </a>
                  <a
                    href="#"
                    className="social-link youtube"
                    aria-label="YouTube"
                  >
                    <FaYoutube size={24} />
                  </a>
                  <a href="#" className="social-link zalo" aria-label="Zalo">
                    <FaComments size={24} />
                  </a>
                  <a
                    href="#"
                    className="social-link tiktok"
                    aria-label="TikTok"
                  >
                    <FaTiktok size={24} />
                  </a>
                </div>

                <div className="payment-methods">
                  <h4 className="payment-title">CHẤP NHẬN THANH TOÁN</h4>
                  <div className="payment-icons">
                    <div className="payment-icon">
                      <FaCreditCard />
                    </div>
                    <div className="payment-icon">
                      <FaCreditCard />
                    </div>
                    <div className="payment-icon">
                      <FaCreditCard />
                    </div>
                    <div className="payment-icon">
                      <FaCreditCard />
                    </div>
                    <div className="payment-icon">
                      <FaCreditCard />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MAP SECTION */}
      <div className="footer-map">
        <div className="container">
          <div className="map-header">
            <h3 className="map-title">
              <FaMapMarkerAlt />
              <span>HỆ THỐNG CỬA HÀNG</span>
            </h3>
            <button className="map-direction">
              <FaArrowRight />
              <span>XEM TẤT CẢ ĐỊA CHỈ</span>
            </button>
          </div>
          <div className="map-container">
            <div className="map-wrapper">
              <iframe
                title="Địa chỉ Điện Máy Chợ Lớn"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.317428512478!2d106.66435897590576!3d10.786826658722044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ed2392c44df%3A0xba2c7e8baf9c1c3e!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDaMOtIE1pbmg!5e0!3m2!1svi!2s!4v1765540655461!5m2!1svi!2s"
                width="100%"
                height="350"
                style={{ border: 0, borderRadius: "12px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              <div className="map-info">
                <div className="info-card">
                  <div className="info-icon">
                    <FaStore size={24} />
                  </div>
                  <div className="info-content">
                    <h4>35 CỬA HÀNG</h4>
                    <p>Trải dài khắp TP.HCM và các tỉnh</p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon">
                    <FaTruck size={24} />
                  </div>
                  <div className="info-content">
                    <h4>GIAO HÀNG NHANH</h4>
                    <p>Miễn phí trong nội thành TP.HCM</p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon">
                    <FaClock size={24} />
                  </div>
                  <div className="info-content">
                    <h4>MỞ CỬA 8H-22H</h4>
                    <p>Phục vụ 7 ngày/tuần</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM FOOTER */}
      <div className="footer-bottom">
        <div className="container">
          <div className="bottom-content">
            <div className="copyright">
              <p>
                © {currentYear} ĐIỆN MÁY CHỢ LỚN. Tất cả các quyền được bảo lưu.
              </p>
              <p>
                Giấy phép kinh doanh: 0123456789 do Sở KHĐT TP.HCM cấp ngày
                01/01/2023
              </p>
              <p>
                <a href="/sitemap">Sitemap</a> | <a href="/rss">RSS</a>
              </p>
            </div>

            <div className="certifications">
              <div className="cert-badge">
                <FaShieldAlt />
                <span>CHÍNH HÃNG 100%</span>
              </div>
              <div className="cert-badge">
                <FaStar />
                <span>TOP 10 VIỆT NAM</span>
              </div>
              <div className="cert-badge">
                <FaCheckCircle />
                <span>ISO 9001:2015</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
