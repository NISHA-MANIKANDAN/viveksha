import { assets } from '/src/assets/assets_frontend/assets';
const Contact = () => {
  return (
    <div className='text-gray-500'>
      {/* Contact Us Heading */}
      <div className='text-center text-2xl pt-10'>
        <p>
          CONTACT <span className='text-gray-700 font-semibold'>US</span>
        </p>
      </div>

      {/* Contact Section */}
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="Contact" />
        
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>Our Office</p>
          <p className='text-gray-500'>54709 Willms Station <br /> Suite 350, Washington</p>
          <p className='text-gray-500'>Tel: (415) 555-0132 <br /> Email: greatstackdev@gmail.com</p>
          
          <p className='font-semibold text-lg text-gray-600'>Careers at PRESCRIPTO</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          
          <button className='border border-black px-8 py-4 text-sm text-black hover:bg-black hover:text-white transition'>
            Explore Careers
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
