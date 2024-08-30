import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white py-[15px]">
      <div className="container">
        <div className="flex flex-wrap gap-[15px] justify-between items-center">
          <span>
            {`&copy; ${currentYear} Sample Sitename. All rights reserved.`}{" "}
          </span>
          <span className="opacity-50">
            <Link href="https://halcyonagile.com/" target="_blank">
              Web develop by:
              <span className="underline">Halcyon Web Design</span>
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
