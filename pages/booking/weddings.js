import React, { useState } from 'react';

const Pricing = () => {
  const [isbothSide, setIsBothSide] = useState(true);
  const Wurl="https://wa.me/+9779857082997";

  return (
    <div className="relative font-inter antialiased">
      <main className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          {/* Pricing table component */}
          <div>
            {/* Pricing toggle */}
            <div className="flex justify-center max-w-[14rem] m-auto mb-8 lg:mb-16">
              <div className="relative flex w-full p-1 bg-white rounded-full">
                <span className="absolute inset-0 m-1 pointer-events-none" aria-hidden="true">
                  <span
                    className={`absolute inset-0 w-1/2 bg-indigo-500 rounded-full shadow-sm shadow-indigo-950/10 transform transition-transform duration-150 ease-in-out ${
                      isbothSide ? 'translate-x-0' : 'translate-x-full'
                    }`}
                  ></span>
                </span>
                <button
                  className={`relative flex-1 text-sm font-medium h-10 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150 ease-in-out ${
                    isbothSide ? 'text-white' : 'text-slate-500'
                  }`}
                  onClick={() => setIsBothSide(true)}
                  aria-pressed={isbothSide}
                >
                  Both~Side <span className={isbothSide ? 'text-indigo-200' : 'text-slate-400'}>-20%</span>
                </button>
                <button
                  className={`relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150 ease-in-out ${
                    !isbothSide ? 'text-white' : 'text-slate-500'
                  }`}
                  onClick={() => setIsBothSide(false)}
                  aria-pressed={!isbothSide}
                >
                  One~side
                </button>
              </div>
            </div>

            <div className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none">
              {/* Pricing tab 1 */}
              <div className="h-full">
                <div className="relative flex flex-col h-full p-6 rounded-2xl bg-white border border-slate-200 shadow shadow-slate-950/5">
                  <div className="mb-5">
                    <div className="text-slate-900 font-semibold mb-1">Essential</div>
                    <div className="inline-flex items-baseline mb-2">
                      <span className="text-slate-900 font-bold text-3xl">$</span>
                      <span className="text-slate-900 font-bold text-4xl">{isbothSide ? '29' : '35'}</span>
                      <span className="text-slate-500 font-medium">/mo</span>
                    </div>
                    <div className="text-sm text-slate-500 mb-5">There are many variations available, but the majority have suffered.</div>
                    <a
                      className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150"
                      href={`${Wurl}?text=${encodeURIComponent("Pre-Post Essential ")}`}
                    >
                      Purchase Plan
                    </a>
                  </div>
                  <div className="text-slate-900 font-medium mb-3">Includes:</div>
                  <ul className="text-slate-600 text-sm space-y-3 grow">
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Unlimited placeholder texts</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Consectetur adipiscing elit</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Excepteur sint occaecat cupidatat</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Officia deserunt mollit anim</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Pricing tab 2 */}
              <div className="h-full">
                <div className="relative flex flex-col h-full p-6 rounded-2xl bg-white border border-slate-200 shadow shadow-slate-950/5">
                  <div className="absolute top-0 right-0 mr-6 -mt-4">
                    <div className="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-emerald-500 text-white rounded-full shadow-sm shadow-slate-950/5">
                      Most Popular
                    </div>
                  </div>
                  <div className="mb-5">
                    <div className="text-slate-900 font-semibold mb-1">Perform</div>
                    <div className="inline-flex items-baseline mb-2">
                      <span className="text-slate-900 font-bold text-3xl">$</span>
                      <span className="text-slate-900 font-bold text-4xl">{isbothSide ? '49' : '55'}</span>
                      <span className="text-slate-500 font-medium">/mo</span>
                    </div>
                    <div className="text-sm text-slate-500 mb-5">There are many variations available, but the majority have suffered.</div>
                    <a
                      className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150"
                      href={`${Wurl}?text=${encodeURIComponent("Pre-Post Perform")}`}
                    >
                      Purchase Plan
                    </a>
                  </div>
                  <div className="text-slate-900 font-medium mb-3">Includes:</div>
                  <ul className="text-slate-600 text-sm space-y-3 grow">
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Unlimited placeholder texts</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Consectetur adipiscing elit</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Excepteur sint occaecat cupidatat</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Predefined chunks as necessary</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Pricing tab 3 */}
              <div className="h-full">
                <div className="relative flex flex-col h-full p-6 rounded-2xl bg-white border border-slate-200 shadow shadow-slate-950/5">
                  <div className="mb-5">
                    <div className="text-slate-900 font-semibold mb-1">Enterprise</div>
                    <div className="inline-flex items-baseline mb-2">
                      <span className="text-slate-900 font-bold text-3xl">$</span>
                      <span className="text-slate-900 font-bold text-4xl">{isbothSide ? '79' : '85'}</span>
                      <span className="text-slate-500 font-medium">/mo</span>
                    </div>
                    <div className="text-sm text-slate-500 mb-5">There are many variations available, but the majority have suffered.</div>
                    <a
                      className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150"
                      href={`${Wurl}?text=${encodeURIComponent("Pre-Post Enterprise")}`}
                    >
                      Purchase Plan
                    </a>
                  </div>
                  <div className="text-slate-900 font-medium mb-3">Includes:</div>
                  <ul className="text-slate-600 text-sm space-y-3 grow">
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Unlimited placeholder texts</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Consectetur adipiscing elit</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Excepteur sint occaecat cupidatat</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Predefined chunks as necessary</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Pricing;
