import { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const events = [
  {
    id: 1,
    title: 'Annual Day Celebration',
    date: '2025-01-15',
    time: '10:00 AM',
    location: 'School Auditorium',
    description: 'Join us for a spectacular celebration of talent and achievements.',
    category: 'Cultural',
  },
  {
    id: 2,
    title: 'Science Exhibition',
    date: '2025-02-10',
    time: '9:00 AM',
    location: 'Science Block',
    description: 'Witness innovative projects and experiments by our young scientists.',
    category: 'Academic',
  },
  {
    id: 3,
    title: 'Sports Day',
    date: '2025-02-25',
    time: '8:00 AM',
    location: 'Sports Ground',
    description: 'A day full of athletic competitions and team spirit.',
    category: 'Sports',
  },
  {
    id: 4,
    title: 'Parent-Teacher Meeting',
    date: '2025-03-05',
    time: '2:00 PM',
    location: 'Respective Classrooms',
    description: 'Discuss your child\'s progress with our dedicated faculty.',
    category: 'Meeting',
  },
];

const calculateTimeLeft = (eventDate: string) => {
  const difference = +new Date(eventDate) - +new Date();
  
  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    isPast: false,
  };
};

const CountdownTimer = ({ eventDate }: { eventDate: string }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(eventDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(eventDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  if (timeLeft.isPast) {
    return <span className="text-gold text-sm font-medium">Event Completed</span>;
  }

  return (
    <div className="flex gap-2">
      {[
        { value: timeLeft.days, label: 'd' },
        { value: timeLeft.hours, label: 'h' },
        { value: timeLeft.minutes, label: 'm' },
        { value: timeLeft.seconds, label: 's' },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-primary text-primary-foreground text-center px-2 py-1 rounded-lg min-w-[40px]"
        >
          <span className="text-sm font-bold">{item.value}</span>
          <span className="text-xs">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export const EventsSection = () => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Cultural: 'bg-gold text-primary',
      Academic: 'bg-primary text-primary-foreground',
      Sports: 'bg-green-500 text-white',
      Meeting: 'bg-blue-500 text-white',
    };
    return colors[category] || 'bg-muted text-foreground';
  };

  return (
    <section id="events" className="section-padding bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-gold font-semibold text-sm uppercase tracking-wider mb-4">
            Upcoming Events
          </span>
          <h2 className="heading-primary mb-4">
            School <span className="text-gold">Calendar</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay updated with our upcoming events and activities.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="card-hover bg-card rounded-2xl overflow-hidden border border-border group"
            >
              <div className="p-6">
                {/* Category Badge */}
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${getCategoryColor(
                    event.category
                  )}`}
                >
                  {event.category}
                </span>

                {/* Title */}
                <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-4">{event.description}</p>

                {/* Event Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4 text-gold" />
                    <span className="text-sm">{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4 text-gold" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-gold" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>

                {/* Countdown & Action */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <CountdownTimer eventDate={event.date} />
                  <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
