import React from "react";
import "./style.css";
import Items from "../items/Items";

function Main() {
  return (
    <React.Fragment>
      <div className="header-container">
        <h2>Bakery Items</h2>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt.
        </p>
      </div>
      <div className="main-container">
        <Items
          url="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/33b4149aa2ba568da6fc4ccd/f45e987f-fe2f-640e-7a20-2efcdec618cb.jpg"
          name="BAGUETTE"
          info="Small-batch sourdough baguette."
          price="$4.5"
        />
        <Items
          url="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/0cd587018da1567ca82ec0a8/rr.jpg"
          name="FARMING BREAD"
          info="Sample text. Click to select the Text Element."
          price="$5.25"
        />
        <Items
          url="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/fa992363623553128956b054/hh.jpg"
          name="MIXED GRAIN"
          info="Sample text. Click to select the Text Element."
          price="$4.5"
        />
        <Items
          url="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/1790791acc975a71ba003ca1/hg.jpg"
          name="MILK BREAD"
          info="Sample text. Click to select the Text Element."
          price="$3.55"
        />
        <Items
          url="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/c05083dfe0235ffaa9a5cfbf/jhjhjh.jpg"
          name="BROWN BREAD"
          info="Sample text. Click to select the Text Element."
          price="$2.45"
        />
        <Items
          url="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/c1a914846ece539fab7e5b32/j.jpg"
          name="CHEESE BREAD"
          info="Sample text. Click to select the Text Element."
          price="$5.5"
        />
        <Items
          url="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/60067c0411e15541880e3293/rre.jpg"
          name="PREMIUM BREAD"
          info="Sample text. Click to select the Text Element."
          price="$6.5"
        />
        <Items
          url="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/8d481fe712f85027870c837e/rtrtrt.jpg"
          name="CINNABON"
          info="Sample text. Click to select the Text Element."
          price="$1.5"
        />
        <Items
          url="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/adb30bfc53ab5e469ddacf47/ghghe4.jpg"
          name="CROISSANT"
          info="Sample text. Click to select the Text Element."
          price="$1.8"
        />
      </div>
    </React.Fragment>
  );
}
export default Main;
