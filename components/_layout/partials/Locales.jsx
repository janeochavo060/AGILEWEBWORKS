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
  const findPath = (segments, curPath, text, textNew) => {
    if (segments.length > 2) {
      return curPath.replace(`/${text}/`, textNew);
    } else {
      return curPath.replace(`/${text}`, textNew);
    }
  };
  const onClick = (n) => {
    if (n.code === locale) return;
    const curPath = router?.asPath || "/";
    const segments = curPath.split("/");
    const initSegment = segments[1];
    if (defaultLocale.code === n.code) {
      const path = findPath(segments, curPath, initSegment, "/");
      router.push(path);
    } else {
      if (initSegment === locale) {
        const path = findPath(segments, curPath, initSegment, `/${n.code}/`);
        router.push(path);
      } else if (initSegment !== n.code) {
        const path = "/" + n.code + curPath;
        router.push(path);
      }
    }
    persistentStore.setState({ locale: n.code });
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
