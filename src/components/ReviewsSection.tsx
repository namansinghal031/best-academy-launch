import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Parent of Class 10 Student',
    rating: 5,
    review:
      'BEST ACADEMY has been a wonderful experience for my son. The teachers are dedicated and the facilities are world-class. I have seen tremendous growth in his academic performance and personality.',
    avatar: 'PS',
  },
  {
    id: 2,
    name: 'Rahul Verma',
    role: 'Parent of Class 8 Student',
    rating: 5,
    review:
      'The school provides an excellent balance between academics and extracurricular activities. My daughter has developed confidence and leadership skills. Highly recommended!',
    avatar: 'RV',
  },
  {
    id: 3,
    name: 'Ananya Singh',
    role: 'Class 12 Student',
    rating: 5,
    review:
      'Being a student here has been the best decision. The teachers are supportive, and the learning environment is fantastic. The career counseling sessions have helped me choose my path.',
    avatar: 'AS',
  },
  {
    id: 4,
    name: 'Vikram Patel',
    role: 'Parent of Class 6 Student',
    rating: 5,
    review:
      'The online portal for parents is a game-changer. I can track my child\'s progress in real-time. The school\'s focus on holistic development sets it apart from others.',
    avatar: 'VP',
  },
  {
    id: 5,
    name: 'Meera Gupta',
    role: 'Class 11 Student',
    rating: 5,
    review:
      'The smart classrooms and modern labs make learning fun and interactive. I especially love the science exhibitions where we get to showcase our projects.',
    avatar: 'MG',
  },
];

export const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  return (
    <section id="reviews" className="section-padding bg-primary">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-gold font-semibold text-sm uppercase tracking-wider mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            What People <span className="text-gold">Say</span>
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Hear from our students and parents about their experience at BEST ACADEMY.
          </p>
        </div>

        {/* Review Slider */}
        <div className="relative max-w-4xl mx-auto">
          {/* Quote Icon */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-gold-gradient rounded-full flex items-center justify-center">
            <Quote className="w-8 h-8 text-primary" />
          </div>

          {/* Review Card */}
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-gold fill-gold" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-lg md:text-xl text-muted-foreground italic mb-8 leading-relaxed">
                "{reviews[currentIndex].review}"
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 bg-gold-gradient rounded-full flex items-center justify-center text-primary font-bold text-lg">
                  {reviews[currentIndex].avatar}
                </div>
                <div className="text-left">
                  <p className="font-display text-lg font-semibold text-foreground">
                    {reviews[currentIndex].name}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {reviews[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={goToPrevious}
              className="w-12 h-12 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center text-primary-foreground transition-colors"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-gold w-8'
                      : 'bg-primary-foreground/30 hover:bg-primary-foreground/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="w-12 h-12 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center text-primary-foreground transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
