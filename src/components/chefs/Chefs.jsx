import ChefCard from "./ChefCard";
import bgTitle from "../../assets/images/bg-title.png";
import chef1 from "../../assets/images/chef-1.jpg";
import chef2 from "../../assets/images/chef-2.jpg";
import chef3 from "../../assets/images/chef-3.jpg";
import chef4 from "../../assets/images/chef-4.jpg";

const chefs = [
  {
    id: 1,
    name: "RICHARD NAUZ",
    image: chef1,
    title: "food chef",
  },
  {
    id: 2,
    name: "OLIVIA GROSH",
    image: chef2,
    title: "food chef",
  },
  {
    id: 3,
    name: "JEREMY WHITE",
    image: chef3,
    title: "food chef",
  },
  {
    id: 4,
    name: "HOWARD HOLMES",
    image: chef4,
    title: "food chef",
  },
];

const Chefs = () => {
  return (
    <div id="chefs" className="bg-black">
      <div className="custom-container py-20">
        <div className="text-center">
          <div className="flex justify-center mb-[40px]">
            <img src={bgTitle} />
            <h1 className="flex justify-center items-center text-4xl font-extrabold mb-4 uppercase chefs-title">
              Our Best Chefs
            </h1>
          </div>
          <p className=" text-gray-300 max-w-prose mx-auto mb-[40px]">
            Our chefs are the best in the world. They are passionate about their
            work and they are always ready to create the best dishes for you.
          </p>
        </div>
        <div className="flex justify-evenly md:flex-row flex-col gap-8 items-center">
          {chefs.map((chef) => (
            <ChefCard chefs={chef} key={chef.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chefs;
