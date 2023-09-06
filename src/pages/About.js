import React from 'react'
import NavBar from '../components/NavBar'
import Link from 'next/link'
import 'tailwindcss/tailwind.css';
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>
      <NavBar />
      <div className="w-full h-full top-[90%] bg-zinc-900/70">
      <img src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" className="w-full h-full object-cover absolute top-0 left-0 -z-10"></img>
        
        <div className="w-full h-auto text-center md:py-8 lg:py-10 text-white">
          <h1 className='sm:text-xl md:text-2xl lg:text-3xl pt-4 md:pt-6 lg:pt-8 pb-2 md:pb-4 lg:pb-6'>About Us</h1>

          <p className='px-4 md:px-16 lg:px-28'>Welcome to New York City Sushi, your ultimate destination for exquisite sushi and Japanese cuisine in the heart of New York City. At New York CIty Sushi, we believe that dining is not just about satisfying your hunger, but about creating a memorable experience that tantalizes your taste buds and elevates your senses.</p>

          <h1 className='text-xl md:text-2xl lg:text-3xl pt-4 md:pt-6 lg:pt-8 pb-2 md:pb-4 lg:pb-6'>Our Story</h1>

          <p className='px-4 md:px-16 lg:px-32'>Established in 2023, New York City Sushi has been a beloved part of the New York dining scene. Our journey began with a passion for bringing the authentic flavors of Japan to the bustling streets of NYC. Over the years, we've meticulously honed our craft, focusing on the art of sushi-making and perfecting the delicate balance of flavors in each dish.</p>

          <h1 className='text-xl md:text-2xl lg:text-3xl pt-4 md:pt-6 lg:pt-8 pb-2 md:pb-4 lg:pb-6'>Culinary Excellence</h1>

          <p className='px-4 md:px-16 lg:px-32'>Led by our skilled team of master chefs, New York City Sushi takes pride in crafting culinary creations that are as visually stunning as they are delectable. We source the freshest and highest quality ingredients to ensure every plate that leaves our kitchen is a masterpiece. From traditional sushi and sashimi to innovative signature rolls, each dish is a celebration of Japanese culinary traditions with a modern twist.</p>

          <h1 className='text-xl md:text-2xl lg:text-3xl pt-4 md:pt-6 lg:pt-8 pb-2 md:pb-4 lg:pb-6'>Aesthetic Ambiance</h1>

          <p className='px-4 md:px-16 lg:px-32'>Step into our elegant yet inviting space, designed to transport you to the tranquil ambiance of a traditional Japanese dining experience. Our soothing decor, soft lighting, and minimalist design provide the perfect backdrop for an intimate dinner, a celebratory occasion, or a casual get-together with friends and family.</p>

          <h1 className='text-xl md:text-2xl lg:text-3xl pt-4 md:pt-6 lg:pt-8 pb-2 md:pb-4 lg:pb-6'>Commitment to Sustainability</h1>

          <p className='px-4 md:px-16 lg:px-32'>At New York City Sushi, we are not only dedicated to providing an exceptional dining experience but also to preserving our planet for future generations. We are committed to sustainable sourcing practices, using eco-friendly packaging, and minimizing food waste wherever possible.</p>

          <h1 className='text-xl md:text-2xl lg:text-3xl pt-4 md:pt-6 lg:pt-8 pb-2 md:pb-4 lg:pb-6'>Our Mission</h1>

          <p className='px-4 md:px-16 lg:px-32'>Our mission is simple: to create an unforgettable culinary journey for every guest who walks through our doors. Whether you're a sushi aficionado or exploring Japanese cuisine for the first time, we aim to captivate your senses with every bite, leaving you with a lasting memory of flavors, textures, and experiences that are uniquely New York City Sushi.</p>

          <p className='px-4 md:px-16 lg:px-32 pt-6 md:pt-6 lg:pt-8 pb-4 md:pb-4 lg:pb-6'>Join us at New York City Sushi as we continue to weave the artistry of sushi into the vibrant tapestry of New York's culinary scene. Thank you for choosing us to be a part of your gastronomic adventure.</p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default About