import { Roboto } from "next/font/google";
import "./globals.css";

const font = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"]
})

export const metadata = {
  title: "Spike | Work Hub",
  description: "A website for work station center",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
