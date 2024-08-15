import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Home" },
    { name: "The Home Page", content: "" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-4">
    
      <p>hhsfdhhhhhhhhhhi</p>
    
    </div>
  );
}
