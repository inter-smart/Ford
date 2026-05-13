import { Heading } from "@/components/layout/Heading";
import Image from "next/image";
import { Text } from "@/components/layout/Text";
import Link from "next/link";
import BookATestDriveDialog from "@/components/common/BookATestDriveDialog";

const socialIcons = [
  {
    key: "fb_link",
    svg: (
      <svg viewBox="0 0 10 20" width="9" height="18">
        <path d="M6.34292 19.2649V10.682H9.22267L9.65472 7.33613H6.34292V5.20027C6.34292 4.23187 6.61074 3.57191 8.001 3.57191L9.77128 3.57118V0.578507C9.46514 0.538722 8.41425 0.44751 7.19113 0.44751C4.63705 0.44751 2.88848 2.00649 2.88848 4.8689V7.33613H0V10.682H2.88848V19.2649H6.34292Z" />
      </svg>
    ),
  },
  {
    key: "youtube_link",
    svg: (
      <svg viewBox="0 0 27 20" width="26" height="18px">
        <path d="M13.0265 19.2649C13.0243 19.2649 13.0219 19.2649 13.0195 19.2649C12.2333 19.2595 5.28309 19.1961 3.31395 18.6639C1.93778 18.2942 0.851434 17.2096 0.480506 15.8341C-0.0347373 13.9008 -0.00193826 10.1788 0.00163982 9.88161C-0.00173948 9.5858 -0.0349361 5.83298 0.478916 3.88385C0.479512 3.88207 0.47991 3.88008 0.480506 3.87829C0.84726 2.51842 1.95805 1.40032 3.31057 1.0296C3.31395 1.02861 3.31753 1.02782 3.32091 1.02682C5.26778 0.515454 12.2317 0.452874 13.0195 0.44751H13.0336C13.8218 0.452874 20.7905 0.516249 22.7415 1.04927C24.1141 1.418 25.1997 2.50113 25.5716 3.87491C26.1061 5.82543 26.0566 9.5864 26.0513 9.90386C26.055 10.2166 26.0862 13.9052 25.574 15.8482C25.5736 15.8502 25.573 15.852 25.5726 15.8537C25.2015 17.2293 24.1153 18.3138 22.7376 18.684C22.7358 18.6846 22.7338 18.6849 22.732 18.6855C20.7853 19.1967 13.8212 19.2593 13.0336 19.2649C13.0312 19.2649 13.0288 19.2649 13.0265 19.2649ZM2.44646 4.40555C1.99403 6.12601 2.03677 9.83095 2.03717 9.8683V9.89512C2.02365 10.9226 2.07116 13.8983 2.44666 15.3076C2.62875 15.9825 3.16446 16.5171 3.8439 16.6997C5.2968 17.0924 10.9575 17.216 13.0265 17.2305C15.1007 17.216 20.7698 17.0958 22.212 16.7187C22.8892 16.5356 23.4232 16.0027 23.6064 15.3271C23.9823 13.8971 24.0294 10.9359 24.0157 9.91499C24.0157 9.90426 24.0157 9.89353 24.0159 9.88281C24.0346 8.84298 23.9978 5.83258 23.6082 4.41191C23.6078 4.41052 23.6074 4.40913 23.6072 4.40774C23.4244 3.72989 22.8884 3.19527 22.209 3.0127C20.7702 2.61954 15.1003 2.49636 13.0265 2.48186C10.9535 2.49636 5.29004 2.61636 3.8435 2.99303C3.17699 3.17779 2.62914 3.73148 2.44646 4.40555ZM10.4321 13.9755V5.73662L17.5565 9.85618L10.4321 13.9755Z" />
      </svg>
    ),
  },
  {
    key: "instagram_link",
    svg: (
      <svg viewBox="0 0 22 22" width="21" height="18px">
        <path d="M11.0703 21.7123C10.9984 21.7123 10.9265 21.7123 10.8541 21.712C9.15212 21.7161 7.57953 21.6729 6.05017 21.5798C4.64804 21.4945 3.36816 21.01 2.3487 20.1787C1.36502 19.3766 0.69328 18.2921 0.352189 16.9556C0.0553299 15.7921 0.0395923 14.6499 0.0245174 13.5452C0.013584 12.7525 0.00231922 11.8133 0 10.8581C0.00231922 9.89899 0.013584 8.95974 0.0245174 8.1671C0.0395923 7.06253 0.0553299 5.92035 0.352189 4.75665C0.69328 3.42016 1.36502 2.33564 2.3487 1.53355C3.36816 0.702305 4.64804 0.217772 6.05033 0.132461C7.57969 0.03953 9.15262 -0.00387092 10.8582 0.000270392C12.5607 -0.00337396 14.1328 0.03953 15.6622 0.132461C17.0643 0.217772 18.3442 0.702305 19.3636 1.53355C20.3475 2.33564 21.019 3.42016 21.3601 4.75665C21.657 5.92019 21.6727 7.06253 21.6878 8.1671C21.6987 8.95974 21.7102 9.89899 21.7123 10.8541V10.8581C21.7102 11.8133 21.6987 12.7525 21.6878 13.5452C21.6727 14.6497 21.6572 15.7919 21.3601 16.9556C21.019 18.2921 20.3475 19.3766 19.3636 20.1787C18.3442 21.01 17.0643 21.4945 15.6622 21.5798C14.1976 21.6689 12.6931 21.7123 11.0703 21.7123ZM10.8541 20.0157C12.5284 20.0197 14.0657 19.9774 15.5591 19.8867C16.6193 19.8222 17.5386 19.4782 18.2916 18.8641C18.9877 18.2964 19.4672 17.5132 19.7165 16.5362C19.9636 15.5676 19.9779 14.5277 19.9916 13.522C20.0024 12.7346 20.0137 11.802 20.016 10.8561C20.0137 9.91009 20.0024 8.97763 19.9916 8.19029C19.9779 7.18461 19.9636 6.14465 19.7165 5.17591C19.4672 4.1989 18.9877 3.41569 18.2916 2.848C17.5386 2.23409 16.6193 1.89003 15.5591 1.82559C14.0657 1.73465 12.5284 1.69274 10.8581 1.69638C9.18409 1.69241 7.64662 1.73465 6.15321 1.82559C5.093 1.89003 4.17376 2.23409 3.42068 2.848C2.72458 3.41569 2.24517 4.1989 1.99585 5.17591C1.74869 6.14465 1.73444 7.18445 1.72069 8.19029C1.70992 8.9783 1.69866 9.91142 1.69634 10.8581C1.69866 11.8007 1.70992 12.734 1.72069 13.522C1.73444 14.5277 1.74869 15.5676 1.99585 16.5362C2.24517 17.5132 2.72458 18.2964 3.42068 18.8641C4.17376 19.478 5.093 19.8221 6.15321 19.8865C7.64662 19.9774 9.18442 20.0199 10.8541 20.0157ZM10.8137 16.157C7.8908 16.157 5.51261 13.7791 5.51261 10.8561C5.51261 7.9332 7.8908 5.55526 10.8137 5.55526C13.7367 5.55526 16.1147 7.9332 16.1147 10.8561C16.1147 13.7791 13.7367 16.157 10.8137 16.157ZM10.8137 7.25154C8.8261 7.25154 7.20895 8.86864 7.20895 10.8561C7.20895 12.8436 8.8261 14.4607 10.8137 14.4607C12.8014 14.4607 14.4184 12.8436 14.4184 10.8561C14.4184 8.86864 12.8014 7.25154 10.8137 7.25154ZM16.7085 3.85898C16.0059 3.85898 15.4362 4.42849 15.4362 5.13119C15.4362 5.83388 16.0059 6.4034 16.7085 6.4034C17.4112 6.4034 17.9807 5.83388 17.9807 5.13119C17.9807 4.42849 17.4112 3.85898 16.7085 3.85898Z" />
      </svg>
    ),
  },
  {
    key: "linkedin_link",
    svg: (
      <svg viewBox="0 0 23 22" width="22" height="22px">
        <path d="M2.75459 0C1.089 0 0 1.09371 0 2.53125C0 3.93703 1.05656 5.06194 2.69068 5.06194H2.72229C4.42046 5.06194 5.4773 3.93703 5.4773 2.53125C5.44555 1.09371 4.42046 0 2.75459 0Z" />
        <path d="M0.289062 7.06226H5.15829V21.7115H0.289062V7.06226Z" />
        <path d="M17.113 6.71729C14.4862 6.71729 12.7248 9.18559 12.7248 9.18559V7.06111H7.85547V21.7104H12.7246V13.5297C12.7246 13.0917 12.7563 12.6544 12.885 12.3413C13.237 11.4667 14.038 10.5607 15.3832 10.5607C17.1452 10.5607 17.8499 11.9041 17.8499 13.8735V21.7104H22.7187V13.3108C22.7187 8.81113 20.3164 6.71729 17.113 6.71729Z" />
      </svg>
    ),
  },
  {
    key: "twitter_link",
    svg: (
      <svg viewBox="0 0 18 18" width="22" height="18px">
        <path d="M10.3374 7.52634L16.8037 0.171387H15.2714L9.65673 6.55759L5.17228 0.171387H0L6.78137 9.82845L0 17.5412H1.5324L7.46167 10.7972L12.1976 17.5412H17.3699L10.337 7.52634H10.3374ZM8.2386 9.91353L7.5515 8.95191L2.08454 1.30014H4.43822L8.85012 7.47536L9.53721 8.43699L15.2722 16.4638H12.9185L8.2386 9.9139V9.91353Z" />
      </svg>
    ),
  },
];

const footerLink =
  "2xl:text-[14px] xl:text-[12px] md:text-[11px] text-[10px] text-white/60 capitalize font-normal hover:text-white transition-all";
const footerHeading =
  "lg:text-[11px] text-[10px] uppercase text-white/40 font-medium lg:mb-3 mb-1";

export default function welcome({ data }) {
  if (!data) return null;

  const {
    test_drive_section,
    first_menu_section,
    second_menu_section,
    third_menu_section,
    fourth_menu_section,
    footer_logo,
    phone_number,
    ["e-mail_id"]: email,
    app_link_section,
    social_media_section,
  } = data;

  return (
    <section className="w-full relative bg-[#00095B] 2xl:py-[65px] xl:py-[50px] sm:py-[40px] py-[30px] z-0 overflow-hidden ">
      <div className="container">
        {test_drive_section?.enable__disable_test_drive_section && (
          <div
            className="max-w-full mx-auto bg-[#010D7E] rounded-[16px] 3xl:py-[50px] md:py-[35px] md:px-[30px] px-[30px] 
                    py-[25px] ltr:3xl:pr-[95px] ltr:2xl:pr-[75px] ltr:xl:pr-[45px] rtl:3xl:pl-[95px] rtl:2xl:pl-[75px] rtl:xl:pl-[45px] lg:mb-[50px] mb-[30px] 
                    flex flex-col md:flex-row justify-between items-center
                    relative overflow-hidden 
                    after:absolute after:content-['']  ltr:after:right-0 rtl:after:left-0 after:top-0 after:bottom-0 
                    3xl:after:w-[480px] 2xl:after:w-[380px] xl:after:w-[300px] lg:after:w-[250px] after:w-[220px] 3xl:after:h-[480px] 2xl:after:h-[380px] 
                    xl:after:h-[300px] 
                    lg:after:h-[250px] after:h-[220px] ltr:after:rounded-l-full rtl:after:rounded-r-full after:bg-[#15229F] after:m-auto max-md:after:hidden"
          >
            {/* Left Content */}
            <div className="text-white 3xl:max-w-[580px] md:max-w-[450px] mb-5 md:mb-0 max-md:text-center">
              <h2 className="2xl:text-[28px] xl:text-[25px] text-white font-medium  mb-2">
                {test_drive_section?.title}
              </h2>
              <Text size="text2" as="p" className="text-white/60">
                {test_drive_section.description}
              </Text>
            </div>

            {/* Right Button */}
            <div className="relative z-10">
              <BookATestDriveDialog>
                {/* <Link
                  href={test_drive_section?.button_url?.url}
                  target={test_drive_section?.button_url?.target} */}
                <div className="relative 3xl:text-[20px] 2xl:text-[17px] xl:text-[13px] lg:text-[12px] text-[11px] font-medium text-white text-sm md:text-base rounded-full flex items-center gap-2 transition-all duration-300 ease-in-out hover:tracking-wider">
                  {test_drive_section.button_title}
                  <svg
                    viewBox="0 0 512 512"
                    className="w-[16px] h-auto block fill-white transition-transform duration-300 ease-in-out group-hover:translate-x-2"
                  >
                    <path
                      d="M506.134,241.843c-0.006-0.006-0.011-0.013-0.018-0.019l-104.504-104c-7.829-7.791-20.492-7.762-28.285,0.068
                                    c-7.792,7.829-7.762,20.492,0.067,28.284L443.558,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h423.557
                                    l-70.162,69.824c-7.829,7.792-7.859,20.455-0.067,28.284c7.793,7.831,20.457,7.858,28.285,0.068l104.504-104
                                    c0.006-0.006,0.011-0.013,0.018-0.019C513.968,262.339,513.943,249.635,506.134,241.843z"
                    />
                  </svg>
                </div>
              </BookATestDriveDialog>
            </div>
          </div>
        )}
        <div className="w-full grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-5 lg:gap-8 3xl:mb-[70px] 2xl:mb-[45px] lg:mb-[30px] mb-[15px]">
          {/* Column 1: SUVs & Cars */}

          {first_menu_section?.enable__disable_first_menu_section &&
            first_menu_section?.menu_items?.length > 0 && (
              <div className="min-w-0 w-full">
                <h4 className={footerHeading}>{first_menu_section?.title}</h4>
                <ul className="space-y-2">
                  {first_menu_section?.menu_items?.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item?.menu_url?.url}
                        target={item?.menu_url?.target || "_self"}
                        className={footerLink}
                      >
                        {item?.menu_title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          {/* Column 2: Trucks & Vans */}
          {second_menu_section?.enable__disable_second_menu_section &&
            second_menu_section?.menu_items?.length > 0 && (
              <div className="min-w-0 w-full">
                <h4 className={footerHeading}>{second_menu_section?.title}</h4>
                <ul className="space-y-2">
                  {second_menu_section?.menu_items?.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item?.menu_url?.url}
                        target={item?.menu_url?.target || "_self"}
                        className={footerLink}
                      >
                        {item?.menu_title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          {/* Column 3: Useful Links */}
          {third_menu_section?.enable__disable_third_menu_section &&
            third_menu_section?.menu_items?.length > 0 && (
              <div className="min-w-0 w-full">
                <h4 className={footerHeading}>{third_menu_section?.title}</h4>
                <ul className="space-y-2">
                  {third_menu_section?.menu_items?.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item?.menu_url?.url}
                        target={item?.menu_url?.target || "_self"}
                        className={footerLink}
                      >
                        {item?.menu_title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          {/* Column 4: Customer Service */}
          {fourth_menu_section?.enable__disable_fourth_menu_section &&
            fourth_menu_section?.menu_items?.length > 0 && (
              <div className="min-w-0 w-full">
                <h4 className={footerHeading}>{fourth_menu_section?.title}</h4>
                <ul className="space-y-2">
                  {fourth_menu_section?.menu_items?.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item?.menu_url?.url}
                        target={item?.menu_url?.target || "_self"}
                        className={footerLink}
                      >
                        {item?.menu_title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          {/* Column 5: Contact & App */}
          <div className="w-full min-w-0 flex flex-col items-start lg:items-end lg:text-right">
            <Link href="/" className="w-[115px]">
              <Image
                src={footer_logo?.url || "/images/logo.svg"}
                alt={footer_logo?.alt || "Ford"}
                width={80}
                height={30}
                className="w-full sm:max-w-[115px] max-w-[85px] object-fill xl:mb-[50px] sm:mb-[30px] mb-[20px] lg:ml-auto "
              />
            </Link>
            <div className="h-px w-10 bg-white opacity-20 ltr:lg:ml-auto xl:mb-[25px] mb-[15px]" />
            <ul className="space-y-2">
              <li>
                <Link
                  href={`tel:${phone_number}`}
                  className={`${footerLink} flex lg:justify-end`}
                >
                  {phone_number}
                </Link>
              </li>
              <li>
                <Link
                  href={`mailto:${email}`}
                  className={`${footerLink} flex lg:justify-end`}
                >
                  {email}
                </Link>
              </li>
            </ul>
          </div>
          {/* download section */}
          <div className="min-w-full w-full lg:col-span-full sm:col-span-3 col-span-full max-sm:text-center">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              {/* App Download Section */}
              <div>
                <p className={`${footerHeading} 2xl:mb-[25px] mb-[10px]`}>
                  Download the App
                </p>
                <div className="flex gap-3 lg:max-w-[380px] sm:max-w-[300px] w-full">
                  {app_link_section?.app_links?.map((item, index) => (
                    <div key={index} className="w-1/2">
                      <Link
                        href={item?.download_link?.url}
                        target={item?.menu_url?.target || "_self"}
                        className="w-full 2xl:h-[55px] h-[45px] border border-white 2xl:rounded-[10px] rounded-[5px]  flex items-center px-[15px] justify-center group hover:bg-[#010D7E]"
                      >
                        <Image
                          src={item?.image?.url}
                          alt={item?.image?.alt}
                          width={140}
                          height={35}
                          className="w-full h-full transition-all object-contain 2xl:max-w-[130px] max-w-[100px] group-hover:scale-[0.75]"
                        />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media Section */}
              <div className="flex flex-wrap items-center sm:gap-4 gap-3 max-sm:justify-center lg:pt-[30px] lg:px-[40px] px-[20px]">
                <p className="text-[11px] uppercase text-white/40 font-medium">
                  Follow Us:
                </p>
                <div className="flex justify-center gap-4">
                  {socialIcons.map(({ key, svg }) => {
                    const link =
                      social_media_section?.social_media_icons?.[key];
                    if (!link?.url || link.url.trim() === "") return null;
                    return (
                      <a
                        key={key}
                        href={link?.url}
                        target={link?.target || "_self"}
                        rel="noopener noreferrer"
                        className=" 2xl:w-[55px] xl:w-[45px] sm:w-[40px] w-[35px] 2xl:h-[55px] xl:h-[45px] sm:h-[40px] h-[35px]
                                    rounded-full flex items-center justify-center transition-all duration-300
                                    hover:bg-[#15229F] hover:text-white cursor-pointer"
                      >
                        <div className="w-[12px] xl:w-[21px] h-[12px] xl:h-[18px] [&>svg]:w-full [&>svg]:h-full [&>svg]:fill-white">
                          {svg}
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* copyrights */}

        <div
          className="xs:w-[calc(100%-30px)] lg:w-[calc(100%-60px)] relative z-0 flex flex-wrap items-center justify-between xl:mt-[50px] md:mt-[30px] mt-[15px] after:absolute after:content-['']
after:left-0 after:right-0 after:h-[1px] after:w-full after:bg-[#051EFF] after:m-auto after:z-[-1] max-sm:after:hidden max-xs:text-center max-xs:px-[20px] max-xs:justify-center"
        >
          <div className="bg-[#00095B] p-[5px]">
            <Text size="text2" as="p" className="text-white">
              © 2025 Ford Oman. All rights reserved.
            </Text>
          </div>
          <div className="flex items-center gap-2 bg-[#00095B] p-[5px]">
            <div className="2xl:text-[14px] xl:text-[13px] lg:text-[12px] text-[11px] text-white">
              Designed By:
            </div>
            <a href="" className="d-block w-12px h-[12px]">
              <Image
                src="/images/intersmart.svg"
                alt="App Store"
                width={12}
                height={12}
                className="w-full h-full max-w-[12px] mx-[3px]"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
