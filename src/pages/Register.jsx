import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookie from "js-cookie";

const Register = () => {
  const accessToken = Cookie.get("accessToken");
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const handleForm = async (creds) => {
    try {
      const { data } = await axios.post(
        "https://lucid-backend.onrender.com/api/users/register",
        {
          username: creds.username,
          password: creds.password,
        }
      );
      toast.success(data.message);
      navigate("/login");
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message);
    }
  };
  return accessToken ? (
    <Navigate to="/" />
  ) : (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit(handleForm)}
        className=" w-[75%] md:w-[50%] lg:w-[30%] p-5 shadow-xl bg-slate-100 space-y-4"
      >
        <div className="flex flex-col space-y-1">
          <label htmlFor="username">Username</label>
          <input
            className="h-8 border border-gray-400 px-3 outline-none"
            type="text"
            name="username"
            id="username"
            placeholder="Enter Username"
            {...register("username", { required: true })}
          />
          {errors.username && (
            <p className="text-red-500 text-sm">Please Enter Username</p>
          )}
        </div>
        <div className="flex flex-col space-y-1">
          <label htmlFor="password">Password</label>
          <input
            className="h-8 border border-gray-400 px-3 outline-none"
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">Please Enter Password</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 px-2 py-0.5 text-white h-8 w-full"
        >
          Register
        </button>
        <p>
          If you already have an account?
          <Link to={"/login"} className="underline">
            Login
          </Link>
        </p>
      </form>
      <Toaster />
    </div>
  );
};

export default Register;
