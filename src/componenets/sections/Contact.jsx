import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-family: 'Nunito', sans-serif;
  font-size: 52px;
  text-align: center;
  font-weight: 900;
  margin-top: 20px;
  color: #332F3A;
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 36px;
  }
`;

const Desc = styled.div`
  font-family: 'DM Sans', sans-serif;
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: #635F69;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background: #F4F1FA;
  box-shadow: 
    24px 24px 48px #cdc6d9,
    -24px -24px 48px #ffffff,
    inset 8px 8px 16px rgba(219, 39, 119, 0.05),
    inset -8px -8px 16px rgba(255, 255, 255, 0.9);
  padding: 36px;
  border-radius: 40px;
  margin-top: 28px;
  gap: 18px;
`;

const ContactTitle = styled.div`
  font-family: 'Nunito', sans-serif;
  font-size: 26px;
  margin-bottom: 6px;
  font-weight: 900;
  color: #332F3A;
`;

const ContactInput = styled.input`
  flex: 1;
  background: #F4F1FA;
  box-shadow: inset 6px 6px 12px #cdc6d9, inset -6px -6px 12px #ffffff;
  border: none;
  outline: none;
  font-family: 'DM Sans', sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #332F3A;
  border-radius: 20px;
  padding: 14px 20px;
  transition: all 0.2s ease-in-out;
  
  &:focus {
    box-shadow: inset 6px 6px 12px #cdc6d9, inset -6px -6px 12px #ffffff, 0 0 0 3px rgba(219, 39, 119, 0.25);
  }

  &::placeholder {
    color: #9CA3AF;
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background: #F4F1FA;
  box-shadow: inset 6px 6px 12px #cdc6d9, inset -6px -6px 12px #ffffff;
  border: none;
  outline: none;
  font-family: 'DM Sans', sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #332F3A;
  border-radius: 20px;
  padding: 14px 20px;
  transition: all 0.2s ease-in-out;
  
  &:focus {
    box-shadow: inset 6px 6px 12px #cdc6d9, inset -6px -6px 12px #ffffff, 0 0 0 3px rgba(219, 39, 119, 0.25);
  }

  &::placeholder {
    color: #9CA3AF;
  }
`;

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  background: linear-gradient(135deg, #F472B6 0%, #DB2777 100%);
  padding: 14px 20px;
  margin-top: 6px;
  border-radius: 20px;
  border: none;
  color: #FFFFFF;
  font-family: 'Nunito', sans-serif;
  font-size: 18px;
  font-weight: 900;
  box-shadow: 
    8px 8px 18px #cdc6d9,
    -8px -8px 18px #ffffff,
    inset 3px 3px 6px rgba(255, 255, 255, 0.5),
    inset -3px -3px 6px rgba(219, 39, 119, 0.3);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 
      12px 12px 24px #cdc6d9,
      -12px -12px 24px #ffffff,
      inset 3px 3px 6px rgba(255, 255, 255, 0.6),
      inset -3px -3px 6px rgba(219, 39, 119, 0.4);
  }

  &:active {
    transform: scale(0.92);
    box-shadow: inset 4px 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const Contact = () => {
  const form = useRef();
  const handelSubmit = (e) => {
    e.preventDefault();
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "s_6mjbzq9";
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "temple2r7i7";
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "IV7TvUQKqT4WI";

    emailjs
      .sendForm(
        serviceId,
        templateId,
        form.current,
        publicKey
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          form.current.reset();
        },
        (error) => {
          toast.error("Failed to send message. Please try again.", {
            position: "bottom-right",
          });
          console.log(error.text);
        }
      );
  };
  return (
    <Container id="Contact">
      <Wrapper>
        <Title>Contact</Title>
        <Desc
          style={{
            marginBottom: "40px",
          }}
        >
          Feel free to reach out to me for any questions or opportunities!
        </Desc>
        <ContactForm ref={form} onSubmit={handelSubmit}>
          <ContactTitle>Email Me </ContactTitle>
          <ContactInput placeholder="Your Email" name="from_email" />
          <ContactInput placeholder="Your Name" name="from_name" />
          <ContactInput placeholder="Subject" name="subject" />
          <ContactInputMessage placeholder="Message" name="message" rows={4} />
          <ContactButton type="submit" value="Send" />
        </ContactForm>
      </Wrapper>
    </Container>
  );
};

export default Contact;