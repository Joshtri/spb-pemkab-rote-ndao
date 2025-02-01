import type React from "react"
import Layout from "../../components/layout"

export const DashboardPage: React.FC = () => {
  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Selamat datang user</h1>
        <h2 className="text-2xl font-semibold">Dashboard</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <div key={item} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-medium mb-2">Card {item}</h3>
            <p className="text-gray-600 text-sm">This is a sample card in the admin dashboard.</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}
