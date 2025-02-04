import type React from "react";
import { Table, Button, Badge } from "flowbite-react";
import Layout from "../../components/layout";
import { useNavigate } from "react-router-dom";

interface SubKriteria {
  id: string;
  name: string;
  provider: string;
  deadline: string;
  status: "Active" | "Closed";
  amount: string;
}

import { ReusableBreadcrumb } from "../../components";
import { List } from "lucide-react";

export const SubKriteriaList: React.FC = () => {
  const SubkriteriaList: SubKriteria[] = [
    {
      id: "1",
      name: "Kriteria 1",
      provider: "Provider 1",
      deadline: "2025-03-01",
      status: "Active",
      amount: "Rp 50.000.000",
    },
    // Add more sample data as needed
  ];

  const navigate = useNavigate();

  const breadcrumbItems = [
    { text: "Home", href: "/dashboard" },
    { text: "Sub Kriteria", href: "/sub-kriteria" },
    { text: "Daftar", href: "/sub-kriteria/list", isActive: true },
  ];

  return (
    <Layout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <List className="text-blue-500 text-4xl mr-3" />
            <h1 className="text-3xl font-bold text-gray-800 bg-gradient-to-r from-blue-700 to-slate-700 text-transparent bg-clip-text animate-fade-in">Daftar Kriteria</h1>
          </div>
          <Button color="blue" onClick={() => navigate('/Kriteria/create')}>Tambah Sub Kriteria</Button>
        </div>
        <ReusableBreadcrumb items={breadcrumbItems} />
        <hr className="my-4 border-t-2 border-gray-300" />

        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Nama</Table.HeadCell>
            <Table.HeadCell>Penyedia</Table.HeadCell>
            <Table.HeadCell>Deadline</Table.HeadCell>
            <Table.HeadCell>Status</Table.HeadCell>
            <Table.HeadCell>Jumlah</Table.HeadCell>
            <Table.HeadCell>Aksi</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {SubkriteriaList.map((kriteria) => (
              <Table.Row key={kriteria.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {kriteria.name}
                </Table.Cell>
                <Table.Cell>{kriteria.provider}</Table.Cell>
                <Table.Cell>{kriteria.deadline}</Table.Cell>
                <Table.Cell>
                  <Badge color={kriteria.status === "Active" ? "success" : "failure"}>{kriteria.status}</Badge>
                </Table.Cell>
                <Table.Cell>{kriteria.amount}</Table.Cell>
                <Table.Cell>
                  <div className="flex space-x-2">
                    <Button className="bg-blue-700 hover:bg-blue-800" size="sm" onClick={() => navigate(`/Kriteria/show/${kriteria.id}`)}>
                      Lihat
                    </Button>
                    <Button className="bg-yellow-400 hover:bg-yellow-500 text-white" size="sm" onClick={() => navigate(`/Kriteria/edit/${kriteria.id}`)}>
                      Edit
                    </Button>
                    <Button className="bg-red-700 hover:bg-red-800 text-white" size="sm" onClick={() => handleDelete(kriteria.id)}>
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
    console.log(`Deleting kriteria with id: ${id}`);
  }
};
