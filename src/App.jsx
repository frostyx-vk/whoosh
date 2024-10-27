import React from "react";

import { Head } from "./components/Whoosh/Head";
import { Pad } from "./components/Whoosh/Pad";
import { Info } from "./components/Whoosh/Info";
import { Separator } from "./components/Whoosh/Separator";
import { Partners } from "./components/Whoosh/Partners";
import { Intro } from "./components/Whoosh/Intro";
import { Partners2 } from "./components/Whoosh/Partners2";
import { Footer } from "./components/Whoosh/Footer";
import { OpenText } from "./components/Whoosh/OpenText";

export default function App() {
  return (
    <div>
      <Head />
      <Pad />
      <Info />
      <Separator />
      <Partners />
      <Intro />
      <Partners2 />
      <Separator />
      <OpenText />
      <Footer />
    </div>
  );
}
