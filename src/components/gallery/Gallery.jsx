import bgTitle from "../../assets/images/bg-title.png";
import Gallery1 from "../../assets/images/gallery-1.jpg";
import Galery2 from "../../assets/images/gallery-2.jpg";
import Galery3 from "../../assets/images/gallery-3.jpg";
import Galery4 from "../../assets/images/gallery-4.jpg";
import Galery5 from "../../assets/images/gallery-5.jpg";
import Galery6 from "../../assets/images/gallery-6.jpg";

const galleryData = [
  {
    id: 1,
    img: Gallery1,
  },
  {
    id: 2,
    img: Galery2,
  },
  {
    id: 3,
    title: "Gallery 3",
    img: Galery3,
  },
  {
    id: 4,
    img: Galery4,
  },
  {
    id: 5,
    img: Galery5,
  },
  {
    id: 6,
    img: Galery6,
  },
]


const Gallery = () => {
  return (
    <div id="gallery" className="bg-black py-24">
      <div className="gallery-title">
        <div className="flex justify-center mb-12">
          <img src={bgTitle} />
          <h2 className="about-title uppercase text-4xl font-extrabold">
            Gallery
          </h2>
        </div>
        </div>
        <div className="custom-container px-3">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {galleryData.map((item) => (
              <div key={item.id} className="gallery-item hover:cursor-pointer">
                <img src={item.img} alt="gallery" className=" hover:brightness-50" />
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}


export default Gallery