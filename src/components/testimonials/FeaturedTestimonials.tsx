import TestimonialCard from "./TestimonialCard";

interface FeaturedTestimonialsProps {
  testimonials: Testimonial[]
}

const FeaturedTestimonials = ({testimonials}: FeaturedTestimonialsProps) => {

  return (
    <>
      <div className='flex h-screen justify-center lg:items-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='bg-moderate-violet text-white md:col-span-2 rounded-lg shadow-lg'>
            <div className={`bg-no-repeat bg-[length:100px_100px] bg-[top_right_2rem] md:bg-[length:145px_145px] md:bg-[top_right_5rem] bg-quote`}>
              <TestimonialCard testimonial={testimonials[0]} />
            </div>
          </div>
          <div className='bg-very-dark-grayesh-blue text-white rounded-lg shadow-lg'>
            <TestimonialCard testimonial={testimonials[1]} />
          </div>
          <div className='bg-white lg:row-span-2 text-black rounded-lg shadow-lg'>
            <TestimonialCard testimonial={testimonials[2]} />
          </div>
          <div className='bg-white text-black rounded-lg shadow-lg'>
            <TestimonialCard testimonial={testimonials[3]} />
          </div>
          <div className='bg-very-dark-blackish-blue text-white lg:col-span-2 rounded-lg shadow-lg'>
            <TestimonialCard testimonial={testimonials[4]} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedTestimonials;