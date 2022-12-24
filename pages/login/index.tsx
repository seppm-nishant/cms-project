import Link from "next/link";

const Login = () => {
  return (
    <div className="w-full h-screen">
      <div>
        <h2 className="text-4xl text-gray-500 text-center pt-12">
          Welcome message comes here....
        </h2>
      </div>

      <div className="w-[400px] m-auto mt-24 rounded-md shadow-md border px-2 py-4">
        <h2 className="text-4xl text-center text-gray-500 pb-12">Login</h2>
        <div className="flex flex-col space-y-3">
          <Link href={"/login/adminLogin"}>
            <button className="text-xl w-full bg-blue-500 rounded-md text-white py-2 hover:bg-blue-600">
              Admin login
            </button>
          </Link>
          <Link href={"/login/staffLogin"}>
            <button className="text-xl w-full bg-blue-500 rounded-md text-white py-2 hover:bg-blue-600">
              Staff login
            </button>
          </Link>
          <Link href={"login/studentLogin"}>
            <button className="text-xl w-full bg-blue-500 rounded-md text-white py-2 hover:bg-blue-600">
              Student login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
