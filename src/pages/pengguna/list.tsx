import type React from "react";
import { Table, Button, Badge } from "flowbite-react";
import Layout from "../../components/layout";
import { useNavigate } from "react-router-dom";

interface Pengguna {
  id: string;
  name: string;
  email: string;
  role: "Admin" | "User" | "Guest";
  status: "Active" | "Inactive";
}

import { ReusableBreadcrumb } from "../../components";
import { List } from "lucide-react";

export const PenggunaList: React.FC = () => {
  const users: Pengguna[] = [
    {
      id: "1",
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Admin",
      status: "Active",
    },
    // Add more sample data as needed
  ];

  const navigate = useNavigate();

  const breadcrumbItems = [
    { text: "Home", href: "/dashboard" },
    { text: "Pengguna", href: "/pengguna" },
    { text: "Daftar", href: "/pengguna/list", isActive: true },
  ];

  return (
    <Layout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <List className="text-blue-500 text-4xl mr-3" />
            <h1 className="text-3xl font-bold text-gray-800 bg-gradient-to-r from-blue-700 to-slate-700 text-transparent bg-clip-text animate-fade-in">
              Daftar Pengguna
            </h1>
          </div>
          <Button color="blue" onClick={() => navigate('/pengguna/create')}>Tambah Pengguna</Button>
        </div>
        <ReusableBreadcrumb items={breadcrumbItems} />
        <hr className="my-4 border-t-2 border-gray-300" />

        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Nama</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>Peran</Table.HeadCell>
            <Table.HeadCell>Status</Table.HeadCell>
            <Table.HeadCell>Aksi</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {users.map((user) => (
              <Table.Row key={user.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {user.name}
                </Table.Cell>
                <Table.Cell>{user.email}</Table.Cell>
                <Table.Cell>{user.role}</Table.Cell>
                <Table.Cell>
                  <Badge color={user.status === "Active" ? "success" : "failure"}>{user.status}</Badge>
                </Table.Cell>
                <Table.Cell>
                  <div className="flex space-x-2">
                    <Button className="bg-blue-700 hover:bg-blue-800" size="sm" onClick={() => navigate(`/pengguna/show/${user.id}`)}>
                      Lihat
                    </Button>
                    <Button className="bg-yellow-400 hover:bg-yellow-500 text-white" size="sm" onClick={() => navigate(`/pengguna/edit/${user.id}`)}>
                      Edit
                    </Button>
                    <Button className="bg-red-700 hover:bg-red-800 text-white" size="sm" onClick={() => handleDelete(user.id)}>
                      Hapus
                    </Button>
                  </div>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </Layout>
  );

  function handleDelete(id: string) {
    // Implement delete functionality here
    console.log(`Deleting user with id: ${id}`);
  }
};

 