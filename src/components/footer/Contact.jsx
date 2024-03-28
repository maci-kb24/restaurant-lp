import bgTitle from "../../assets/images/bg-title.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const info = [
  {
    title: "LOCATION",
    icon: "fas fa-map-marker-alt",
    description: "2900 Lapeer Rd, Port Hurons",
  },
  {
    title: "PHONE",
    iconL: "fas fa-phone-alt",
    description: "800 478 42 51",
  },
  {
    title: "EMAIL",
    icon: "fas fa-envelope",
    description: "info@restfood.com",
  },
];

const Contact = () => {
  return (
    <div id="contact" className="py-24">
      <div className="flex justify-center">
        <img src={bgTitle} />
        <h2 className="about-title uppercase text-4xl font-extrabold">
          CONTACTS
        </h2>
      </div>
      <div className="flex justify-center mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {info.map((item, index) => {
            return (
              <div key={index} className="flex gap-4">
                <i className={`${item.icon} text-3xl text-gray-300`}></i>
                <div>
                  <h3 className="font-extrabold text-xl">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex gap-12 items-center">
          <FaFacebookF className="text-xl text-yellow-500" />
          <FaTwitter className="text-xl text-yellow-500" />
          <FaInstagram className="text-xl text-yellow-500" />
          <FaYoutube className="text-xl text-yellow-500" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
