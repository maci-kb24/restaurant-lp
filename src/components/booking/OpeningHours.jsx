
const OpeningHours = () => {
  return (
         <div className="opening-hours bg-black p-7 w-2/6">
          <div>
            <h3 className="uppercase text-3xl font-bold pt-4">Opening Hours</h3>
            <p className="text-gray-300 mt-5">
              Our restaurant is open at the following hours:
            </p>
          </div>

          <div className="opening-hours-time mt-6">
            <div className="flex justify-between">
              <p>Monday - Friday</p>
              <p>8AM - 6PM</p>
            </div>
            <hr className="mb-5" />
            <div className="flex justify-between">
              <p>Saturday</p>
              <p>9AM - 5PM</p>
            </div>
            <hr className="mb-5" />
            <div className="flex justify-between">
              <p>Sunday</p>
              <p>9AM - 4PM</p>
            </div>
            <hr className="mb-5" />
          </div>
        </div>
  )
}

export default OpeningHours