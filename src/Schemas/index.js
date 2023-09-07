import * as yup from "yup";

export const eventFormSchema = yup.object().shape({
  name: yup.string().required("Required"),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Required"),
  dob_18: yup
    .date()
    .nullable()
    .test("dob", `Should be greater than 18`, (value, error) => {
      const dob = new Date(value);
      const validDate = new Date();
      const valid = validDate.getFullYear() - dob.getFullYear() >= 18;
      return !valid ? error.createError() : valid;
    })
    .required("Required"),

  dob_21: yup
    .date()
    .nullable()
    .test("dob", `Should be greater than 21`, (value, error) => {
      const dob = new Date(value);
      const validDate = new Date();
      const valid = validDate.getFullYear() - dob.getFullYear() >= 21;
      return !valid ? error.createError() : valid;
    })
    .required("Required"),

  sex: yup
    .string()
    .oneOf(["male", "female", "others"], "Required")
    .required("Required"),

  acceptedTos: yup
    .boolean()
    .oneOf([true], "Please accept the terms of service"),
});
