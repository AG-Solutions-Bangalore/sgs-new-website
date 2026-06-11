import { UploadOutlined } from "@ant-design/icons";
import {
  Button,
  DatePicker,
  Form,
  Image,
  Input,
  message,
  Select,
  Upload,
} from "antd";
import {
  Calendar,
  Mail,
  MapPin,
  Phone,
  UploadCloud,
  User,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import membershipTypes from "../../json/membershipTypes.json";
import categoryTypes from "../../json/samaj.json";

import { useApiMutation } from "../../hooks/useApiMutation";
import CropImageModal from "../CropImageModal/CropImageModal";

const MemberForm = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const { trigger: submitTrigger, loading: submitLoading } = useApiMutation();

  const selectedUserType = Form.useWatch("user_type", form);

  const isCouple = selectedUserType === "Couple Membership";

  const [userImageInfo, setUserImageInfo] = useState({
    file: null,
    preview: "",
  });

  const [spouseImageInfo, setSpouseImageInfo] = useState({
    file: null,
    preview: "",
  });

  const [cropState, setCropState] = useState({
    modalVisible: false,
    imageSrc: null,
    tempFileName: "",
    target: "",
  });

  const inputStyle = `
  !h-14
  !rounded-2xl
  !border-gray-200
  !bg-white/80
  backdrop-blur-md
  hover:!border-orange-400
  focus:!border-orange-500
  focus:!shadow-[0_0_0_4px_rgba(249,115,22,0.15)]
  transition-all
  duration-300
`;

  const textareaStyle = `
  !rounded-2xl
  !bg-white/80
  !border-gray-200
  hover:!border-orange-400
  focus:!border-orange-500
  focus:!shadow-[0_0_0_4px_rgba(249,115,22,0.15)]
`;

  const handleSubmit = async (values) => {
    try {
      const formData = new FormData();

      formData.append("user_mid", values.user_mid || "");
      formData.append("user_full_name", values.user_full_name?.trim() || "");

      formData.append(
        "user_dob",
        values.user_dob ? values.user_dob.format("YYYY-MM-DD") : "",
      );

      formData.append("user_mobile", values.user_mobile?.trim() || "");

      formData.append("user_whatsapp", values.user_whatsapp?.trim() || "");

      formData.append("user_email", values.user_email?.trim() || "");

      formData.append("user_add", values.user_add?.trim() || "");

      formData.append(
        "user_spouse_name",
        values.user_spouse_name?.trim() || "",
      );

      formData.append(
        "user_spouse_mobile",
        values.user_spouse_mobile?.trim() || "",
      );

      formData.append(
        "user_spouse_dob",
        values.user_spouse_dob
          ? values.user_spouse_dob.format("YYYY-MM-DD")
          : "",
      );

      formData.append("user_type", values.user_type || "");
      formData.append("user_cat", values.user_cat || "");

      if (userImageInfo.file) {
        formData.append("user_image", userImageInfo.file);
      }

      if (spouseImageInfo.file) {
        formData.append("spouse_image", spouseImageInfo.file);
      }

      const res = await submitTrigger({
        url: "/create-member",
        method: "post",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.code === 201) {
        message.success(res.message || "Registration Successful");

        form.resetFields();

        setUserImageInfo({
          file: null,
          preview: "",
        });

        setSpouseImageInfo({
          file: null,
          preview: "",
        });

        navigate("/thank-you");
      } else {
        message.error(res.message || "Failed");
      }
    } catch (error) {
      message.error("Something went wrong");
    }
  };

  const openCropper = (file, target) => {
    const reader = new FileReader();

    reader.onload = () => {
      setCropState({
        modalVisible: true,
        imageSrc: reader.result,
        tempFileName: file.name,
        target,
      });
    };

    reader.readAsDataURL(file);
  };

  const handleCroppedImage = ({ blob, fileUrl }) => {
    const file = new File([blob], cropState.tempFileName || "image.jpg", {
      type: blob.type,
    });

    if (cropState.target === "user") {
      setUserImageInfo({
        file,
        preview: fileUrl,
      });
    }

    if (cropState.target === "spouse") {
      setSpouseImageInfo({
        file,
        preview: fileUrl,
      });
    }

    setCropState({
      modalVisible: false,
      imageSrc: null,
      tempFileName: "",
      target: "",
    });
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-red-50 py-24 px-4">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-400/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-red-400/20 blur-3xl rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-gray-900">
            Membership{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-pink-500">
              Registration
            </span>
          </h1>

          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mt-5 leading-relaxed">
            Become a part of our beautiful community and stay connected with our
            culture and traditions.
          </p>
        </motion.div>

        {/* Form Card */}
        <div className="p-[1px] rounded-[2.5rem] bg-gradient-to-br from-orange-400 via-red-400 to-pink-500">
          <div className="bg-white/80 backdrop-blur-2xl rounded-[2.5rem] p-6 md:p-10 shadow-[0_20px_80px_rgba(249,115,22,0.15)]">
            <Form
              form={form}
              layout="vertical"
              onFinish={handleSubmit}
              requiredMark={false}
            >
              {/* Personal Info */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-8">
                  Personal Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Form.Item
                    name="user_mid"
                    label="MID"
                    rules={[
                      {
                        required: true,
                        message: "Please Enter MID",
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder="Enter MID"
                      prefix={<User size={18} />}
                      className={inputStyle}
                    />
                  </Form.Item>

                  <Form.Item
                    name="user_full_name"
                    label="Full Name"
                    rules={[
                      {
                        required: true,
                        message: "Please Enter Full Name",
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder="Enter Full Name"
                      prefix={<Users size={18} />}
                      className={inputStyle}
                    />
                  </Form.Item>

                  <Form.Item
                    name="user_dob"
                    label="Date of Birth"
                    rules={[
                      {
                        required: true,
                        message: "Select DOB",
                      },
                    ]}
                  >
                    <DatePicker
                      size="large"
                      className={`w-full ${inputStyle}`}
                      format="DD-MM-YYYY"
                    />
                  </Form.Item>

                  <Form.Item
                    name="user_mobile"
                    label="Mobile Number"
                    rules={[
                      {
                        required: true,
                        message: "Enter Mobile Number",
                      },
                    ]}
                  >
                    <Input
                      maxLength={10}
                      size="large"
                      placeholder="Enter Mobile Number"
                      prefix={<Phone size={18} />}
                      className={inputStyle}
                    />
                  </Form.Item>
                </div>
              </div>

              {/* Contact */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-8">
                  Contact Details
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Form.Item name="user_whatsapp" label="WhatsApp Number">
                    <Input
                      maxLength={10}
                      size="large"
                      placeholder="Enter WhatsApp Number"
                      prefix={<Phone size={18} />}
                      className={inputStyle}
                    />
                  </Form.Item>

                  <Form.Item
                    name="user_email"
                    label="Email Address"
                    rules={[
                      {
                        required: true,
                        message: "Enter Email",
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder="Enter Email"
                      prefix={<Mail size={18} />}
                      className={inputStyle}
                    />
                  </Form.Item>
                </div>
              </div>

              {/* Membership */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-8">
                  Membership Details
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Form.Item
                    name="user_type"
                    label="Membership Type"
                    rules={[
                      {
                        required: true,
                        message: "Select Membership Type",
                      },
                    ]}
                  >
                    <Select
                      size="large"
                      options={membershipTypes}
                      placeholder="Select Membership Type"
                      className="purple-select"
                    />
                  </Form.Item>

                  <Form.Item
                    name="user_cat"
                    label="User Category"
                    rules={[
                      {
                        required: true,
                        message: "Select Category",
                      },
                    ]}
                  >
                    <Select
                      size="large"
                      options={categoryTypes}
                      placeholder="Select Category"
                      className="purple-select"
                    />
                  </Form.Item>
                </div>
              </div>

              {/* Spouse */}
              {isCouple && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-800 mb-8">
                    Spouse Details
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Form.Item name="user_spouse_name" label="Spouse Name">
                      <Input
                        size="large"
                        placeholder="Enter Spouse Name"
                        prefix={<User size={18} />}
                        className={inputStyle}
                      />
                    </Form.Item>

                    <Form.Item name="user_spouse_mobile" label="Spouse Mobile">
                      <Input
                        size="large"
                        placeholder="Enter Mobile"
                        prefix={<Phone size={18} />}
                        className={inputStyle}
                      />
                    </Form.Item>

                    <Form.Item name="user_spouse_dob" label="Spouse DOB">
                      <DatePicker
                        size="large"
                        className={`w-full ${inputStyle}`}
                        format="DD-MM-YYYY"
                      />
                    </Form.Item>
                  </div>
                </div>
              )}

              {/* Upload */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-8">
                  Upload Photos
                </h2>

                <div
                  className={`grid ${
                    isCouple ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"
                  } gap-6`}
                >
                  {/* User Upload */}
                  <Form.Item
                    name="user_image"
                    label="Member Image"
                    rules={[
                      {
                        required: true,
                        message: "Upload Image",
                      },
                    ]}
                  >
                    <Upload
                      showUploadList={false}
                      beforeUpload={(file) => {
                        openCropper(file, "user");
                        return false;
                      }}
                    >
                      <div className="group border-2 border-dashed border-orange-300 rounded-3xl p-8 text-center hover:border-orange-500 hover:bg-orange-50/50 transition-all duration-300 cursor-pointer">
                        {userImageInfo.preview ? (
                          <Image
                            src={userImageInfo.preview}
                            width={120}
                            height={120}
                            className="rounded-2xl object-cover"
                          />
                        ) : (
                          <>
                            <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center mx-auto mb-4">
                              <UploadCloud className="text-orange-500" />
                            </div>

                            <h4 className="font-semibold text-gray-800">
                              Upload Member Image
                            </h4>

                            <p className="text-sm text-gray-500 mt-1">
                              PNG, JPG supported
                            </p>
                          </>
                        )}
                      </div>
                    </Upload>
                  </Form.Item>

                  {/* Spouse Upload */}
                  {isCouple && (
                    <Form.Item name="spouse_image" label="Spouse Image">
                      <Upload
                        showUploadList={false}
                        beforeUpload={(file) => {
                          openCropper(file, "spouse");
                          return false;
                        }}
                      >
                        <div className="group border-2 border-dashed border-orange-300 rounded-3xl p-8 text-center hover:border-orange-500 hover:bg-orange-50/50 transition-all duration-300 cursor-pointer">
                          {spouseImageInfo.preview ? (
                            <Image
                              src={spouseImageInfo.preview}
                              width={120}
                              height={120}
                              className="rounded-2xl object-cover"
                            />
                          ) : (
                            <>
                              <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center mx-auto mb-4">
                                <UploadCloud className="text-orange-500" />
                              </div>

                              <h4 className="font-semibold text-gray-800">
                                Upload Spouse Image
                              </h4>

                              <p className="text-sm text-gray-500 mt-1">
                                PNG, JPG supported
                              </p>
                            </>
                          )}
                        </div>
                      </Upload>
                    </Form.Item>
                  )}
                </div>
              </div>

              {/* Address */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-8">
                  Address
                </h2>

                <Form.Item
                  name="user_add"
                  rules={[
                    {
                      required: true,
                      message: "Enter Address",
                    },
                  ]}
                >
                  <Input.TextArea
                    rows={5}
                    placeholder="Enter Complete Address"
                    prefix={<MapPin />}
                    className={textareaStyle}
                  />
                </Form.Item>
              </div>

              {/* Submit */}
              <div className="text-center">
                <Button
                  htmlType="submit"
                  loading={submitLoading}
                  className="
                  !h-16
                  !px-14
                  !rounded-2xl
                  !border-0
                  !text-lg
                  !font-bold
                  !text-white
                  !bg-gradient-to-r
                  from-orange-500
                  via-red-500
                  to-pink-500
                  hover:scale-105
                  hover:shadow-2xl
                  hover:shadow-orange-500/30
                  transition-all
                  duration-300
                  "
                >
                  Register Member
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>

      <CropImageModal
        open={cropState.modalVisible}
        imageSrc={cropState.imageSrc}
        onCancel={() =>
          setCropState((prev) => ({
            ...prev,
            modalVisible: false,
          }))
        }
        onCropComplete={handleCroppedImage}
        maxCropSize={{
          width: 400,
          height: 400,
        }}
        title="Crop Member Image"
        cropstucture={true}
      />
    </div>
  );
};

export default MemberForm;
