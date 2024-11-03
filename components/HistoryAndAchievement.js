import { useState, useEffect } from "react";
import { getTextFromDescription } from "../utils";

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const handleClick = (label) => {
    setActiveTab(label);
  };

  return (
    <div>
      <div className="flex justify-center">
        {children.map((child) => (
          <Tab
            key={child.props.label}
            label={child.props.label}
            activeTab={activeTab}
            onClick={handleClick}
          />
        ))}
      </div>
      <div className="pt-4">
        {children.map((child) => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </div>
    </div>
  );
};

const Tab = ({ label, activeTab, onClick }) => {
  const isActive = activeTab === label;
  const activeClass = isActive
    ? "underline-blue text-black"
    : "underline-gray text-gray-700";

  return (
    <button
      className={`px-8 text-xl font-semibold ${activeClass}`}
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  );
};

const TabContent = ({ label, children }) => {
  return <div>{children}</div>;
};

export default function HistoryAndAchievement() {
  const [historyData, setHistoryData] = useState(null);
  const [achievementData, setAchievementData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [historyRes, achievementRes] = await Promise.all([
          fetch(
            `${process.env.NEXT_PUBLIC_APP_API_URL}/home-settings?populate=*&filters[name][$eq]=History`
          ),
          fetch(
            `${process.env.NEXT_PUBLIC_APP_API_URL}/home-settings?populate=*&filters[name][$eq]=Achievement`
          ),
        ]);

        const historyJson = await historyRes.json();
        const achievementJson = await achievementRes.json();

        setHistoryData(historyJson.data?.[0]?.description);
        setAchievementData(achievementJson.data?.[0]?.description);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mx-auto px-5 pb-24 pt-32 lg:px-24">
      <div className="my-3 flex w-full flex-col text-left lg:text-center">
        <h2
          className="bold mb-8 transform text-4xl font-bold leading-tight text-black 
      transition-all duration-300 hover:scale-105 lg:text-6xl"
        >
          History And Achievement
        </h2>
      </div>
      <Tabs>
        <TabContent label="History">
          <div className="flex w-full transform flex-col text-left transition-all duration-500 ease-in-out lg:text-center">
            <div className="mt-4">{getTextFromDescription(historyData)}</div>
          </div>
        </TabContent>
        <TabContent label="Achievement">
          <div className="flex w-full transform flex-col text-left transition-all duration-500 ease-in-out lg:text-center">
            <div className="mt-4">
              {getTextFromDescription(achievementData)}
            </div>
          </div>
        </TabContent>
      </Tabs>
    </div>
  );
}
