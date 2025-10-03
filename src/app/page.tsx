"use client";

import Image from "next/image";
import VCard from "vcard-creator";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGithubSquare,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

import {
  faContactCard,
  faEnvelope,
  faFileLines,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import Button from "./components/Button";
import QRCode from "./components/QRCode";
import SocialButton from "./components/SocialNetwork";
import Tile from "./components/Tile";
import classes from "./page.module.scss";

export default function Home() {
  const downloadVCard = () => {
    // Create a new vCard.
    const myVCard = new VCard();

    // Add contact information.
    myVCard
      .addName("Klatt", "James")
      .addCompany("Full-Stack Web Developer")
      .addJobtitle("Full-Stack Web Developer")
      .addEmail("jamesklatt@mail.com")
      .addPhoneNumber("(727) 389-1281")
      .addAddress("", "", "", "Tampa", "", "", "FL")
      .addURL("https://www.linkedin.com/in/jamesklatt/")
      .addURL("https://github.com/ghazlawl")
      .addURL("https://twitter.com/ghazlawl")
      .addNote(
        "Passionate full-stack developer seeking new opportunities to create impactful web applications."
      );

    // Generate vCard string.
    const vCardString = myVCard.toString();

    // Create the download link and trigger the download.
    const blob = new Blob([vCardString], { type: "text/vcard" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "James_Klatt_Contact.vcf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className={`${classes.container} min-h-lvh px-5 py-10`}>
      <div className="w-9/10 max-w-[350px] m-auto">
        <div className="flex justify-center mb-8">
          <div
            className={`${classes.image} shadow-lg overflow-hidden rounded-full`}
          >
            <Image
              src="/images/me.webp"
              alt="James Klatt"
              width={200}
              height={200}
              className="rounded-full"
              priority
            />
          </div>
        </div>
        <div className="mb-8 text-center">
          <h1 className="font-bold mb-1 text-4xl">James Klatt</h1>
          <p className="mb-1 opacity-75 text-2xl">Full-Stack Web Developer</p>
          <p className="mb-4 text-xs">Tampa, FL</p>
          <p className="text-md">
            Passionate full-stack developer seeking new opportunities to create
            impactful web applications.
          </p>
        </div>
        <Button onClick={downloadVCard}>
          <FontAwesomeIcon
            icon={faContactCard}
            className="mr-2"
            style={{ width: "16px", height: "16px" }}
          />
          Save Contact
        </Button>
        <hr className="my-8 opacity-25" />
        <Tile href="tel:7273891281" icon={faPhone} label="Phone">
          (727) 389-1281
        </Tile>
        <Tile href="mailto:jamesklatt@mail.com" icon={faEnvelope} label="Email">
          jamesklatt@mail.com
        </Tile>
        <Tile href="#" icon={faFileLines} label="Download">
          Resumé
        </Tile>
        <hr className="my-8 opacity-25" />
        <div className="text-center">
          <h3 className="font-bold mb-4 text-blue-100 text-sm">Connect</h3>
          <div className="flex flex-row justify-center">
            <SocialButton
              href="https://www.linkedin.com/in/jamesklatt/"
              icon={faLinkedin}
            />
            <SocialButton
              href="https://github.com/ghazlawl"
              icon={faGithubSquare}
            />
            <SocialButton
              href="https://twitter.com/ghazlawl"
              icon={faTwitterSquare}
            />
          </div>
        </div>
        <hr className="my-8 opacity-25" />
        <div className="mb-12 text-center">
          <h3 className="font-bold mb-2 text-blue-100 text-sm">Share</h3>
          <p className="mb-4 text-blue-200/75 text-xs opacity-70">
            Scan this QR code to share this page.
          </p>
          <div className="text-center">
            <QRCode
              value={
                typeof window !== "undefined"
                  ? window.location.href
                  : "https://ghazlawl.dev"
              }
            />
          </div>
        </div>
        <div className="bg-blue-100/5 p-3 px-5 text-center rounded-lg">
          <p className="text-blue-100/50 text-xs">
            Made with 🤍 using Next.js, React, TypeScript, and Tailwind CSS.
            Hosted on Vercel.
          </p>
        </div>
      </div>
    </div>
  );
}
