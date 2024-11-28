import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";

const App = () => {
    return (
        <div>
            <h1>Controlled Components Form</h1>
            <RegistrationForm />
            <h1>Formik Form</h1>
            <FormikForm />
        </div>
    );
};

export default App;