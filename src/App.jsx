import React from 'react';
import TitleHero from './components/TitleHero';
import SlideDeck from './components/SlideDeck';
import BarChart from './components/BarChart';
import FlowChart from './components/FlowChart';

function App() {
  const slides = [
    {
      id: 'latar-belakang',
      title: 'Latar Belakang',
      content: (
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <ul className="list-disc space-y-2 pl-5 text-gray-700">
              <li>Perusahaan modern tidak hanya fokus pada keuntungan, tetapi juga memiliki tanggung jawab sosial terhadap masyarakat.</li>
              <li>CSR menjadi bentuk nyata kontribusi sosial perusahaan.</li>
              <li>PR berperan penting dalam mengomunikasikan kegiatan CSR untuk membangun citra positif perusahaan.</li>
              <li>PT Madubaru (PG–PS Madukismo) merupakan satu-satunya pabrik gula dan spiritus di Yogyakarta yang aktif menjalankan program CSR berbasis kemitraan masyarakat.</li>
            </ul>
            <div className="mt-6">
              <FlowChart nodes={[{ title: 'Public Relations' }, { title: 'CSR' }, { title: 'Citra Perusahaan' }]} />
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1581093588401-16ec8a2b55cb?q=80&w=1600&auto=format&fit=crop"
            alt="Ilustrasi industri modern dan teknologi"
            className="h-64 w-full rounded-xl object-cover md:h-full"
          />
        </div>
      ),
    },
    {
      id: 'rumusan-masalah',
      title: 'Rumusan Masalah',
      content: (
        <div className="grid gap-6 md:grid-cols-5">
          <div className="md:col-span-3">
            <ul className="list-disc space-y-2 pl-5 text-gray-700">
              <li>
                Bagaimana strategi Public Relations dalam membangun citra perusahaan melalui program Corporate Social Responsibility (CSR) di PT Madubaru?
              </li>
            </ul>
          </div>
          <img
            src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?q=80&w=1600&auto=format&fit=crop"
            alt="Tim berdiskusi menyusun strategi komunikasi"
            className="h-64 w-full rounded-xl object-cover md:col-span-2 md:h-full"
          />
        </div>
      ),
    },
    {
      id: 'tujuan',
      title: 'Tujuan Penelitian',
      content: (
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <ul className="list-disc space-y-2 pl-5 text-gray-700">
              <li>Menganalisis strategi PR yang diterapkan PT Madubaru dalam melaksanakan program CSR untuk membangun citra positif perusahaan.</li>
            </ul>
            <p className="mt-4 text-sm text-sky-700">Fokus: Menilai efektivitas strategi komunikasi dan dampaknya terhadap persepsi masyarakat.</p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=1600&auto=format&fit=crop"
            alt="Target dan tujuan penelitian"
            className="h-64 w-full rounded-xl object-cover md:h-full"
          />
        </div>
      ),
    },
    {
      id: 'manfaat',
      title: 'Manfaat Penelitian',
      content: (
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-gray-200 p-5">
            <h3 className="mb-2 text-lg font-semibold">Teoretis</h3>
            <ul className="list-disc space-y-2 pl-5 text-gray-700">
              <li>Menambah literatur tentang hubungan PR dan CSR dalam konteks komunikasi korporasi.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-gray-200 p-5">
            <h3 className="mb-2 text-lg font-semibold">Praktis</h3>
            <ul className="list-disc space-y-2 pl-5 text-gray-700">
              <li>Memberi rekomendasi bagi PT Madubaru untuk meningkatkan efektivitas komunikasi CSR.</li>
              <li>Menjadi referensi bagi perusahaan lain dalam pelaksanaan CSR berkelanjutan.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'kajian-teori',
      title: 'Kajian Teori (Ringkas)',
      content: (
        <div>
          <ul className="list-disc space-y-2 pl-5 text-gray-700">
            <li>Public Relations: Fungsi manajerial untuk menciptakan pemahaman dan dukungan publik (Ruslan, 2005).</li>
            <li>CSR: Komitmen perusahaan terhadap pembangunan ekonomi berkelanjutan dan kesejahteraan sosial (WBCSD, 2002).</li>
            <li>Citra Perusahaan: Persepsi publik terhadap identitas dan reputasi organisasi.</li>
          </ul>
          <div className="mt-6">
            <FlowChart nodes={[{ title: 'Teori Komunikasi' }, { title: 'PR' }, { title: 'CSR' }, { title: 'Citra' }]} />
          </div>
        </div>
      ),
    },
    {
      id: 'objek',
      title: 'Gambaran Objek Penelitian',
      content: (
        <div className="grid gap-6 md:grid-cols-5">
          <div className="md:col-span-3">
            <ul className="list-disc space-y-2 pl-5 text-gray-700">
              <li>Nama: PT Madubaru (PG–PS Madukismo)</li>
              <li>Berdiri: 14 Juni 1955 (Prakarsa Sri Sultan HB IX)</li>
              <li>Lokasi: Kasihan, Bantul, DIY</li>
              <li>Bidang: Industri gula & spiritus</li>
              <li>CSR aktif: Program Kemitraan dan Bina Lingkungan (PKBL)</li>
              <li>Mitra: Petani tebu lokal</li>
            </ul>
          </div>
          <img
            src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop"
            alt="Pabrik dan fasilitas industri"
            className="h-64 w-full rounded-xl object-cover md:col-span-2 md:h-full"
          />
        </div>
      ),
    },
    {
      id: 'program-csr',
      title: 'Program CSR PT Madubaru',
      content: (
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <ul className="list-disc space-y-2 pl-5 text-gray-700">
              <li>Pemberdayaan masyarakat melalui kemitraan tebu rakyat.</li>
              <li>Dukungan pendidikan (beasiswa, renovasi sekolah).</li>
              <li>Bantuan infrastruktur sosial dan lingkungan.</li>
              <li>Pelatihan keterampilan masyarakat.</li>
            </ul>
            <div className="mt-6">
              <BarChart
                title="Bidang Kegiatan CSR (ilustrasi)"
                data={[
                  { label: 'Ekonomi', value: 3 },
                  { label: 'Sosial', value: 4 },
                  { label: 'Lingkungan', value: 2 },
                ]}
              />
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop"
            alt="Kegiatan CSR bersama masyarakat"
            className="h-64 w-full rounded-xl object-cover md:h-full"
          />
        </div>
      ),
    },
    {
      id: 'metode',
      title: 'Paradigma & Metode Penelitian',
      content: (
        <div>
          <ul className="list-disc space-y-2 pl-5 text-gray-700">
            <li>Paradigma: Konstruktivis → memahami makna strategi PR melalui persepsi informan.</li>
            <li>Metode: Kualitatif deskriptif.</li>
            <li>Teknik Pengumpulan Data: wawancara mendalam (pihak PR & SDM PT Madubaru), observasi, dokumentasi.</li>
            <li>Analisis Data: Reduksi → penyajian → penarikan kesimpulan (Miles & Huberman).</li>
          </ul>
          <div className="mt-6">
            <FlowChart
              nodes={[
                { title: 'Paradigma Konstruktivis' },
                { title: 'Metode Kualitatif' },
                { title: 'Pengumpulan Data' },
                { title: 'Analisis (Miles & Huberman)' },
                { title: 'Kesimpulan' },
              ]}
            />
          </div>
        </div>
      ),
    },
    {
      id: 'subjek-objek',
      title: 'Subjek & Objek Penelitian',
      content: (
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <ul className="list-disc space-y-2 pl-5 text-gray-700">
              <li>Subjek: Kepala Bagian SDM & Umum (pelaksana CSR) dan karyawan yang terlibat dalam kegiatan sosial perusahaan.</li>
              <li>Objek: Strategi PR dalam membangun citra perusahaan melalui CSR PT Madubaru.</li>
            </ul>
          </div>
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop"
            alt="Kolaborasi tim dan narasumber"
            className="h-64 w-full rounded-xl object-cover md:h-full"
          />
        </div>
      ),
    },
    {
      id: 'sumber-data',
      title: 'Jenis & Sumber Data',
      content: (
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <ul className="list-disc space-y-2 pl-5 text-gray-700">
              <li>Data Primer: Wawancara langsung dengan pihak internal perusahaan.</li>
              <li>Data Sekunder: Dokumen perusahaan, laporan CSR, jurnal, dan literatur akademik terkait.</li>
            </ul>
          </div>
          <img
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1600&auto=format&fit=crop"
            alt="Dokumentasi dan literatur akademik"
            className="h-64 w-full rounded-xl object-cover md:h-full"
          />
        </div>
      ),
    },
    {
      id: 'kerangka-konsep',
      title: 'Kerangka Konsep Penelitian',
      content: (
        <div>
          <ul className="list-disc space-y-2 pl-5 text-gray-700">
            <li>Strategi PR → Pelaksanaan CSR → Pembentukan Citra Positif.</li>
            <li>Lima indikator impresi manajemen (self-promotion, ingratiation, exemplification, supplication, intimidation) digunakan untuk menganalisis citra perusahaan.</li>
          </ul>
          <div className="mt-6">
            <FlowChart nodes={[{ title: 'PR Strategy' }, { title: 'CSR Activities' }, { title: 'Corporate Image' }]} />
          </div>
        </div>
      ),
    },
    {
      id: 'penutup',
      title: 'Penutup',
      content: (
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <ul className="list-disc space-y-2 pl-5 text-gray-700">
              <li>PR menjadi elemen utama dalam keberhasilan CSR PT Madubaru.</li>
              <li>Komunikasi yang efektif mampu memperkuat citra positif dan kepercayaan masyarakat.</li>
              <li>Diharapkan penelitian ini memberikan kontribusi bagi pengembangan strategi PR dan penerapan CSR berkelanjutan.</li>
            </ul>
          </div>
          <img
            src="https://images.unsplash.com/photo-1515165562835-c3b8c8c7a2c7?q=80&w=1600&auto=format&fit=crop"
            alt="Kegiatan sosial dan keberlanjutan"
            className="h-64 w-full rounded-xl object-cover md:h-full"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <TitleHero />
      <div className="mx-auto max-w-5xl px-4 py-10 md:py-14">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-900 md:text-3xl">Deck Seminar – Interaktif & Informatif</h2>
        <p className="mx-auto mb-8 max-w-2xl text-center text-gray-600">Gunakan tombol kiri/kanan di keyboard atau klik titik di bawah untuk berpindah slide. Semua konten telah disusun berdasarkan naskah yang kamu berikan.</p>
      </div>
      <SlideDeck slides={slides} />
      <footer className="mx-auto max-w-5xl px-6 pb-12 pt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Seminar Proposal – Hana Hoerunisa
      </footer>
    </div>
  );
}

export default App;
