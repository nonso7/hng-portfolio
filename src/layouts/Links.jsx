import React from "react";
import Link from "../components/Link";
import data from "../data/profile_links_data";

const Links = () => {
  return (
    <section>
      <div className="mx-auto container px-8 md:px-16">
        {data.map((item) => {
          return (
            <Link key={item.id} link={item}/>
          );
        })}
      </div>
    </section>
  );
};

export default Links;
