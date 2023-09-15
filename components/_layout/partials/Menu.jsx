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
  return (
    <div>
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
  );
}
