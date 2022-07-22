
function Carousel(props) {
  return (
    <div >
      <div className={`${props.values}`}>
       
        <div
          id="carouselExampleInterval"
          className="carousel slide position-relative"
          data-bs-ride="carousel"
        >
           <h1 className="font-mono font-medium  text-sm lg:text-xl  uppercase ml-3 ">Recomented Events</h1>
          <div className="carousel-inner rounded-2xl">
            <div
              className="carousel-item active bg-cover bg-top h-60  "
              data-bs-interval="3000"
              style={{ backgroundImage: `url("../Image/10927348.jpg")` }}
            ></div>
            <div
              className="carousel-item bg-cover bg-top h-60"
              data-bs-interval="2000"
              style={{ backgroundImage: `url("../Image/c2c4e-16091660830969-800.avif")` }}
              ></div>
            <div
              className="carousel-item bg-cover bg-center h-60"
              style={{ backgroundImage: `url("../Image/fortnite-screen-ps4-24may17-cfbc1.webp")` }}
            ></div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
