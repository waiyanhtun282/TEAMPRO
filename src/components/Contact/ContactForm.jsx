import React from "react";
import ButtonGroup from "./ButtonGroup";
import { projectType } from "../../data/projectType";
import { serviceType } from "../../data/serviceType";
import { Button, Label, TextInput, Textarea } from "flowbite-react";

const ContactForm = () => {
  return (
    <div className="flex  md:flex-row flex-col items-center justify-center bg-white md:h-screen px-5 md:px-0">
      <div className="md:left flex md:w-[50%]  flex-col  md:gap-2 gap-3 m-16 md:m-28">
        <h4 className=" text-[22px] md:text-3xl"> send us an email</h4>
        <h3 className="underline font-semibold text-[22px] md:text-3xl">
          hashtag.team@gmail.com
        </h3>
        <h4 className="text-[22px] md:text-3xl">reach us at</h4>
        <h3 className="font-semibold text-[22px] md:text-3xl">
          +95 975 638 4039
        </h3>
      </div>
      <div className="md:right flex md:w-[50%] flex-col gap-2 md:my-auto md:justify-start justify-center md:items-start items-center">
        <h2 className="md:text-4xl font-semibold text-3xl">Hey Got a Project?</h2>
        <h3 className="font-semibold mt-3">Your Project Type</h3>
        <ButtonGroup projectType={projectType} />
        <h3 className="font-semibold">Services You Need</h3>
        <ButtonGroup serviceType={serviceType} />

        <form className="mt-3">
          <div className="flex gap-2">
            <div className="m-2">
              <Label htmlFor="name">Your Name</Label>
              <TextInput
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
              />
            </div>
            <div className="m-2">
              <Label htmlFor="email">Your Email</Label>
              <TextInput
                type="email"
                name="email"
                id="email"
                placeholder="example@hashtag.com"
              />
            </div>
          </div>
          <div className="m-2">
            <Label htmlFor="message">Tell Us More About Your Requirement</Label>
            <Textarea
              rows={"5"}
              cols={"2"}
              id="message"
              placeholder="Your Message..."
            ></Textarea>
          </div>

          <Button className="active-btn rounded-xl m-2" type="submit">
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
