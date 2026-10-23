// "use client";

// import Orn from "@/components/ui/Orn";
// import { useCountdown } from "@/hooks/useCountdown";
// import { wedding } from "@/lib/wedding";

// const labels = {
//   d: "Days",
//   h: "Hours",
//   m: "Minutes",
//   s: "Seconds",
// };

// export default function Countdown() {
//   const left = useCountdown(wedding.dateISO);

//   const isMarried = Object.values(left).every((value) => Number(value) === 0);

//   return (
//     <section className="countdown [background:#f8f2e8] relative isolate p-[5px_0] overflow-hidden text-[#f8ecdc] text-center [@media(width<=520px)]:p-[80px_15px]">
//       <div
//         className="
//         countdown--frame relative min-h-[410px] flex items-center justify-center p-[75px_24px_82px]
//         overflow-hidden
//         [background:radial-gradient(_ellipse_at_50%_0%,_rgba(170,_91,_55,_0.28),_transparent_65%_),_linear-gradient(115deg,_#843c23_0%,_#783019_100%)]
//         [@media(width<=600px)]:min-h-[390px] [@media(width<=600px)]:p-[76px_20px_90px]
//         [&::before]:[content:''] [&::before]:absolute [&::before]:inset-[20px]
//         [&::before]:[border:1px_solid_rgba(221,_174,_112,_0.38)] [&::before]:rounded-[4px]
//         [&::before]:pointer-events-none [&::before]:z-[2] [@media(width<=600px)]:[&::before]:inset-[12px]
//       "
//       >
//         <div className="countdown--content relative z-[3] w-full max-w-[850px] m-[0_auto]">
//           <p
//             className="
//         countdown--eyebrow m-[0_0_20px] text-[#d9ad72] [font-family:var(--font-script),_cursive]
//         text-[clamp(29px,_3vw,_42px)] font-[400] leading-[1.2] [@media(width<=600px)]:text-[30px]
//         [@media(width<=600px)]:mb-[18px]
//       "
//           >
//             With joy &amp; love
//           </p>

//           <h2
//             className="
//         countdown--title m-0 text-[#fff0df] [font-family:var(--font-cormorant),_serif]
//         text-[clamp(36px,_5vw,_58px)] font-[600] leading-[1.12] tracking-[0.14em] uppercase
//         [@media(width<=600px)]:text-[clamp(29px,_7.2vw,_40px)] [@media(width<=600px)]:tracking-[0.08em]
//       "
//           >
//             {isMarried ? "JUST MARRIED" : "WE ARE GETTING MARRIED"}
//           </h2>

//           <div
//             className="
//         countdown--divider flex items-center justify-center gap-[13px] m-[25px_auto_26px] text-[#d9ad72]
//         [@media(width<=600px)]:m-[23px_auto] [&_>_span:not(.countdown--star)]:w-[43px]
//         [&_>_span:not(.countdown--star)]:h-[1px]
//         [&_>_span:not(.countdown--star)]:[background:rgba(217,_173,_114,_0.75)]
//       "
//             aria-hidden="true"
//           >
//             <span />
//             <span className="countdown--star text-[12px] leading-[1]">✦</span>
//             <span />
//           </div>

//           {!isMarried && (
//             <div
//               className="
//         countdown--timer flex items-center justify-center gap-[clamp(20px,_5vw,_64px)] m-[0_auto_23px]
//         [@media(width<=600px)]:gap-[clamp(12px,_4vw,_24px)] [@media(width<=600px)]:mb-[24px]
//       "
//               aria-label="Time remaining until the wedding"
//             >
//               {Object.entries(left).map(([key, value]) => (
//                 <div
//                   className="
//         countdown--unit flex flex-col items-center gap-[5px] min-w-[54px] [@media(width<=600px)]:min-w-[46px]
//         [&_strong]:text-[#fff0df] [&_strong]:[font-family:var(--font-cormorant),_serif]
//         [&_strong]:text-[clamp(35px,_5vw,_49px)] [&_strong]:font-[500] [&_strong]:tabular-nums
//         [&_strong]:leading-[1] [@media(width<=600px)]:[&_strong]:text-[clamp(31px,_8vw,_39px)]
//         [&_span]:text-[#dfbd94] [&_span]:text-[9px] [&_span]:font-[500] [&_span]:tracking-[0.2em]
//         [&_span]:uppercase [@media(width<=600px)]:[&_span]:text-[8px]
//         [@media(width<=600px)]:[&_span]:tracking-[0.12em]
//       "
//                   key={key}
//                 >
//                   <strong>{String(value).padStart(2, "0")}</strong>
//                   <span>{labels[key as keyof typeof labels]}</span>
//                 </div>
//               ))}
//             </div>
//           )}

//           <p
//             className="
//         countdown--date m-0 text-[#f0d7bc] text-[11px] font-[500] tracking-[0.24em] leading-[1.8] uppercase
//         [@media(width<=600px)]:text-[9px] [@media(width<=600px)]:tracking-[0.16em]
//       "
//           >
//             {isMarried ? "OUR FOREVER BEGINS" : wedding.dateLabel}
//           </p>
//         </div>

//         <div
//           className="
//         countdown--ornament absolute z-[1] bottom-[-35px] left-[50%] w-[min(760px,_85%)] text-[#d8a36b]
//         opacity-[0.34] [transform:translateX(-50%)] pointer-events-none [@media(width<=600px)]:bottom-[-10px]
//         [@media(width<=600px)]:w-full [@media(width<=600px)]:opacity-[0.25] [&_>_*]:w-full [&_svg]:block
//         [&_svg]:w-full [&_svg]:h-auto
//       "
//           aria-hidden="true"
//         >
//           <Orn />
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useState } from "react";

import { useCountdown } from "@/hooks/useCountdown";
import { wedding } from "@/lib/wedding";

const units = [
  { key: "d", label: "Days" },
  { key: "h", label: "Hours" },
  { key: "m", label: "Minutes" },
  { key: "s", label: "Seconds" },
] as const;

export default function Countdown() {
  const left = useCountdown(wedding.dateISO);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Check the date instead of treating the hook's initial zeros as married.
  const isMarried =
    mounted && Date.now() >= new Date(wedding.dateISO).getTime();

  return (
    <section
      aria-labelledby="countdown-heading"
      className="
        countdown relative isolate
        px-5 py-12 text-center text-[var(--brown)]
        sm:px-8 sm:py-16
      "
    >
      <div
        className="
          relative mx-auto w-full max-w-[900px]
          rounded-[28px]
          border border-[var(--terracotta)]/25
          bg-[#fffcf6]/95
          px-5 py-10
          shadow-[0_18px_60px_-30px_rgba(61,43,36,0.22)]
          sm:rounded-[36px] sm:px-12 sm:py-12
        "
      >
        {/* Fine stationery border */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-2
            rounded-[21px]
            border border-[var(--terracotta)]/10
            sm:inset-3 sm:rounded-[26px]
          "
        />

        <div className="relative">
          <p
            className="
              m-0
              [font-family:var(--font-dm-sans),sans-serif]
              text-[9px] font-medium uppercase
              leading-relaxed tracking-[0.28em]
              text-[var(--muted)]
              sm:text-[10px] sm:tracking-[0.34em]
            "
          >
            {isMarried ? "Our forever begins" : "We are getting"}
          </p>

          <h2
            id="countdown-heading"
            className="
              m-0 mt-2
              [font-family:var(--font-cormorant),serif]
              text-[clamp(3.5rem,9vw,5rem)]
              font-normal italic leading-[1.1]
              tracking-[-0.035em]
              text-[var(--rust)]
            "
          >
            {isMarried ? "Just married" : "Married"}
          </h2>

          {/* Decorative divider */}
          <div
            aria-hidden="true"
            className="
              mx-auto my-6 flex w-[140px]
              items-center justify-center gap-4
              text-[var(--terracotta)]
              sm:my-7
            "
          >
            <span
              className="
                h-px flex-1
                bg-gradient-to-r
                from-transparent to-[var(--terracotta)]/50
              "
            />

            <span className="text-[10px]">✦</span>

            <span
              className="
                h-px flex-1
                bg-gradient-to-l
                from-transparent to-[var(--terracotta)]/50
              "
            />
          </div>

          {!isMarried && (
            <dl
              aria-label="Time remaining until the wedding"
              className="
                mx-auto grid w-full max-w-[580px]
                grid-cols-4
              "
            >
              {units.map(({ key, label }, index) => (
                <div
                  key={key}
                  className={`
                    flex min-w-0 flex-col
                    items-center justify-center px-1 py-1
                    sm:px-4
                    ${
                      index > 0
                        ? "border-l border-[var(--terracotta)]/20"
                        : ""
                    }
                  `}
                >
                  <dt
                    className="
                      order-2 mt-2
                      [font-family:var(--font-dm-sans),sans-serif]
                      text-[8px] font-medium uppercase
                      tracking-[0.1em] text-[var(--muted)]
                      sm:mt-3 sm:text-[10px] sm:tracking-[0.2em]
                    "
                  >
                    {label}
                  </dt>

                  <dd
                    className="
                      m-0
                      [font-family:var(--font-cormorant),serif]
                      text-[clamp(2.25rem,8vw,4.5rem)]
                      font-normal leading-none
                      tabular-nums text-[var(--rust)]
                    "
                  >
                    {String(left[key]).padStart(2, "0")}
                  </dd>
                </div>
              ))}
            </dl>
          )}

          <p
            className="
              mb-0 mt-7
              [font-family:var(--font-dm-sans),sans-serif]
              text-[9px] font-medium uppercase
              leading-[1.8] tracking-[0.18em]
              text-[var(--muted)]
              sm:mt-8 sm:text-[10px] sm:tracking-[0.24em]
            "
          >
            {wedding.dateLabel}
          </p>
        </div>
      </div>
    </section>
  );
}