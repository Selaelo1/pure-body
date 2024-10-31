import { Watch, Smartphone, Laptop, Activity } from "lucide-react";

const DeviceSync = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Device Sync</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {devices.map((device) => (
          <div key={device.title} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-4">
              <device.icon className="h-8 w-8 text-purple-600" />
              <div>
                <h3 className="text-lg font-semibold">{device.title}</h3>
                <p className="text-gray-600">{device.description}</p>
              </div>
            </div>
            <button className="mt-4 w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
              Connect Device
            </button>
          </div>
        ))}

        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Connected Devices</h3>
            <div className="space-y-4">
              {connectedDevices.map((device, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3 border-b last:border-0"
                >
                  <div className="flex items-center space-x-3">
                    <Activity className="h-5 w-5 text-green-500" />
                    <div>
                      <p className="font-medium">{device.name}</p>
                      <p className="text-sm text-gray-500">
                        Last synced: {device.lastSync}
                      </p>
                    </div>
                  </div>
                  <button className="text-red-600 hover:text-red-700">
                    Disconnect
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const devices = [
  {
    icon: Watch,
    title: "Smartwatch",
    description: "Connect your smartwatch to track activities and heart rate.",
  },
  {
    icon: Smartphone,
    title: "Smartphone",
    description:
      "Sync with health apps on your phone for comprehensive tracking.",
  },
  {
    icon: Laptop,
    title: "Desktop Apps",
    description: "Connect with popular fitness apps and services.",
  },
];

const connectedDevices = [
  {
    name: "Apple Watch Series 7",
    lastSync: "2 minutes ago",
  },
  {
    name: "iPhone Health App",
    lastSync: "5 minutes ago",
  },
];

export default DeviceSync;
