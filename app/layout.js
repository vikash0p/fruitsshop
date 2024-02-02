import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/utils/QueryProvider";
import { FetchData } from "@/utils/FetchData";
import ReausbleHome from "@/components/resuableComp/ReausbleHome";
import ReduxProvider from "@/Redux/ReduxProvider";
import CartCount from "@/components/cartComp/CartCount";

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('http://localhost:3000/' ),

  title: {
    default: 'Natural Furits | A Symphony of Taste and Wellness in Every Bite',
    templte: " %s | Natural fruits ",
  },
  description: "Welcome to FruitfulHarvest India! Our site is like a friendly guide to delicious Indian fruits. It's super easy to use, thanks to SEO magic that helps you find what you need. Whether you're into healthy stuff or just love good food.",

  applicationName: 'Natural Furits',
  keywords: ["FreshFruitsOnline",
    "OrganicFruitMarket",
    "BestFruitDelivery",
    "FruitBasketDelivery",
    "ExoticFruitsStore",
    "OnlineFruitShop",
    "HealthyFruitsMarket",
    "TropicalFruitStore",
    "FarmFreshFruits",
    "PremiumFruitSelection"],

  authors: [{ name: 'vikash' }, { name: 'Vikash', url: 'http://localhost:3000/' }],
  creator: 'Mr. vikash pandit',
  publisher: 'http://localhost:3000/',
  formatDetection: {
    email: 'vikash752200@gmail.components',
    address: 'House no 29 , Palla village gali no-1 faridabad ,Haryana',
    telephone: 9990127407,
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <QueryProvider>
          <FetchData>
            <ReduxProvider>
              <CartCount>
                <ReausbleHome>
                  {children}
                </ReausbleHome>
              </CartCount>
            </ReduxProvider>
          </FetchData>
        </QueryProvider>
      </body>
    </html>
  );
}
