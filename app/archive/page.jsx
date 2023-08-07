import Image from "next/image"

const page = () => {
  return (
    <>
      <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8">
        <h1 className="text-center text-3xl font-semibold tracking-tight lg:text-4xl lg:leading-snug">
          Archive
        </h1>
        <div className="text-center">
          <p className="mt-2 text-lg">See all posts we have ever written.</p>
        </div>
        <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
          <div className="group cursor-pointer">
            <div className="  overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105">
              <a href="#" className="relative block aspect-square">
                <Image
                  priority
                  width={0}
                  height={0}
                  sizes="(max-width: 768px) 30vw, 33vw"
                  className="object-cover transition-all max-w-full h-auto w-full"
                  alt=""
                  src="/lg-image-1.png"
                  fill={true}
                  style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }}
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
                          src="/user-photo.jpg"
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
            <div className="  overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105">
              <a href="#" className="relative block aspect-square">
                <Image
                  priority
                  width={0}
                  height={0}
                  sizes="(max-width: 768px) 30vw, 33vw"
                  className="object-cover transition-all max-w-full h-auto w-full"
                  alt=""
                  src="/lg-image-1.png"
                  fill={true}
                  style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }}
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
                          src="/user-photo.jpg"
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
            <div className="  overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105">
              <a href="#" className="relative block aspect-square">
                <Image
                  priority
                  width={0}
                  height={0}
                  sizes="(max-width: 768px) 30vw, 33vw"
                  className="object-cover transition-all max-w-full h-auto w-full"
                  alt=""
                  src="/lg-image-1.png"
                  fill={true}
                  style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }}
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
                          src="/user-photo.jpg"
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
            <div className="  overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105">
              <a href="#" className="relative block aspect-square">
                <Image
                  priority
                  width={0}
                  height={0}
                  sizes="(max-width: 768px) 30vw, 33vw"
                  className="object-cover transition-all max-w-full h-auto w-full"
                  alt=""
                  src="/lg-image-1.png"
                  fill={true}
                  style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }}
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
                          src="/user-photo.jpg"
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
            <div className="  overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105">
              <a href="#" className="relative block aspect-square">
                <Image
                  priority
                  width={0}
                  height={0}
                  sizes="(max-width: 768px) 30vw, 33vw"
                  className="object-cover transition-all max-w-full h-auto w-full"
                  alt=""
                  src="/lg-image-1.png"
                  fill={true}
                  style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }}
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
                          src="/user-photo.jpg"
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
            <div className="  overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105">
              <a href="#" className="relative block aspect-square">
                <Image
                  priority
                  width={0}
                  height={0}
                  sizes="(max-width: 768px) 30vw, 33vw"
                  className="object-cover transition-all max-w-full h-auto w-full"
                  alt=""
                  src="/lg-image-1.png"
                  fill={true}
                  style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }}
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
                          src="/user-photo.jpg"
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
            <div className="  overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105">
              <a href="#" className="relative block aspect-square">
                <Image
                  priority
                  width={0}
                  height={0}
                  sizes="(max-width: 768px) 30vw, 33vw"
                  className="object-cover transition-all max-w-full h-auto w-full"
                  alt=""
                  src="/lg-image-1.png"
                  fill={true}
                  style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }}
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
                          src="/user-photo.jpg"
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
            <div className="  overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105">
              <a href="#" className="relative block aspect-square">
                <Image
                  priority
                  width={0}
                  height={0}
                  sizes="(max-width: 768px) 30vw, 33vw"
                  className="object-cover transition-all max-w-full h-auto w-full"
                  alt=""
                  src="/lg-image-1.png"
                  fill={true}
                  style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }}
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
                          src="/user-photo.jpg"
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
            <div className="  overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105">
              <a href="#" className="relative block aspect-square">
                <Image
                  priority
                  width={0}
                  height={0}
                  sizes="(max-width: 768px) 30vw, 33vw"
                  className="object-cover transition-all max-w-full h-auto w-full"
                  alt=""
                  src="/lg-image-1.png"
                  fill={true}
                  style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }}
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
                          src="/user-photo.jpg"
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
        <div className="mt-10 flex items-center justify-center">
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <button className="relative inline-flex items-center gap-1 rounded-l-md border border-gray-300 bg-white px-3 py-2 pr-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40" disabled={true}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-3 w-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
              </svg>
              <span>Previous</span>
            </button>
            <button className="relative inline-flex items-center gap-1 rounded-r-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40">
              <span>Next</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-3 w-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </>
  )
}

export default page