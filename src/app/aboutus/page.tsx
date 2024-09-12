import SubNavbar from "@/components/nav-footer/SubNavbar";
import Image from "next/image";
import React from "react";
import homePageImg from "../../../public/homePage.png";
import Link from "next/link";
import { LuLinkedin } from "react-icons/lu";
import { LuGithub } from "react-icons/lu";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";
export default function page() {
  return (
    <main className="flex flex-col  items-center justify-center gap-20 text-white">
      <div className="max-w-[1280px]">
      <SubNavbar />
      <article className="flex mt-10 flex-col gap-10">
        <h1 className="text-5xl">About Us</h1>
        <div className="flex gap-20 max-lg:flex-col">
          <div className="flex  max-lg:w-full flex-col gap-5 text-2xl">
            <p>
              Snippet2Sketch is an online educational tool designed to help
              students and educators understand and visualize data structures
              and algorithms. It provides an interactive platform where users
              can see graphical representations of algorithms in action,
              allowing users for a new intuitive understanding of complex
              concepts.
            </p>
            <p>
              One can use this tool to gain understanding about data structures
              and also visualize them. This helps to have a clear cut
              understanding in every concepts of DSA.
            </p>
            <p>So why wait??</p>
            <Button className="bg-white text-black w-fit font-medium rounded-full hover:text-white hover:border p-6 text-lg">Visualise!</Button>
          </div>
        </div>
      </article>
      <section className="my-20 flex  flex-col gap-10">
        <h2 className="text-4xl">Team</h2>
        <div className="flex flex-wrap justify-between gap-10">
          <div className="flex w-[48%] flex-col gap-5 rounded-2xl border border-white p-5 max-lg:w-[45%] max-md:w-full">
            <p className="text-3xl">Babith K P</p>
            <p className="text-xl">
              🚀 Passionate about creating immersive digital experiences and
              solving real-world challenges through technology. 💻 Excited to
              collaborate with experts in the field to drive innovation and push
              boundaries.
            </p>
            <div className="mt-5">
              <ul className="flex gap-3">
                <li>
                  <Link href={"https://www.linkedin.com/in/babith-k-p-49a43b254/"} target="_blank">
                    <LuLinkedin size={25} />
                  </Link>
                </li>
                <li>
                  <Link href={"https://github.com/Babithkp"} target="_blank">
                    <LuGithub size={25} />
                  </Link>
                </li>
                <li>
                  <Link href={"https://drive.google.com/file/d/1TqdJ7dxD4RG4oU40l86vEEaZaJJOadve/view?usp=drive_link"} target="_blank">
                    <IoPaperPlaneOutline size={25} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex w-[48%] flex-col gap-5 justify-between rounded-2xl border border-white p-5 max-lg:w-[45%] max-md:w-full">
            <p className="text-3xl">Thomas Antony S</p>
            <p className="text-xl">
              👋 I&lsquo;m a BE CSE student in my pre-final year. I constantly
              make efforts to become a good developer through learning.
            </p>
            <div className="mt-5">
              <ul className="flex gap-3">
                <li>
                  <Link href={"https://www.linkedin.com/in/thomas-antony-s/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} target="_blank">
                    <LuLinkedin size={25} />
                  </Link>
                </li>
                <li>
                  <Link href={"https://github.com/ThomasAntonyS"} target="_blank">
                    <LuGithub size={25} />
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>
                    <IoPaperPlaneOutline size={25} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex w-[48%] flex-col gap-5 justify-between rounded-2xl border border-white p-5 max-lg:w-[45%] max-md:w-full">
            <p className="text-3xl">Vikas Thapa</p>
            <p className="text-xl">
              👋 Hello, I&lsquo;m Vikas B , a motivated third-year engineering
              student with a passion for innovation and problem-solving. 💡
            </p>
            <div className="mt-5">
              <ul className="flex gap-3">
                <li>
                  <Link href={"https://www.linkedin.com/in/vikas-thapa-2395b6265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} target="_blank">
                    <LuLinkedin size={25} />
                  </Link>
                </li>
                <li>
                  <Link href={"https://github.com/Thapavikas"} target="_blank">
                    <LuGithub size={25} />
                  </Link>
                </li>
                <li>
                  <Link href={"/"}>
                    <IoPaperPlaneOutline size={25} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex w-[48%] flex-col gap-5 rounded-2xl border border-white p-5 max-lg:w-[45%] max-md:w-full">
            <p className="text-3xl">Sudarshan V</p>
            <p className="text-xl">
              As a passionate UI/UX Designer and Frontend Web Developer, I bring
              ideas to life through intuitive design and robust code. With a
              keen eye for aesthetics and a deep understanding of user behavior,
              I create seamless and engaging digital experiences.
            </p>
            <div className="mt-5">
              <ul className="flex gap-3">
                <li>
                  <Link href={"https://www.linkedin.com/in/sudarshan-v-91168b253/"} target={"_blank"}>
                    <LuLinkedin size={25} />
                  </Link>
                </li>
                <li>
                  <Link href={"https://github.com/Codeninja004"} target={"_blank"}>
                    <LuGithub size={25} />
                  </Link>
                </li>
                <li>
                  <Link href={"https://drive.google.com/file/d/16fIwEIN7TA6DZ4yFV-GeTeuuiP3cfFc_/view?usp=drivesdk"} target={"_blank"}>
                    <IoPaperPlaneOutline size={25} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
              </div>
    </main>
  );
}
