import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import sale1 from "../img/sale1.png";
import sale2 from "../img/sale2.png";
import sale3 from "../img/sale3.png";
import "../css/Header.css";

const Header = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Dữ liệu danh mục
  const productCategories = [
    { id: 1, name: "TỦ LẠNH", icon: "❄️", link: "/category/tu-lanh" },
    { id: 2, name: "MÁY GIẶT", icon: "👕", link: "/category/may-giat" },
    { id: 3, name: "TV - MÀN HÌNH", icon: "📺", link: "/category/tv-man-hinh" },
    { id: 4, name: "MÁY LẠNH", icon: "🌡️", link: "/category/may-lanh" },
    { id: 5, name: "GIA DỤNG", icon: "🏠", link: "/category/gia-dung" },
    { id: 6, name: "ĐỒ GIA DỤNG", icon: "🍳", link: "/category/do-gia-dung" },
  ];

  // Dữ liệu thương hiệu
  const brandData = {
    1: [
      "SAMSUNG",
      "LG",
      "TOSHIBA",
      "PANASONIC",
      "AQUA",
      "SHARP",
      "ELECTROLUX",
      "HITACHI",
    ],
    2: [
      "SAMSUNG",
      "LG",
      "TOSHIBA",
      "PANASONIC",
      "AQUA",
      "ELECTROLUX",
      "HITACHI",
    ],
    3: [
      "SAMSUNG",
      "LG",
      "SONY",
      "TOSHIBA",
      "TCL",
      "CASPER",
      "SHARP",
      "PANASONIC",
    ],
    4: [
      "DAIKIN",
      "PANASONIC",
      "LG",
      "SAMSUNG",
      "Midea",
      "CASPER",
      "TOSHIBA",
      "HITACHI",
    ],
    5: [
      "SAMSUNG",
      "PANASONIC",
      "TOSHIBA",
      "SHARP",
      "ELECTROLUX",
      "HITACHI",
      "AQUA",
    ],
    6: [
      "SUNHOUSE",
      "ELECTROLUX",
      "KANGAROO",
      "PHILIPS",
      "TOSHIBA",
      "PANASONIC",
      "SHARP",
    ],
  };

  // Menu chính
  const navItems = [
    { name: "TRANG CHỦ", path: "/" },
    { name: "KHUYẾN MÃI", path: "/khuyen-mai" },
    { name: "TRẢ GÓP 0%", path: "/tra-gop" },
    { name: "SẢN PHẨM MỚI", path: "/san-pham-moi" },
    { name: "HÀNG GIÁ SỐC", path: "/gia-soc" },
    { name: "LIÊN HỆ", path: "/lien-he" },
  ];

  // Banner slider
  const banners = [sale1, sale2, sale3];

  // Xử lý auto slide
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(slideInterval);
  }, [banners.length]);

  // Tìm kiếm sản phẩm
  const submitSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/search?q=${searchQuery}`);
      setSearchQuery("");
    }
  };

  // Chuyển hướng đến giỏ hàng
  const goToCart = () => {
    navigate("/cart");
  };

  // Chuyển hướng đến tài khoản
  const goToAccount = () => {
    navigate("/account");
  };

  // Chọn danh mục
  const selectCategory = (categoryLink) => {
    navigate(categoryLink);
    setActiveCategory(null);
  };

  // Chọn thương hiệu
  const selectBrand = (brandName) => {
    navigate(`/brand/${brandName.toLowerCase()}`);
    setActiveCategory(null);
  };

  // Chọn danh mục trên mobile
  const selectMobileCategory = (category) => {
    navigate(category.link);
    setShowMobileMenu(false);
  };

  // Lấy thương hiệu hiển thị
  const getDisplayBrands = () => {
    if (typeof activeCategory === "number") {
      return brandData[activeCategory] || [];
    }
    return [
      "SAMSUNG",
      "LG",
      "TOSHIBA",
      "PANASONIC",
      "SHARP",
      "DAIKIN",
      "ELECTROLUX",
    ];
  };

  return (
    <header className="main-header">
      {/* Thanh thông tin trên cùng */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="top-bar-left">
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <strong>Hotline:</strong>
                  <a href="tel:18001061">7979 7979</a>
                  <span className="contact-note">(Miễn phí)</span>
                </div>
                <span className="contact-divider">|</span>
                <div className="contact-item">
                  <span className="store-count">Hệ thống 35 cửa hàng</span>
                </div>
                <span className="contact-divider">|</span>
                <div className="contact-item">
                  <span className="delivery-info">Giao hàng toàn quốc</span>
                </div>
              </div>
            </div>
            <div className="top-bar-right">
              <div className="top-bar-menu">
                <Link to="/huong-dan" className="top-bar-link">
                  Hướng dẫn mua hàng
                </Link>
                <span className="divider">|</span>
                <Link to="/tuyen-dung" className="top-bar-link">
                  Tuyển dụng
                </Link>
                <span className="divider">|</span>
                <Link to="/lien-he" className="top-bar-link">
                  Liên hệ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Phần header chính */}
      <div className="header-main">
        <div className="container">
          <div className="header-content">
            <div className="header-logo">
              <Link to="/" className="logo-link">
                <div className="logo-text">
                  <span className="logo-part-1">ĐIỆN MÁY</span>
                  <span className="logo-part-2">CHỢ LỚN</span>
                </div>
                <div className="logo-slogan">Uy tín - Chất lượng - Giá tốt</div>
              </Link>
            </div>

            <div className="header-search">
              <form onSubmit={submitSearch} className="search-form">
                <div className="search-input-group">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Bạn cần tìm gì hôm nay?"
                    className="search-input"
                  />
                  <button type="submit" className="search-button">
                    <span>TÌM KIẾM</span>
                  </button>
                </div>
                <div className="search-suggestions">
                  <span className="suggestion-label">Tìm kiếm nhiều nhất:</span>
                  <button
                    type="button"
                    onClick={() =>
                      navigate("/search?q=t%E1%BB%A7+l%E1%BA%A1nh")
                    }
                    className="suggestion-link"
                  >
                    Tủ lạnh
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate("/search?q=m%C3%A1y+gi%E1%BA%B7t")}
                    className="suggestion-link"
                  >
                    Máy giặt
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate("/search?q=tivi")}
                    className="suggestion-link"
                  >
                    Tivi
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate("/search?q=m%C3%A1y+l%E1%BA%A1nh")}
                    className="suggestion-link"
                  >
                    Máy lạnh
                  </button>
                </div>
              </form>
            </div>

            <div className="header-actions">
              <div className="action-item">
                <button onClick={goToAccount} className="action-button">
                  <span className="action-icon">👤</span>
                  <div className="action-info">
                    <span className="action-label">Tài khoản</span>
                    <span className="action-sub">Đăng nhập/Đăng ký</span>
                  </div>
                </button>
              </div>
              <div className="action-item cart-button">
                <button onClick={goToCart} className="action-button">
                  <span className="action-icon cart-icon">🛒</span>
                  <div className="action-info">
                    <span className="action-label">Giỏ hàng</span>
                    <span className="action-sub">0 sản phẩm</span>
                  </div>
                  <span className="cart-badge">0</span>
                </button>
              </div>
            </div>

            <button
              className="mobile-menu-toggle"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              {showMobileMenu ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Menu điều hướng */}
      <div className="main-nav">
        <div className="container">
          <div className="nav-content">
            <div
              className="categories-dropdown"
              onMouseEnter={() => setActiveCategory(true)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <button className="categories-toggle">
                <span className="toggle-icon">☰</span>
                <span className="toggle-text">DANH MỤC SẢN PHẨM</span>
                <span className="toggle-arrow">▼</span>
              </button>

              {activeCategory && (
                <div className="categories-menu">
                  <div className="categories-list">
                    {productCategories.map((category) => (
                      <div
                        key={category.id}
                        className="category-menu-item"
                        onMouseEnter={() => setActiveCategory(category.id)}
                      >
                        <button
                          className="category-header"
                          onClick={() => selectCategory(category.link)}
                        >
                          <span className="category-icon">{category.icon}</span>
                          <span className="category-name">{category.name}</span>
                          <span className="category-arrow">▶</span>
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="brands-section">
                    <h3 className="brands-title">THƯƠNG HIỆU</h3>
                    <div className="brands-list">
                      {getDisplayBrands().map((brand, idx) => (
                        <button
                          key={idx}
                          type="button"
                          className="brand-link"
                          onClick={() => selectBrand(brand)}
                        >
                          {brand}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <nav className="nav-menu-container">
              <ul className="nav-menu">
                {navItems.map((item, idx) => (
                  <li key={idx} className="nav-item">
                    <Link to={item.path} className="nav-link">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Banner khuyến mãi */}
      <div className="sale-slider">
        <div className="sale-slider-wrapper">
          {banners.map((banner, index) => (
            <div
              key={index}
              className={`sale-slide ${index === currentSlide ? "active" : ""}`}
            >
              <img src={banner} alt={`Khuyến mãi ${index + 1}`} />
            </div>
          ))}
        </div>

        <div className="sale-dots">
          {banners.map((_, index) => (
            <span
              key={index}
              className={`sale-dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Menu mobile */}
      {showMobileMenu && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu-content">
            <div className="mobile-menu-header">
              <button
                className="mobile-menu-close"
                onClick={() => setShowMobileMenu(false)}
              >
                ✕
              </button>
            </div>

            <div className="mobile-search">
              <form onSubmit={submitSearch} className="mobile-search-form">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tìm kiếm sản phẩm..."
                  className="mobile-search-input"
                />
                <button type="submit" className="mobile-search-button">
                  🔍
                </button>
              </form>
            </div>

            <div className="mobile-categories">
              <h3 className="mobile-categories-title">DANH MỤC SẢN PHẨM</h3>
              {productCategories.map((category) => (
                <div key={category.id} className="mobile-category-item">
                  <button
                    className="mobile-category-header"
                    onClick={() => selectMobileCategory(category)}
                  >
                    <span className="mobile-category-icon">
                      {category.icon}
                    </span>
                    <span className="mobile-category-name">
                      {category.name}
                    </span>
                  </button>
                </div>
              ))}
            </div>

            <div className="mobile-menu-links">
              {navItems.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.path}
                  className="mobile-menu-link"
                  onClick={() => setShowMobileMenu(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="mobile-actions">
              <button
                className="mobile-action-btn"
                onClick={() => {
                  goToAccount();
                  setShowMobileMenu(false);
                }}
              >
                <span className="mobile-action-icon">👤</span>
                <span>Tài khoản</span>
              </button>
              <button
                className="mobile-action-btn cart-btn"
                onClick={() => {
                  goToCart();
                  setShowMobileMenu(false);
                }}
              >
                <span className="mobile-action-icon">🛒</span>
                <span>Giỏ hàng</span>
                <span className="mobile-cart-badge">0</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
