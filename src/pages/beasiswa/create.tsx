import type React from "react";
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import Layout from "../../components/layout";
import { useNavigate } from "react-router-dom";
import { ReusableBreadcrumb } from "../../components";
import { AwardIcon } from "lucide-react";

export const BeasiswaCreate: React.FC = () => {
    const navigate = useNavigate();

    const breadcrumbItems = [ 
        { text: "Home", href: "/" },
        { text: "Beasiswa", href: "/beasiswa" },
        { text: "Edit", href: "/beasiswa/edit" }
    ];

    return (
        <Layout>
            <div className="max-w-7xl mx-auto p-6">
                <div className="flex items-center mb-3">
                    <AwardIcon className="text-blue-500 text-4xl mr-3" />
                    <h1 className="text-3xl font-bold text-gray-800 bg-gradient-to-r from-blue-700 to-slate-700 text-transparent bg-clip-text animate-fade-in">
                        Tambah Beasiswa Baru
                    </h1>
                </div>
                <ReusableBreadcrumb items={breadcrumbItems} />

                <hr className="my-4 border-t-2 border-gray-300" />

                <form className="flex flex-col gap-6 mt-5">
                    <div>
                        <Label 
                            htmlFor="name" 
                            value="Nama Beasiswa" 
                            className="block mb-2 text-sm font-medium text-gray-700" 
                        />
                        <TextInput 
                            id="name" 
                            type="text" 
                            placeholder="Masukkan nama beasiswa" 
                            required 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full" 
                        />
                    </div>

                    <div>
                        <Label 
                            htmlFor="provider" 
                            value="Penyedia Beasiswa" 
                            className="block mb-2 text-sm font-medium text-gray-700" 
                        />
                        <TextInput 
                            id="provider" 
                            type="text" 
                            placeholder="Masukkan nama penyedia" 
                            required 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full" 
                        />
                    </div>

                    {/* <hr className="my-4 border-t-2 border-gray-300" /> */}

                    <div>
                        <Label 
                            htmlFor="amount" 
                            value="Jumlah Beasiswa" 
                            className="block mb-2 text-sm font-medium text-gray-700" 
                        />
                        <TextInput 
                            id="amount" 
                            type="text" 
                            placeholder="Masukkan jumlah beasiswa" 
                            required 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full" 
                        />
                    </div>

                    <div>
                        <Label 
                            htmlFor="deadline" 
                            value="Deadline" 
                            className="block mb-2 text-sm font-medium text-gray-700" 
                        />
                        <div className="relative">
                            <TextInput 
                                id="deadline" 
                                type="date" 
                                required 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full" 
                            />
                        </div>
                    </div>

                    {/* <hr className="my-4 border-t-2 border-gray-300" /> */}

                    <div>
                        <Label 
                            htmlFor="description" 
                            value="Deskripsi" 
                            className="block mb-2 text-sm font-medium text-gray-700" 
                        />
                        <Textarea 
                            id="description" 
                            placeholder="Masukkan deskripsi beasiswa" 
                            required 
                            rows={4} 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                        />
                    </div>

                    <div className="flex justify-end space-x-4">
                        <Button 
                            color="light" 
                            className="bg-gray-200 text-gray-800 hover:bg-gray-300" 
                            onClick={() => navigate(-1)}
                        >
                            Batal
                        </Button>
                        <Button 
                            type="submit" 
                            className="bg-blue-700 text-white hover:bg-blue-800"
                        >
                            Simpan
                        </Button>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default BeasiswaCreate;