import * as Yup from "yup";
import { ErrorMessage, Field, Formik, Form } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "antd";

export const Login = () => {
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("Email is required"),
    password: Yup.string().min(6).required("Password is required"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const naviagtion = useNavigate();
  const handleSubmit = async (
    values: typeof initialValues,
    { resetForm }: any
  ) => {
    try {
      console.log("Login", values);
      resetForm();
      naviagtion("/home");
    } catch (error: any) {
      console.log("Login Failed", error?.response?.data);
    }
  };

  return (
    <div className="flex w-full h-screen">
      <div className="bg-black flex-1 hidden md:block">
        <img
          src="https://picsum.photos/id/1021/1200/900"
          alt="Cover"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="bg-white flex-1 flex flex-col items-center justify-center px-6">
        <Formik
          initialValues={initialValues}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="w-full max-w-md space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <Field
                  name="email"
                  type="email"
                  placeholder="Eg. johndoe@example.com"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <label className=" text-sm font-medium text-gray-700 flex justify-between">
                  Password{" "}
                  <Link
                    to="/auth/forgot-password"
                    className="font-semibold text-color"
                  >
                    Forgot Password?
                  </Link>
                </label>
                <Field
                  name="password"
                  type="password"
                  placeholder="******"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="px-4 py-2 rounded-md transition-colors"
                >
                  Login
                </Button>
              </div>

              <p className="mt-6 text-center text-sm text-gray-500">
                Don't have an account?{" "}
                <Link to="/auth/register" className="font-semibold text-color">
                  Register
                </Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
