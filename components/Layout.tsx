import { ReactNode } from "react"
import Header from "./Header"

const Layout: React.FC<{children: ReactNode}> = (props) => {
  return (
    <>
      <Header />
      <div className="main">
        {props.children}
      </div>
    </>
  )
}

export default Layout