import globalData from "@/lib/preBuildScripts/static/globalData.json";
import Locales from "@/components/_layout/partials/Locales";
import persistentStore from "@/lib/store/persistentStore";
export default function Menu() {
  const locale = persistentStore((state) => state.locale);
  const { menus } = globalData;

  const nodes = menus?.find((n) => n.locale === locale || "en") || [];

  // console.log(nodes, "sdsd");

  // console.log(menus, "sd");
  return (
    <div>
      Menu
      <Locales />
    </div>
  );
}
