import React from "react";
import { ReklamalarSection, Wrapper, Grid } from "./reklamalar.style";

const Reklamalar = () => {
  const boxes = [
    { id: 1, type: "left", title: "Left 1" },
    { id: 2, type: "left", title: "Left 2" },
    { id: 3, type: "right", title: "Right" }
  ];

  return (
    <ReklamalarSection>
      <Wrapper>
        <h1>Reklamalar</h1>

        <Grid>
          {/* LEFT 1 */}
          <div className="leftBox">{boxes[0].title}</div>

          {/* RIGHT 2 rows */}
          <div className="rightBox">{boxes[2].title}</div>

          {/* LEFT 2 */}
          <div className="leftBox">{boxes[1].title}</div>
        </Grid>
      </Wrapper>
    </ReklamalarSection>
  );
};

export default Reklamalar;
