import Link from "next/link";

export default function BranchSection({ data }) {
  return (
    <section className="py-[35px] 2xl:py-[50px_40px] 3xl:py-[80px_45px]">
      <div className="container">
        <div className="3xl:text-[40px] xl:text-[35px] lg:text-[30px] md:text-[28px] sm:text-[25px] text-[20px] text-[#000000] font-semibold mb-[20px] 2xl:mb-[35px] 3xl:mb-[40px]">
          {data?.title}
        </div>

        <div className="flex flex-wrap gap-0">
          {data?.branch_directories.map((item, index) => (
            <div key={index} className="w-full xs:w-1/2 md:w-1/3 xl:w-1/4">
              <div className="w-full h-full border border-[rgba(0,0,0,0.1)] p-[20px] 2xl:p-[25px] flex flex-col justify-between">
                <div className="w-full">
                  <div className=" text-[17px] lg:text-[18px] xl:text-[20px] text-[#434343] mb-[5px] font-normal">
                    {item?.branch_title}
                  </div>
                  <div className="text-[14px] lg:text-[16px] text-[#434343] mb-[15px]">
                    {item?.address}
                  </div>

                  <a
                    href={`tel:${item?.phone_number}`}
                    className="flex items-center mb-[8px] transition-all hover:text-[#0f5eda]"
                  >
                    <div className="w-[15px] h-[15px] flex items-center">
                      <svg width="15" height="15" viewBox="0 0 15 15">
                        <g clipPath="url(#clip0_1693_6692)">
                          <path
                            d="M13.778 10.95C13.3683 10.6064 10.9655 9.08484 10.5661 9.15469C10.3786 9.18797 10.2352 9.34781 9.85125 9.80578C9.67371 10.0312 9.47873 10.2423 9.26812 10.4372C8.88224 10.344 8.50872 10.2055 8.15531 10.0247C6.76935 9.34992 5.64967 8.22991 4.97531 6.84375C4.79449 6.49034 4.65603 6.11682 4.56281 5.73094C4.75769 5.52033 4.9688 5.32535 5.19422 5.14781C5.65172 4.76391 5.81203 4.62141 5.84531 4.43297C5.91516 4.03266 4.39219 1.63078 4.05 1.22109C3.90656 1.05141 3.77625 0.9375 3.60938 0.9375C3.12562 0.9375 0.9375 3.64313 0.9375 3.99375C0.9375 4.02234 0.984375 6.83906 4.54172 10.4583C8.16094 14.0156 10.9777 14.0625 11.0062 14.0625C11.3569 14.0625 14.0625 11.8744 14.0625 11.3906C14.0625 11.2238 13.9486 11.0934 13.778 10.95Z"
                            fill="#066FEF"
                          />
                          <path
                            d="M10.7812 7.03125H11.7188C11.7176 6.03703 11.3222 5.08385 10.6192 4.38083C9.91615 3.67781 8.96297 3.28237 7.96875 3.28125V4.21875C8.71444 4.21949 9.42938 4.51605 9.95667 5.04333C10.484 5.57062 10.7805 6.28556 10.7812 7.03125Z"
                            fill="#066FEF"
                          />
                          <path
                            d="M13.125 7.03125H14.0625C14.0606 5.41566 13.418 3.86677 12.2756 2.72437C11.1332 1.58198 9.58434 0.939361 7.96875 0.9375V1.875C9.33578 1.87661 10.6464 2.42038 11.613 3.38701C12.5796 4.35365 13.1234 5.66422 13.125 7.03125Z"
                            fill="#066FEF"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1693_6692">
                            <rect width="15" height="15" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <span className="px-[8px] text-[14px]">
                      {item?.phone_number}
                    </span>
                  </a>

                  <div className="flex items-center mb-[8px]">
                    <div className="w-[15px] h-[15px] flex items-center">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_1693_6711)">
                          <path
                            d="M10.8491 9.41194L8.61828 7.73881V4.33062C8.61828 3.98794 8.34128 3.71094 7.99859 3.71094C7.65591 3.71094 7.37891 3.98794 7.37891 4.33062V8.04869C7.37891 8.24388 7.47062 8.42794 7.62678 8.54444L10.1055 10.4035C10.217 10.4871 10.3472 10.5274 10.4767 10.5274C10.6657 10.5274 10.8516 10.4425 10.973 10.2789C11.1788 10.0056 11.123 9.61706 10.8491 9.41194Z"
                            fill="#1577F0"
                          />
                          <path
                            d="M8 0C3.58853 0 0 3.58853 0 8C0 12.4115 3.58853 16 8 16C12.4115 16 16 12.4115 16 8C16 3.58853 12.4115 0 8 0ZM8 14.7607C4.27266 14.7607 1.23934 11.7273 1.23934 8C1.23934 4.27266 4.27266 1.23934 8 1.23934C11.728 1.23934 14.7607 4.27266 14.7607 8C14.7607 11.7273 11.7273 14.7607 8 14.7607Z"
                            fill="#1577F0"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1693_6711">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <span className="px-[8px] text-[14px]">
                      {item?.office_time}
                    </span>
                  </div>
                </div>
                <Link
                  href={item?.map_url}
                  className="text-[14px] flex items-center text-white font-bold justify-center bg-[#1577F0] hover:bg-[#0f5eda] transition-colors rounded-[50px] overflow-hidden h-[35px] 3xl:h-[40px] px-[15px] mt-[25px] w-fit"
                >
                  <div className="w-[18px] 3xl:w-[21px] h-[18px] 3xl:h-[21px]">
                    <svg width="21" height="21" viewBox="0 0 21 21">
                      <g clipPath="url(#clip0_1693_6703)">
                        <path
                          d="M10.5 6.5625C8.32912 6.5625 6.5625 8.32912 6.5625 10.5C6.5625 12.6709 8.32912 14.4375 10.5 14.4375C12.6709 14.4375 14.4375 12.6709 14.4375 10.5C14.4375 8.32912 12.6709 6.5625 10.5 6.5625ZM10.5 13.125C9.05231 13.125 7.875 11.9477 7.875 10.5C7.875 9.05231 9.05231 7.875 10.5 7.875C11.9477 7.875 13.125 9.05231 13.125 10.5C13.125 11.9477 11.9477 13.125 10.5 13.125Z"
                          fill="white"
                        />
                        <path
                          d="M20.3438 9.84375H18.3422C18.0246 6.02437 14.9756 2.97544 11.1562 2.65781V0.65625C11.1562 0.294 10.8623 0 10.5 0C10.1377 0 9.84375 0.294 9.84375 0.65625V2.65781C6.02437 2.97544 2.97544 6.02569 2.65781 9.84375H0.65625C0.294 9.84375 0 10.1377 0 10.5C0 10.8623 0.294 11.1562 0.65625 11.1562H2.65781C2.97544 14.9756 6.02437 18.0246 9.84375 18.3422V20.3438C9.84375 20.706 10.1377 21 10.5 21C10.8623 21 11.1562 20.706 11.1562 20.3438V18.3422C14.9756 18.0246 18.0246 14.9756 18.3422 11.1562H20.3438C20.706 11.1562 21 10.8636 21 10.5C21 10.1391 20.706 9.84375 20.3438 9.84375ZM10.5 17.0625C6.88144 17.0625 3.9375 14.1186 3.9375 10.5C3.9375 6.88144 6.88144 3.9375 10.5 3.9375C14.1186 3.9375 17.0625 6.88144 17.0625 10.5C17.0625 14.1186 14.1186 17.0625 10.5 17.0625Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1693_6703">
                          <rect width="21" height="21" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <span className="px-[8px] text-white">Let's Go</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
