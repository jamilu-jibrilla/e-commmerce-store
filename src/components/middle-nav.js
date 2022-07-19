const MiddleNav = () => {
  return (
    <div className="middle-nav">
      <ul className="push-left">
        <span className="multi">MULTI</span>
        <span className="shop">SHOP</span>
      </ul>
      <i className="fa fa-bars hamburger"></i>
      <ul>
        <input
          type="email"
          className="search-bar"
          placeholder="Search for products"
        />
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </ul>
      <ul className="customer-service push-right">
        <li>Customer Service</li>
        <li>+91 485 3462</li>
      </ul>
    </div>
  );
};

export default MiddleNav;
