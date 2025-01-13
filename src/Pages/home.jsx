
import { Link } from "react-router-dom"

export function Home(){
   
    return (
        <>
            <h1 id ="Heading">
              How h1 Looks like
            </h1>
            <p id ="Paragraph">
              This is a paragraph. You can type stuff you want to see here.
            </p>
            <p id = "Next">
              This is used for another paragraph.
            </p>
            <h2>
                this is the home page
            </h2>
          <a href= "https://replit.com/@JoelLazcano1">
          Previous Works 
          </a>
          <Link to="/">Home</Link>
          <Link to="/page1">Page 1</Link>
        </>
      )
}