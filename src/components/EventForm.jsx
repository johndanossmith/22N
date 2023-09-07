import { useFormik } from "formik";
import { eventFormSchema } from "../Schemas";
import { error_img } from "../assets";

import PriceBanner from "./PriceBanner";

function EventForm({ age, price, offer, btnText }) {
  const onSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  const {
    values,
    errors,
    touched,
    // isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      dob_18: "",
      dob_21: "",
      sex: "",
      acceptedTos: false,
    },
    validationSchema: eventFormSchema,
    onSubmit,
  });

  const findAgeLimit = () => {
    if (age == 18) {
      return values.dob_18;
    } else if (age == 21) {
      return values.dob_21;
    }
  };

  return (
    <form
      noValidate
      className="text-white w-full flex flex-col justify-start items-start gap-3 max-w-lg mx-auto md:bg-color-grey-900 md:p-4 md:px-5 rounded-md mb-10"
      onSubmit={handleSubmit}>
      <h1 className="text-2xl font-semibold">Jouw gegevens</h1>
      <div
        className={`error-msg-head flex gap-2 justify-center items-start ${
          Object.keys(errors).length > 0 && Object.keys(touched).length > 0
            ? "block"
            : "hidden"
        }`}>
        <div
          className="img-cont w-6
        
        
        ">
          <img src={error_img} alt="error" className="w-full" />
        </div>
        <p className="text-error-red text-xs">
          We hebben deze informatie nodig voordat je een ticket kunt kopen.
        </p>
      </div>
      <p className="text-xs text-error-red text-left">
        {errors.name && touched.name ? errors.name : ""}
      </p>
      <input
        type="text"
        id="name"
        name="name"
        value={values.name}
        placeholder="Voor- en achternaam"
        onBlur={handleBlur}
        onChange={handleChange}
        className={`w-full bg-color-grey-800 px-2 py-3 rounded-md outline-none border  placeholder:text-color-grey-400 ${
          errors.name && touched.name
            ? "border-error-red"
            : " border-color-grey-400"
        }`}
      />
      <p className="text-xs text-error-red text-left">
        {errors.email && touched.email ? errors.email : ""}
      </p>
      <input
        type="email"
        name="email"
        id="email"
        value={values.email}
        placeholder="E-mail"
        onBlur={handleBlur}
        onChange={handleChange}
        className={`w-full bg-color-grey-800 px-2 py-3 rounded-md outline-none border  placeholder:text-color-grey-400 ${
          errors.email && touched.email
            ? "border-error-red"
            : " border-color-grey-400"
        }`}
      />

      <p className="text-xs text-error-red text-left">
        {errors.dob_18 && touched.dob_18 ? errors.dob_18 : ""}
        {errors.dob_21 && touched.dob_21 ? errors.dob_21 : ""}
      </p>
      <input
        type="text"
        name={`dob_${age}`}
        onFocus={(e) => (e.target.type = "date")}
        id={`dob_${age}`}
        value={findAgeLimit()}
        placeholder="Geboortedatum"
        onBlur={handleBlur}
        onChange={handleChange}
        className={`w-full bg-color-grey-800 px-2 py-3 rounded-md outline-none border  placeholder:text-color-grey-400 ${
          errors.dob_18 && touched.dob_18
            ? "border-error-red"
            : " border-color-grey-400"
        }`}
      />

      <p className="text-xs text-error-red text-left">
        {errors.sex && touched.sex ? errors.sex : ""}
      </p>

      <select
        id="sex"
        name="sex"
        value={values.sex}
        placeholder="Geslacht"
        onBlur={handleBlur}
        onChange={handleChange}
        onFocus={(e) => {
          e.target.classList.remove("text-color-grey-400");
          e.target.classList.add("text-white");
        }}
        className={`w-full bg-color-grey-800 px-2 py-3 rounded-md outline-none border  placeholder:text-color-grey-400 ${
          errors.sex && touched.sex
            ? "border-error-red"
            : " border-color-grey-400"
        }`}>
        <option type="text" value="" disabled hidden defaultValue>
          Geslacht
        </option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="others">Others</option>
      </select>

      <div className="checbox-div ">
        <p className="text-xs text-error-red text-left">
          {errors.acceptedTos && touched.acceptedTos ? errors.acceptedTos : ""}
        </p>
        <div className="wrapper flex items-start gap-4 pt-3">
          <input
            type="checkbox"
            name="acceptedTos"
            value={values.acceptedTos}
            onBlur={handleBlur}
            onChange={handleChange}
            className="accent-color-grey-800"
          />

          <p className="text-color-grey-400 text-xs">
            Ik ga akkoord met de{" "}
            <a href="#" className="underline">
              algemene voorwaarden
            </a>{" "}
            van 22NIGHT
          </p>
        </div>
      </div>

      <PriceBanner
        price={price}
        offer={offer}
        btnType={"submit"}
        btnText={btnText}
      />
    </form>
  );
}

export default EventForm;
