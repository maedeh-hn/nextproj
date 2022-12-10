import type {
  NextPage,
} from "next";
import Link from "next/link";



const HomePage: NextPage = () => {
 
  return (
    <>
    <div>this is home page</div>
    <Link href="/blogs">
    <a>go to bloge page</a>
    </Link>
    </>
  )

};

export default HomePage;

