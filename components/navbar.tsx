import Link from "next/link";

import Container from "@/components/ui/container";
import MainNav from "@/components/main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "@/components/navbar-actions";

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="bg-gray-100 shadow-md fixed top-0 w-full z-10">
      {/* <div className="border-b bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100"> */}
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">ART STORE</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
