// @flow strict
'use client';
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import ProfileCard from "../../helper/profile-card";
import DecryptedText from "../../helper/decrypted-text";
import ScrambledText from "../../helper/scrambled-text";
import AnimationLottie from "../../helper/animation-lottie";
import thinkingLottie from "@/public/lottie/thinking.json";

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative lg:h-[80vh] lg:items-center">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="head bg-[#1a144375] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          {/* <p className="head text-4xl font-bold leading-10 mb-5 mt-5 text-[#16f2b3] md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
           🤔 Who am I ? 
          </p> */}

          <p className="head text-4xl font-bold leading-10 mb-5 mt-5 text-[#16f2b3] md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem] flex items-center gap-3">
  <span className="w-10 h-10 md:w-12 md:h-12">
    <AnimationLottie animationPath={thinkingLottie} />
  </span>
  Curious About Me?
</p>

         {/* <DecryptedText
            text={`${personalData.description}`}
            className="text-gray-200 text-lg lg:text-2xl"
            encryptedClassName="text-pink-500"
            revealDirection="start"
            speed={1}
            sequential={true}
            animateOn="view"
          /> */}

          <ScrambledText
            className="text-gray-200 text-lg lg:text-2xl"
            radius={100}
            duration={1.2}
            speed={0.5}
            scrambleChars={".:"}
          > 
          
          <span className="text-pink-500">My name is Vidhey Bhogadi</span>, and I am a <span className="text-blue-500">professional</span> and <span className="text-blue-500">enthusiastic programmer</span> in my daily life. I have a strong commitment to <span className="text-blue-500">continuous learning</span> and a proactive approach to <span className="text-blue-500">self-improvement</span>. <span className="text-blue-500">Exploring</span> new technologies and <span className="text-blue-500">solving</span> intricate problems are my passions. I possess <span className="text-blue-500">expertise in various domains</span> including web application development, mobile app development, and machine learning, with a particular emphasis on leveraging JavaScript and Python for versatile solutions. I am <span className="text-blue-500">eagerly seeking new opportunities</span> that allow me to apply my skills effectively and contribute to impactful projects. That's all about me, <a href="#contact" className="text-pink-500">then what about you?</a>
          
          </ScrambledText>

        </div>
        
        {/* <div className="flex justify-center order-1 lg:order-2 mr-5">
          <Image
            src={personalData.profile2}
            width={450}
            height={280}
            alt="Vidhey Bhogadi"
            className="rounded-3xl transition-all duration-1000 md:grayscale md:blur-sm hover:blur-0 hover:grayscale-0 hover:scale-110 cursor-pointer"
          />
        </div> */}

        
        <div className="flex justify-center order-1 lg:order-2 mr-5">
          <ProfileCard
              name="Vidhey Bhogadi"
              title="Software Development Engineer"
              handle="vidhey012"
              status="Online"
              contactText="Follow"
              avatarUrl="/profile-card/profile.png"
              showUserInfo={true}
              enableTilt={true}
              onContactClick={() => window.open("https://github.com/Vidhey012")}
            />

        </div>
      </div>
    </div>
  );
};

export default AboutSection;