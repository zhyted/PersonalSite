import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "My skillset" },
    { name: "My current skillset", content: "" },
  ];
};

export default function Skillset() {
    return (
      <div className="font-sans text-white p-20">
    
      TODO: Skillset Text
      
    
    </div>
    );
  }