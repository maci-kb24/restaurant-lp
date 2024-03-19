import bgPattern from "../../assets/images/bg-pattern.jpg";
import bgTitle from "../../assets/images/bg-title.png";

const BookTable = () => {
  return (
    <div
      id="booking-table"
      className="bg-repeat py-24"
      style={{ backgroundImage: `url(${bgPattern})` }}
    >
      <div className="flex justify-center">
        <img src={bgTitle} />
        <h2 className="about-title uppercase text-4xl font-extrabold">
          BOOK A TABLE
        </h2>
      </div>
      <div className="custom-container flex gap-10">
        <div className="booking-form w-8/12">
          <form className="bg-black p-5">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input type="date" id="date" name="date" />
            </div>
            <div className="form-group">
              <label htmlFor="time">Time</label>
              <input type="time" id="time" name="time" />
            </div>
            <div className="form-group">
              <label htmlFor="people">Number of people</label>
              <input type="number" id="people" name="people" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message"></textarea>
            </div>
            <button className="btn-primary" type="submit">
              Book Now
            </button>
          </form>
        </div>
        <div className="opening-hours bg-black p-5 w-2/6">
          <div>
            <h3 className="uppercase text-3xl font-bold">Opening Hours</h3>
            <p className="text-gray-300 mt-5">
              Our restaurant is open at the following hours:
            </p>
          </div>

          <div className="opening-hours-time">
            <div className="flex">
              <p>Monday - Friday</p>
              <p>8AM - 6PM</p>
            </div>
            <hr className="my-5" />
            <div className="flex">
              <p>Saturday</p>
              <p>9AM - 5PM</p>
            </div>
            <hr className="my-5" />
            <div className="flex">
              <p>Sunday</p>
              <p>9AM - 4PM</p>
            </div>
            <hr className="my-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTable;
