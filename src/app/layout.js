import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header.js"
import AppProvider from "./components/AppContext";
import {Toaster} from 'react-hot-toast';

const roboto = Roboto({ subsets: ["latin"], weight: ['400','500','700'] });

export const metadata = {
  title: "SiKantin - Politeknik Lp3i Kampus Tasikmalaya",
  description: "Pesan makanan Anda secara online, dan tanpa ribet!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="max-w-4xl mx-auto  p-4">
          <AppProvider>
            <Toaster />
        <Header />
          {children}
        
        <footer className="border-t p-8 text-center text-gray-500 mt-16">
    Copyright &copy; 2024 Politeknik LP3I Kampus Tasikmalaya
</footer>
</AppProvider>
</main>

        </body>
        
    </html>
  );
}
