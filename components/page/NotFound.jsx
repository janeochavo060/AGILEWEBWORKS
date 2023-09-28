import { useRouter } from "next/router";
import globalState from "@/lib/store/globalState";
import { useEffect } from "react";
export default function NotFound() {
  useEffect(() => {
    globalState.setState({
      showLazy: true,
    });
  }, []);
  const router = useRouter();
  return (
    <div className="w-full h-full">
      <div className="max-w-[1200px] mt-[100px] m-auto px-4 xl:px-0 content-center py-[30px] md:py-[50px] lg:py-[70px]">
        <div
          style={{ fontWeight: 700, color: "#04316B" }}
          className="flex justify-center text-[40px] sm:text-[45px] lg:text-[50px] leading-[50px] text-center pt-2 md:pt-4 pb-4 md:pb-6 lg:pb-8 "
        >
          PAGE NOT FOUND
        </div>
        <div className="w-full">
          <div className="max-w-[600px] text-center content-center text-[#04316B] text-[17px] sm:text-[18px] md:text-[19px] m-auto">
            The page you are looking for does not exist or an error has
            occurred. We will direct you back to the homepage.
          </div>
        </div>

        <div className="w-full">
          <div className="pt-8 md:pt-12 lg:pt-16 m-auto">
            <div className="bg-[#C3C3C3] h-[1px] w-[350px] 2sm:w-[500px] md:w-[800px] lg:w-[900px] xl:w-[1130px] m-auto"></div>
          </div>
        </div>

        <div
          className="border m-auto w-[102px] h-[31px] mt-[20px] bg-[#034F8B] text-white text-center rounded-md text-[12px] rounded-lg cursor-pointer"
          onClick={() => {
            router.replace("/");
          }}
        >
          {"<< BACK"}
        </div>
      </div>
    </div>
  );
}
