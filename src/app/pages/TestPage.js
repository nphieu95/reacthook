import React from "react";
import Accordion from "./../../_metronic/layout/components/testpage/Accordion";
import Search from "../../_metronic/layout/components/testpage/Search";

export default () => {
  const items = [
    {
      title: "24/6/2020",
      content: "di boi",
    },
    {
      title: "23/6/2020",
      content: "di lam",
    },
    {
      title: "22/6/2020",
      content: "di cat chi",
    },
  ];
  return (
    <div>
      <br></br>
      {/* <Accordion items={items}></Accordion> */}
      <Search></Search>
    </div>
  );
};
