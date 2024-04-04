import Image from "next/image";

const Login = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <Image
          src={`/images/login.jpg`}
          className="w-full h-full object-cover"
          alt="1"
          width="2400"
          height="1600"
        />
      </div>

      <div className="bg-gray-100 flex flex-col justify-center drop-shadow-md">
        <form className="max-w-[400px] w-full mx-auto bg-white p-4">
          <h2 className="text-4xl font-bold text-center py-6">BRAND</h2>
          <div className="flex flex-col py-2">
            <label>Username</label>
            <input type="text" placeholder="username" className="border p-2" />
          </div>
          <div className="flex flex-col py-2">
            <label>Password</label>
            <input
              type="password"
              placeholder="password"
              className="border p-2"
            />
          </div>
          <button className="border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white">
            Sign In
          </button>
          <div className="flex justify-between">
            <p className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember Me
            </p>
            <p>Create an Account</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
