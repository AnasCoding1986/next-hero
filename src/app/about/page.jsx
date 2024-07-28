import About from "@/Components/About";
import { Edu_NSW_ACT_Foundation } from "next/font/google";

const edu = Edu_NSW_ACT_Foundation({
  weight: '400',
  subsets: ['latin']
})

export const metadata = {
  title: "About | Next Hero",
  description: "About Page",
  keywords: ["about", "about-page"]
};


export default function page() {
  return (
    <div className={`${edu.className}`}>
      <About></About>
    </div>
  )
}
