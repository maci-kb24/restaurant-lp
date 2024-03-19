import bgPattern from "../../assets/images/bg-pattern.jpg";
import bgTitle from "../../assets/images/bg-title.png";
import chefIcon from "../../assets/images/advantage-1.png";
import recipeIcon from "../../assets/images/advantage-2.png";
import ingredientIcon from "../../assets/images/advantage-3.png";


const About = () => {
  return (
    <div id="about"
      className=" bg-repeat py-24"
      style={{ backgroundImage: `url(${bgPattern})` }}
    >
      <div className="custom-container">
        <div className="flex gap-12">
          <div className="about-img">
            <img src="https://via.placeholder.com/400x700" />
          </div>
          <div className="about-content">
            <div className="flex">
              <img src={bgTitle} />
              <h2 className="about-title uppercase text-4xl font-extrabold">
                GOOD FOOD FOR YOUR ALL <br /> DAY GOOD MOOD
              </h2>
            </div>
            <div className="text-gray-300 mt-10">
              <p className="about-description max-w-prose mb-5">
                We are a modern and creative group of chefs making the most
                delicious and healthy food you have ever tasted.{" "}
              </p>
              <p className="max-w-prose mb-5">
                Our experienced chefs have worked in the best restaurants around
                the world, and now they are ready to bring the best food to your
                door.{" "}
              </p>
              <p className="max-w-prose mb-5">
                Our food is always fresh and delicious, and we are always ready
                to serve you the best food you have ever tasted.{" "}
              </p>
              <p className="max-w-prose mb-5">
                Embark on a culinary journey that fuels your every moment with
                joy and satisfaction. At Restfood, we believe in serving more
                than just meals; we serve experiences that elevate your mood
                from sunrise to sunset.{" "}
              </p>
              <p className="max-w-prose">
                Indulge in our delectable dishes crafted with care and passion,
                guaranteed to leave a lasting impression on your palate and
                uplift your spirits. With every bite, savor the goodness that
                nourishes not only your body but also your soul. Welcome to a
                world where good food translates into all-day good vibes. Your
                journey to culinary bliss begins here.
              </p>
            </div>
            <div className="about-icons">
                <div className="flex justify-evenly uppercase font-bold">
                <div>
                    <img className="mx-auto" src={chefIcon} />
                    <p>Quality Food</p>
                </div>
                <div>
                    <img className="mx-auto" src={recipeIcon} />
                    <p>Organic Ingredients</p>
                </div>
                <div>
                   <img className="mx-auto" src={ingredientIcon} />
                    <p>Fastest Delivery</p>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
