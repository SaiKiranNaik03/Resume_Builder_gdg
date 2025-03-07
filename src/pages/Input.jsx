import { useForm, useFieldArray } from "react-hook-form";
import "./input.css";
import cross from "../../public/cross-mark-svgrepo-com.svg";
import geminiResponse from "../service/geminiResponse";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
const Input = () => {
  const navigate = useNavigate();
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
      },
      education: [{ institute: "", duration: "", domain: "", marks: "" }],
      skills: [{ skill: "", level: "" }],
      experience: [{ company: "", role: "", description: "" }],
      projects: [{ name: "", techStack: "", repo: "", description: "" }],
      certifications: [{ name: "", issueDate: "" }],
      Awards: [{ name: "", description: "" }],
    },
  });
  const [geminiQuote, setGeminiQuote] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingExp, setIsLoadingExp] = useState({}); // Track loading per experience
  const [isLoadingProject, setIsLoadingProject] = useState({}); // Track loading per project
  const [isLoadingAward, setIsLoadingAward] = useState({}); // Track loading per award

  const handleQuoteGenerate = async () => {
    setIsLoading(true);
    const prompt =
      "Generate a concise and impactful motivational quote suitable for a resume.  Return only the quote without any additional text.";
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
    navigate("/templates");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 drop-shadow-xl rounded-md mt-6 mb-6">
      <h2 className="font-semibold tracking-tight text-center text-3xl font-extrabold mb-4 text-blue-700 drop-shadow-lg">Resume Builder</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Personal Details */}
        <div className="bg-white p-4 rounded-md shadow flex flex-col space-y-4">
          <h3 className="text-lg font-semibold mb-2">Personal Details</h3>
          <div className="flex space-x-2">
            <input
              {...register("personalDetails.name")}
              placeholder="Full Name"
              type="text"
              className="input"
            />
            <input
              {...register("personalDetails.phone")}
              placeholder="Phone Number"
              type="tel"
              className="input"
            />
          </div>
          <div className="flex space-x-2">
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
          </div>
          <div className="flex space-x-2">
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
          </div>
          <div className="flex space-x-2">
            <textarea
              {...register("personalDetails.quote")}
              placeholder="Quote"
              type="textArea"
              className="input"
            />
            <button
              className="btn-add"
              type="button"
              onClick={handleQuoteGenerate}
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
          </div>
          {geminiQuote && (
            <p className="text-sm text-gray-500">
              Generated Quote: {geminiQuote}
            </p>
          )}
        </div>

        {/* Education Section */}
        <div className="bg-white p-4 rounded-md shadow">
          <h3 className="text-lg font-semibold">Education</h3>
          {eduFields.map((field, index) => (
            <div key={field.id} className="flex flex-col space-y-2 mt-2">
              <div className="flex space-x-2">
                <input
                  {...register(`education.${index}.institute`)}
                  placeholder="Institute"
                  className="p-2 border border-gray-300 rounded-md w-1/2 h-10 mt-7"
                />
                <div className="flex flex-col space-y-1 w-1/2">
                  <label htmlFor="duration">End date:</label>
                  <input
                    {...register(`education.${index}.duration`)}
                    id="duration"
                    placeholder="Duration"
                    className="p-2 border border-gray-300 rounded-md "
                    type="date"
                  />
                </div>
              </div>
              <div className="flex space-x-2">
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
                  <img src={cross} alt="" className="h-5 w-30 cursor-pointer" />
                </button>
              </div>
            </div>
          ))}
          <button type="button" onClick={() => addEdu({})} className="btn-add">
            + Add Education
          </button>
        </div>

        {/* Skills Section */}
        <div className="bg-white p-4 rounded-md shadow">
          <h3 className="text-lg font-semibold">Technical Skills</h3>
          {skillFields.map((field, index) => (
            <div key={field.id} className="flex space-x-2 mt-2">
              {/* Skill Input */}
              <div className="flex flex-col">
                <input
                  {...register(`skills.${index}.skill`)}
                  placeholder="Skill"
                  className="input"
                />
              </div>

              {/* Level Input + Error */}
              <div className="flex flex-col">
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
                  <p className="text-red-500 text-sm mt-1">
                    {errors.skills[index].level.message}
                  </p>
                )}
              </div>

              {/* Remove Button */}
              <button
                type="button"
                onClick={() => removeSkill(index)}
                className="btn-remove"
              >
                <img src={cross} alt="" className="h-5 w-20 cursor-pointer" />
              </button>
            </div>
          ))}

          {/* Add Skill Button */}
          <button
            type="button"
            onClick={() => addSkill({})}
            className="btn-add"
          >
            + Add Skill
          </button>
        </div>

        {/* Experience Section */}
        <div className="bg-white p-4 rounded-md shadow">
          <h3 className="text-lg font-semibold">Experience</h3>
          {expFields.map((field, index) => (
            <div key={field.id} className="flex flex-col space-y-2 mt-2">
              <div className="flex space-x-2">
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
              </div>
              <div className="flex space-x-2">
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
                  <img src={cross} alt="" className="h-5 w-30 cursor-pointer" />
                </button>
              </div>
            </div>
          ))}
          <button type="button" onClick={() => addExp({})} className="btn-add">
            + Add Experience
          </button>
        </div>

        {/* Projects Section */}
        <div className="bg-white p-4 rounded-md shadow">
          <h3 className="text-lg font-semibold">Projects</h3>
          {projectFields.map((field, index) => (
            <div key={field.id} className="flex flex-col space-y-2 mt-2">
              <div className="flex space-x-2">
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
              </div>
              <div className="flex space-x-2">
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
                  <img src={cross} alt="" className="h-5 w-30 cursor-pointer" />
                </button>
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addProject({})}
            className="btn-add"
          >
            + Add Project
          </button>
        </div>

        {/*certications*/}
        <div className="bg-white p-4 rounded-md shadow">
          <h3 className="text-lg font-semibold">Certifications</h3>
          {certFields.map((field, index) => (
            <div key={field.id} className="flex space-x-2 mt-2">
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
                <img src={cross} alt="" className="h-5 w-30 cursor-pointer" />
              </button>
            </div>
          ))}
          <button type="button" onClick={() => addCert({})} className="btn-add">
            Add certicate
          </button>
        </div>
        {/*Awards*/}
        <div className="bg-white p-4 rounded-md shadow">
          <h3 className="text-lg font-semibold">Awards</h3>
          {awardFields.map((field, index) => (
            <div key={field.id} className="flex space-x-2 mt-2">
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
                <img src={cross} alt="" className="h-5 w-30 cursor-pointer" />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addAward({})}
            className="btn-add"
          >
            + Add Award
          </button>
        </div>

        {/* Submit Button */}

        <button type="submit" className="btn-submit cursor-pointer">
          Generate Resume
        </button>
      </form>
    </div>
  );
};
export default Input;
