import React from 'react';
import Image from 'next/image';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "Ekspedisi Gunung Semeru",
    excerpt: "Pengalaman mendaki gunung tertinggi di Pulau Jawa bersama tim Pecinta Alam SMA Nusantara.",
    date: "2024-05-15",
    imageUrl: "/api/placeholder/800/600"
  },
  {
    id: 2,
    title: "Konservasi Terumbu Karang",
    excerpt: "Program penanaman terumbu karang di Taman Nasional Bunaken.",
    date: "2024-06-20",
    imageUrl: "/api/placeholder/800/600"
  },
  {
    id: 3,
    title: "Eksplorasi Gua Jomblang",
    excerpt: "Petualangan menjelajahi keindahan bawah tanah di Gua Jomblang, Yogyakarta.",
    date: "2024-07-10",
    imageUrl: "/api/placeholder/800/600"
  }
];


export default function ArtikelProgram() {
  return (
    <div className="min-h-screen pt-28 mt-16">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center ">Artikel Program Pecinta Alam</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <Image src={article.imageUrl} alt={article.title} width={800} height={600} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 ">{article.title}</h2>
                <p className=" mb-4">{article.excerpt}</p>
                <p className="text-sm text-gray-500">Tanggal: {article.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}