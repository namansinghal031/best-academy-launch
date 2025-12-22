import { Play } from 'lucide-react';

const videos = [
  {
    id: '1',
    title: 'Campus Tour 2024',
    description: 'Take a virtual walk through our beautiful campus',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    embedId: 'dQw4w9WgXcQ',
    type: 'tour',
  },
  {
    id: '2',
    title: 'Annual Day Highlights',
    description: 'Best moments from Annual Day celebrations',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    embedId: 'dQw4w9WgXcQ',
    type: 'reel',
  },
  {
    id: '3',
    title: 'Sports Championship',
    description: 'Our students winning at state level',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    embedId: 'dQw4w9WgXcQ',
    type: 'reel',
  },
  {
    id: '4',
    title: 'Science Exhibition',
    description: 'Innovative projects by our young scientists',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    embedId: 'dQw4w9WgXcQ',
    type: 'reel',
  },
];

export const VideoSection = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-gold font-semibold text-sm uppercase tracking-wider mb-4">
            Reel Corner
          </span>
          <h2 className="heading-primary mb-4">
            Life at <span className="text-gold">BEST ACADEMY</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Watch our school activities, campus tour, and student performances.
          </p>
        </div>

        {/* Featured Video */}
        <div className="mb-10">
          <div className="relative aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src={`https://www.youtube.com/embed/${videos[0].embedId}`}
              title={videos[0].title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
          <div className="text-center mt-4">
            <h3 className="font-display text-xl font-semibold text-foreground">
              {videos[0].title}
            </h3>
            <p className="text-muted-foreground">{videos[0].description}</p>
          </div>
        </div>

        {/* Video Reels */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.slice(1).map((video) => (
            <div
              key={video.id}
              className="group card-hover bg-card rounded-2xl overflow-hidden border border-border"
            >
              <div className="relative aspect-video">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center animate-pulse-glow">
                    <Play className="w-8 h-8 text-primary ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  {video.title}
                </h3>
                <p className="text-muted-foreground text-sm">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
