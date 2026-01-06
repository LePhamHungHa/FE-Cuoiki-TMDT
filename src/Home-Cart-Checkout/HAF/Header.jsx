import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/Header.css";

const Header = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    {
      id: 1,
      name: "TỦ LẠNH",
      icon: "❄️",
      link: "/category/tu-lanh",
      brands: [
        "SAMSUNG",
        "LG",
        "TOSHIBA",
        "PANASONIC",
        "AQUA",
        "SHARP",
        "ELECTROLUX",
        "HITACHI",
      ],
    },
    {
      id: 2,
      name: "MÁY GIẶT",
      icon: "👕",
      link: "/category/may-giat",
      brands: [
        "SAMSUNG",
        "LG",
        "TOSHIBA",
        "PANASONIC",
        "AQUA",
        "ELECTROLUX",
        "HITACHI",
      ],
    },
    {
      id: 3,
      name: "TV - MÀN HÌNH",
      icon: "📺",
      link: "/category/tv-man-hinh",
      brands: [
        "SAMSUNG",
        "LG",
        "SONY",
        "TOSHIBA",
        "TCL",
        "CASPER",
        "SHARP",
        "PANASONIC",
      ],
    },
    {
      id: 4,
      name: "MÁY LẠNH",
      icon: "🌡️",
      link: "/category/may-lanh",
      brands: [
        "DAIKIN",
        "PANASONIC",
        "LG",
        "SAMSUNG",
        "Midea",
        "CASPER",
        "TOSHIBA",
        "HITACHI",
      ],
    },
    {
      id: 5,
      name: "GIA DỤNG",
      icon: "🏠",
      link: "/category/gia-dung",
      brands: [
        "SAMSUNG",
        "PANASONIC",
        "TOSHIBA",
        "SHARP",
        "ELECTROLUX",
        "HITACHI",
        "AQUA",
      ],
    },
    {
      id: 6,
      name: "ĐỒ GIA DỤNG",
      icon: "🍳",
      link: "/category/do-gia-dung",
      brands: [
        "SUNHOUSE",
        "ELECTROLUX",
        "KANGAROO",
        "PHILIPS",
        "TOSHIBA",
        "PANASONIC",
        "SHARP",
      ],
    },
  ];

  // Menu chính
  const mainMenu = [
    { name: "TRANG CHỦ", path: "/" },
    { name: "KHUYẾN MÃI", path: "/khuyen-mai" },
    { name: "TRẢ GÓP 0%", path: "/tra-gop" },
    { name: "SẢN PHẨM MỚI", path: "/san-pham-moi" },
    { name: "HÀNG GIÁ SỐC", path: "/gia-soc" },
    { name: "LIÊN HỆ", path: "/lien-he" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  const handleCartClick = () => {
    navigate("/cart");
  };

  const handleAccountClick = () => {
    navigate("/account");
  };

  // Hàm xử lý khi click vào danh mục chính
  const handleCategoryClick = (link) => {
    navigate(link);
    setActiveCategory(null);
  };

  // Hàm xử lý khi click vào thương hiệu
  const handleBrandClick = (brandName) => {
    navigate(`/brand/${brandName.toLowerCase()}`);
    setActiveCategory(null);
  };

  // Hàm xử lý khi click vào danh mục trên mobile
  const handleMobileCategoryClick = (category) => {
    navigate(category.link);
    setShowMobileMenu(false);
  };

  return (
    <header className="main-header">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <div className="top-bar-left">
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <strong>Hotline:</strong>
                  <a href="tel:18001061">1800 1061</a>
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

      {/* Main Header */}
      <div className="header-main">
        <div className="container">
          <div className="header-content">
            {/* Logo */}
            <div className="header-logo">
              <Link to="/" className="logo-link">
                <div className="logo-text">
                  <span className="logo-part-1">ĐIỆN MÁY</span>
                  <span className="logo-part-2">CHỢ LỚN</span>
                </div>
                <div className="logo-slogan">Uy tín - Chất lượng - Giá tốt</div>
              </Link>
            </div>

            {/* Search Bar */}
            <div className="header-search">
              <form onSubmit={handleSearch} className="search-form">
                <div className="search-input-group">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Bạn cần tìm gì hôm nay?"
                    className="search-input"
                  />
                  <button type="submit" className="search-button">
                    <span className="search-icon">🔍</span>
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

            {/* Action Buttons */}
            <div className="header-actions">
              <div className="action-item">
                <button onClick={handleAccountClick} className="action-button">
                  <span className="action-icon">👤</span>
                  <div className="action-info">
                    <span className="action-label">Tài khoản</span>
                    <span className="action-sub">Đăng nhập/Đăng ký</span>
                  </div>
                </button>
              </div>
              <div className="action-item cart-button">
                <button onClick={handleCartClick} className="action-button">
                  <span className="action-icon cart-icon">🛒</span>
                  <div className="action-info">
                    <span className="action-label">Giỏ hàng</span>
                    <span className="action-sub">0 sản phẩm</span>
                  </div>
                  <span className="cart-badge">0</span>
                </button>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="mobile-menu-toggle"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              {showMobileMenu ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="main-nav">
        <div className="container">
          <div className="nav-content">
            {/* Categories Dropdown */}
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
                    {categories.map((category) => (
                      <div
                        key={category.id}
                        className="category-menu-item"
                        onMouseEnter={() => setActiveCategory(category.id)}
                      >
                        <button
                          className="category-header"
                          onClick={() => handleCategoryClick(category.link)}
                        >
                          <span className="category-icon">{category.icon}</span>
                          <span className="category-name">{category.name}</span>
                          <span className="category-arrow">▶</span>
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Bảng thương hiệu cố định bên phải */}
                  <div className="brands-section">
                    <h3 className="brands-title">THƯƠNG HIỆU</h3>
                    <div className="brands-list">
                      {typeof activeCategory === "number"
                        ? // Hiển thị thương hiệu của danh mục đang hover
                          categories
                            .find((c) => c.id === activeCategory)
                            ?.brands.map((brand, idx) => (
                              <button
                                key={idx}
                                type="button"
                                className="brand-link"
                                onClick={() => handleBrandClick(brand)}
                              >
                                {brand}
                              </button>
                            ))
                        : // Hiển thị thương hiệu nổi bật chung (khi mới mở menu)
                          [
                            "SAMSUNG",
                            "LG",
                            "TOSHIBA",
                            "PANASONIC",
                            "SHARP",
                            "DAIKIN",
                            "ELECTROLUX",
                          ].map((brand, idx) => (
                            <button
                              key={idx}
                              type="button"
                              className="brand-link"
                              onClick={() => handleBrandClick(brand)}
                            >
                              {brand}
                            </button>
                          ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation Links */}
            <nav className="nav-menu-container">
              <ul className="nav-menu">
                {mainMenu.map((item, idx) => (
                  <li key={idx} className="nav-item">
                    <Link to={item.path} className="nav-link">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Promo Badge */}
            <div className="promo-container">
              <button
                className="promo-badge"
                onClick={() => navigate("/khuyen-mai")}
              >
                <span className="badge-icon">🔥</span>
                <span>SIÊU SALE 30.9</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu-content">
            {/* Mobile Close Button */}
            <div className="mobile-menu-header">
              <button
                className="mobile-menu-close"
                onClick={() => setShowMobileMenu(false)}
              >
                ✕
              </button>
            </div>

            {/* Mobile Search */}
            <div className="mobile-search">
              <form onSubmit={handleSearch} className="mobile-search-form">
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

            {/* Mobile Categories */}
            <div className="mobile-categories">
              <h3 className="mobile-categories-title">DANH MỤC SẢN PHẨM</h3>
              {categories.map((category) => (
                <div key={category.id} className="mobile-category-item">
                  <button
                    className="mobile-category-header"
                    onClick={() => handleMobileCategoryClick(category)}
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

            {/* Mobile Menu Links */}
            <div className="mobile-menu-links">
              {mainMenu.map((item, idx) => (
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

            {/* Mobile Actions */}
            <div className="mobile-actions">
              <button
                className="mobile-action-btn"
                onClick={() => {
                  handleAccountClick();
                  setShowMobileMenu(false);
                }}
              >
                <span className="mobile-action-icon">👤</span>
                <span>Tài khoản</span>
              </button>
              <button
                className="mobile-action-btn cart-btn"
                onClick={() => {
                  handleCartClick();
                  setShowMobileMenu(false);
                }}
              >
                <span className="mobile-action-icon">🛒</span>
                <span>Giỏ hàng</span>
                <span className="mobile-cart-badge">0</span>
              </button>
            </div>

            {/* Mobile Contact Info */}
            <div className="mobile-contact">
              <div className="mobile-contact-item">
                <span className="mobile-contact-icon">📞</span>
                <div>
                  <div className="mobile-contact-phone">1800 1061</div>
                  <div className="mobile-contact-label">
                    Gọi mua hàng (miễn phí)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
