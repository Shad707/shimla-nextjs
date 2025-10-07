// "use client";
// import { motion } from "framer-motion";

// const features = [
//   {
//     number: "01",
//     title: "Sécurité et conformité aux normes",
//     desc: "Nous garantissons des solutions fiables respectant toutes les normes de sécurité.",
//   },
//   {
//     number: "02",
//     title: "Équipe expérimentée et matériel fiable",
//     desc: "Notre équipe hautement qualifiée travaille avec un équipement de pointe.",
//   },
//   {
//     number: "03",
//     title: "Interventions rapides à Lubumbashi et régions voisines",
//     desc: "Un service réactif qui répond rapidement à vos besoins sur le terrain.",
//   },
// ];

// export default function WhyShimla() {
//   return (
//     <section className="bg-white py-20">
//       <div className="container grid md:grid-cols-2 gap-12 items-center">
//         {/* Left side: image */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="rounded-2xl overflow-hidden shadow-lg h-full"
//         >
//           <img
//             src="/images/project1.jpg"
//             alt="Equipe SHIMLA en action"
//             className="w-full h-full object-cover"
//           />
//         </motion.div>

//         {/* Right side: content */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//             Pourquoi choisir <span className="text-shimlaBlue">SHIMLA ?</span>
//           </h2>
//           <div className="w-20 h-1 bg-shimlaBlue mt-3 mb-6 rounded"></div>

//           <p className="text-gray-600">
//             Parce que nous plaçons la sécurité, la fiabilité et la performance
//             au cœur de chaque projet.
//           </p>

//           <div className="mt-10 space-y-6">
//             {features.map((feature, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: idx * 0.2 }}
//                 viewport={{ once: true }}
//                 className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition"
//               >
//                 <div className="text-2xl font-bold text-shimlaBlue">
//                   {feature.number}
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-lg text-gray-800">
//                     {feature.title}
//                   </h3>
//                   <p className="text-gray-600">{feature.desc}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/images/project4.jpg",
  "/images/project2.jpg",
  "/images/project3.jpg",
];

export default function WhyShimla() {
  const [index, setIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-20">
      <div className="container grid md:grid-cols-2 gap-12 items-stretch">
        {/* Left side: fluid image carousel */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-lg flex">
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={images[index]}
              alt={`SHIMLA project ${index + 1}`}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            />
          </AnimatePresence>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>

        {/* Right side: content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Pourquoi choisir <span className="text-shimlaBlue">SHIMLA ?</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Parce que nous plaçons la sécurité, la fiabilité et la performance
            au cœur de chaque projet.
          </p>

          <ul className="mt-8 space-y-6">
            <li className="flex items-start gap-4">
              <div className="w-3 h-3 bg-shimlaBlue rounded-full mt-2"></div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800">
                  Sécurité et conformité
                </h3>
                <p className="text-gray-600">
                  Toutes nos réalisations respectent les normes internationales
                  les plus strictes.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-3 h-3 bg-shimlaBlue rounded-full mt-2"></div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800">
                  Équipe expérimentée
                </h3>
                <p className="text-gray-600">
                  Nos ingénieurs et techniciens apportent des années
                  d’expérience et du matériel fiable.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-3 h-3 bg-shimlaBlue rounded-full mt-2"></div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800">
                  Interventions rapides
                </h3>
                <p className="text-gray-600">
                  Un service réactif à Lubumbashi et dans les régions
                  avoisinantes.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
