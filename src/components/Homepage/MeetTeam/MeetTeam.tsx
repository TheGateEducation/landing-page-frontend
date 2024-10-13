import React from "react";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardFooter,
} from "@src/components/Homepage/MeetTeam/Card";
import { buttonVariants } from "@src/components/Homepage/MeetTeam/ButtonVariants";
import { Linkedin } from "lucide-react";
import Image from "next/legacy/image";
import { Mail } from "lucide-react";
interface SocialNetworkProps {
    name: string;
    email?: string;
    url: string;
}
interface DataProps {
    name: string;
    position: string;
    imageUrl: string;
    socialNetwork: SocialNetworkProps[];
}

const data: DataProps[] = [
    {
        name: "Paulina Valdés Rochín",
        position: "Founder & CEO",
        imageUrl:
            "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/home/pau.jpeg",
        socialNetwork: [
            {
                name: "Linkedin",
                url: "https://www.linkedin.com/in/paulina-vald%C3%A9s-roch%C3%ADn-272b294/",
            },
            {
                name: "Email",
                url: "mailto:paulina@thegate-education.com",
            },
        ],
    },
    {
        name: "Alejandra Hernández García",
        position: "Institutional Relations & Sr. Student Counsellor",
        imageUrl:
            "https://images-bucket-landing-page.s3.us-east-2.amazonaws.com/public/home/alejandra.jpeg",
        socialNetwork: [
            {
                name: "Linkedin",
                url: "https://www.linkedin.com/in/alejandra-hernandezgarcia/",
            },
            {
                name: "Email",
                url: "mailto:alejandra@thegate-education.com",
            },
        ],
    },
];

const MeetTeam = () => {
    const socialIcon = (iconName: string) => {
        switch (iconName) {
            case "Linkedin":
                return <Linkedin size="20" />;
            case "Email":
                return <Mail size="20" />;
        }
    };

    return (
        <div className="relative w-full h-auto pb-10">
            <div className="flex flex-col items-center justify-center w-full h-full text-center relative p-5  ">
                <div className="max-w-screen-lg space-y-10 p-10 pb-20 ">
                    <h1 className=" text-2xl md:text-3xl lg:text-4xl font-bold text-customOrange">
                        Conoce el equipo
                    </h1>
                </div>
                <div className="grid md:grid-cols-2 gap-8 gap-y-10">
                    {data.map(
                        ({
                            imageUrl,
                            name,
                            position,
                            socialNetwork,
                        }: DataProps) => (
                            <Card
                                key={name}
                                className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
                            >
                                <CardHeader className="mt-8 flex-col justify-center items-center pb-2">
                                    <div className="absolute -top-12 rounded-full w-24 h-24 aspect-square">
                                        <Image
                                            src={imageUrl}
                                            alt={`${name} ${position}`}
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded-full"
                                        />
                                    </div>
                                    <CardTitle className="text-center">
                                        {name}
                                    </CardTitle>
                                    <CardDescription className="text-primary">
                                        {position}
                                    </CardDescription>
                                </CardHeader>
                                <CardFooter>
                                    {socialNetwork.map(
                                        ({ name, url }: SocialNetworkProps) => (
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
                                                    <span className="sr-only">
                                                        {name} icon
                                                    </span>
                                                    {socialIcon(name)}
                                                </a>
                                            </div>
                                        )
                                    )}
                                </CardFooter>
                            </Card>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};
export default MeetTeam;
