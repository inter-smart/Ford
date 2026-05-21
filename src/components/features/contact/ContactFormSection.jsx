import Image from "next/image";
import ContactForm from "./ContactForm";
import Link from "next/link";

const addressStyle =
  "text-[14px] xl:text-[14.22px] 2xl:text-[17.1px] 3xl:text-[21.33px] leading-normal font-normal text-[#434343] mb-[5px] first-of-type:mb-[10px] first-of-type:lg:mb-[30px] first-of-type:2xl:mb-[40px]";

export default function ContactFormSection({ data, lang }) {
  return (
    <section className="py-[40px] xl:py-[50px] 2xl:py-[70px] 3xl:py-[90px] bg-[#F7F7F7]">
      <div className="container">
        <div className="flex flex-wrap -m-[8px]">
          {/* Left Section */}
          <div className="w-full xl:w-5/12 p-[8px]">
            <div className="flex flex-wrap w-full">
              {/* Logo */}
              <div className="w-full mb-[20px] xl:mb-[25px] 2xl:mb-[40px]">
                <div className="w-[75px]">
                  <Image
                    src={data?.logo_image?.url || "/images/placeholder.png"}
                    alt={data?.logo_image?.alt || "Logo"}
                    width={75}
                    height={30}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Head Office */}
              <div className="w-full mb-2.5 ">
                <div className="text-[16px] xl:text-[18px] 3xl:text-[22px] font-semibold text-black mb-[15px] xl:mb-[20px] 2xl:mb-[30px]">
                  {data?.address_title}
                </div>
                <ul className="lg:max-w-[450px]">
                  <li className={addressStyle}>{data?.address}</li>
                  <li className={addressStyle}>
                    Phone:
                    <a
                      href={`tel:${data?.phone_number}`}
                      className="ml-1 text-[#434343] transition-all hover:text-[#00095b]"
                    >
                      {data?.phone_number}
                    </a>
                  </li>
                  <li className={addressStyle}>
                    Email:
                    <a
                      href={`mailto:${data?.["e-mail_id"]}`}
                      className="ml-1 text-[#434343] transition-all hover:text-[#00095b]"
                    >
                      {data?.["e-mail_id"]}
                    </a>
                  </li>
                </ul>
              </div>

              {/* Corporate Office */}
              {/* <div className="w-full 2xs:w-1/2">
                                <div className="text-[16px] xl:text-[18px] 3xl:text-[22px] font-semibold text-black mb-[15px] xl:mb-[20px] 2xl:mb-[30px]">
                                    Corporate Office
                                </div>
                                <ul className="2xs:max-w-[250px]">
                                    <li className="text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-[#434343]  mb-[5px] last-of-type:mb-0 first-of-type:2xs:mb-[40px]">
                                        SAIF Office Q1-08-125/A,<br />
                                        P.O.Box 22637.<br />
                                        Sharjah - U.A.E
                                    </li>
                                    <li className="text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-[#434343]  mb-[5px] last-of-type:mb-0 first-of-type:mb-[40px] flex items-center">
                                        Phone:
                                        <a
                                            href="tel:97142728150"
                                            className="ml-1 text-[#434343] transition-all hover:text-[#00095b]"
                                        >
                                            +971 4 272 8150
                                        </a>
                                    </li>
                                    <li className="text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-[#434343] flex items-center  mb-[5px] last-of-type:mb-0 first-of-type:mb-[40px]">
                                        Email:
                                        <a
                                            href="mailto:auto@shayan.ae"
                                            className="ml-1 text-[#434343] transition-all hover:text-[#00095b]"
                                        >
                                            auto@shayan.ae
                                        </a>
                                    </li>
                                </ul>
                            </div> */}

              <Link
                href={data?.map_url}
                className="text-[14px] flex items-center text-white font-bold justify-center bg-[#1577F0] hover:bg-[#0f5eda] transition-colors rounded-[50px] overflow-hidden h-[35px] 3xl:h-[40px] px-[15px] mt-[10px] xl:mt-[20px] w-fit"
              >
                <div className="w-[18px] 3xl:w-[21px] h-[18px] 3xl:h-[21px]">
                  <svg width="21" height="21" viewBox="0 0 21 21"
                  className="w-full h-full block"
                  >
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

          <div className="w-full xl:w-7/12 p-[8px]">
            <div className="flex flex-wrap w-full -m-[8px]">
              <div className="w-full xs:w-[50%] p-[8px]">
                <div className="w-full h-full rounded-[10px] overflow-hidden aspect-[360/350] group">
                  <Image
                    src={
                      data?.form_section_image?.url || "/images/placeholder.png"
                    }
                    width="360"
                    height="415"
                    className="w-full h-full object-cover transition-all group-hover:scale-[1.1]"
                    alt={data?.form_section_image?.alt || "Car"}
                  />
                </div>
              </div>
              <div className="w-full xs:w-[50%] p-[8px] xs:pl-[30px] xl:pl-[50px]">
                <ContactForm data={data} lang={lang} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
