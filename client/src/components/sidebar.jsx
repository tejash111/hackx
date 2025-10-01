import React from 'react'
import { useParams, Link, useLocation } from 'react-router-dom';
const sidebarItems = [
  {
    icon: "/figmaAssets/frame.svg",
    label: "Quest",
    link: "/quest"
  },
];

const judge = [
  {
    icon: "/figmaAssets/frame.svg",
    label: "Judge Dashboard",
    link: "/judge-dashboard"
  },
];


const certificationItems = [
  {
    icon: "/figmaAssets/frame.svg",
    label: "My Certifications",
    link: "/my-certifications"
  },
  {
    icon: "/figmaAssets/frame.svg",
    label: "Explore Course",
    link: "/explore-course"
  },
];

const dashboardItems = [
  {
    icon: "/figmaAssets/frame-5.svg",
    label: "Dashboard",
    link: "/dashboard"
  },
  {
    icon: "/figmaAssets/frame-8.svg",
    label: "Explore Hackatons",
    link: "/hackathons"
  },
  {
    icon: "/figmaAssets/frame.svg",
    label: "Project Archive",
    link: "/project-archive"
  },
];

const communityItems = [
  {
    icon: "/figmaAssets/frame.svg",
    label: "Community Events",
    link: "/community-events"
  },
  {
    icon: "/figmaAssets/frame.svg",
    label: "Learning Camps",
    link: "/learning-camps"
  },
  {
    icon: "/figmaAssets/frame.svg",
    label: "Discussion & Support",
    link: "/discussion-support"
  },
  {
    icon: "/figmaAssets/frame.svg",
    label: "Advocate Program",
    link: "/advocate-program"
  },
  {
    icon: "/figmaAssets/frame.svg",
    label: "More",
    link: "/more"
  },
];

const Sidebar = () => {
    const { slug } = useParams();
    const location = useLocation();
    console.log(slug);
    
    // Function to check if a route is active
    const isActive = (link) => {
        if (link === '/dashboard') {
            return location.pathname === '/dashboard';
        }
        if (link === '/hackathons') {
            return location.pathname === '/hackathons' || location.pathname.startsWith('/hackathon');
        }
        return location.pathname === link;
    };
    
    // Function to get text color based on active state
    const getTextColor = (link, defaultColor) => {
        return isActive(link) ? "text-[#0092ff]" : defaultColor;
    };
    
    // Function to check if item should be bold
    const shouldBeBold = (link) => {
        return isActive(link);
    };
    
  return (
    <div>

         <aside className="w-[216px] flex flex-col border-r border-[#242425]">
        {/* Logo */}
        <div className="p-6">
          <img
            className="w-12 h-8"
            alt="Logo container"
            src="/figmaAssets/logo-container.png"
          />
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-0">

            <div className="px-0 py-6">
            {judge.map((item, index) => (
              <Link key={index} to={item.link} className="flex items-center gap-2 px-6 py-0 hover:bg-[#0092ff]/10 transition-colors cursor-pointer">
                <img className="w-4 h-4" alt="Frame" src={item.icon} />
                <span
                  className={`[font-family:'Inter',Helvetica] ${shouldBeBold(item.link) ? "font-semibold" : "font-normal"} text-sm tracking-[0] leading-[normal] ${getTextColor(item.link, "text-[#949fa8]")}`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

           <div className="px-4">
            <img
              className="w-[184px] h-px"
              alt="Line"
              src="/figmaAssets/line-7.svg"
            />
          </div>

          {/* Quest Section */}
          <div className="px-0 py-6">
            {sidebarItems.map((item, index) => (
              <Link key={index} to={item.link} className="flex items-center gap-2 px-6 py-0 hover:bg-[#0092ff]/10 transition-colors cursor-pointer">
                <img className="w-4 h-4" alt="Frame" src={item.icon} />
                <span
                  className={`[font-family:'Inter',Helvetica] ${shouldBeBold(item.link) ? "font-semibold" : "font-normal"} text-sm tracking-[0] leading-[normal] ${getTextColor(item.link, "text-[#949fa8]")}`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          <div className="px-4">
            <img
              className="w-[184px] h-px"
              alt="Line"
              src="/figmaAssets/line-7.svg"
            />
          </div>

          {/* Certifications Section */}
          <div className="px-0 py-6">
            {certificationItems.map((item, index) => (
              <Link key={index} to={item.link} className="flex items-center gap-2 px-6 py-3 hover:bg-[#0092ff]/10 transition-colors cursor-pointer">
                <img className="w-4 h-4" alt="Frame" src={item.icon} />
                <span
                  className={`[font-family:'Inter',Helvetica] ${shouldBeBold(item.link) ? "font-semibold" : "font-normal"} text-sm tracking-[0] leading-[normal] ${getTextColor(item.link, "text-[#949fa8]")}`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          <div className="px-4">
            <img
              className="w-[184px] h-px"
              alt="Line"
              src="/figmaAssets/line-7.svg"
            />
          </div>

          {/* Dashboard Section */}
          <div className="px-0 py-6 relative">
            {dashboardItems.map((item, index) => (
              <div key={index} className="relative">
                {isActive(item.link) && (
                  <div className="absolute left-1 top-0 w-52 h-[31px] bg-[#0092ff] rounded-md opacity-20" />
                )}
                <Link to={item.link} className="flex items-center gap-2 px-6 py-2 hover:bg-[#0092ff]/10 transition-colors cursor-pointer relative z-10">
                  <img className="w-4 h-4" alt="Frame" src={item.icon} />
                  <span
                    className={`[font-family:'Inter',Helvetica] ${shouldBeBold(item.link) ? "font-semibold" : "font-normal"} text-sm tracking-[0] leading-[normal] ${getTextColor(item.link, "text-[#949fa8]")}`}
                  >
                    {item.label}
                  </span>
                </Link>
              </div>
            ))}
          </div>

          <div className="px-4">
            <img
              className="w-[184px] h-px"
              alt="Line"
              src="/figmaAssets/line-7.svg"
            />
          </div>

          {/* Community Section */}
          <div className="px-0 py-6">
            {communityItems.map((item, index) => (
              <Link key={index} to={item.link} className="flex items-center gap-2 px-6 py-2 hover:bg-[#0092ff]/10 transition-colors cursor-pointer">
                <img className="w-4 h-4" alt="Frame" src={item.icon} />
                <span
                  className={`[font-family:'Inter',Helvetica] ${shouldBeBold(item.link) ? "font-semibold" : "font-normal"} text-sm tracking-[0] leading-[normal] ${getTextColor(item.link, "text-[#949fa8]")}`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </nav>
      </aside>
    </div>
  )
}

export default Sidebar