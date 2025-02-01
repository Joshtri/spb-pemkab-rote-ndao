import type React from "react"
import { Button, Label, TextInput, Textarea, Select } from "flowbite-react"
import {  Calendar, Edit } from "lucide-react"

import { ReusableBreadcrumb } from "../../components";
import Layout from "../../components/layout";

export const BeasiswaEdit: React.FC = () => {


    const breadcrumbItems = [ 
        { text: "Home", href: "/" },
        { text: "Beasiswa", href: "/beasiswa" },
        { text: "Edit", href: "/beasiswa/edit" }
    ];

    return (
    <Layout>
        <div className="max-w-7xl mx-auto p-6">
            <div className="flex items-center mb-3">
                <Edit className="text-blue-500 text-4xl mr-3" />
                <h1 className="text-3xl font-bold text-gray-800 bg-gradient-to-r from-blue-700 to-slate-700 text-transparent bg-clip-text animate-fade-in">
                    Edit Beasiswa
                </h1>
            </div>
            <ReusableBreadcrumb items={breadcrumbItems} />

            <hr className="my-4 border-t-2 border-gray-300" />
            {/* <h1 className="text-2xl font-semibold mb-6">Edit Beasiswa</h1> */}

            <form className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="name" value="Nama Beasiswa" />
                    </div>
                    <TextInput id="name" type="text" defaultValue="Academic Excellence Scholarship" required />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="provider" value="Penyedia Beasiswa" />
                    </div>
                    <TextInput id="provider" type="text" defaultValue="University of Example" required />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="amount" value="Jumlah Beasiswa" />
                    </div>
                    <TextInput id="amount" type="text" defaultValue="Rp 50.000.000" required />
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="deadline" value="Deadline" />
                    </div>
                    <div className="relative">
                        <TextInput id="deadline" type="date" defaultValue="2025-03-01" required icon={Calendar} />
                    </div>
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="status" value="Status" />
                    </div>
                    <Select id="status" required defaultValue="active">
                        <option value="active">Active</option>
                        <option value="closed">Closed</option>
                    </Select>
                </div>

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="description" value="Deskripsi" />
                    </div>
                    <Textarea
                        id="description"
                        defaultValue="This scholarship is awarded to students with exceptional academic achievements..."
                        required
                        rows={4}
                    />
                </div>

                <div className="flex justify-end space-x-4">
                    <Button color="light">Batal</Button>
                    <Button type="submit">Simpan Perubahan</Button>
                </div>
            </form>
        </div>
    </Layout>
    )
}
