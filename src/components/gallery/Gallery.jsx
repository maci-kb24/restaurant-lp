import bgTitle from "../../assets/images/bg-title.png";

const galleryData = [
  {
    id: 1,
    img: "https://via.placeholder.com/393x260",
  },
  {
    id: 2,
    img: "https://via.placeholder.com/393x260",
  },
  {
    id: 3,
    title: "Gallery 3",
    img: "https://via.placeholder.com/393x260",
  },
  {
    id: 4,
    img: "https://via.placeholder.com/393x260",
  },
  {
    id: 5,
    img: "https://via.placeholder.com/393x260",
  },
  {
    id: 6,
    img: "https://via.placeholder.com/393x260",
  },
  {
    id: 7,
    img: "https://via.placeholder.com/393x260",
  },
  {
    id: 8,
    img: "https://via.placeholder.com/393x260",
  },
  {
    id: 9,
    img: "https://via.placeholder.com/393x260",
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
              <div key={item.id} className="gallery-item">
                <img src={item.img} alt="gallery" />
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Gallery