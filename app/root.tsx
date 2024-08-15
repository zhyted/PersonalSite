import {
  Links,
  Meta,
  Navigate,
  Outlet,
  redirect,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useNavigate,
} from "@remix-run/react";
import "./tailwind.css";
import { useState } from "react";
import "./globals.css"



let buttons = ["CV", "About Me", "Home", "Skillset", "Socials", "Contact"]


function getAbsoluteButtonIndex(name : string) {
  return buttons.findIndex((Name) => Name == name);
}

function getRelativeButtons(index : number) {
    
    let circularArraySlice : string[] = []
    
    for (let i = -1; i < 2; i++) { 
        let modulus = (((index+i) % buttons.length) + buttons.length) % buttons.length
        
        circularArraySlice.push(buttons[modulus])
    }
    return circularArraySlice
}



export default function App() {
  const [buttonSelected, setButtonSelected] = useState(2)
  let navigate = useNavigate()
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-stone-900">
        <Outlet/>
        <div className="navbar absolute w-[70vw] h-[10vh] mx-[15vw] bottom-[1vh] rounded-[17px]
        flex flex-row justify-center">
          {
            getRelativeButtons(buttonSelected).map((name, index) => {
              return (
                
                <div className={`h-[100%] w-[33%] flex ${index == 1 ? 'bg-stone-800' : index == 0 ? 'bg-gradient-to-r from-stone-950 to-stone-800' : 'bg-gradient-to-r from-stone-800 to-stone-950'} items-center box${index+1}`}>
                  
                  <button type="button" className={`h-[80%] w-[99%] rounded-[15px] text-[1.4vw] hover:text-stone-50 font-mono ${index == 1 ? 'bg-stone-950' : index == 0 ? 'bg-gradient-to-r from-stone-950 to-stone-900' : 'bg-gradient-to-r from-stone-900 to-stone-950'} ${index == 1 ? 'text-stone-300' : 'text-stone-700'}`}
                  key={name} onClick={() => { let trueIndex = getAbsoluteButtonIndex(name); setButtonSelected(trueIndex); return navigate(`/${name.replace(/\s/g, "")}`)}}>{name}</button>
                
                </div>
              )
            
            })
          }
          
          
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}
