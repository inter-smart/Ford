"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Heading } from "@/components/layout/Heading";
import { cn } from "@/lib/utils";
import parse from "html-react-parser";
import Image from "next/image";
import { apiFetch, CACHE } from "@/lib/api/client";
import { ENDPOINTS } from "@/lib/api/endpoints";
import { useSearchParams } from "next/navigation";

const normalizeLocation = (loc, idx) => ({
  id: idx,
  title: loc.title,
  description: `<p>${loc.address}</p>`,
  phone: loc.phone,
  timing: loc.opening_hours,
  directionUrl: loc.map_url || "#",
});

function InfoItem({ type = "default", icon, alt, text }) {
  return (
    <div className="text-[11.3px] xl:text-[14.2px] 2xl:text-[17px] 3xl:text-[21.3px] leading-normal font-normal text-[#434343] hover:text-black my-[4px] sm:my-[6px] xl:my-[8px] 2xl:my-[10px] flex items-center gap-2 2xl:gap-3 3xl:gap-4">
      <Image
        src={icon}
        alt={alt}
        width={18}
        height={18}
        className="w-[12px] xl:w-[14px] 2xl:w-[18px] 3xl:w-[20px] object-contain"
      />
      {type === "tel" ? <a href={`tel:${text}`}>{text}</a> : parse(text)}
    </div>
  );
}

export default function ShowroomSection({
  tabs = [],
  initialTabIndex = 0,
  initialLocations = [],
  initialTotalPages = 1,
}) {
  const searchParams = useSearchParams(); // ✅ inside component
  const [activeTabIndex, setActiveTabIndex] = useState(initialTabIndex);
  const [rawLocations, setRawLocations] = useState(initialLocations);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(initialTotalPages);
  const debounceRef = useRef(null);

  const fetchLocations = async ({ tabIndex, page, search, replace }) => {
    replace ? setLoading(true) : setLoadingMore(true);
    try {
      const params = new URLSearchParams({ page, pageSize: 12 });
      if (search) params.set("search", search);

    const json = await apiFetch(
      `${ENDPOINTS.showroomTab}/${tabIndex}?${params}`,
      { cache: CACHE.NO_STORE },
    );

    const newLocations = json?.data?.location_details ?? [];
    const newTotalPages = json?.meta?.totalPages ?? 1;

      setRawLocations((prev) =>
        replace ? newLocations : [...prev, ...newLocations],
      );
      setTotalPages(newTotalPages);
      setPage(page);
    } catch (_) {
      if (replace) setRawLocations([]);
    } finally {
      replace ? setLoading(false) : setLoadingMore(false);
    }
  };

  useEffect(() => { // ✅ inside component
    const tabParam    = searchParams.get("tab");
    const searchParam = searchParams.get("search");
    const tabIdx      = tabParam !== null ? parseInt(tabParam) : initialTabIndex;

    setActiveTabIndex(tabIdx);
    setSearchQuery(searchParam || "");
    fetchLocations({ tabIndex: tabIdx, page: 1, search: searchParam || "", replace: true });
  }, []);

  const handleTabChange = (tabIndex) => {
    if (tabIndex === activeTabIndex) return;
    clearTimeout(debounceRef.current);
    setActiveTabIndex(tabIndex);
    setSearchQuery("");
    fetchLocations({ tabIndex, page: 1, search: "", replace: true });
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      fetchLocations({
        tabIndex: activeTabIndex,
        page: 1,
        search: value,
        replace: true,
      });
    }, 400);
  };

  const loadMore = () => {
    fetchLocations({
      tabIndex: activeTabIndex,
      page: page + 1,
      search: searchQuery,
      replace: false,
    });
  };

  const activeTab = tabs.find((t) => t.tab_index === activeTabIndex);
  const locations = rawLocations.map(normalizeLocation);

  return (
    <section className="relative py-[40px] md:py-[55px_70px] xl:py-[70px_80px] 2xl:py-[85px] 3xl:py-[110px_120px]">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between w-full mb-[25px] xl:mb-[30px] 2xl:mb-[40px] 3xl:mb-[60px] max-md:gap-[20px]">
          <div className="w-full md:w-1/4">
            <Heading size="heading1" as="h2" className="text-black">
              {activeTab?.main_title}
            </Heading>
          </div>
          <div className="w-full md:w-3/4">
            <div className="flex flex-wrap gap-[20px] md:gap-[30px] xl:gap-[40px] 2xl:gap-[50px] 3xl:gap-[60px] w-full justify-between md:justify-end">
              {/* Search */}
              <div className="relative w-full sm:max-w-[300px] md:max-w-[260px] xl:max-w-[330px] 2xl:max-w-[390px] 3xl:max-w-[490px] h-[45px] md:h-[40px] 2xl:h-[44px] 3xl:h-[56px] bg-[#F8F9FD] rounded-[4px] overflow-hidden">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Enter Street, Suburb, State or distributor"
                  className="2xl:text-[16px] xl:text-[13px] lg:text-[12px] text-[11px] w-full h-full px-5 pr-12 border border-gray-200 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-[15px] flex items-center">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <path
                      d="M6.61165 0C2.96805 0 0 2.97019 0 6.61645C0 10.2627 2.96805 13.2387 6.61165 13.2387C8.16795 13.2387 9.59926 12.6929 10.7305
                      11.7867L13.4845 14.5412C13.6235 14.6746 13.8091 14.7481 14.0016 14.7461C14.1941 14.7442 14.3782 14.6669 14.5144 14.5307C14.6507
                      14.3946 14.7282 14.2105 14.7304 14.0179C14.7327 13.8252 14.6594 13.6393 14.5264 13.5001L11.7724 10.7441C12.6787 9.61027 13.2247
                      8.17567 13.2247 6.61645C13.2247 2.97019 10.2553 0 6.61165 0ZM6.61165 1.47066C9.46104 1.47066 11.7537 3.76501 11.7537 6.61645C11.7537
                      9.4679 9.46104 11.768 6.61165 11.768C3.76227 11.768 1.46958 9.4679 1.46958 6.61645C1.46958 3.76501 3.76227 1.47066 6.61165 1.47066Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex items-center">
                {tabs.map((tab) => (
                  <button
                    key={tab.tab_index}
                    type="button"
                    onClick={() => handleTabChange(tab.tab_index)}
                    className={cn(
                      "text-[12px] sm:text-[14px] xl:text-[16px] 2xl:text-[19.2px] 3xl:text-[24px] leading-none font-normal capitalize rounded-full h-[30px] xl:h-[35.5px] 2xl:h-[42.5px] 3xl:h-[53.3px] p-[5px_15px] xl:p-[7px_24px] 2xl:p-[7px_26px] 3xl:p-[8px_32px] bg-white border flex items-center justify-center transition-all duration-300",
                      activeTabIndex === tab.tab_index
                        ? "font-semibold text-black border-[#008dd2]"
                        : "border-white text-black hover:text-[#008dd2]",
                    )}
                  >
                    {tab.tab_title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Location Cards */}
        <div
          className={cn(
            "relative transition-opacity duration-200",
            loading && "opacity-50",
          )}
        >
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="w-8 h-8 border-[3px] border-[#008dd2] border-t-transparent rounded-full animate-spin" />
            </div>
          )}
          {!loading && locations.length === 0 && (
            <div className="w-full py-[40px] text-center text-[14px] xl:text-[16px] 2xl:text-[18px] text-[#888]">
              No results found
            </div>
          )}

          <div className="flex flex-wrap rounded-[8px] 2xl:rounded-[10.6px] 3xl:rounded-[13.3px]">
            {locations?.map((item, idx) => {
              return (
                <div key={"branch" + idx} className="w-full sm:w-1/2 lg:w-1/4">
                  <div className="w-full h-full border-[1px] border-[#c4c4c4] p-[18px_15px] sm:p-[20px_18px] xl:p-[25px_30px] 2xl:p-[30px_35px] 3xl:p-[38px_44px]">
                    <div className="text-[14px] xl:text-[17.7px] 2xl:text-[21.3px] 3xl:text-[26.6px] leading-normal font-normal text-[#434343] mb-[4px] xl:mb-[6px] 2xl:mb-[8px]">
                      {item?.title}
                    </div>

                    <div className="text-[11.3px] xl:text-[14.2px] 2xl:text-[17px] 3xl:text-[21.3px] leading-normal font-normal text-[#434343]">
                      {parse(item?.description)}
                    </div>

                    {item?.phone && (
                      <InfoItem
                        type="tel"
                        icon="/images/icon-telephone-call.svg"
                        alt="icon-telephone-call"
                        text={item.phone}
                      />
                    )}

                    {item?.timing && (
                      <InfoItem
                        icon="/images/icon-clock.svg"
                        alt="icon-clock"
                        text={item.timing}
                      />
                    )}

                    {item?.directionUrl && item?.directionUrl !== "#" && (
                      <Link
                        href={item?.directionUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] xl:text-[12px] 2xl:text-[14.5px] 3xl:text-[18px] leading-none font-bold text-white w-max max-w-full h-[28.5] xl:h-[35.5] 2xl:h-[42.6] 3xl:h-[53.4] py-2 px-[12px] xl:px-[16px] 2xl:px-[18px] 3xl:px-[23.3px] rounded-full bg-[#066FEF] cursor-pointer transition-all flex items-center justify-center gap-1 xl:gap-2 2xl:gap-3 hover:bg-[#005fd3] mt-5 2xl:mt-6"
                      >
                        <Image
                          src="/images/btn-loc.svg"
                          alt="btn-loc"
                          width={18}
                          height={18}
                          className="w-[14px] xl:w-[18px] 2xl:w-[22px] 3xl:w-[28px] object-contain"
                        />
                        Let&apos;s Go
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Load More */}
        {page < totalPages && (
          <div className="w-full flex justify-center mt-[15px] 2xl:mt-[20px] 3xl:mt-[25px]">
            <button
              onClick={loadMore}
              disabled={loadingMore}
              className="text-[11px] xl:text-[12.4px] 2xl:text-[14.9px] 3xl:text-[18.6px] font-bold text-[#1577f0] hover:text-[#0065e0] transition-colors disabled:opacity-50 cursor-pointer"
            >
              {loadingMore ? "Loading..." : "Load More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}