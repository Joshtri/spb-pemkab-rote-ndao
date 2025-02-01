import React from 'react';
import { Card } from 'flowbite-react';
import   Layout   from '../../components/layout';

import { ReusableBreadcrumb } from '../../components';

export const BantuanPage: React.FC = () => {
    const breadcrumbItems = [
        { href: "/dashboard", text: "Home" },
        { href: "/bantuan", text: "Bantuan", isActive: true }
    ];


  return (
    <Layout>

        <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-4">Panduan Penggunaan Sistem</h1>

        <ReusableBreadcrumb items={breadcrumbItems}/>

        <hr className="my-4 border-t-2 border-gray-300" />

        <Card className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Alur Penggunaan Sistem</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Masukkan data penerima beasiswa seperti nama, NIM, dan data pribadi lainnya.</li>
                <li>Masukkan kriteria penilaian seperti IPK, penghasilan orang tua, prestasi akademik, dan lainnya.</li>
                <li>Setiap kriteria akan memiliki bobot penilaian yang diatur sesuai dengan kepentingannya.</li>
                <li>Sistem akan melakukan perhitungan menggunakan metode Simple Additive Weighting (SAW).</li>
                <li>Hasil perhitungan akan menampilkan penerima beasiswa yang direkomendasikan berdasarkan nilai tertinggi.</li>
            </ol>
        </Card>

        <Card className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Tahapan Metode Simple Additive Weighting (SAW)</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Normalisasi matriks keputusan:
                <p className="ml-6">R<sub>ij</sub> = X<sub>ij</sub> / X<sub>ij max</sub> (untuk kriteria keuntungan)</p>
                <p className="ml-6">R<sub>ij</sub> = X<sub>ij min</sub> / X<sub>ij</sub> (untuk kriteria biaya)</p>
            </li>
            <li>Menghitung nilai preferensi untuk setiap alternatif:
                <p className="ml-6">V<sub>i</sub> = Σ (W<sub>j</sub> * R<sub>ij</sub>)</p>
                <p className="ml-6">Di mana W<sub>j</sub> adalah bobot dari kriteria ke-j, dan R<sub>ij</sub> adalah nilai normalisasi dari kriteria ke-j untuk alternatif ke-i.</p>
            </li>
            <li>Alternatif dengan nilai preferensi tertinggi adalah alternatif terbaik.</li>
            </ol>
        </Card>

        <Card className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Contoh Perhitungan</h2>
            <p className="text-gray-700 mb-4">Misalkan ada 3 alternatif (A1, A2, A3) dan 3 kriteria (C1, C2, C3) dengan bobot W1 = 0.5, W2 = 0.3, W3 = 0.2. Nilai awal alternatif adalah sebagai berikut:</p>
            <table className="min-w-full bg-white border border-gray-300 mb-4">
            <thead>
                <tr>
                <th className="border px-4 py-2">Alternatif</th>
                <th className="border px-4 py-2">C1</th>
                <th className="border px-4 py-2">C2</th>
                <th className="border px-4 py-2">C3</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td className="border px-4 py-2">A1</td>
                <td className="border px-4 py-2">80</td>
                <td className="border px-4 py-2">70</td>
                <td className="border px-4 py-2">90</td>
                </tr>
                <tr>
                <td className="border px-4 py-2">A2</td>
                <td className="border px-4 py-2">85</td>
                <td className="border px-4 py-2">65</td>
                <td className="border px-4 py-2">85</td>
                </tr>
                <tr>
                <td className="border px-4 py-2">A3</td>
                <td className="border px-4 py-2">75</td>
                <td className="border px-4 py-2">80</td>
                <td className="border px-4 py-2">80</td>
                </tr>
            </tbody>
            </table>
            <p className="text-gray-700 mb-4">Langkah-langkah normalisasi dan perhitungan nilai preferensi akan dilakukan sesuai dengan rumus SAW di atas.</p>
        </Card>
        </div>
    </Layout>
  );
};

export default BantuanPage;