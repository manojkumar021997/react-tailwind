/** @format */

import AboutImg from "../assets/images/img2.png";
import { motion } from "framer-motion";
import Footer from "../components/Footer/Footer";
const About = () => {
  return (
    <div>
      <div className="grid grid-cols-2 h-[80vh]">
        <div className="flex items-center justify-center p-[2rem]">
          <div className="mt-[2rem] flex items-center justify-center">
            <motion.img
              animate={{
                x: 110,
              }}
              initial={{
                x: 0,
              }}
              transition={{
                duration: 1,
              }}
              src={AboutImg}
              alt="aboutImg"
              className="w-[65%] rounded-md object-center object-cover overflow-hidden"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-[18.5px] font-semibold text-shdowColor w-[100%]">
          <div className="mb-[1rem]">
            <span className="text-shdowColor">About</span>
            <span className="text-yellowColor"> Us</span>
          </div>

          <p className="w-[80%] text-center opacity-[70%] hover:opacity-[100]">
            Creating a “meet our team” page adds to your company’s brand value.
            Let your prospective clients know who you are and what you do best.
            While doing that, don’t forget to let your team members shine with
            their unique talents.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default About;
