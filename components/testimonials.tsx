import React from "react";
import ChipIt from "./chip";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <div className="mx-auto mt-24 max-w-6xl px-8">
      <div className="flex flex-col items-center justify-center gap-y-3">
        <p className="text-2xl font-bold">
          <span className="mr-1.5 text-[#FF6F61]">Loved</span>by
        </p>
        <ChipIt />
      </div>
      <div className="-mx-3 mt-8 items-start md:flex">
        <div className="px-3 md:w-1/3">
          <div className="mx-auto mb-6 w-full transform cursor-pointer rounded-xl bg-gray-100 p-5 font-light text-gray-800 shadow-md transition-transform duration-300 hover:-translate-y-[2px] hover:translate-x-[2px]">
            <div className="mb-4 flex w-full items-center">
              <div className="flex h-10 w-10 overflow-hidden rounded-full bg-gray-50">
                <img
                  src="https://i.pravatar.cc/100?img=1"
                  className="object-cover"
                  alt=""
                />
              </div>
              <div className="flex-grow pl-3">
                <h6 className="text-sm font-bold uppercase text-gray-600">
                  Kenzie Edgar.
                </h6>
              </div>
              <div className="hidden gap-1 lg:flex">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              </div>
            </div>
            <div className="w-full">
              <p className="text-sm leading-tight">
                <span className="mr-1 text-xl font-bold italic leading-none text-gray-400">
                  "
                </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                sunt ratione dolor exercitationem minima quas itaque saepe quasi
                architecto vel! Accusantium, vero sint recusandae cum tempora
                nemo commodi soluta deleniti.
                <span className="ml-1 text-xl font-bold italic leading-none text-gray-400">
                  "
                </span>
              </p>
            </div>
          </div>
          <div className="mx-auto mb-6 w-full transform cursor-pointer rounded-xl bg-gray-100 p-5 font-light text-gray-800 shadow-md transition-transform duration-300 hover:-translate-y-[2px] hover:translate-x-[2px]">
            <div className="mb-4 flex w-full items-center">
              <div className="flex h-10 w-10 overflow-hidden rounded-full bg-gray-50">
                <img
                  src="https://i.pravatar.cc/100?img=2"
                  className="object-cover"
                  alt=""
                />
              </div>
              <div className="flex-grow pl-3">
                <h6 className="text-sm font-bold uppercase text-gray-600">
                  Stevie Tifft.
                </h6>
              </div>
              <div className="hidden gap-1 lg:flex">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              </div>
            </div>
            <div className="w-full">
              <p className="text-sm leading-tight">
                <span className="mr-1 text-xl font-bold italic leading-none text-gray-400">
                  "
                </span>
                Lorem ipsum, dolor sit amet, consectetur adipisicing elit.
                Dolore quod necessitatibus, labore sapiente, est, dignissimos
                ullam error ipsam sint quam tempora vel.
                <span className="ml-1 text-xl font-bold italic leading-none text-gray-400">
                  "
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="px-3 md:w-1/3">
          <div className="mx-auto mb-6 w-full transform rounded-xl bg-gray-100 p-5 font-light text-gray-800 shadow-md transition-transform duration-300 hover:-translate-y-[2px] hover:translate-x-[2px]">
            <div className="mb-4 flex w-full items-center">
              <div className="flex h-10 w-10 overflow-hidden rounded-full bg-gray-50">
                <img
                  src="https://i.pravatar.cc/100?img=3"
                  className="object-cover"
                  alt=""
                />
              </div>
              <div className="flex-grow pl-3">
                <h6 className="text-sm font-bold uppercase text-gray-600">
                  Tommie Ewart.
                </h6>
              </div>
              <div className="hidden gap-1 lg:flex">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              </div>
            </div>
            <div className="w-full">
              <p className="text-sm leading-tight">
                <span className="mr-1 text-xl font-bold italic leading-none text-gray-400">
                  "
                </span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae,
                obcaecati ullam excepturi dicta error deleniti sequi.
                <span className="ml-1 text-xl font-bold italic leading-none text-gray-400">
                  "
                </span>
              </p>
            </div>
          </div>
          <div className="mx-auto mb-6 w-full transform rounded-xl bg-gray-100 p-5 font-light text-gray-800 shadow-md transition-transform duration-300 hover:-translate-y-[2px] hover:translate-x-[2px]">
            <div className="mb-4 flex w-full items-center">
              <div className="flex h-10 w-10 overflow-hidden rounded-full bg-gray-50">
                <img
                  src="https://i.pravatar.cc/100?img=4"
                  className="object-cover"
                  alt=""
                />
              </div>
              <div className="flex-grow pl-3">
                <h6 className="text-sm font-bold uppercase text-gray-600">
                  Charlie Howse.
                </h6>
              </div>
              <div className="hidden gap-1 lg:flex">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              </div>
            </div>
            <div className="w-full">
              <p className="text-sm leading-tight">
                <span className="mr-1 text-xl font-bold italic leading-none text-gray-400">
                  "
                </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto inventore voluptatum nostrum atque, corrupti, vitae
                esse id accusamus dignissimos neque reprehenderit natus, hic
                sequi itaque dicta nisi voluptatem! Culpa, iusto.
                <span className="ml-1 text-xl font-bold italic leading-none text-gray-400">
                  "
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="px-3 md:w-1/3">
          <div className="mx-auto mb-6 w-full transform rounded-xl bg-gray-100 p-5 font-light text-gray-800 shadow-md transition-transform duration-300 hover:-translate-y-[2px] hover:translate-x-[2px]">
            <div className="mb-4 flex w-full items-center">
              <div className="flex h-10 w-10 overflow-hidden rounded-full bg-gray-50">
                <img
                  src="https://i.pravatar.cc/100?img=5"
                  className="object-cover"
                  alt=""
                />
              </div>
              <div className="flex-grow pl-3">
                <h6 className="text-sm font-bold uppercase text-gray-600">
                  Nevada Herbertson.
                </h6>
              </div>
              <div className="hidden gap-1 lg:flex">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              </div>
            </div>
            <div className="w-full">
              <p className="text-sm leading-tight">
                <span className="mr-1 text-xl font-bold italic leading-none text-gray-400">
                  "
                </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                voluptatem porro obcaecati dicta, quibusdam sunt ipsum,
                laboriosam nostrum facere exercitationem pariatur deserunt
                tempora molestiae assumenda nesciunt alias eius? Illo, autem!
                <span className="ml-1 text-xl font-bold italic leading-none text-gray-400">
                  "
                </span>
              </p>
            </div>
          </div>
          <div className="mx-auto mb-6 w-full transform rounded-xl bg-gray-100 p-5 font-light text-gray-800 shadow-md transition-transform duration-300 hover:-translate-y-[2px] hover:translate-x-[2px]">
            <div className="mb-4 flex w-full items-center">
              <div className="flex h-10 w-10 overflow-hidden rounded-full bg-gray-50">
                <img
                  src="https://i.pravatar.cc/100?img=6"
                  className="object-cover"
                  alt=""
                />
              </div>
              <div className="flex-grow pl-3">
                <h6 className="text-sm font-bold uppercase text-gray-600">
                  Kris Stanton.
                </h6>
              </div>
              <div className="hidden gap-1 lg:flex">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              </div>
            </div>
            <div className="w-full">
              <p className="text-sm leading-tight">
                <span className="mr-1 text-xl font-bold italic leading-none text-gray-400">
                  "
                </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem iusto, explicabo, cupiditate quas totam!
                <span className="ml-1 text-xl font-bold italic leading-none text-gray-400">
                  "
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
