import { Award, Target, Eye } from 'lucide-react';
import principalImage from '@/assets/principal.jpg';

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-gold font-semibold text-sm uppercase tracking-wider mb-4">
            About Us
          </span>
          <h2 className="heading-primary mb-4">
            Shaping Tomorrow's <span className="text-gold">Leaders</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            For over three decades, BEST ACADEMY has been a beacon of educational excellence, 
            nurturing students to become confident, compassionate, and capable individuals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Vision & Mission */}
          <div className="space-y-8">
            <div className="card-hover bg-card rounded-2xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    Our Vision
                  </h3>
                  <p className="text-muted-foreground">
                    To be a premier institution that empowers students with knowledge, 
                    skills, and values to excel in a rapidly changing world.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-hover bg-card rounded-2xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground">
                    To provide holistic education that nurtures intellectual curiosity, 
                    character development, and a lifelong love for learning.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-hover bg-card rounded-2xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    Our Achievements
                  </h3>
                  <p className="text-muted-foreground">
                    Recognized as a Center of Excellence with numerous national awards 
                    for academic performance and innovative teaching methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Principal Card */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full bg-gold/20 rounded-3xl" />
            <div className="relative bg-card rounded-3xl overflow-hidden shadow-xl border border-border">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={principalImage}
                  alt="Dr. Rajesh Kumar - Principal of BEST ACADEMY"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                  Dr. Rajesh Kumar
                </h3>
                <p className="text-gold font-medium mb-4">Principal</p>
                <blockquote className="text-muted-foreground italic border-l-4 border-gold pl-4 text-left">
                  "Education is not just about acquiring knowledge; it's about developing 
                  character, nurturing creativity, and building a foundation for lifelong success. 
                  At BEST ACADEMY, we are committed to bringing out the best in every child."
                </blockquote>
                <div className="mt-4 flex justify-center gap-2">
                  <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">
                    PhD in Education
                  </span>
                  <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">
                    25+ Years Experience
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
