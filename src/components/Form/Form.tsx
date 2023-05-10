import React from "react";
import { useFormik, Field } from "formik";
type Props = {};
export const Form = (props: Props) => {
  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      name: "",
      email: "",
      age: 0,
      dropdownOption: "",
      takeLater: false,
      feedback: "",
      radioOption: "",
    },
    onSubmit: (values, actions) => {
      alert(JSON.stringify(values, null, 2));
      actions.setSubmitting(false);
    },
  });
  const dropdownOptions = ["Option 1", "Option 2", "Option 3"];
  return (
    <form
      style={{
        margin: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 8,
      }}
      onSubmit={handleSubmit}
    >
      <div>
        <div>
          <label style={{ marginRight: 8 }} htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label style={{ marginRight: 8 }} htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label style={{ marginRight: 8 }} htmlFor="age">
            Age:
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={values.age}
            onChange={handleChange}
          />
        </div>
        <div>
          <label style={{ marginRight: 8 }} htmlFor="dropdownOption">
            Dropdown Option
          </label>
          <select
            id="dropdownOption"
            name="dropdownOption"
            value={values.dropdownOption}
            onChange={handleChange}
          >
            <option value="">Select an option</option>
            {dropdownOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <div>
            <label style={{ marginRight: 8 }}>
              Do you want more Emails?
              <input
                type="checkbox"
                name="takeLater"
                checked={values.takeLater}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
          <label style={{ marginRight: 8 }} htmlFor="feedback">
            Write a comment to the Interviewer with your feedback or suggestions:
          </label>
          <textarea
            id="feedback"
            name="feedback"
            value={values.feedback}
            onChange={handleChange}
          />
        </div>

          <div>
            <label>Choose an option:</label>
            <div>
              <label htmlFor="radioOption1">
                <input
                  type="radio"
                  id="radioOption1"
                  name="radioOption"
                  value="option1"
                  onChange={handleChange}
                  checked={values.radioOption === "option1"}
                />
                Option 1
              </label>
            </div>
            <div>
              <label htmlFor="radioOption1">
                <input
                  type="radio"
                  id="radioOption2"
                  name="radioOption"
                  value="option2"
                  onChange={handleChange}
                  checked={values.radioOption === "option2"}
                />
                Option 2
              </label>
            </div>
          </div>

        </div>

        <button type="submit">Log in</button>
      </div>
    </form>
  );
};
