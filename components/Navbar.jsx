import Link from "next/link";

const links = [
  {
    url: "/about",
    name: "About",
  },
  {
    url: "/client",
    name: "Client",
  },
  {
    url: "/drinks",
    name: "Drinks",
  },
  {
    url: "/prisma-example",
    name: "Prisma",
  },
  {
    url: "/tasks",
    name: "Tasks",
  },
];

export const Navbar = () => {
  return (
    <nav className="bg-base-300 py-4">
      <div className="navbar px-8 max-w-6xl mx-auto flex-col sm:flex-row">
        <Link href="/" className="btn btn-primary">
          Home
        </Link>
        <ul className="menu menu-horizontal md:ml-8">
          {links.map((link) => (
            <li key={link.url}>
              <Link href={link.url} className="capitalize">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
