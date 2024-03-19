
const Map = () => {

const iframeSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96748.8490211942!2d-74.32971021284993!3d40.73118937510923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25370329a0e1d%3A0xe1bcdc2adcfee473!2sNewark%2C%20NJ%2C%20USA!5e0!3m2!1sen!2smk!4v1710865629193!5m2!1sen!2smk"

  return (
    <div className="w-full">
        <iframe src={iframeSrc} width="600" height="450" style="border:0;" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Map