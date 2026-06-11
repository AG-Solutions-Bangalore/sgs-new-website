import { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { motion } from "framer-motion";
import AnimateOnScroll from "../AnimateOnScroll/AnimateOnScroll";
import LazyMap from "./LazyMap";
import { showErrorToast, showSuccessToast } from "../../utils/toast";
import { useApiMutation } from "../../hooks/useApiMutation";

const { TextArea } = Input;

const ContactForm = () => {
  const { trigger: submitTrigger, loading: loader } = useApiMutation();

  const onFinish = async (values) => {
    try {
      const res = await submitTrigger({
        url: "/createContact",
        method: "post",
        data: values,
      });
      if (res.code == 201) {
        showSuccessToast("Request submitted successfully!");
        form.resetFields();
      } else if (res.code == 422) {
        showErrorToast(res.message || "Failed to save registration.");
      }
    } catch (err) {
      console.error(err);
      showErrorToast(err?.response?.data?.message || "Something went wrong!");
    }
  };

  const [form] = Form.useForm();
  const styledata =
    "!rounded-xl !bg-white/80  !border-white/50 focus:!border-orange-500 focus:!ring-2 focus:!ring-orange-300 !shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:!border-orange-400 transition-all";

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-orange-50/60 via-white to-orange-100/40">
      {/* Static Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] rounded-full opacity-25 transform-gpu pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(253,164,175,0.8) 0%, rgba(253,186,116,0) 70%)' }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full opacity-20 transform-gpu pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(251,146,60,0.8) 0%, rgba(253,224,71,0) 70%)' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center max-w-7xl mx-auto">
          {/* Form Section */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full p-8 md:p-10 rounded-[2.5rem] bg-white border border-orange-100 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(249,115,22,0.1)] transition-shadow duration-300">
              <AnimateOnScroll type="zoom-in" delay={0.1}>
                <div className="mb-10 text-left">
                  <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                    Get in{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                      Touch
                    </span>
                  </h1>
                  <p className="text-lg text-gray-600 font-medium">
                    We’d love to hear from you! Whether you have a question,
                    suggestion, or want to collaborate, feel free to reach out.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll type="fade-right" delay={0.1}>
                <Form
                  form={form}
                  layout="vertical"
                  onFinish={onFinish}
                  requiredMark={false}
                  className="flex flex-col gap-2"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                    }
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Form.Item
                      className="!mb-2"
                      label={
                        <span className="!font-bold !text-gray-700">
                          Full Name <span className="text-red-500">*</span>
                        </span>
                      }
                      name="userName"
                      rules={[
                        { required: true, message: "User Name is required" },
                      ]}
                    >
                      <Input
                        placeholder="John Doe"
                        className={styledata}
                        size="large"
                      />
                    </Form.Item>

                    <Form.Item
                      className="!mb-2"
                      label={
                        <span className="!font-bold !text-gray-700">
                          Mobile <span className="text-red-500">*</span>
                        </span>
                      }
                      name="userMobile"
                      rules={[
                        { required: true, message: "Mobile No is required" },
                        {
                          pattern: /^[0-9]{10}$/,
                          message: "Mobile must be 10 digits",
                        },
                      ]}
                    >
                      <Input
                        placeholder="+91"
                        maxLength={10}
                        className={styledata}
                        size="large"
                      />
                    </Form.Item>
                  </div>

                  <Form.Item
                    className="!mb-2 mt-2"
                    label={
                      <span className="!font-bold !text-gray-700">
                        Email Address <span className="text-red-500">*</span>
                      </span>
                    }
                    name="userEmail"
                    rules={[
                      { required: true, message: "Email is required" },
                      { type: "email", message: "Enter a valid email" },
                    ]}
                  >
                    <Input
                      placeholder="hello@example.com"
                      className={styledata}
                      size="large"
                    />
                  </Form.Item>

                  <Form.Item
                    className="!mb-2 mt-2"
                    label={
                      <span className="!font-bold !text-gray-700">
                        Message <span className="text-red-500">*</span>
                      </span>
                    }
                    name="userMessage"
                    rules={[{ required: true, message: "Message is required" }]}
                  >
                    <TextArea
                      rows={5}
                      placeholder="How can we help you?"
                      className={styledata}
                    />
                  </Form.Item>

                  <Form.Item className="flex justify-start mt-6 !mb-0">
                    <Button
                      htmlType="submit"
                      type="primary"
                      size="large"
                      loading={loader}
                      className="h-14 px-10 rounded-2xl !bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold text-lg border-0 shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-1 transition-all duration-300 w-full md:w-auto"
                    >
                      Send Message
                    </Button>
                  </Form.Item>
                </Form>
              </AnimateOnScroll>
            </div>
          </div>

          {/* Map Section */}
          <div className="lg:col-span-6 relative h-full min-h-[400px]">
            <AnimateOnScroll type="fade-up" delay={0.2}>
              <div className="h-full w-full rounded-[2.5rem] overflow-hidden border-8 border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.1)]  group">
                <div className="w-full h-full transform transition-transform duration-700 group-hover:scale-105">
                  <LazyMap />
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
