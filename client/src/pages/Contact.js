import React from "react";
import Layout from "./../components/Layout/Layout";
import ChatBot from "react-simple-chatbot";
import { Segment } from "semantic-ui-react";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  const steps = [
    {
      id: 'Greet',
      message: 'Hello, Welcome to Our Website',
      trigger: 'Ask Name'
    },
    {
      id: 'Ask Name',
      message: 'Please enter your name',
      trigger: 'waiting1'
    },
    {
      id: "waiting1",
      user: true,
      trigger: "Name"

    },
    {
      id: "Name",
      message: "Hi {previousValue}, Please select your issues",
      trigger: "issues"
    },
    {
      id: "issues",
      options: [{ value: "Kids-Wear", label: "Kids-Wear", trigger: "Kids-Wear" },
      { value: "Women-Wear", label: "Women-Wear", trigger: "Women-Wear" },
      { value: "Mobile", label: "Mobile", trigger: "Mobile" },
      { value: "Men-Wear", label: "Men-Wear", trigger: "Men-Wear" },
      { value: "Watch", label: "Watch", trigger: "Watch" },
      ],
    },
    {
      id: "Kids-Wear",
      message: "Kindly contact to Rahul - 98746593746 to report your issue. Thank you for contacting us.",
      end: true
    },
    {
      id: "Women-Wear",
      message: "Kindly contact to Raj - 746593746 to report your issue. Thank you for contacting us",
      end: true
    },
    {
      id: "Men-Wear",
      message: "Kindly contact to Rahul - 98746593746 to report your issue. Thank you for contacting us.",
      end: true
    },
    {
      id: "Mobile",
      message: "Kindly contact to Raj - 746593746 to report your issue. Thank you for contacting us",
      end: true
    },
    {
      id: "Watch",
      message: "Kindly contact to Raj - 746593746 to report your issue. Thank you for contacting us",
      end: true
    }

  ]
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-5 ">
        <>
        <Segment style={{ textAlign: 'center' }}>
          <ChatBot steps={steps} />
        </Segment>
      </>
        </div>
        <div className="col-md-5  mt-5 pt-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            For any query and info about product feel free to call anytime we 24X7
            vaialible
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@ecommerceapp.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
      

    </Layout>
  );
};

export default Contact;