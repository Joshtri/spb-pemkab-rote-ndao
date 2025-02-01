import type React from "react";
import { Button, Label, TextInput, Textarea, Select } from "flowbite-react";
import { Edit } from "lucide-react";

import { ReusableBreadcrumb } from "../../components";
import Layout from "../../components/layout";

export const PenggunaEdit: React.FC = () => {
  const breadcrumbItems = [
    { text: "Home", href: "/dashboard" },
    { text: "Pengguna", href: "/pengguna" },
    { text: "Edit", href: "/pengguna/edit", isActive: true }
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex items-center mb-7">
          <Edit className="text-blue-500 text-4xl mr-3" />
          <h1 className="text-3xl font-bold text-gray-800 bg-gradient-to-r from-blue-700 to-slate-700 text-transparent bg-clip-text animate-fade-in">
            Edit Pengguna
          </h1>
        </div>
        <ReusableBreadcrumb items={breadcrumbItems} />

        <hr className="my-4 border-t-2 border-gray-300" />

        <form className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Nama Pengguna" />
            </div>
            <TextInput id="name" type="text" defaultValue="John Doe" required />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Email Pengguna" />
            </div>
            <TextInput id="email" type="email" defaultValue="john.doe@example.com" required />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="role" value="Peran Pengguna" />
            </div>
            <Select id="role" required defaultValue="user">
              <option value="admin">Admin</option>
              <option value="user">User</option>
              <option value="guest">Guest</option>
            </Select>
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="status" value="Status" />
            </div>
            <Select id="status" required defaultValue="active">
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </Select>
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="bio" value="Biografi" />
            </div>
            <Textarea
              id="bio"
              defaultValue="John Doe is a software developer with over 10 years of experience..."
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
  );
};
 