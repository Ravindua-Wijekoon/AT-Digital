import React, { useState } from "react";
import bgImage from "../Assets/Image/Hero_Image.jpg";
import Button from '../Components/Button';
import Image1 from "../Assets/Image/image 1.png";
import Image2 from "../Assets/Image/image 2.png";
import CollapsibleCard from "../Components/CollapsibleCard";


const HomePage = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleToggle = (index) => {
    setExpandedCard((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleClickConsultation = () => {
    alert('Get free consultation Button Clicked!');
  };

  const handleClickLearnMore = () => {
    alert('Learn More Button Clicked!');
  };


  return (
    <div className="bg-white">
      <section className="text-white relative">

        {/* Image */}
        <div
          className="md:h-[700px] sm:h-[448px] h-[218px] bg-cover bg-center flex items-end pl-16 pb-12"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          {/* Content for large screens */}
          <div className="p-10  bg-gradient-to-r from-gradientGreen to-gradientBlue hidden lg:block shadow-lg">
            <h1 className="text-5xl font-bold mb-4">
              We Crush Your <br /> Competitors, Goals, And <br /> Sales Records - Without <br /> The B.S.
            </h1>
            <Button text="Get free consultation" onClick={handleClickConsultation} className={"mt-3"} />
          </div>

        </div>

        {/* Content for small screens */}
        <div className="p-10 bg-gradient-to-r from-green-400 to-blue-500 shadow-lg block lg:hidden">
            <h1 className="text-5xl font-bold mb-4">
              We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
            </h1>
            <Button text="Get free consultation" onClick={handleClickLearnMore} className={"mt-3"} />
          </div>
      </section>


      {/* Services Section */}
      <section className="w-[95%] sm:w-[75%] mx-auto py-10">
        <div className="flex flex-col gap-10">
          
          {/* Service 1 */}
          <div className="p-6 flex flex-col sm:flex-row gap-4  sm:items-start items-center text-center sm:text-left">
            <img src={Image2} alt="Web Development" />
            <div className="m-auto flex flex-col sm:items-start items-center">
              <h3 className="text-[27px] text-textColor font-poppins font-semibold mb-4">
                Web & Mobile App Development
              </h3>
              <p className="text-base mb-4">
                Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.
              </p>
              <Button text="LEARN MORE" onClick={handleClickLearnMore} className={"mt-2"} />
            </div>

          </div>

          {/* Service 2 */}
          <div className="p-6 flex flex-col sm:flex-row gap-4  sm:items-start items-center text-center sm:text-left">
            <img src={Image1} alt="Web Development" className="order-1 sm:order-2" />
            <div className="order-2 sm:order-1 m-auto sm:items-start items-center">
              <h3 className="text-[27px] text-textColor font-poppins font-semibold mb-4">
                Digital Strategy Consulting
              </h3>
              <p className="text-base mb-4">
                Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.
              </p>
              <Button text="LEARN MORE" onClick={handleClickLearnMore} className={"mt-2"} />
            </div>
          </div>

        </div>
      </section>



      {/* FAQ Section */}
      <section className="w-[95%] sm:w-[75%] mx-auto py-10">
        <h2 className=" text-textColor  text-center mb-10 text-[27px]  font-poppins font-semibold">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto mt-8 space-y-4">
          <CollapsibleCard
            title="Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?"
            content="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
            isOpen={expandedCard === 0}
            onToggle={() => handleToggle(0)}
          />
          <CollapsibleCard
            title="Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?"
            content="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
            isOpen={expandedCard === 1}
            onToggle={() => handleToggle(1)}
          />
          <CollapsibleCard
            title="Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?"
            content="Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
            isOpen={expandedCard === 2}
            onToggle={() => handleToggle(2)}  
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
