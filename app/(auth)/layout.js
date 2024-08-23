import { Poppins } from "next/font/google";
import "../globals.css";
import ToastContext from "@app/components/ToastContext";
import Provider from "@app/components/Provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Chat App",
  description: "Create a nextjs 14 chat app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ToastContext />
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
