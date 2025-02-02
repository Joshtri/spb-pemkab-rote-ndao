import type React from "react";
import { Button, Badge, Card } from "flowbite-react";
import { Calendar, User, DollarSign, Clock, Dock } from "lucide-react";
import Layout from "../../components/layout";
import { ReusableBreadcrumb } from "../../components";
import { useNavigate } from "react-router-dom";



export const BeasiswaShow: React.FC = () => {
    const navigate = useNavigate();

    const breadcrumbItems = [
        { text: "Home", href: "/dashboard" },
        { text: "Beasiswa", href: "/beasiswa" },
        { text: "Detail", href: "/beasiswa/show", isActive: true }
    ];


  return (
    <Layout>
        <div className="max-w-7xl mx-auto p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
                <Dock className="text-blue-500 text-4xl mr-3" />
                <h1 className="text-3xl font-bold text-gray-800 bg-gradient-to-r from-blue-700 to-slate-700 text-transparent bg-clip-text animate-fade-in">
                Detail Beasiswa
                </h1>
            </div>
            <div className="space-x-2 flex">
              <Button color="light" onClick={()=> navigate('/beasiswa/edit/1')}>Edit</Button>
              <Button color="failure">Hapus</Button>
            </div>
          </div>

            <ReusableBreadcrumb items={breadcrumbItems} />
          

          <hr className="my-4 border-t-2 border-gray-300" />


          <Card>
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-2">Academic Excellence Scholarship</h2>
                <Badge color="success">Active</Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <User className="h-6 w-6 text-gray-500 mt-1" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Penyedia</p>
                    <p className="mt-1 text-gray-700">University of Example</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <DollarSign className="h-6 w-6 text-gray-500 mt-1" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Jumlah Beasiswa</p>
                    <p className="mt-1 text-gray-700">Rp 50.000.000</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Calendar className="h-6 w-6 text-gray-500 mt-1" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Deadline</p>
                    <p className="mt-1 text-gray-700">1 Maret 2025</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="h-6 w-6 text-gray-500 mt-1" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Dibuat Pada</p>
                    <p className="mt-1 text-gray-700">24 Januari 2025</p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6 mt-6">
                <h3 className="text-lg font-medium mb-4">Deskripsi</h3>
                <p className="text-gray-700">
                  This scholarship is awarded to students with exceptional academic achievements. Recipients must maintain
                  a minimum GPA of 3.5 and be enrolled as full-time students. The scholarship covers tuition fees,
                  academic materials, and provides a monthly stipend.
                </p>
              </div>

              <div className="border-t pt-6 mt-6">
                <h3 className="text-lg font-medium mb-4">Persyaratan</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Minimum GPA 3.5</li>
                  <li>Full-time student status</li>
                  <li>Letter of recommendation</li>
                  <li>Personal statement</li>
                  <li>Academic transcript</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
    </Layout>
  );
};

export default BeasiswaShow;