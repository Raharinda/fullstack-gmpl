'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const images = [
  { src: '/api/placeholder/800/600', alt: 'Kegiatan mendaki gunung', desc: 'Pendakian Gunung Semeru' },
  { src: '/api/placeholder/800/600', alt: 'Camping di hutan', desc: 'Camping Hutan Pinus' },
  { src: '/api/placeholder/800/600', alt: 'Rafting di sungai', desc: 'Rafting Sungai Ayung' },
  { src: '/api/placeholder/800/600', alt: 'Observasi flora dan fauna', desc: 'Pengamatan Burung' },
  { src: '/api/placeholder/800/600', alt: 'Penanaman pohon', desc: 'Reboisasi Hutan Kota' },
  { src: '/api/placeholder/800/600', alt: 'Pembersihan pantai', desc: 'Bersih Pantai Kuta' },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);


  return (
    <div className="container mx-auto px-4 py-8 my-24">
      <h1 className="text-4xl font-bold text-center mb-8">Galeri Kegiatan Gemapala</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-36 mb-16">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={800}
              height={600}
              className="w-full h-64 object-cover"
            />
            {/* Text pada pojok kiri bawah yang akan hilang saat di-hover */}
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white text-xs p-1 m-2 rounded opacity-100 transition-opacity duration-300 group-hover:opacity-0">
              {image.desc}
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-center p-2">{image.alt}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-full"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
          />
        </motion.div>
      )}
    </div>
  );
};

export default Gallery;
