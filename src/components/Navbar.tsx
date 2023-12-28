import Logo from "./Logo";

export default function Navbar() {
  return (
    <div className="bg-gray-950/90 backdrop-blur-sm z-50 fixed w-full">
      <div className="container py-4">
        <Logo />
      </div>
    </div>
  );
}
