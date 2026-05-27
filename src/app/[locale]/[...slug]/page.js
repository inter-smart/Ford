import Link from "next/link";

export default async function CatchAll404({ params }) {
  const { locale } = await params;
  const isAr = locale === "ar";

  return (
    <>
      <section className="w-full block">
        <div className="w-full h-(--header-y) lg:h-(--header-y-lg) 2xl:h-(--header-y-2xl) 3xl:h-(--header-y-3xl) bg-[#00095B]" />
        <div className="w-full py-[40px] lg:py-[80px] 2xl:py-[100px] 3xl:py-[120px]">
          <div className="container text-center">
            <h1 className="text-[120px] sm:text-[160px] lg:text-[200px] 2xl:text-[260px] 3xl:text-[320px] font-bold leading-none text-center text-black/10 outlined-text select-none">
              {isAr ? "٤٠٤" : "404"}
            </h1>
            <h2 className="text-[24px] sm:text-[30px] lg:text-[40px] 2xl:text-[48px] 3xl:text-[60px] font-medium leading-normal text-black -mt-10 sm:-mt-14 lg:-mt-20">
              {isAr ? "الصفحة غير موجودة" : "Page not found"}
            </h2>
            <p className="text-[14px] lg:text-[16px] 2xl:text-[20px] 3xl:text-[24px] font-antenna text-black/70 max-w-md mx-auto mt-4 leading-[1.6]">
              {isAr
                ? "عذراً! الصفحة التي تبحث عنها غير موجودة أو تم نقلها."
                : "Oops! The page you are looking for does not exist or has been moved."}
            </p>
            <Link
              href={`/${locale}`}
              className="inline-flex mt-8 text-[10px] xl:text-[12px] 2xl:text-[14.5px] 3xl:text-[18px] leading-[1] font-bold text-center text-white w-max h-[30px] xl:h-[35.5] 2xl:h-[42.6] 3xl:h-[53.4] py-2 px-[15px] xl:px-[25px] 2xl:px-[30px] 3xl:px-[40px] rounded-full bg-[#066FEF] border border-[#066FEF] cursor-pointer transition-all items-center justify-center hover:bg-white hover:text-black"
            >
              <span className="mt-[2px]">
                {isAr ? "العودة إلى الرئيسية" : "Back to Home"}
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
