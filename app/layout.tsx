import "./globals.css";
import type { Metadata } from "next";
import { CartProvider } from "../store/cart";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CartDrawer from "../components/CartDrawer";

export const metadata: Metadata = {
  title: "SAKEMARU Meals (Demo)",
  description: "nosh風のサブスクミール サイトテンプレ（デモ）"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <CartProvider>
          <Header />
          <CartDrawer />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
