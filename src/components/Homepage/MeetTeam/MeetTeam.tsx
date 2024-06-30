import React from "react";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@src/components/Homepage/MeetTeam/Card";
import { buttonVariants } from "@src/components/Homepage/MeetTeam/ButtonVariants"; 
import { Linkedin } from "lucide-react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import paulina from "@src/images/paulina.jpeg";
import alejandra from "@src/images/alejandra.jpeg";
interface SocialNetworkProps{
  name: string,
  url: string,
}
interface DataProps {
  name: string,
  position: string,
  imageUrl: string;
  socialNetwork: SocialNetworkProps[];
}

const data:DataProps[] = [
  {
    name:"Paulina Valdés Rochín",
    position:"CEO",
    imageUrl: "@src/images/paulina.jpeg",
    socialNetwork:[
      {
        name:"Linkedin",
        url:"https://www.linkedin.com/in/paulina-vald%C3%A9s-roch%C3%ADn-272b294/"
      }
    ]
  },
  {
    name:"Alejandra Hernández García",
    position:"Student Counselor",
    imageUrl: "@src/images/alejandra.jpeg",
    socialNetwork:[
      {
        name:"Linkedin",
        url:"https://www.linkedin.com/in/alejandra-hernandezgarcia/"
      }
    ]
  },
  {
    name:"Gonzalo Perez Piaggio",
    position:"Student Counselor",
    imageUrl: "@src/images/alejandra.jpeg",
    socialNetwork:[
      {
        name:"Linkedin",
        url:"https://www.linkedin.com/in/gonzalo-perez-piaggio-b023591/"
      }
    ]

  }

];

const MeetTeam = () => {

  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size="20" />;
    }};

  return (
    <div className="relative w-full h-auto pb-10">
      <div className="flex flex-col items-center justify-center w-full h-full text-center relative p-5  ">
        <div className="max-w-screen-lg space-y-10 p-10 pb-20 ">
          <h1 className=" text-2xl md:text-3xl lg:text-4xl font-bold text-customOrange">Conoce el equipo</h1>
        </div>
        <div className="grid md:grid-cols-3 gap-8 gap-y-10">
        {data.map(
          ({ imageUrl, name, position, socialNetwork }: DataProps) => (
            <Card
              key={name}
              className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
            >
              <CardHeader className="mt-8 flex justify-center items-center pb-2">
                <img
                  src={imageUrl}
                  alt={`${name} ${position}`}
                  className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                />
                <CardTitle className="text-center">{name}</CardTitle>
                <CardDescription className="text-primary">
                  {position}
                </CardDescription>
              </CardHeader>

              <CardFooter>
                {socialNetwork.map(({ name, url }: SocialNetworkProps) => (
                  <div key={name}>
                    <a
                      rel="noreferrer noopener"
                      href={url}
                      target="_blank"
                      className={buttonVariants({
                        variant: "ghost",
                        size: "sm",
                      })}
                    >
                      <span className="sr-only">{name} icon</span>
                      {socialIcon(name)}
                    </a>
                  </div>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
      </div>
    </div>
  )
}
export default MeetTeam;