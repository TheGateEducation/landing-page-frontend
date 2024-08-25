import React from 'react'
import Hero from '@src/components/Hero/Hero';
import Gallery from '@src/components/Programs/Gallery'

const galleryData = [
  {
      imageLink: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/gallery/campamento.jpg",
      title: "Alemania",
      href: "/programs/camp/alemania"
  },
  {
      imageLink: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/gallery/certificates.jpg",
      title: "Australia",
      href: "/programs/diploma/australia"
  },
  {
      imageLink: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/gallery/idiomas.jpg",
      title: "España",
      href: "/programs/language_course/españa"
  },
  {
      imageLink: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/gallery/intecambio.jpg",
      title: "Francia",
      href: "/programs/exchange/francia"
  },
  {
      imageLink: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/gallery/maestria.jpg",
      title: "Ireland",
      href: "/programs/master/ireland"
  },
  {
      imageLink: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/gallery/male.jpg",
      title: "Malta",
      href: "/programs/tour"
  },
  {
      imageLink: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/gallery/school.jpg",
      title: "Suecia",
      href: "/programs/study_abroad"
  },
  {
      imageLink: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/gallery/secundaria.jpg",
      title: "Suiza",
      href: "/programs/highschool"
  },
  {
      imageLink: "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/gallery/profesional.jpg",
      title: "USA",
      href: "/programs/education"
  },
];

export default function page() {
  return (
    <>
    <div>page</div>
    <Hero url="https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/gallery/maestria.jpg" title="Maestrias" />
    <Gallery galleryData={galleryData} />
    </>
    

  )
}
