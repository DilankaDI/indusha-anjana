// "use client";

// import { useState } from "react";
// import Entrance from "@/components/Entrance";
// import Nav from "@/components/Nav";
// import MusicButton from "@/components/MusicButton";
// import Hero from "@/components/Hero";
// import Countdown from "@/components/Countdown";
// import Story from "@/components/Story";
// import Details from "@/components/Details";
// import Gallery from "@/components/Gallery";
// import Location from "@/components/Location";
// import Homecoming from "@/components/Homecoming";
// import Rsvp from "@/components/Rsvp";
// import Footer from "@/components/Footer";
// import FallingLeaves from "@/components/FallingLeaves";

// export default function Page() {
//   const [entered, setEntered] = useState(false);
//   const [music, setMusic] = useState(false);

//   if (!entered) {
//     return <Entrance onOpen={() => setEntered(true)} />;
//   }

//   return (
//     <div className="invitation-page relative isolate min-h-[100svh] w-full max-w-full">
//       {/* The only fixed background on the page */}
//       <div
//         className="
//         fixed-background fixed inset-0 z-[-1] pointer-events-none bg-[var(--paper)]
//         [background-image:url('/images/wedding-background.jpg')] [background-position:center_center]
//         [background-repeat:no-repeat] [background-size:cover]
//       "
//         aria-hidden="true"
//       />
//       <FallingLeaves />

//       {/* All content scrolls above the background */}
//       <main
//         id="top"
//         className="
//         invitation-content relative z-[1] min-h-[100svh] w-full max-w-full [&_.paper]:bg-[transparent]
//         [&_.hero]:bg-[transparent] [&_.story]:bg-[transparent] [&_.gallery]:bg-[transparent]
//         [&_.rsvp]:bg-[transparent]
//       "
//       >
//         <Nav />
//         <MusicButton playing={music} onToggle={() => setMusic(!music)} />

//         <Hero />
//         <Countdown />
//         <Story />
//         <Details />
//         <Gallery />
//         <Location />
//         <Homecoming />
//         <Rsvp />
//         <Footer />
//       </main>
//     </div>
//   );
// }

"use client";

import { useState } from "react";

import Entrance from "@/components/Entrance";
import Nav from "@/components/Nav";
import MusicButton from "@/components/MusicButton";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Story from "@/components/Story";
import Details from "@/components/Details";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
// import Homecoming from "@/components/Homecoming";
import Rsvp from "@/components/Rsvp";
import Footer from "@/components/Footer";
import FallingLeaves from "@/components/FallingLeaves";

export default function Page() {
  const [entered, setEntered] = useState(false);
  const [music, setMusic] = useState(false);

  if (!entered) {
    return <Entrance onOpen={() => setEntered(true)} />;
  }

  return (
    <div
      id="top"
      className="
        invitation-page relative isolate
        min-h-[100svh] w-full max-w-full
      "
    >
      {/* Fixed page background */}
      <div
        aria-hidden="true"
        className="
          fixed-background pointer-events-none
          fixed inset-0 z-[-1]
          bg-[var(--paper)]
          bg-[url('/images/wedding-background.jpg')]
          bg-cover bg-center bg-no-repeat
        "
      />

      <FallingLeaves />

      {/* Fixed controls outside the scrolling content */}
      <Nav />

      <MusicButton
        playing={music}
        onToggle={() => setMusic((previous) => !previous)}
      />

      {/* Desktop spacing reserves room for the navbar */}
      <main
        className="
          invitation-content relative z-[1]
          min-h-[100svh] w-full max-w-full
          min-[901px]:pt-[110px]
          [&_.paper]:bg-transparent
          [&_.hero]:bg-transparent
          [&_.story]:bg-transparent
          [&_.gallery]:bg-transparent
          [&_.rsvp]:bg-transparent
        "
      >
        <Hero />
        <Countdown />
        <Story />
        <Details />
        <Gallery />
        <Location />
        {/* <Homecoming /> */}
        <Rsvp />
        <Footer />
      </main>
    </div>
  );
}