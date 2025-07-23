import Image from "next/image";
import { DropdownMenuCheckboxes } from "../components/ui/DropdownMenuCheckboxes";
import Carousel from "../components/ui/Carousel";
import { Button } from "../components/ui/Button";
import { SubjectGrid } from "../components/ui/SubjectGrid";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FiFileText } from "react-icons/fi";
import { YoutubeGrid } from "../components/ui/YoutubeGrid";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-full container mx-auto">
      <section className="p-5">
        <div className="text-center">
          <div className="flex items-center justify-between mb-4">
            <div className="mx-auto text-center">
              <h1 className="md:text-3xl text-2xl font-semibold">Greatness Awaits!</h1>
              <p className="md:text-sm text-xs">
                The drive to excel never stops. Unlock your potential <br className="md:block hidden" />{" "}
                with our comprehensive learning platform.
              </p>
            </div>

            <div className="absolute right-24 hidden md:block">
              <DropdownMenuCheckboxes  />
            </div>
          </div>
        </div>

        <Carousel />
      </section>

      <section className="p-5">

        <div className="flex flex-col">
          <div className="md:flex-row flex-col flex items-center justify-center gap-5 md:justify-between mb-4 ">
            <div className="md:text-start text-center">
              <h1 className="md:text-3xl text-2xl font-semibold">Featured Courses</h1>
              <p className="md:text-sm text-xs">
                Discover our most popular courses to boost <br className="md:block hidden" /> your skills and 
                advance your career.
              </p>
            </div>

            <div className="flex gap-4 ">
              <Link href="/daily-task">
              <Button variant="outline" size='lg' className="flex items-center cursor-pointer">Daily Task
                <FiFileText />
              </Button>
              </Link>
              <Button variant="outline" size='lg' className="flex items-center cursor-pointer">View All 
                <MdOutlineArrowOutward />

              </Button>
            </div>
          </div>

          <SubjectGrid/>
        </div>
      </section>


        <section className="p-5">

        <div className="flex flex-col">
          <div className="flex items-center justify-between mb-4 ">
            <div className="text-start">
              <h1 className="text-3xl font-semibold">Top Videos</h1>
              <p className="md:text-sm text-xs">
                Most popular content from our expert instructors
              </p>
            </div>
            
          </div>

          <YoutubeGrid/>
        </div>
      </section>
    </div>
  );
}