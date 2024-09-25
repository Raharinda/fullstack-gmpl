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
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-blue-100 pt-28 mt-16">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-green-800">Artikel Program Pecinta Alam</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <Image src={article.imageUrl} alt={article.title} width={800} height={600} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-green-700">{article.title}</h2>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <p className="text-sm text-gray-500">Tanggal: {article.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
    </div>
  );
}