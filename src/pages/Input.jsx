import { useForm, useFieldArray } from "react-hook-form";
import "./input.css";
import geminiResponse from "../service/geminiResponse";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2, X } from "lucide-react";
import { motion } from "framer-motion";

import * as React from "react";

const Input = () => {
  const navigate = useNavigate();
  const [date, setDate] = React.useState();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    defaultValues: {
      personalDetails: {
        name: "",
        phone: "",
        email: "",
        portfolio: "",
        linkedin: "",
        github: "",
        quote: "",
        image: "",
        location: "",
        title: "",
      },
      education: [{ institute: "", duration: "", domain: "", marks: "" }],
      skills: [{ skill: "", level: "" }],
      experience: [{ company: "", role: "", description: "" }],
      projects: [{ name: "", techStack: "", repo: "", description: "" }],
      certifications: [{ name: "", issueDate: "" }],
      Awards: [{ name: "", description: "" }],
    },
  });
  const handleImageUpload = (event) => {
    const file = event.target.files[0]; // Get file
    if (file) {
      setValue("personalDetails.image", file, { shouldValidate: true }); // ✅ Store file in form
    }
  };
  const [geminiQuote, setGeminiQuote] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingExp, setIsLoadingExp] = useState({}); // Track loading per experience
  const [isLoadingProject, setIsLoadingProject] = useState({}); // Track loading per project
  const [isLoadingAward, setIsLoadingAward] = useState({}); // Track loading per award

  const handleQuoteGenerate = async (title) => {
    setIsLoading(true);
    let prompt;
    if (title != null) {
      prompt = `iam a ${title}, Generate a concise and impactful motivational quote suitable for a resume.  Return only the quote without any additional text.`;
    } else {
      prompt =
        " Generate a concise and impactful motivational quote suitable for a resume.  Return only the quote without any additional text.";
    }
    // Wait for API response
    try {
      const response = await geminiResponse(prompt); // Wait for API response
      if (response) {
        setValue(`personalDetails.quote`, response);
      } else {
        console.error("❌ No response from Gemini API");
      }
    } catch (error) {
      console.error("❌ Error generating quote:", error);
    } finally {
      setIsLoading(false); // Re-enable button after fetching
    }
  };
  const handleAwardGenerate = async (index, name) => {
    setIsLoadingAward((prev) => ({ ...prev, [index]: true })); // Disable only this row

    const prompt = `Generate a short and professional description for an award named '${name}'. Keep it concise and impactful, and return only the description.`;

    try {
      const response = await geminiResponse(prompt);
      if (response) {
        setValue(`Awards.${index}.description`, response); // Update form field
      } else {
        console.error("❌ No response from Gemini API");
      }
    } catch (error) {
      console.error("❌ Error generating award description:", error);
    } finally {
      setIsLoadingAward((prev) => ({ ...prev, [index]: false })); // Re-enable button
    }
  };

  const handleProjectGenerate = async (index, name, techStack) => {
    setIsLoadingProject((prev) => ({ ...prev, [index]: true })); // Disable only this row

    const prompt = `Generate a concise project description for a project named '${name}' using '${techStack}'. Keep it short and professional, return only the description.`;

    try {
      const response = await geminiResponse(prompt);
      if (response) {
        setValue(`projects.${index}.description`, response); // Update form field
      } else {
        console.error("❌ No response from Gemini API");
      }
    } catch (error) {
      console.error("❌ Error generating project description:", error);
    } finally {
      setIsLoadingProject((prev) => ({ ...prev, [index]: false })); // Re-enable button
    }
  };

  const handleExperienceGenerate = async (index, company, role) => {
    setIsLoadingExp((prev) => ({ ...prev, [index]: true })); // Disable only this row

    const prompt = `Generate a professional description for my experience as a ${role} at ${company}. Keep it concise, 1-2 sentences, and return only the description,dont leave any fill in the blanks.`;

    try {
      const response = await geminiResponse(prompt);
      if (response) {
        setValue(`experience.${index}.description`, response); // Update form field
      } else {
        console.error("❌ No response from Gemini API");
      }
    } catch (error) {
      console.error("❌ Error generating experience description:", error);
    } finally {
      setIsLoadingExp((prev) => ({ ...prev, [index]: false })); // Re-enable button
    }
  };

  const {
    fields: eduFields,
    append: addEdu,
    remove: removeEdu,
  } = useFieldArray({ control, name: "education" });
  const {
    fields: skillFields,
    append: addSkill,
    remove: removeSkill,
  } = useFieldArray({ control, name: "skills" });
  const {
    fields: expFields,
    append: addExp,
    remove: removeExp,
  } = useFieldArray({ control, name: "experience" });
  const {
    fields: projectFields,
    append: addProject,
    remove: removeProject,
  } = useFieldArray({ control, name: "projects" });
  const {
    fields: certFields,
    append: addCert,
    remove: removeCert,
  } = useFieldArray({ control, name: "certifications" });
  const {
    fields: awardFields,
    append: addAward,
    remove: removeAward,
  } = useFieldArray({ control, name: "Awards" });
  const onSubmit = (data) => {
    console.log(data);
    navigate("/templates", { state: { formData: data } });
  };
  // Animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay },
    }),
  };
  const fadeInUp2 = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay },
    }),
  };
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <motion.div
      className="max-w-5xl mx-auto p-6 bg-white/10 backdrop-blur-xl shadow-xl rounded-lg mt-6 mb-6"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      <motion.h2
        className="font-semibold text-center text-3xl font-extrabold mb-4 text-teal-500 drop-shadow-lg"
        variants={fadeInUp}
      >
        Resume Builder
      </motion.h2>
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 "
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Personal Details */}
        <motion.div
          className="bg-white/0 p-4 rounded-md shadow-md backdrop-blur-lg flex flex-col space-y-4"
          variants={fadeInUp}
        >
          <h3 className="text-lg text-teal-400 font-semibold mb-2">
            Personal Details
          </h3>
          <motion.div className="flex space-x-2" variants={fadeInUp}>
            <input
              {...register("personalDetails.name")}
              placeholder="Full Name"
              type="text"
              className="input "
              variants={fadeInUp}
            />
            <input
              {...register("personalDetails.phone")}
              placeholder="Phone Number"
              type="tel"
              className="input"
            />
          </motion.div>
          <motion.div className="flex space-x-2" variants={fadeInUp}>
            <input
              {...register("personalDetails.email")}
              placeholder="Email"
              type="email"
              className="input"
            />
            <input
              {...register("personalDetails.portfolio")}
              placeholder="Portfolio URL"
              type="url"
              className="input"
            />
          </motion.div>
          <motion.div className="flex space-x-2" variants={fadeInUp}>
            <input
              {...register("personalDetails.linkedin")}
              placeholder="LinkedIn Profile"
              type="url"
              className="input"
            />
            <input
              {...register("personalDetails.github")}
              placeholder="GitHub Profile"
              type="url"
              className="input"
            />
          </motion.div>

          <motion.input
            type="text"
            placeholder="Professional Title eg. Software Engineer"
            {...register("personalDetails.title")}
            className="input"
          />

          <motion.div className="flex space-x-2" variants={fadeInUp}>
            <input
              onChange={handleImageUpload}
              type="file"
              accept="image/*"
              className="input"
            />
            <input
              {...register("personalDetails.location")}
              placeholder="Address"
              type="text"
              className="input"
            />
          </motion.div>
          <motion.div className="flex space-x-2">
            <motion.textarea
              {...register("personalDetails.quote")}
              placeholder="Quote"
              type="textArea"
              className="input"
            />
            <button
              className="btn-add"
              type="button"
              onClick={() =>
                handleQuoteGenerate(watch("personalDetails.title"))
              }
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <div className="flex items-center space-x-2">
                    <Loader2 className="size-4 animate-spin" />
                    <span className="text-sm">Generating...</span>
                  </div>
                </>
              ) : (
                "Generate"
              )}
            </button>
          </motion.div>
          {geminiQuote && (
            <p className="text-sm text-gray-500">
              Generated Quote: {geminiQuote}
            </p>
          )}
        </motion.div>

        {/* Education Section */}
        <motion.div
          className="bg-white/0 p-4 rounded-md shadow-md backdrop-blur-lg"
          variants={fadeInUp}
        >
          <h3 className="text-lg font-semibold text-teal-300">Education</h3>
          {eduFields.map((field, index) => (
            <motion.div
              key={field.id}
              className="flex flex-col space-y-2 "
              variants={fadeInUp}
            >
              <motion.div className="flex space-x-2" variants={fadeInUp}>
                <input
                  {...register(`education.${index}.institute`)}
                  placeholder="Institute"
                  className="input p-2 bg-transparent border border-teal-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-500 transition-all duration-300 rounded-md w-1/2 h-10 mt-7"
                />
                <div className="flex flex-col space-y-1 w-1/2">
                  <label
                    htmlFor="duration"
                    className="text-teal-500 font-semibold"
                  >
                    End date:
                  </label>
                  <input
                    {...register(`education.${index}.duration`)}
                    id="duration"
                    placeholder="Duration"
                    className="p-2 text-white bg-transparent border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-500 transition-all duration-300 rounded-md "
                    type="date"
                  />
                </div>
              </motion.div>
              <motion.div className="flex space-x-2" variants={fadeInUp}>
                <input
                  {...register(`education.${index}.domain`)}
                  placeholder="Domain"
                  className="input"
                />
                <input
                  {...register(`education.${index}.marks`)}
                  placeholder="Marks"
                  className="input"
                />
                <button
                  type="button"
                  onClick={() => removeEdu(index)}
                  className="btn-remove"
                >
                  <X className="text-teal-500 cursor-pointer" />
                </button>
              </motion.div>
            </motion.div>
          ))}
          <button
            type="button"
            onClick={() => addEdu({})}
            className="btn-add text-gray-500"
          >
            + Add Education
          </button>
        </motion.div>

        {/* Skills Section */}
        <motion.div className="section" variants={fadeInUp}>
          <h3 className="text-lg font-semibold text-teal-400">
            Technical Skills
          </h3>
          {skillFields.map((field, index) => (
            <motion.div
              key={field.id}
              className="flex space-x-2 mt-2"
              variants={fadeInUp}
            >
              {/* Skill Input */}
              <motion.div className="flex flex-col w-full" variants={fadeInUp}>
                <input
                  {...register(`skills.${index}.skill`)}
                  placeholder="Skill"
                  className="input"
                />
              </motion.div>

              {/* Level Input + Error */}
              <motion.div className="flex flex-col" variants={fadeInUp}>
                <input
                  {...register(`skills.${index}.level`, {
                    min: { value: 1, message: "Cannot be less than 1" },
                    max: { value: 10, message: "Cannot be more than 10" },
                  })}
                  placeholder="Level out of 10"
                  className={`input border ${
                    errors.skills?.[index]?.level
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                {errors.skills?.[index]?.level && (
                  <p className="text-red-400 font-semibold text-sm mt-1">
                    {errors.skills[index].level.message}
                  </p>
                )}
              </motion.div>

              {/* Remove Button */}
              <button
                type="button"
                onClick={() => removeSkill(index)}
                className="btn-remove"
              >
                <X className="text-teal-500 cursor-pointer" />
              </button>
            </motion.div>
          ))}

          {/* Add Skill Button */}
          <button
            type="button"
            onClick={() => addSkill({})}
            className="btn-add"
          >
            + Add Skill
          </button>
        </motion.div>

        {/* Experience Section */}
        <motion.div className="section" variants={fadeInUp}>
          <h3 className="text-lg font-semibold text-teal-400">Experience</h3>
          {expFields.map((field, index) => (
            <motion.div
              key={field.id}
              className="flex flex-col space-y-2 mt-2"
              variants={fadeInUp}
            >
              <motion.div className="flex space-x-2" variants={fadeInUp}>
                <input
                  {...register(`experience.${index}.company`)}
                  placeholder="Company"
                  className="input"
                />
                <input
                  {...register(`experience.${index}.role`)}
                  placeholder="Role"
                  className="input"
                />
              </motion.div>
              <motion.div className="flex space-x-2" variants={fadeInUp}>
                <textarea
                  {...register(`experience.${index}.description`)}
                  placeholder="Description"
                  className="input"
                  disabled={isLoadingExp[index]} // Disable while loading
                />

                <button
                  type="button"
                  onClick={() =>
                    handleExperienceGenerate(
                      index,
                      watch(`experience.${index}.company`),
                      watch(`experience.${index}.role`)
                    )
                  }
                  className="btn-add"
                  disabled={isLoadingExp[index]} // Disable while loading
                >
                  {isLoadingExp[index] ? (
                    <>
                      <div className="flex items-center space-x-2">
                        <Loader2 className="size-4 animate-spin" />
                        <span className="text-sm">Generating...</span>
                      </div>
                    </>
                  ) : (
                    "Generate"
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => removeExp(index)}
                  className="btn-remove"
                >
                  <X className="text-teal-500 cursor-pointer" />
                </button>
              </motion.div>
            </motion.div>
          ))}
          <button type="button" onClick={() => addExp({})} className="btn-add">
            + Add Experience
          </button>
        </motion.div>

        {/* Projects Section */}
        <motion.div className="section" variants={fadeInUp}>
          <h3 className="text-lg font-semibold text-teal-400">Projects</h3>
          {projectFields.map((field, index) => (
            <motion.div
              key={field.id}
              className="flex flex-col space-y-2 mt-2"
              variants={fadeInUp}
            >
              <motion.div className="flex space-x-2" variants={fadeInUp}>
                <input
                  {...register(`projects.${index}.name`)}
                  placeholder="Project Name"
                  className="input"
                />
                <input
                  {...register(`projects.${index}.techStack`)}
                  placeholder="Tech Stack"
                  className="input"
                />
                <input
                  {...register(`projects.${index}.repo`)}
                  placeholder="Repo Link"
                  className="input"
                  type="url"
                />
              </motion.div>
              <motion.div className="flex space-x-2" variants={fadeInUp}>
                <textarea
                  {...register(`projects.${index}.description`)}
                  placeholder="Description"
                  className="input"
                  disabled={isLoadingProject[index]} // Disable while loading
                />
                <button
                  type="button"
                  onClick={() =>
                    handleProjectGenerate(
                      index,
                      watch(`projects.${index}.name`),
                      watch(`projects.${index}.techStack`)
                    )
                  }
                  className="btn-add"
                  disabled={isLoadingProject[index]} // Disable while loading
                >
                  {isLoadingProject[index] ? (
                    <>
                      <div className="flex items-center space-x-2">
                        <Loader2 className="size-4 animate-spin" />
                        <span className="text-sm">Generating...</span>
                      </div>
                    </>
                  ) : (
                    "Generate"
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => removeProject(index)}
                  className="btn-remove"
                >
                  <X className="text-teal-500 cursor-pointer" />
                </button>
              </motion.div>
            </motion.div>
          ))}
          <button
            type="button"
            onClick={() => addProject({})}
            className="btn-add"
          >
            + Add Project
          </button>
        </motion.div>

        {/*certications*/}
        <motion.div className="section" variants={fadeInUp}>
          <h3 className="text-lg font-semibold text-teal-400">
            Certifications
          </h3>
          {certFields.map((field, index) => (
            <motion.div
              key={field.id}
              className="flex space-x-2 mt-2"
              variants={fadeInUp}
            >
              <input
                {...register(`certifications.${index}.name`)}
                placeholder="Certification Name"
                className="input"
              />
              <input
                {...register(`certifications.${index}.issueDate`)}
                placeholder="Issue Date"
                className="input"
                type="date"
              />
              <button
                type="button"
                onClick={() => removeCert(index)}
                className="btn-remove"
              >
                <X className="text-teal-500 cursor-pointer" />
              </button>
            </motion.div>
          ))}
          <button type="button" onClick={() => addCert({})} className="btn-add">
            Add certicate
          </button>
        </motion.div>
        {/*Awards*/}
        <motion.div variants={fadeInUp} className="section">
          <h3 className="text-lg font-semibold text-teal-400">Awards</h3>
          {awardFields.map((field, index) => (
            <motion.div
              variants={fadeInUp}
              key={field.id}
              className="flex space-x-2 mt-2"
            >
              <input
                {...register(`Awards.${index}.name`)}
                placeholder="Award Name"
                className="input"
              />
              <input
                {...register(`Awards.${index}.description`)}
                placeholder="Description"
                className="input"
                disabled={isLoadingAward[index]} // Disable while loading
              />
              <button
                type="button"
                onClick={() =>
                  handleAwardGenerate(index, watch(`Awards.${index}.name`))
                }
                className="btn-add"
                disabled={isLoadingAward[index]} // Disable while loading
              >
                {isLoadingAward[index] ? (
                  <>
                    <div className="flex items-center space-x-2">
                      <Loader2 className="size-4 animate-spin" />
                      <span className="text-sm">Generating...</span>
                    </div>
                  </>
                ) : (
                  "Generate"
                )}
              </button>
              <button
                type="button"
                onClick={() => removeAward(index)}
                className="btn-remove"
              >
                <X className="text-teal-500 cursor-pointer" />
              </button>
            </motion.div>
          ))}
          <button
            type="button"
            onClick={() => addAward({})}
            className="btn-add"
          >
            + Add Award
          </button>
        </motion.div>

        {/* Submit Button */}

        <button type="submit" className="btn-submit cursor-pointer">
          Generate Resume
        </button>
      </motion.form>
    </motion.div>
  );
};
export default Input;
