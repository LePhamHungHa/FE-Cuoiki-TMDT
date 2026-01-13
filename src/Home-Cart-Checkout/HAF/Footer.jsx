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
  // State đơn giản
  const [email, setEmail] = useState("");

  // Hàm xử lý submit form - logic đơn giản
  const handleSubmitNewsletter = (e) => {
    e.preventDefault();

    // Kiểm tra email rỗng
    if (email.trim() === "") {
      alert("Vui lòng nhập email!");
      return;
    }

    // Kiểm tra định dạng email cơ bản
    if (!email.includes("@") || !email.includes(".")) {
      alert("Email không hợp lệ!");
      return;
    }

    // Xử lý đăng ký
    alert(`Đăng ký thành công với email: ${email}`);
    setEmail("");
  };

  // Lấy năm hiện tại
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  // Dữ liệu danh mục sản phẩm - hardcode
  const productCategories = {
    "ĐIỆN LẠNH": [
      { name: "Tủ lạnh", icon: <FaSnowflake />, link: "/category/tu-lanh" },
      { name: "Máy lạnh", icon: <FaSnowflake />, link: "/category/may-lanh" },
      { name: "Máy giặt", icon: <FaFan />, link: "/category/may-giat" },
      { name: "Tivi", icon: <FaTv />, link: "/category/tivi" },
    ],
    "GIA DỤNG": [
      {
        name: "Máy xay sinh tố",
        icon: <FaBlender />,
        link: "/category/may-xay-sinh-to",
      },
      {
        name: "Nồi cơm điện",
        icon: <FaHome />,
        link: "/category/noi-com-dien",
      },
      { name: "Máy hút bụi", icon: <FaCogs />, link: "/category/may-hut-bui" },
      {
        name: "Thiết bị nhà bếp",
        icon: <FaBoxOpen />,
        link: "/category/thiet-bi-nha-bep",
      },
    ],
    "ĐIỆN TỬ": [
      {
        name: "Điện thoại",
        icon: <FaMobileAlt />,
        link: "/category/dien-thoai",
      },
      { name: "Laptop", icon: <FaLaptop />, link: "/category/laptop" },
      { name: "Tablet", icon: <FaTabletAlt />, link: "/category/tablet" },
      { name: "Máy ảnh", icon: <FaCamera />, link: "/category/may-anh" },
    ],
    KHÁC: [
      {
        name: "Đồ chơi công nghệ",
        icon: <FaGamepad />,
        link: "/category/do-choi-cong-nghe",
      },
      { name: "Phụ kiện", icon: <FaTv />, link: "/category/phu-kien" },
      { name: "Sửa chữa", icon: <FaWrench />, link: "/category/sua-chua" },
      { name: "Quà tặng", icon: <FaGift />, link: "/category/qua-tang" },
    ],
  };

  // Dữ liệu chính sách
  const policies = [
    {
      name: "Giao hàng toàn quốc",
      icon: <FaShippingFast />,
      link: "/chinh-sach-giao-hang",
    },
    { name: "Đổi trả 30 ngày", icon: <FaExchangeAlt />, link: "/doi-tra" },
    { name: "Trả góp 0%", icon: <FaPercent />, link: "/tra-gop" },
    { name: "Bảo hành chính hãng", icon: <FaShieldAlt />, link: "/bao-hanh" },
  ];

  // Dữ liệu hỗ trợ khách hàng
  const supportItems = [
    { name: "Hướng dẫn mua hàng", icon: <FaHeadset />, link: "/ho-tro" },
    { name: "Câu hỏi thường gặp", icon: <FaQuestionCircle />, link: "/faq" },
    {
      name: "Điều khoản sử dụng",
      icon: <FaFileContract />,
      link: "/dieu-khoan",
    },
    { name: "Chính sách bảo mật", icon: <FaLock />, link: "/bao-mat" },
  ];

  // Dữ liệu mạng xã hội
  const socialLinks = [
    { platform: "Facebook", icon: <FaFacebook />, color: "#1877f2", link: "#" },
    { platform: "YouTube", icon: <FaYoutube />, color: "#ff0000", link: "#" },
    { platform: "Zalo", icon: <FaComments />, color: "#0068ff", link: "#" },
    { platform: "TikTok", icon: <FaTiktok />, color: "#000000", link: "#" },
  ];

  // Dữ liệu thông tin cửa hàng
  const storeInfo = [
    {
      title: "35 CỬA HÀNG",
      description: "Trải dài khắp TP.HCM và các tỉnh",
      icon: <FaStore />,
    },
    {
      title: "GIAO HÀNG NHANH",
      description: "Miễn phí trong nội thành TP.HCM",
      icon: <FaTruck />,
    },
    {
      title: "MỞ CỬA 8H-22H",
      description: "Phục vụ 7 ngày/tuần",
      icon: <FaClock />,
    },
  ];

  // Hàm render danh mục sản phẩm
  const renderProductCategories = () => {
    return Object.entries(productCategories).map(([category, items]) => (
      <div className="category-group" key={category}>
        <h4>{category}</h4>
        <ul className="category-links">
          {items.map((item, index) => (
            <li key={index}>
              <span className="category-icon">{item.icon}</span>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    ));
  };

  // Hàm render danh sách chính sách
  const renderPolicyList = (items) => {
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <span className="policy-icon">{item.icon}</span>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
    );
  };

  // Hàm render liên kết mạng xã hội
  const renderSocialLinks = () => {
    return socialLinks.map((social, index) => (
      <a
        key={index}
        href={social.link}
        className={`social-link ${social.platform.toLowerCase()}`}
        style={{ backgroundColor: social.color }}
        aria-label={social.platform}
      >
        {social.icon}
      </a>
    ));
  };

  // Hàm render thông tin cửa hàng
  const renderStoreInfo = () => {
    return storeInfo.map((info, index) => (
      <div className="info-card" key={index}>
        <div className="info-icon">{info.icon}</div>
        <div className="info-content">
          <h4>{info.title}</h4>
          <p>{info.description}</p>
        </div>
      </div>
    ));
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
                {renderProductCategories()}
              </div>
            </div>

            {/* COLUMN 3: POLICIES & SUPPORT */}
            <div className="footer-column">
              <h3 className="column-title">CHÍNH SÁCH</h3>
              <div className="policy-links">{renderPolicyList(policies)}</div>

              <h3 className="column-title mt-6">HỖ TRỢ KHÁCH HÀNG</h3>
              <div className="support-links">
                {renderPolicyList(supportItems)}
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
                  onSubmit={handleSubmitNewsletter}
                  className="newsletter-form"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Nhập email của bạn"
                    className="newsletter-input"
                  />
                  <button type="submit" className="newsletter-btn">
                    <FaPaperPlane size={18} />
                    <span>ĐĂNG KÝ</span>
                  </button>
                </form>
                <p className="newsletter-note">
                  <FaCheckCircle />
                  <span>Cam kết bảo mật mọi thông tin cá nhân của bạn</span>
                </p>
              </div>

              <div className="social-section">
                <h4 className="social-title">
                  <FaComments />
                  <span>KẾT NỐI VỚI CHÚNG TÔI</span>
                </h4>
                <div className="social-links">{renderSocialLinks()}</div>

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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.214525515988!2d106.78918677590661!3d10.871281657435143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175276398969f7b%3A0x9672b7efd0893fc4!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBOw7RuZyBMw6JtIFRQLiBI4buTIENow60gTWluaA!5e0!3m2!1svi!2s!4v1765540655461!5m2!1svi!2s"
                width="100%"
                height="350"
                style={{ border: 0, borderRadius: "12px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              <div className="map-info">{renderStoreInfo()}</div>
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
                © {getCurrentYear()} ĐIỆN MÁY CHỢ LỚN. Tất cả các quyền được bảo
                lưu.
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
