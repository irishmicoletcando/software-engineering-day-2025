'use client';

import SectionHeading from '../common/SectionHeading';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { seminars } from '@/lib/data';
import SeminarCard from './SeminarCard';

const Seminars: React.FC = () => {
  // Group seminars by date
  const seminarsByDate = seminars.reduce((acc, seminar) => {
    if (!acc[seminar.date]) {
      acc[seminar.date] = [];
    }
    acc[seminar.date].push(seminar);
    return acc;
  }, {} as Record<string, typeof seminars>);

  // Get all unique dates
  const dates = Object.keys(seminarsByDate);

  return (
    <section id="schedule" className="bg-darkest-blue py-24 px-8 md:px-14">
      <div className="container mx-auto z-10">
        <SectionHeading
          subtitle="Event Program"
          title="Seminar Schedule"
          description="Three days of inspiring sessions, hands-on workshops, and networking opportunities with industry leaders."
        />
      </div>

      <div className="mb-8 flex flex-col md:flex-row justify-between gap-4">
        <Tabs defaultValue={dates.length > 0 ? dates[0] : undefined} className="w-full">
          <TabsList className="bg-default-gray/20 border border-default-blue/20 overflow-x-auto flex h-10 items-center justify-start rounded-lg w-full">
            {dates.map(date => (
              <TabsTrigger
                key={date}
                value={date}
                className="text-gray-300 data-[state=active]:bg-default-blue data-[state=active]:text-white"
              >
                {date}
              </TabsTrigger>
            ))}
          </TabsList>

          {dates.map(date => (
            <TabsContent key={date} value={date} className="mt-6">
              <div className="space-y-6">
                {seminarsByDate[date].map((seminar, index) => (
                  <SeminarCard
                    key={seminar.id}
                    seminar={seminar}
                    index={index}
                    onViewDetails={(id) => console.log(`View details for seminar ID: ${id}`)}
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Seminars;