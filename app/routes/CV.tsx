import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "CV" },
    { name: "My CV", content: "" },
  ];
};


export default function CV() {
    return (
      <div className="font-sans p-4">
      
        <p>hhsfdhhhhhhhhhhi</p>
      
      </div>
    );
  }