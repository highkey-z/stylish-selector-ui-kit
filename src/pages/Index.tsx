import { useState } from "react";
import { BottomNavigation } from "@/components/BottomNavigation";
import { HomeTab } from "@/components/tabs/HomeTab";
import { SearchTab } from "@/components/tabs/SearchTab";
import { FavoritesTab } from "@/components/tabs/FavoritesTab";
import { SettingsTab } from "@/components/tabs/SettingsTab";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");

  const renderActiveTab = () => {
    switch (activeTab) {
      case "home":
        return <HomeTab />;
      case "search":
        return <SearchTab />;
      case "favorites":
        return <FavoritesTab />;
      case "settings":
        return <SettingsTab />;
      default:
        return <HomeTab />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {renderActiveTab()}
      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
