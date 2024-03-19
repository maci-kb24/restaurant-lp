import ChefCard from "./ChefCard";

const chefImg = "https://via.placeholder.com/300";

const chefs = [
  {
    id: 1,
    name: "RICHARD NAUZ",
    image: chefImg,
    title: "food chef",
    social: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    },
  },
  {
    id: 2,
    name: "OLIVIA GROSH",
    image: chefImg,
    title: "food chef",
    social: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    },
  },
  {
    id: 3,
    name: "JEREMY WHITE",
    image: chefImg,
    title: "food chef",
    social: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    },
  },
  {
    id: 4,
    name: "HOWARD HOLMES",
    image: chefImg,
    title: "food chef",
    social: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    },
  },
  
];

const Chefs = () => {
  return (
    <div id="chefs" className="bg-black">
      <div className="custom-container py-20">
        <div className="text-center">
          <h1 className="flex justify-center items-center text-4xl font-extrabold mb-4 uppercase chefs-title">
            Our Best Chefs
          </h1>
          <p className=" max-w-prose mx-auto">
            Our chefs are the best in the world. They are passionate about their
            work and they are always ready to create the best dishes for you.
          </p>
        </div>
        <div className="flex justify-center items-center">
          {chefs.map((chef) => (
            <ChefCard chefs={chef} key={chef.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chefs;
