'use client';

import Link from 'next/link';

export function CTABannerSection() {
  return (
    <section className="pt-12 pb-12 text-center">
      <div className="max-w-screen-lg mx-auto">
        <div className="relative bg-gradient-to-r from-yellow-500 via-red-500 to-yellow-500 text-white rounded-xl shadow-2xl p-10 transition-all duration-300 ease-in-out">
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 text-4xl animate-bounce">
            ✨
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-wide flex items-center justify-center gap-3">
            🔒 Lock & Earn Big! 💰
          </h2>

          <div className="w-full sm:w-auto mx-auto bg-yellow-400 text-yellow-900 text-2xl sm:text-3xl font-bold px-10 py-3 rounded-lg border-2 border-yellow-600 shadow-xl">
            🚀 ADAO Staking is Live!
          </div>

          <p className="text-lg sm:text-xl mt-6 font-medium leading-relaxed">
            Earn passive rewards by staking ADAO. The longer you stake, the{' '}
            <span className="font-bold text-yellow-300">bigger the rewards!</span>
          </p>

          <div className="mt-6 transform transition-transform duration-200 hover:scale-105">
            <Link
              href="https://agentdao.com/staking"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white text-yellow-700 font-extrabold text-xl rounded-lg shadow-lg hover:bg-yellow-600 hover:text-white"
            >
              💎 Stake & Earn Now!
            </Link>
          </div>

          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-4xl animate-bounce">
            ✨
          </div>
        </div>
      </div>
    </section>
  );
}
