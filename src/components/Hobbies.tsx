import { ImageWithFallback } from './figma/ImageWithFallback';
import { BookOpen, Code, Dumbbell } from 'lucide-react';

export function Hobbies() {

  const hobbies = [
    {
      title: 'Sports',
      description: 'I enjoy playing volleyball and badminton to stay active and competitive. I also love hitting the gym to maintain fitness and strength.',
      icon: Dumbbell,
      image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=600&q=80',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Reading',
      description: 'I am a fan of Sidney Sheldon, especially The Doomsday Conspiracy. I also love the Hunger Games series and Harry Potter series.',
      icon: BookOpen,
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Tech & Learning',
      description: 'I practice UI/UX design and prototyping, build custom dashboards for monitoring and analytics, and run homelab experiments to test new technologies.',
      icon: Code,
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="hobbies" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-16 text-4xl md:text-5xl font-extrabold text-center text-slate-900 dark:text-white tracking-tight">
          Hobbies & Interests
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hobbies.map((hobby, index) => {
            const Icon = hobby.icon;

            return (
              <div
                key={index}
                className="group relative bg-white dark:bg-slate-900/50 rounded-xl border-2 border-slate-200 dark:border-slate-800 overflow-hidden hover:border-white dark:hover:border-white transition-all duration-300 hover:shadow-2xl cursor-pointer h-80"
              >
                {/* Background Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <ImageWithFallback
                    src={hobby.image}
                    alt={hobby.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                </div>

                {/* Icon */}
                <div className={`absolute top-6 left-6 p-4 bg-gradient-to-br ${hobby.color} rounded-2xl shadow-2xl z-10 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Title - Fades out on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="text-3xl font-black text-white drop-shadow-2xl">
                    {hobby.title}
                  </h3>
                </div>

                {/* Colorful Description Overlay - Slides up on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${hobby.color} translate-y-full group-hover:translate-y-0 transition-transform duration-600 ease-out flex items-center justify-center p-6`}>
                  <div className="text-center space-y-4">
                    <div className="inline-block p-4 bg-white/20 rounded-2xl backdrop-blur-md mb-2">
                      <Icon className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-3xl font-black text-white drop-shadow-2xl tracking-tight leading-tight">
                      {hobby.title}
                    </h3>
                    <div className="w-24 h-1.5 bg-white mx-auto rounded-full shadow-lg"></div>
                    <p className="text-white text-base font-semibold leading-relaxed drop-shadow-xl max-w-sm mx-auto px-2">
                      {hobby.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>



        <div className="mt-8 text-center text-slate-500 dark:text-slate-400">
          <p>© 2025 Subha. Built with React & Tailwind CSS.</p>
        </div>
      </div>

    </section>
  );
}