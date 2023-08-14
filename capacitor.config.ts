import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "absen-mobile",
  webDir: "out",
  server: {
    url: "http://192.168.1.2:3000",
    cleartext: true,
  },
};

export default config;
