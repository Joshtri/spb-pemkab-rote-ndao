import type React from "react";
import { Button, Badge, Card } from "flowbite-react";
import { Calendar, User, Mail, Clock, Dock } from "lucide-react"; // Mengganti ikon sesuai konteks pengguna
import Layout from "../../components/layout";
import { ReusableBreadcrumb } from "../../components";
import { useNavigate } from "react-router-dom";

export const PenggunaShow: React.FC = () => {
    const navigate = useNavigate();

    const breadcrumbItems = [
        { text: "Home", href: "/dashboard" },
        { text: "Pengguna", href: "/pengguna" },
        { text: "Detail", href: "/pengguna/show", isActive: true }
    ];

    return (
        <Layout>
            <div className="max-w-7xl mx-auto p-6">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center">
                        <Dock className="text-blue-500 text-4xl mr-3" />
                        <h1 className="text-3xl font-bold text-gray-800 bg-gradient-to-r from-blue-700 to-slate-700 text-transparent bg-clip-text animate-fade-in">
                            Detail Pengguna
                        </h1>
                    </div>
                    <div className="space-x-2 flex">
                        <Button color="light" onClick={() => navigate('/pengguna/edit/1')}>Edit</Button>
                        <Button color="failure">Hapus</Button>
                    </div>
                </div>

                <ReusableBreadcrumb items={breadcrumbItems} />

                <hr className="my-4 border-t-2 border-gray-300" />

                <Card>
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-semibold mb-2">John Doe</h2>
                            <Badge color="success">Active</Badge>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex items-start space-x-3">
                                <User className="h-6 w-6 text-gray-500 mt-1" />
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Nama</p>
                                    <p className="mt-1 text-gray-700">John Doe</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <Mail className="h-6 w-6 text-gray-500 mt-1" />
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Email</p>
                                    <p className="mt-1 text-gray-700">john.doe@example.com</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <Calendar className="h-6 w-6 text-gray-500 mt-1" />
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Tanggal Bergabung</p>
                                    <p className="mt-1 text-gray-700">1 Maret 2022</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <Clock className="h-6 w-6 text-gray-500 mt-1" />
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Status</p>
                                    <p className="mt-1 text-gray-700">Active</p>
                                </div>
                            </div>
                        </div>

                        <div className="border-t pt-6 mt-6">
                            <h3 className="text-lg font-medium mb-4">Biografi</h3>
                            <p className="text-gray-700">
                                John Doe is a software developer with over 10 years of experience in web development and project management. He has worked on numerous projects and is known for his attention to detail and problem-solving skills.
                            </p>
                        </div>

                        <div className="border-t pt-6 mt-6">
                            <h3 className="text-lg font-medium mb-4">Keterampilan</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>Node.js</li>
                                <li>Project Management</li>
                                <li>Team Leadership</li>
                            </ul>
                        </div>
                    </div>
                </Card>
            </div>
        </Layout>
    );
};
