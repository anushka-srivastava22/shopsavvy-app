import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          ShopSavvy is a dynamic ecommerce website that revolutionizes online shopping. With its user-friendly interface and powerful search capabilities, it connects consumers with an extensive range of products from top retailers. ShopSavvy's innovative price comparison feature ensures users get the best deals, while its personalized recommendations make shopping a breeze. With a secure and seamless checkout process, ShopSavvy provides a convenient and enjoyable shopping experience for customers worldwide. Explore, compare, and shop smartly with ShopSavvy today!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;