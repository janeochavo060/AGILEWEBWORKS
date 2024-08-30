import globalData from "@/lib/preBuildScripts/static/globalData.json";
import Locales from "@/components/_layout/partials/Locales";
import persistentStore from "@/lib/store/persistentStore";
import Link from "next/link";
import globalState from "@/lib/store/globalState";
export default function Menu() {
  const ready = globalState((state) => state.ready);
  const locale = persistentStore((state) => state.locale);
  const { menus, locales } = globalData;
  const defaultLocale = locales.find((n) => n.is_default);
  const activeMenu =
    menus?.find((n) => n.locale === locale) ||
    menus.find((n) => n.locale === defaultLocale.code);
  const nodes = activeMenu?.parentNodes || [];

  const staticMenuItems = [
    { label: "Home", url: "/", target: "" },
    { label: "About", url: "/about", target: "" },
    { label: "Contact", url: "/contact", target: "" },
  ];
  return (
    <header className="py-[15px] z-[1000] sticky top-0 bg-white shadow-md">
      <div className="container">
        <div className="flex flex-wrap justify-between items-center">
          <div className="logo">
            <Link href="/">
              <div className="w-[200px] rounded-sm h-[70px] bg-gray-300 flex items-center justify-center p-[15px]">
                Logo Here
              </div>
            </Link>
          </div>
          <div className="flex items-center justify-between">
            <nav className="flex items-center gap-[15px]">
              {ready &&
                staticMenuItems.map((node, i) => {
                  return (
                    <Link href={node.url} key={i} target={node.target}>
                      {node.label}
                    </Link>
                  );
                })}
            </nav>
          </div>
        </div>

        {/* {ready &&
        nodes.map((node, i) => {
          return (
            <Link href={node.url} key={i} target={node.target}>
              {node.label}
            </Link>
          );
        })}
      <Locales /> */}
      </div>
    </header>
  );
}
