import React from 'react';
import TitleHero from './components/TitleHero';
import SlideSection from './components/SlideSection';
import BarChart from './components/BarChart';
import FlowChart from './components/FlowChart';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Title */}
      <TitleHero />

      {/* Slide 1 – Latar Belakang */}
      <SlideSection
        id="latar-belakang"
        title="Latar Belakang"
        bullets={[
          'Perusahaan modern tidak hanya fokus pada keuntungan, tetapi juga memiliki tanggung jawab sosial terhadap masyarakat.',
          'CSR menjadi bentuk nyata kontribusi sosial perusahaan.',
          'PR berperan penting dalam mengomunikasikan kegiatan CSR untuk membangun citra positif perusahaan.',
          'PT Madubaru (PG–PS Madukismo) merupakan satu-satunya pabrik gula dan spiritus di Yogyakarta yang aktif menjalankan program CSR berbasis kemitraan masyarakat.',
        ]}
        note="Visual: Diagram hubungan PR ↔ CSR ↔ Citra Perusahaan"
      >
        <div className="mt-6">
          <FlowChart
            nodes={[
              { title: 'Public Relations' },
              { title: 'CSR' },
              { title: 'Citra Perusahaan' },
            ]}
          />
        </div>
      </SlideSection>

      {/* Slide 2 – Rumusan Masalah */}
      <SlideSection
        id="rumusan-masalah"
        title="Rumusan Masalah"
        bullets={[
          'Bagaimana strategi Public Relations dalam membangun citra perusahaan melalui program Corporate Social Responsibility (CSR) di PT Madubaru?',
        ]}
      />

      {/* Slide 3 – Tujuan Penelitian */}
      <SlideSection
        id="tujuan-penelitian"
        title="Tujuan Penelitian"
        bullets={[
          'Menganalisis strategi PR yang diterapkan PT Madubaru dalam melaksanakan program CSR untuk membangun citra positif perusahaan.',
        ]}
        note="Fokus: Menilai efektivitas strategi komunikasi dan dampaknya terhadap persepsi masyarakat"
      />

      {/* Slide 4 – Manfaat Penelitian */}
      <SlideSection id="manfaat" title="Manfaat Penelitian">
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
      </SlideSection>

      {/* Slide 5 – Kajian Teori (Ringkas) */}
      <SlideSection
        id="kajian-teori"
        title="Kajian Teori (Ringkas)"
        bullets={[
          'Public Relations: Fungsi manajerial untuk menciptakan pemahaman dan dukungan publik (Ruslan, 2005).',
          'CSR: Komitmen perusahaan terhadap pembangunan ekonomi berkelanjutan dan kesejahteraan sosial (WBCSD, 2002).',
          'Citra Perusahaan: Persepsi publik terhadap identitas dan reputasi organisasi.',
        ]}
        note="Visual: Skema hubungan teori → PR → CSR → Citra"
      >
        <div className="mt-6">
          <FlowChart
            nodes={[
              { title: 'Teori Komunikasi' },
              { title: 'PR' },
              { title: 'CSR' },
              { title: 'Citra' },
            ]}
          />
        </div>
      </SlideSection>

      {/* Slide 6 – Gambaran Objek Penelitian */}
      <SlideSection
        id="objek-penelitian"
        title="Gambaran Objek Penelitian"
        bullets={[
          'Nama: PT Madubaru (PG–PS Madukismo)',
          'Berdiri: 14 Juni 1955 (Prakarsa Sri Sultan HB IX)',
          'Lokasi: Kasihan, Bantul, DIY',
          'Bidang: Industri gula & spiritus',
          'CSR aktif: Program Kemitraan dan Bina Lingkungan (PKBL)',
          'Mitra: Petani tebu lokal',
        ]}
        note="Visual: Foto pabrik + diagram struktur organisasi"
      />

      {/* Slide 7 – Program CSR PT Madubaru */}
      <SlideSection
        id="program-csr"
        title="Program CSR PT Madubaru"
        bullets={[
          'Pemberdayaan masyarakat melalui kemitraan tebu rakyat.',
          'Dukungan pendidikan (beasiswa, renovasi sekolah).',
          'Bantuan infrastruktur sosial dan lingkungan.',
          'Pelatihan keterampilan masyarakat.',
        ]}
        note="Visual: Diagram batang kegiatan CSR per bidang (ekonomi, sosial, lingkungan)"
      >
        <div className="mt-6">
          <BarChart
            title="Bidang Kegiatan CSR (ilustrasi)"
            data={[
              { label: 'Ekonomi', value: 2 },
              { label: 'Sosial', value: 2 },
              { label: 'Lingkungan', value: 1 },
            ]}
          />
        </div>
      </SlideSection>

      {/* Slide 8 – Paradigma & Metode Penelitian */}
      <SlideSection
        id="metode"
        title="Paradigma & Metode Penelitian"
        bullets={[
          'Paradigma: Konstruktivis → memahami makna strategi PR melalui persepsi informan.',
          'Metode: Kualitatif deskriptif.',
          'Teknik Pengumpulan Data: wawancara mendalam (pihak PR & SDM PT Madubaru), observasi, dokumentasi.',
          'Analisis Data: Reduksi → penyajian → penarikan kesimpulan (Miles & Huberman).',
        ]}
        note="Visual: Flowchart alur penelitian"
      >
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
      </SlideSection>

      {/* Slide 9 – Subjek & Objek Penelitian */}
      <SlideSection
        id="subjek-objek"
        title="Subjek & Objek Penelitian"
        bullets={[
          'Subjek: Kepala Bagian SDM & Umum (pelaksana CSR) dan karyawan yang terlibat dalam kegiatan sosial perusahaan.',
          'Objek: Strategi PR dalam membangun citra perusahaan melalui CSR PT Madubaru.',
        ]}
      />

      {/* Slide 10 – Jenis & Sumber Data */}
      <SlideSection
        id="sumber-data"
        title="Jenis & Sumber Data"
        bullets={[
          'Data Primer: Wawancara langsung dengan pihak internal perusahaan.',
          'Data Sekunder: Dokumen perusahaan, laporan CSR, jurnal, dan literatur akademik terkait.',
        ]}
        note="Visual: Diagram perbandingan data primer vs sekunder"
      />

      {/* Slide 11 – Kerangka Konsep Penelitian */}
      <SlideSection
        id="kerangka-konsep"
        title="Kerangka Konsep Penelitian"
        bullets={[
          'Strategi PR → Pelaksanaan CSR → Pembentukan Citra Positif.',
          'Lima indikator impresi manajemen (self-promotion, ingratiation, exemplification, supplication, intimidation) digunakan untuk menganalisis citra perusahaan.',
        ]}
        note="Visual: Model konseptual PR Strategy → CSR Activities → Corporate Image"
      >
        <div className="mt-6">
          <FlowChart
            nodes={[
              { title: 'PR Strategy' },
              { title: 'CSR Activities' },
              { title: 'Corporate Image' },
            ]}
          />
        </div>
      </SlideSection>

      {/* Slide 12 – Penutup */}
      <SlideSection
        id="penutup"
        title="Penutup"
        bullets={[
          'PR menjadi elemen utama dalam keberhasilan CSR PT Madubaru.',
          'Komunikasi yang efektif mampu memperkuat citra positif dan kepercayaan masyarakat.',
          'Diharapkan penelitian ini memberikan kontribusi bagi pengembangan strategi PR dan penerapan CSR berkelanjutan.',
        ]}
        note="Visual: Dokumentasi kegiatan CSR atau infografik ‘PR for Sustainability’"
      />

      {/* Footer */}
      <footer className="mx-auto max-w-5xl px-6 pb-12 text-sm text-gray-500">
        © {new Date().getFullYear()} Seminar Proposal – Hana Hoerunisa
      </footer>
    </div>
  );
}

export default App;
