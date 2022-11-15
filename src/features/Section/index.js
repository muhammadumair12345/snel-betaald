import React, { useContext } from "react";
import { SectionBox } from "./Section.style";
import { ToggleContext } from "../../contexts/ToggleContext";
import TopupForm from "./TopupForm";
import RefundForm from "./RefundForm";

const Section = () => {
  const { toggle } = useContext(ToggleContext);

  return (
    <SectionBox>
      <h3>Please fill in the fields below</h3>
      {!toggle ? <TopupForm /> : <RefundForm />}
    </SectionBox>
  );
};

export default Section;
