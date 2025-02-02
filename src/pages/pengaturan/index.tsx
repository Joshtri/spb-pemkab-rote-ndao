import React, { useState, useEffect } from 'react';
import { Button, Label, TextInput, Checkbox, Card, Select } from 'flowbite-react';
import Layout from '../../components/layout';

export const PengaturanPage: React.FC = () => {
  const [theme, setTheme] = useState('light'); // Default theme is light

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value);
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Pengaturan</h1>

        <Card className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Informasi Akun</h2>
          <form className="space-y-4">
            <div>
              <Label htmlFor="name" value="Nama" />
              <TextInput id="name" type="text" placeholder="Nama Lengkap" required />
            </div>
            <div>
              <Label htmlFor="email" value="Email" />
              <TextInput id="email" type="email" placeholder="Email" required />
            </div>
            <div>
              <Label htmlFor="password" value="Kata Sandi" />
              <TextInput id="password" type="password" placeholder="Kata Sandi Baru" />
            </div>
            <Button type="submit">Simpan Perubahan</Button>
          </form>
        </Card>

        <Card className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Preferensi Tampilan</h2>
          <form className="space-y-4">
            <div>
              <Label htmlFor="theme" value="Tema" />
              <Select id="theme" value={theme} onChange={handleThemeChange} required>
                <option value="light">Terang</option>
                <option value="dark">Gelap</option>
              </Select>
            </div>
            <div>
              <Label htmlFor="language" value="Bahasa" />
              <Select id="language" required>
                <option value="id">Bahasa Indonesia</option>
                <option value="en">English</option>
              </Select>
            </div>
            <Button type="submit">Simpan Perubahan</Button>
          </form>
        </Card>

        <Card className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Notifikasi</h2>
          <form className="space-y-4">
            <div className="flex items-center gap-2">
              <Checkbox id="email-notifications" />
              <Label htmlFor="email-notifications" value="Notifikasi Email" />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="sms-notifications" />
              <Label htmlFor="sms-notifications" value="Notifikasi SMS" />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="push-notifications" />
              <Label htmlFor="push-notifications" value="Notifikasi Push" />
            </div>
            <Button type="submit">Simpan Perubahan</Button>
          </form>
        </Card>

        <Card className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Keamanan</h2>
          <form className="space-y-4">
            <div className="flex items-center gap-2">
              <Checkbox id="2fa" />
              <Label htmlFor="2fa" value="Autentikasi Dua Faktor (2FA)" />
            </div>
            <Button type="submit">Simpan Perubahan</Button>
          </form>
        </Card>
      </div>
    </Layout>
  );
};