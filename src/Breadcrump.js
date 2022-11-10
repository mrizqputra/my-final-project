function Breadcrump() {
  const breadCrumbText = () => {
    if (window.location.pathname === "/foodlist") {
      return (
        <>
        <li className="breadcrumb-item active" aria-current="page">
          foodlist
        </li>
        </>
      );
    }
  };
  return (
    <div className="container">
      <div className="nav" aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          {breadCrumbText}
        </ol>
      </div>
    </div>
  );
}

export default Breadcrump;
