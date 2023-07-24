interface TestimonialCardProps {
  testimonial: Testimonial
}

const TestimonialCard = ({testimonial}: TestimonialCardProps) => {

  const imageUrl = new URL(`../../assets/images/${testimonial.avatarFileName}`, import.meta.url).href

  return (
    <div className="font-barlow flex flex-col gap-4 p-8 text-left md:gap-6 md:p-10 ">
      <div className='flex flex-row gap-4'>
        <div>
          <img className='rounded-full w-12 border-2 border-light-grayish-blue' src={imageUrl} alt={`${testimonial.name} avatar`} />
        </div>
        <div className='flex flex-col'>
          <span className='text-base font-semibold'>
            {testimonial.name}
          </span>
          <span className='text-sm opacity-50'>
            Verified Graduate
          </span>
        </div>

      </div>
      <span className='text-xl font-semibold'>
        {testimonial.shortDescription}
      </span>
      <span className='text-sm font-medium opacity-50'>
        " {testimonial.fullDescription} "
      </span>
    </div>
  );
};

export default TestimonialCard;