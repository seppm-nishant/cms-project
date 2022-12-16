import Link from "next/link";

const Navbar = () => {
  return (
    <div className="py-6 px-4 shadow-lg">
      <Link href={"/"}>
        <h2 className="text-3xl text-gray-600 cursor-pointer">Logo</h2>
      </Link>
    </div>
  );
};

export default Navbar;
