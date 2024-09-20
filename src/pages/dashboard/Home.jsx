import React, { useState } from "react";
import { useAuthContext } from "../../context/authContext";
import NavBar from "../componetnts/NavBar";
import { Link } from "react-router-dom";
import Datepicker from "react-tailwindcss-datepicker";
import SelectSearch from "react-select-search";
import options from "../../utils/options";
import {
  SearchIcon,
  Calendar,
  Truck,
  CreditCard,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

const Home = () => {
  const [date, setDate] = useState({
    startDate: null,
  });
  const [work, setWork] = useState(null);
  console.log(work);

  console.log(date ? date.startDate : "null");

  return (
    <>
      <NavBar />
      <div className="relative max-w-full mx-auto ">
        <img
          className="h-[597px] w-full object-cover "
          src="./background.png"
          alt="Random image"
        />
        <div className="absolute inset-0 flex items-center justify-center mb-28 ">
          <div className=" relative bg-[#01100C] h-[169px] opacity-40  w-[660px]"></div>
          <h2 className=" absolute text-white text-center text-[42px] bg-opacity-0 font-bold z-20 ">
            Empowering Your Agriculture
            <p className="text-[36px] font-normal">Rent Tractors with Ease!</p>
          </h2>
        </div>
        <div className="absolute inset-0 flex items-end justify-center ">
          <div className="grid grid-cols-5 text-center items-center  divide-slate-800/25 divide-x-2 w-[934px] bg-white mb-20 backdrop:blur-sm rounded-sm">
            <div className="col-span-2 w-full flex justify-center py-0">
              <SelectSearch
                options={options}
                debounce={100}
                search={true}
                emptyMessage="Not found"
                name="work"
                value={work}
                onChange={(newValue) => setWork(newValue)}
                placeholder="Choose your Work"
              />
            </div>
            <div className="col-span-2 w-full h-full items-center flex justify-center py-0">
              <Datepicker
                inputClassName="w-full h-full focus:outline-none px-4 "
                asSingle={true}
                useRange={false}
                popoverDirection="down"
                value={date}
                onChange={(newValue) => setDate(newValue)}
              />
            </div>
            <div className="bg-blue-600 font-bold h-full rounded-e-sm cursor-pointer text-white w-full items-center flex justify-center">
              Search
            </div>
          </div>
        </div>
      </div>
      <div className="h-[350px] bg-[#F8F3F3] ">
        <h3 className="pt-11 text-center text-[40px] font-semibold">
          How It Work ?
        </h3>
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-4 gap-32 mt-10 ">
            <div className="flex flex-col items-center">
              <div className="bg-black rounded-full flex items-center justify-center h-[33.74px] w-[33.74px]">
                <SearchIcon
                  size={17}
                  className="h-[17.93px] w-[17.89px]"
                  color="#fff"
                />
              </div>
              <h4 className="text-[20px] font-semibold mt-4">Search</h4>
              <p className="text-[16px] text-center mt-4">
                Find The Perfect Tractor
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-black rounded-full flex items-center justify-center h-[33.74px] w-[33.74px]">
                <Calendar
                  size={17}
                  className="h-[17.93px] w-[17.89px]"
                  color="#fff"
                />
              </div>
              <h4 className="text-[20px] font-semibold mt-4">Book</h4>
              <p className="text-[16px] text-center mt-4">Reserve your Date</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-black rounded-full flex items-center justify-center h-[33.74px] w-[33.74px]">
                <Truck
                  size={17}
                  className="h-[17.93px] w-[17.89px]"
                  color="#fff"
                />
              </div>
              <h4 className="text-[20px] font-semibold mt-4">Track</h4>
              <p className="text-[16px] text-center mt-4">
                Monitor Your Rental
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-black rounded-full flex items-center justify-center h-[33.74px] w-[33.74px]">
                <CreditCard
                  size={17}
                  className="h-[17.93px] w-[17.89px]"
                  color="#fff"
                />
              </div>
              <h4 className="text-[20px] font-semibold mt-4">Pay</h4>
              <p className="text-[16px] text-center mt-4">
                Secure and Easy Payment
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
            Field Work
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                title: "Plowing",
                image:
                  "https://www.forigo.it/hs-fs/hubfs/plowing-1.png?width=300&name=plowing-1.png",
                description: "Prepare your soil for planting",
              },
              {
                title: "Harvesting",
                image:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Agriculture_in_Volgograd_Oblast_002.JPG/220px-Agriculture_in_Volgograd_Oblast_002.JPG",
                description: "Efficiently gather your crops",
              },
              {
                title: "Seeding",
                image:
                  "https://kellytillage.com/us/wp-content/uploads/sites/4/2023/06/what-is-seeding.jpg",
                description: "Plant your crops with precision",
              },
              {
                title: "Tilling",
                image:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Tillage.jpg/275px-Tillage.jpg",
                description: "Cultivate and aerate your soil",
              },
              {
                title: "Spraying",
                image:
                  "https://www.91trucks.com/news/wp-content/uploads/2023/10/tractorspray.png",
                description: "Apply fertilizers or pesticides",
              },
              {
                title: "Rotary",
                image:
                  "https://compactequip.com/wp-content/uploads/2023/02/land-pride-2.jpg",
                description:
                  "Rotary machines prepare the soil by turning and breaking it up ",
              },
            ].map((work, index) => (
              <div
                key={index}
                className="border rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={work.image}
                  alt={work.title}
                  width={400}
                  height={300}
                  className="w-full h-80 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{work.title}</h3>
                  <p className="text-muted-foreground">{work.description}</p>
                  <button className="mt-4 w-full bg-slate-900 py-3 rounded-md text-white">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div>
        <footer className="border-t flex justify-center">
          <div className="container px-4 md:px-6 py-8 md:py-12 lg:py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/about"
                      className="text-muted-foreground hover:text-primary"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/faq"
                      className="text-muted-foreground hover:text-primary"
                    >
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/terms"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/privacy"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <ul className="space-y-2">
                  <li className="text-muted-foreground">123 Tractor Lane</li>
                  <li className="text-muted-foreground">Farmville, CA 90210</li>
                  <li className="text-muted-foreground">
                    contact@tractorrent.com
                  </li>
                  <li className="text-muted-foreground">(555) 123-4567</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <Link
                    to="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Facebook className="h-6 w-6" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link
                    to="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Twitter className="h-6 w-6" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link
                    to="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Instagram className="h-6 w-6" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link
                    to="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Youtube className="h-6 w-6" />
                    <span className="sr-only">YouTube</span>
                  </Link>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                <form className="space-y-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className=" w-full rounded-md border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset  ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                  />
                  <button
                    type="submit"
                    className="rounded-md w-full bg-slate-800 px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
            <div className="mt-8 border-t pt-8 text-center text-muted-foreground">
              © 2024 TractorRent. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
