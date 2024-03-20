
const BookingForm = () => {
  return (
        <div className="booking-form w-8/12">
          <form className=" p-5 text-yellow-500 uppercase font-bold text-[12px]">
            <div className="flex gap-6 form-group">
              <div className="form-item flex-1">
                <label htmlFor="name" className="pb-2 inline-block">Name</label>
                <input className="px-4 py-2 h-16 w-full rounded bg-black border border-black" placeholder="Name" type="text" id="name" name="name" />
              </div>
              <div className="form-item flex-1">
                <label htmlFor="lastname" className="pb-2 inline-block">Last Name</label>
                <input  className="px-4 py-2 h-16 w-full rounded bg-black border border-black" placeholder="Last Name" type="text" id="lastname" name="lastname" />
              </div>
            </div>
            <div className="flex gap-6 form-group mt-5">
              <div className="form-item flex-1">
                <label htmlFor="date" className="pb-2 inline-block">Phone</label>
                <input className="px-4 py-2 h-16 w-full rounded bg-black border border-black" placeholder="Phone" type="number" id="phone" name="phone" />
              </div>
              <div className="form-item flex-1">
                <label htmlFor="time" className="pb-2 inline-block">Email</label>
                <input className="px-4 py-2 h-16 w-full rounded bg-black border-black	border" placeholder="Email" type="email" id="email" name="email" />
              </div>
            </div>
            <div className="flex form-group gap-6 mt-5">
              <div className="form-item flex-1">
                <label htmlFor="date" className="pb-2 inline-block">Date</label>
                <input className="px-4 py-2 h-16 w-full rounded bg-black border-black	border" type="date" id="date" name="date" />
              </div>
              <div className="form-item flex-1">
                <label htmlFor="time" className="pb-2 inline-block">Time</label>
                <input className="px-4 py-2 h-16 w-full rounded bg-black border-black	border"  type="time" id="time" name="time"></input>
              </div>
            </div>
            <div className="btn form-btn mt-5">
            <button className="btn btn-primary text-black bg-yellow-500 text-base px-4 py-2 rounded uppercase">Book a table</button>
            </div>
          </form>
        </div>
  )
}

export default BookingForm