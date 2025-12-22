import {
  Monitor,
  Users,
  Lightbulb,
  Globe,
  Trophy,
  Bus,
  Shield,
  BookOpen,
} from 'lucide-react';

const facilities = [
  {
    icon: Monitor,
    title: 'Smart Classrooms',
    description: 'State-of-the-art digital classrooms with interactive whiteboards and modern learning tools.',
    color: 'bg-primary',
  },
  {
    icon: Users,
    title: 'Experienced Teachers',
    description: 'Highly qualified and dedicated faculty committed to nurturing each student\'s potential.',
    color: 'bg-gold',
  },
  {
    icon: Lightbulb,
    title: 'Skill Development',
    description: 'Comprehensive programs for developing critical thinking, creativity, and life skills.',
    color: 'bg-primary',
  },
  {
    icon: Globe,
    title: 'Online Portal for Parents',
    description: 'Stay connected with real-time updates on attendance, grades, and school activities.',
    color: 'bg-gold',
  },
  {
    icon: Trophy,
    title: 'Sports & Co-Curricular',
    description: 'World-class sports facilities and diverse extracurricular activities for holistic growth.',
    color: 'bg-primary',
  },
  {
    icon: Bus,
    title: 'Transportation Facility',
    description: 'GPS-enabled buses covering all major routes with trained drivers and attendants.',
    color: 'bg-gold',
  },
  {
    icon: Shield,
    title: 'Safe & Secure Campus',
    description: '24/7 CCTV surveillance, trained security personnel, and controlled access points.',
    color: 'bg-primary',
  },
  {
    icon: BookOpen,
    title: 'Library & Labs',
    description: 'Well-stocked library and modern science, computer, and language laboratories.',
    color: 'bg-gold',
  },
];

export const FacilitiesSection = () => {
  return (
    <section id="facilities" className="section-padding bg-muted/50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-gold font-semibold text-sm uppercase tracking-wider mb-4">
            Our Facilities
          </span>
          <h2 className="heading-primary mb-4">
            World-Class <span className="text-gold">Infrastructure</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide an enriching environment with modern facilities designed to 
            support comprehensive learning and development.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="group card-hover bg-card rounded-2xl p-6 border border-border text-center"
            >
              <div
                className={`w-16 h-16 ${
                  facility.color === 'bg-gold' ? 'bg-gold-gradient' : 'bg-primary'
                } rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <facility.icon
                  className={`w-8 h-8 ${
                    facility.color === 'bg-gold' ? 'text-primary' : 'text-primary-foreground'
                  }`}
                />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {facility.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {facility.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
