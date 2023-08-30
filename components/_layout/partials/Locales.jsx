import globalData from "@/lib/preBuildScripts/static/globalData.json";
import globalState from "@/lib/store/globalState";
import persistentStore from "@/lib/store/persistentStore";
import { useRouter } from "next/router";
export default function Locales() {
  const router = useRouter();
  const locale = persistentStore((state) => state.locale);
  const { locales } = globalData;
  const defaultLocale = locales.find((n) => n.is_default);
  const ready = globalState((state) => state.ready);
  const isActive = (n) => {
    return ready ? locale === n.code : false;
  };
  const onClick = (n) => {
    if (n.code === locale) return;
    persistentStore.setState({ locale: n.code });
    const currentPath = router?.asPath || "/";
    const segments = currentPath.split("/");
    if (defaultLocale.code === n.code) {
      if (segments.length > 2) {
        const path = currentPath.replace(`/${segments[1]}/`, "/");
        router.push(path);
        return;
      }
      const path = currentPath.replace(`/${segments[1]}`, "/");
      router.push(path);
    } else {
      if (segments[1] !== n.code) {
        const path = "/" + n.code + currentPath;
        router.push(path);
      }
    }
  };
  return (
    <div>
      <ul>
        {locales.map((n, i) => (
          <li
            key={i}
            className={`cursor-pointer ${isActive(n) ? " text-[red]" : ""}`}
            onClick={() => onClick(n)}
          >
            {n.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
