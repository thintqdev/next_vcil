import { useState } from "react";

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
      <div className="pt-24">
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
  const activeClass = isActive ? 'underline-blue text-black' : 'underline-gray text-gray-700';

  return (
    <a
      href="#"
      className={`px-8 text-xl font-semibold ${activeClass}`}
      onClick={() => onClick(label)}
    >
      {label}
    </a>
  );
};

const TabContent = ({ label, children }) => {
  return <div>{children}</div>;
};

export { Tabs, Tab, TabContent };