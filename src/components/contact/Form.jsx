import Details from "./Details";


export default function Form() {
  
  return (
    <>
      <hr />
      <div className="min-h-screen bg-[#0f0f11] text-white flex flex-col items-center justify-center p-8">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#0f0f11]">
          <div className="space-y-6">
            <h4 className="text-gray-400 font-semibold">Contact us</h4>
            <h2 className="text-4xl font-bold">Get in touch</h2>
            <p className="text-gray-400 text-[18px]">
            Want to make an impactful and compelling brand? We've got you covered. Contact us for any enquiries
     </p>

            <div className="space-y-4 text-gray-300">
             
              <div className="flex items-center space-x-3">
                <span>📧</span>
                <span>contact@mvmbs.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <span>📍</span>
                <span>I Thum I.T. Park, Sector 62 Noida, Uttar Pradesh</span>
              </div>
            </div>

            <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0784869880545!2d77.36979007536928!3d28.627409684313502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce569b7660581%3A0xc967ef0b896097d5!2sMVM%20Business%20Services!5e0!3m2!1sen!2sin!4v1745561694261!5m2!1sen!2sin"
                width="100%"
                height="300"
                border="0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        <Details/>
        </div>
      </div>
    </>
  );
}
