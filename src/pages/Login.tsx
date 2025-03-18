import { FcGoogle } from "react-icons/fc";
import Divider from "../components/Divider";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  username: string;
  password: string;
  keepLoggedIn:string;
};

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data: any) => {
    console.log(data);

    if (data.username === "admin" && data.password === "password") {
      window.location.href = "/dashboard";
    } else {
      alert("invalid credentials");
    }
  };

  return (
    <section className="bg-primaryDark min-h-screen py-20 md:py-10">
      <div className="bg-white flex flex-col rounded-md shadow-md w-[90%] md:w-2/5 mx-auto px-4 md:px-8 py-6 items-center space-y-4">
        <h1 className="text-2xl">Login</h1>

        <p className="text-center text-sm md:text-base">
          Don't have an account yet?{" "}
          <a href="#" className="text-primaryLight">Create an account</a>
        </p>

        <a
          href="#"
          className="bg-white text-black w-full flex justify-center items-center gap-2 px-4 py-2 border border-[#E6E7E9] rounded-md"
        >
          <FcGoogle className="h-5 w-5" />
          Sign in with Google
        </a>

        <Divider text="OR" />

        {/* Form */}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 w-full">
          <div>
            <label htmlFor="username" className="text-sm font-medium">Username</label>
            <input
              type="text"
              placeholder="Username"
              className="w-full border border-[#E6E7E9] p-2 rounded-md mt-2"
              {...register("username", { required: "Username is required" })}
            />
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username.message}</p>
            )}
          </div>

          <div>
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium">Password</label>
              <a href="#" className="text-primaryLight text-sm hover:underline">
                Remember me
              </a>
            </div>
            <input
              type="password"
              placeholder="Password"
              className="w-full border p-2 rounded-md mt-2 border-[#E6E7E9]"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

            {/*checkbox */}
          <div className="flex items-center">
            <input type="checkbox" {...register("keepLoggedIn")} className="mr-2" />
            <label className="text-sm">Keep me logged in</label>
          </div>

          <button
            type="submit"
            className="w-full bg-primaryLight text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
}

export default Login;
