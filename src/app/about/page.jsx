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

const getTime = async() => {
  const res = await fetch('http://localhost:3000/time', {next: {revalidate:5}});
  const data = await res.json();
  return data.currentTime;
}

export default async function page() {

  const currentTime = await getTime();

  return (
    <div className={`${edu.className}`}>
      <About></About>
      <h2 className="text-3xl text-red-400">Time: {currentTime}</h2>
    </div>
  )
}
