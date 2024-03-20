import bgPattern from "../../assets/images/bg-pattern.jpg";
import bgTitle from "../../assets/images/bg-title.png";
import BookingForm from "./BookingForm";
import OpeningHours from "./OpeningHours";

const BookTable = () => {
  return (
    <div
      id="booking-table"
      className="bg-repeat py-24"
      style={{ backgroundImage: `url(${bgPattern})` }}
    >
      <div className="flex justify-center mb-10">
        <img src={bgTitle} />
        <h2 className="about-title uppercase text-4xl font-extrabold">
          BOOK A TABLE
        </h2>
      </div>
      <div className="custom-container flex gap-8">
        <BookingForm />
       <OpeningHours />
      </div>
    </div>
  );
};

export default BookTable;
