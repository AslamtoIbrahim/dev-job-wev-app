import Logo from "./Logo"
import ThemeWrapper from "./ThemeWrapper"

const Header = () => {
  return (
    <div className="padx py-4 flex justify-between items-center">
      <Logo />
      <ThemeWrapper />
    </div>
  )
}

export default Header
