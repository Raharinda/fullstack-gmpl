'use client';

import { Suspense } from 'react';
import Image from 'next/image';
import ImageSlider from '../components/slider';
import { useSearchParams } from 'next/navigation';


function HomeContent() {
  const searchParams = useSearchParams();

  // useEffect logic moved here
  if (typeof window !== 'undefined') {
    const scrollTo = searchParams.get('scrollTo');
    if (scrollTo === 'prologue') {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
        setTimeout(() => {
          const prologueSection = document.getElementById('prologue');
          if (prologueSection) {
            prologueSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }, 0);
    }
  }

  return (
    <main>
      {/* Hero Section */}
      <section id="about" className="mt-40">
        <section className="sm:mt-16 px-4 mt-16">
          <div className="container mx-auto text-center">
            <Image
              src="/icon.svg"
              alt="An SVG of an eye"
              width={150}
              height={150}
              className="my-10 mx-auto"
            />

            <h1 className="text-3xl font-bold uppercase">Gemapala</h1>
            <p className="max-w-xl m-4 mx-auto">
              Gemapala merupakan singkatan dari Gema Muda Ganesha Pecinta Alam
              yang didirikan pada tahun 1981 oleh AKBP Tri Widianto.
            </p>
            <button className="mt-6 px-8 py-3 rounded-full border border-black mx-auto transition hover:text-white hover:bg-black">
              <a href="#prologue" className="text-md">Selengkapnya</a>
            </button>
          </div>
        </section>
      </section>

      {/* Image Slider */}
      <ImageSlider />

      {/* Paragraph Section */}
      <section id="prologue">
        <div className="mx-12">
          <h1 className="font-bold sm:mb-12 mb-12 pt-24 text-3xl sm:text-5xl">Tentang Kami</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mb-32 text-sm sm:text-xm text-justify">
            <div className="flex flex-col justify-between">
              <p className="mb-12">
                Gemapala merupakan salah satu Organisasi siswa tingkat SMA yang berpusat di SMAN 1 Purworejo yang berdiri sejak 12 Desember 1981.
              </p>
              <p>
                Selain kegiatan petualangan, Gemapala juga sering kali terlibat dalam kegiatan bakti sosial dan kampanye lingkungan.
              </p>
            </div>

            <div className="flex flex-col justify-between">
              <p className="mb-12">
                Dalam perjalanannya, Gemapala telah berperan aktif dalam berbagai kegiatan alam dan kemanusiaan, baik di tingkat lokal, nasional, maupun internasional.
              </p>
              <p>
                Kami bangga menjadi bagian dari sejarah panjang SMAN 1 Purworejo dan terus berupaya memberikan kontribusi nyata bagi masyarakat.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div>Loading..</div>}>
      <HomeContent />
    </Suspense>
  );
}