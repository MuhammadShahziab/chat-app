import { Inter } from "next/font/google";
import "../globals.css";
import Provider from "@app/components/Provider";
import ToastContext from "@app/components/ToastContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Create a nextjs 14 chat app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} relative lg:max-h-screen lg:max-w-full lg:overflow-hidden bg-[#FAF9F6] `}
      >
        <Provider>
          {children}
          <img
            src="/assets/circle.svg"
            className="absolute -top-11 max-lg:hidden -left-10 w-48"
          ></img>
          <img
            src="/assets/chat.png"
            className="absolute top-5 left-5 w-11 max-lg:hidden animate-rotate-left-right"
          ></img>
          <img
            src="/assets/trianle.png"
            className="absolute top-5 max-lg:hidden right-5 w-9 animate-rotate-left-right"
          ></img>

          <img
            src="/assets/chat.png"
            className="absolute bottom-5 max-lg:hidden right-5 w-11 animate-rotate-left-right"
          ></img>
          <img
            src="/assets/circle.svg"
            className="absolute -bottom-11 max-lg:hidden -right-10 w-48"
          ></img>
        </Provider>
        <ToastContext />
      </body>
    </html>
  );
}
