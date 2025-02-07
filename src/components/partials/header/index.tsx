import type React from "react"
import { Bell, User } from "lucide-react"
import logoKabupatenRoteNdao from "../../../assets/logo-kab-rote-ndao.png";

export const Header: React.FC = () => {
  return (
    <header className="bg-white border-b">
      <div className="flex justify-between items-center px-6 py-4">
        <div className="flex items-center space-x-4">
          <img src={logoKabupatenRoteNdao} alt="Kabupaten Rote Ndao Logo" className="h-10 w-10" />
          <h1 className="text-xl font-semibold">SPB | Kabupaten Rote Ndao</h1>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-1 rounded-full hover:bg-gray-100">
            <Bell className="h-5 w-5 text-gray-600" />
          </button>
          <button className="p-1 rounded-full hover:bg-gray-100">
            <User className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  )
}

// export default Header
