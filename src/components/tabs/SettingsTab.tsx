import { Package, CreditCard, Clock, User, Settings as SettingsIcon, ChevronRight } from "lucide-react";

const settingsItems = [
  { icon: Package, label: "My Orders", description: "Track your purchases" },
  { icon: CreditCard, label: "Payment Methods", description: "Manage payment info" },
  { icon: Clock, label: "Past Searches", description: "View search history" },
  { icon: User, label: "Account Settings", description: "Personal information" },
  { icon: SettingsIcon, label: "App Settings", description: "Preferences & notifications" },
];

export const SettingsTab = () => {
  return (
    <div className="pb-20 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <header className="text-center py-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
          <p className="text-muted-foreground">Manage your account</p>
        </header>

        <div className="space-y-2">
          {settingsItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                className="w-full p-4 bg-card border border-border rounded-lg flex items-center justify-between hover:bg-accent transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-medium text-foreground">{item.label}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};