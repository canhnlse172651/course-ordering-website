import useQuery from "@/hooks/useQuery";
import { galleryService } from "@/services/galleryService";

function AboutGallerySection() {
  
  const {
    data: galleryData,
    error: galleryError,
    loading: galleryLoading,
    refetch : refetchGallery,
  } = useQuery(galleryService.getAllGalleries);

  
  const galleryImage  = galleryData?.galleries[0]?.images || [];


  return (
    <section className="aboutgallery --scpadding">
      <div className="container">
        <h2 className="aboutgallery__title title --t2 --white">
          CFD Circle{" "}
          <span className="color--primary">là một team gắn kết,</span> <br />
          cùng nhau học tập, vui chơi và phát triển
        </h2>
        <div className="aboutgallery__imgs">
             {
              galleryImage?.map((image,index) => {
                if(index == 16 || index == 15) image = "https://cfdcourses.cfdcircle.vn/images/gallery/78PdN-799nC7DObIE8n4W-cfd-circle-team.jpg"
                return (
                  <img src={image} key={index} alt="true" onClick={(e) => console.log('index', index)} />
                )
              })
             }
        </div>
      </div>
    </section>
  );
}

export default AboutGallerySection;
