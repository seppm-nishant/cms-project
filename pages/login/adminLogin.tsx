import Link from "next/link";

const AdminLogin = () => {
  const clickEvent = () => {
    console.log("hello");
  };

  return (
    <div className="w-full h-screen">
      <div className="w-[400px] m-auto mt-24 rounded-md shadow-md border px-2 py-4 flex flex-col">
        <h2 className="text-4xl text-gray-500 text-center">Admin login</h2>

        <label htmlFor="email" className="text-xl pt-12 text-gray-400">
          email
        </label>
        <input
          className="w-full rounded-md border border-gray-300 focus:outline-none px-2 py-2"
          type="email"
          name="email"
          id="email"
        />
        <label htmlFor="email" className="text-xl pt-2 text-gray-400">
          password
        </label>
        <input
          className="w-full rounded-md border border-gray-300 focus:outline-none px-2 py-2"
          type="password"
          name="password"
          id="password"
        />

        <button
          type="submit"
          onClick={(e) => {
            clickEvent();
          }}
          className="text-xl w-full bg-blue-500 rounded-md text-white py-2 hover:bg-blue-600 mt-6"
        >
          Login
        </button>

        <h3 className="pt-4">
          <span className="text-gray-500">forgot password</span>{" "}
          <span className="text-blue-500 underline cursor-pointer hover:text-blue-600">
            click here
          </span>
        </h3>
        <h3 className="pt-2">
          <span className="text-gray-500">to go back</span>{" "}
          <Link href={"/login"}>
            <span className="text-blue-500 underline cursor-pointer hover:text-blue-600">
              click here
            </span>
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default AdminLogin;
