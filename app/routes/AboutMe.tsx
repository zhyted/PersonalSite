import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "About me" },
    { name: "More about me", content: "" },
  ];
};


export default function AboutMe() {
    return (
      <div className="font-sans p-4">
      
        <p>hhsfdhhhhhhhhhhi</p>
      
      </div>
    );
  }