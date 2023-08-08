import Image from "next/image"

export default function Home() {
  return (
    <>
      <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8">
        {/* Start:: 2 Columns */}
        <div className="grid gap-10 md:grid-cols-2 lg:gap-10 ">
          <div className="group cursor-pointer">
            <div className=" overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105 dark:bg-gray-800">
              <a href="#" className="relative block aspect-video">
                <Image
                  priority
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="object-cover transition-all max-w-full h-auto w-full"
                  alt=""
                  src="/lg-image-1.png"
                />
              </a>
            </div>
            <div>
              <div>
                <div className="flex gap-3">
                  <a href="#">
                    <span className="inline-block text-xs font-medium tracking-wider uppercase   mt-5 text-blue-600">Technology</span>
                  </a>
                </div>
                <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2 dark:text-white">
                  <a href="#">
                    <span className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">Architectural Engineering Wonders of the modern era for your Inspiration</span>
                  </a>
                </h2>
                <div className="hidden">
                  <p className="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                    <a href="#">Reinvention often comes in spurts, after a long period of silence. Just as modern architecture recently enjoyed a comeback, brand architecture, a field with well-established principles for decades</a>
                  </p>
                </div>
                <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
                  <a href="#">
                    <div className="flex items-center gap-3">
                      <div className="relative h-5 w-5 flex-shrink-0">
                        <Image
                          className="rounded-full object-cover"
                          src="/user.jpg"
                          sizes="20px"
                          fill={true}
                          alt=""
                        />
                      </div>
                      <span className="truncate text-sm">Mario Sanchez</span>
                    </div>
                  </a>
                  <span className="text-xs text-gray-300 dark:text-gray-600">•</span>
                  <time className="truncate text-sm">October 21, 2022</time>
                </div>
              </div>
            </div>
          </div>
          <div className="group cursor-pointer">
            <div className=" overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105 dark:bg-gray-800">
              <a href="#" className="relative block aspect-video">
                <Image
                  priority
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="object-cover transition-all max-w-full h-auto w-full"
                  alt=""
                  src="/lg-image-1.png"
                />
              </a>
            </div>
            <div>
              <div>
                <div className="flex gap-3">
                  <a href="#">
                    <span className="inline-block text-xs font-medium tracking-wider uppercase   mt-5 text-blue-600">Technology</span>
                  </a>
                </div>
                <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2 dark:text-white">
                  <a href="#">
                    <span className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">Architectural Engineering Wonders of the modern era for your Inspiration</span>
                  </a>
                </h2>
                <div className="hidden">
                  <p className="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                    <a href="#">Reinvention often comes in spurts, after a long period of silence. Just as modern architecture recently enjoyed a comeback, brand architecture, a field with well-established principles for decades</a>
                  </p>
                </div>
                <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
                  <a href="#">
                    <div className="flex items-center gap-3">
                      <div className="relative h-5 w-5 flex-shrink-0">
                        <Image
                          className="rounded-full object-cover"
                          src="/user.jpg"
                          sizes="20px"
                          fill={true}
                          alt=""
                        />
                      </div>
                      <span className="truncate text-sm">Mario Sanchez</span>
                    </div>
                  </a>
                  <span className="text-xs text-gray-300 dark:text-gray-600">•</span>
                  <time className="truncate text-sm">October 21, 2022</time>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Start:: 3 Columns */}
        <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
          <div className="group cursor-pointer">
            <div className=" overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105 dark:bg-gray-800">
              <a href="#" className="relative block aspect-video">
                <Image
                  priority
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="object-cover transition-all max-w-full h-auto w-full"
                  alt=""
                  src="/lg-image-1.png"
                />
              </a>
            </div>
            <div>
              <div>
                <div className="flex gap-3">
                  <a href="#">
                    <span className="inline-block text-xs font-medium tracking-wider uppercase   mt-5 text-blue-600">Technology</span>
                  </a>
                </div>
                <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2 dark:text-white">
                  <a href="#">
                    <span className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">Architectural Engineering Wonders of the modern era for your Inspiration</span>
                  </a>
                </h2>
                <div className="hidden">
                  <p className="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                    <a href="#">Reinvention often comes in spurts, after a long period of silence. Just as modern architecture recently enjoyed a comeback, brand architecture, a field with well-established principles for decades</a>
                  </p>
                </div>
                <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
                  <a href="#">
                    <div className="flex items-center gap-3">
                      <div className="relative h-5 w-5 flex-shrink-0">
                        <Image
                          className="rounded-full object-cover"
                          src="/user.jpg"
                          sizes="20px"
                          fill={true}
                          alt=""
                        />
                      </div>
                      <span className="truncate text-sm">Mario Sanchez</span>
                    </div>
                  </a>
                  <span className="text-xs text-gray-300 dark:text-gray-600">•</span>
                  <time className="truncate text-sm">October 21, 2022</time>
                </div>
              </div>
            </div>
          </div>
          <div className="group cursor-pointer">
            <div className=" overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105 dark:bg-gray-800">
              <a href="#" className="relative block aspect-video">
                <Image
                  priority
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="object-cover transition-all max-w-full h-auto w-full"
                  alt=""
                  src="/lg-image-1.png"
                />
              </a>
            </div>
            <div>
              <div>
                <div className="flex gap-3">
                  <a href="#">
                    <span className="inline-block text-xs font-medium tracking-wider uppercase   mt-5 text-blue-600">Technology</span>
                  </a>
                </div>
                <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2 dark:text-white">
                  <a href="#">
                    <span className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">Architectural Engineering Wonders of the modern era for your Inspiration</span>
                  </a>
                </h2>
                <div className="hidden">
                  <p className="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                    <a href="#">Reinvention often comes in spurts, after a long period of silence. Just as modern architecture recently enjoyed a comeback, brand architecture, a field with well-established principles for decades</a>
                  </p>
                </div>
                <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
                  <a href="#">
                    <div className="flex items-center gap-3">
                      <div className="relative h-5 w-5 flex-shrink-0">
                        <Image
                          className="rounded-full object-cover"
                          src="/user.jpg"
                          sizes="20px"
                          fill={true}
                          alt=""
                        />
                      </div>
                      <span className="truncate text-sm">Mario Sanchez</span>
                    </div>
                  </a>
                  <span className="text-xs text-gray-300 dark:text-gray-600">•</span>
                  <time className="truncate text-sm">October 21, 2022</time>
                </div>
              </div>
            </div>
          </div>
          <div className="group cursor-pointer">
            <div className=" overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105 dark:bg-gray-800">
              <a href="#" className="relative block aspect-video">
                <Image
                  priority
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="object-cover transition-all max-w-full h-auto w-full"
                  alt=""
                  src="/lg-image-1.png"
                />
              </a>
            </div>
            <div>
              <div>
                <div className="flex gap-3">
                  <a href="#">
                    <span className="inline-block text-xs font-medium tracking-wider uppercase   mt-5 text-blue-600">Technology</span>
                  </a>
                </div>
                <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2 dark:text-white">
                  <a href="#">
                    <span className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">Architectural Engineering Wonders of the modern era for your Inspiration</span>
                  </a>
                </h2>
                <div className="hidden">
                  <p className="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                    <a href="#">Reinvention often comes in spurts, after a long period of silence. Just as modern architecture recently enjoyed a comeback, brand architecture, a field with well-established principles for decades</a>
                  </p>
                </div>
                <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
                  <a href="#">
                    <div className="flex items-center gap-3">
                      <div className="relative h-5 w-5 flex-shrink-0">
                        <Image
                          className="rounded-full object-cover"
                          src="/user.jpg"
                          sizes="20px"
                          fill={true}
                          alt=""
                        />
                      </div>
                      <span className="truncate text-sm">Mario Sanchez</span>
                    </div>
                  </a>
                  <span className="text-xs text-gray-300 dark:text-gray-600">•</span>
                  <time className="truncate text-sm">October 21, 2022</time>
                </div>
              </div>
            </div>
          </div>
          <div className="group cursor-pointer">
            <div className=" overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105 dark:bg-gray-800">
              <a href="#" className="relative block aspect-video">
                <Image
                  priority
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="object-cover transition-all max-w-full h-auto w-full"
                  alt=""
                  src="/lg-image-1.png"
                />
              </a>
            </div>
            <div>
              <div>
                <div className="flex gap-3">
                  <a href="#">
                    <span className="inline-block text-xs font-medium tracking-wider uppercase   mt-5 text-blue-600">Technology</span>
                  </a>
                </div>
                <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2 dark:text-white">
                  <a href="#">
                    <span className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">Architectural Engineering Wonders of the modern era for your Inspiration</span>
                  </a>
                </h2>
                <div className="hidden">
                  <p className="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                    <a href="#">Reinvention often comes in spurts, after a long period of silence. Just as modern architecture recently enjoyed a comeback, brand architecture, a field with well-established principles for decades</a>
                  </p>
                </div>
                <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
                  <a href="#">
                    <div className="flex items-center gap-3">
                      <div className="relative h-5 w-5 flex-shrink-0">
                        <Image
                          className="rounded-full object-cover"
                          src="/user.jpg"
                          sizes="20px"
                          fill={true}
                          alt=""
                        />
                      </div>
                      <span className="truncate text-sm">Mario Sanchez</span>
                    </div>
                  </a>
                  <span className="text-xs text-gray-300 dark:text-gray-600">•</span>
                  <time className="truncate text-sm">October 21, 2022</time>
                </div>
              </div>
            </div>
          </div>
          <div className="group cursor-pointer">
            <div className=" overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105 dark:bg-gray-800">
              <a href="#" className="relative block aspect-video">
                <Image
                  priority
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="object-cover transition-all max-w-full h-auto w-full"
                  alt=""
                  src="/lg-image-1.png"
                />
              </a>
            </div>
            <div>
              <div>
                <div className="flex gap-3">
                  <a href="#">
                    <span className="inline-block text-xs font-medium tracking-wider uppercase   mt-5 text-blue-600">Technology</span>
                  </a>
                </div>
                <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2 dark:text-white">
                  <a href="#">
                    <span className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">Architectural Engineering Wonders of the modern era for your Inspiration</span>
                  </a>
                </h2>
                <div className="hidden">
                  <p className="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                    <a href="#">Reinvention often comes in spurts, after a long period of silence. Just as modern architecture recently enjoyed a comeback, brand architecture, a field with well-established principles for decades</a>
                  </p>
                </div>
                <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
                  <a href="#">
                    <div className="flex items-center gap-3">
                      <div className="relative h-5 w-5 flex-shrink-0">
                        <Image
                          className="rounded-full object-cover"
                          src="/user.jpg"
                          sizes="20px"
                          fill={true}
                          alt=""
                        />
                      </div>
                      <span className="truncate text-sm">Mario Sanchez</span>
                    </div>
                  </a>
                  <span className="text-xs text-gray-300 dark:text-gray-600">•</span>
                  <time className="truncate text-sm">October 21, 2022</time>
                </div>
              </div>
            </div>
          </div>
          <div className="group cursor-pointer">
            <div className=" overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105 dark:bg-gray-800">
              <a href="#" className="relative block aspect-video">
                <Image
                  priority
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="object-cover transition-all max-w-full h-auto w-full"
                  alt=""
                  src="/lg-image-1.png"
                />
              </a>
            </div>
            <div>
              <div>
                <div className="flex gap-3">
                  <a href="#">
                    <span className="inline-block text-xs font-medium tracking-wider uppercase   mt-5 text-blue-600">Technology</span>
                  </a>
                </div>
                <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2 dark:text-white">
                  <a href="#">
                    <span className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">Architectural Engineering Wonders of the modern era for your Inspiration</span>
                  </a>
                </h2>
                <div className="hidden">
                  <p className="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                    <a href="#">Reinvention often comes in spurts, after a long period of silence. Just as modern architecture recently enjoyed a comeback, brand architecture, a field with well-established principles for decades</a>
                  </p>
                </div>
                <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
                  <a href="#">
                    <div className="flex items-center gap-3">
                      <div className="relative h-5 w-5 flex-shrink-0">
                        <Image
                          className="rounded-full object-cover"
                          src="/user.jpg"
                          sizes="20px"
                          fill={true}
                          alt=""
                        />
                      </div>
                      <span className="truncate text-sm">Mario Sanchez</span>
                    </div>
                  </a>
                  <span className="text-xs text-gray-300 dark:text-gray-600">•</span>
                  <time className="truncate text-sm">October 21, 2022</time>
                </div>
              </div>
            </div>
          </div>
          <div className="group cursor-pointer">
            <div className=" overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105 dark:bg-gray-800">
              <a href="#" className="relative block aspect-video">
                <Image
                  priority
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="object-cover transition-all max-w-full h-auto w-full"
                  alt=""
                  src="/lg-image-1.png"
                />
              </a>
            </div>
            <div>
              <div>
                <div className="flex gap-3">
                  <a href="#">
                    <span className="inline-block text-xs font-medium tracking-wider uppercase   mt-5 text-blue-600">Technology</span>
                  </a>
                </div>
                <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2 dark:text-white">
                  <a href="#">
                    <span className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">Architectural Engineering Wonders of the modern era for your Inspiration</span>
                  </a>
                </h2>
                <div className="hidden">
                  <p className="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                    <a href="#">Reinvention often comes in spurts, after a long period of silence. Just as modern architecture recently enjoyed a comeback, brand architecture, a field with well-established principles for decades</a>
                  </p>
                </div>
                <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
                  <a href="#">
                    <div className="flex items-center gap-3">
                      <div className="relative h-5 w-5 flex-shrink-0">
                        <Image
                          className="rounded-full object-cover"
                          src="/user.jpg"
                          sizes="20px"
                          fill={true}
                          alt=""
                        />
                      </div>
                      <span className="truncate text-sm">Mario Sanchez</span>
                    </div>
                  </a>
                  <span className="text-xs text-gray-300 dark:text-gray-600">•</span>
                  <time className="truncate text-sm">October 21, 2022</time>
                </div>
              </div>
            </div>
          </div>
          <div className="group cursor-pointer">
            <div className=" overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105 dark:bg-gray-800">
              <a href="#" className="relative block aspect-video">
                <Image
                  priority
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="object-cover transition-all max-w-full h-auto w-full"
                  alt=""
                  src="/lg-image-1.png"
                />
              </a>
            </div>
            <div>
              <div>
                <div className="flex gap-3">
                  <a href="#">
                    <span className="inline-block text-xs font-medium tracking-wider uppercase   mt-5 text-blue-600">Technology</span>
                  </a>
                </div>
                <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2 dark:text-white">
                  <a href="#">
                    <span className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">Architectural Engineering Wonders of the modern era for your Inspiration</span>
                  </a>
                </h2>
                <div className="hidden">
                  <p className="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                    <a href="#">Reinvention often comes in spurts, after a long period of silence. Just as modern architecture recently enjoyed a comeback, brand architecture, a field with well-established principles for decades</a>
                  </p>
                </div>
                <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
                  <a href="#">
                    <div className="flex items-center gap-3">
                      <div className="relative h-5 w-5 flex-shrink-0">
                        <Image
                          className="rounded-full object-cover"
                          src="/user.jpg"
                          sizes="20px"
                          fill={true}
                          alt=""
                        />
                      </div>
                      <span className="truncate text-sm">Mario Sanchez</span>
                    </div>
                  </a>
                  <span className="text-xs text-gray-300 dark:text-gray-600">•</span>
                  <time className="truncate text-sm">October 21, 2022</time>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <a className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300" href="#">
            <span>View all Posts</span>
          </a>
        </div>
      </div>
    </>
  )
}
