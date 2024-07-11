import { useEffect } from "react";

function GallerySection({ galleries, loading }) {
  useEffect(() => {
    function teamSlider() {
      let $carouselGallery = $(".gallery .list"),
        $progressBar = $(".gallery .timeline .process");

      $carouselGallery.flickity({
        contain: true,
        wrapAround: false,
        freeScroll: true,
        cellAlign: "left",
        lazyLoad: 6,
        imagesLoaded: true,
        wrapAround: true,
        prevNextButtons: false,
      });
      $carouselGallery.on("scroll.flickity", function (event, progress) {
        progress = Math.max(0.05, Math.min(1, progress));
        $progressBar.width(progress * 100 + "%");
      });

      let ctrPrevGallery = $(".gallery .btn_ctr.prev"),
        ctrNextGallery = $(".gallery .btn_ctr.next");

      ctrPrevGallery.on("click", function () {
        $carouselGallery.flickity("previous");
      });
      ctrNextGallery.on("click", function () {
        $carouselGallery.flickity("next");
      });
    }
    const myTimeOut = setTimeout(() => {
      teamSlider();
    }, 200);

    return () => {
      clearTimeout(myTimeOut);
    };
  }, []);

  return (
    <section className="gallery">
      <div className="heading --noline --center">
        <h2 className="heading__title title --t2">
          <span className="color--primary">CFD Circle</span> Là Một Team
        </h2>
      </div>
      <div className="list">
        {galleries.map((image, index) => {
          return (
            <img
              data-flickity-lazyload={image}
              alt=""
              key={index + new Date()}
            />
          );
        })}
      </div>
      <div className="controls">
        <div className="btn_ctr prev" />
        <span>Trượt qua</span>
        <div className="timeline">
          <div className="process" />
        </div>
        <div className="btn_ctr next" />
      </div>
    </section>
  );
}

export default GallerySection;
