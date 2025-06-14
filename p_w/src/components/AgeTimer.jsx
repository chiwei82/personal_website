import { useEffect, useState } from 'react';

function getTimeDifference(birthDate) {
  const now = new Date();
  const diffMs = now.getTime() - birthDate.getTime();

  const totalSeconds = Math.floor(diffMs / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const totalDays = Math.floor(totalHours / 24);
  const years = Math.floor(totalDays / 365.25);
  const days = totalDays - Math.floor(years * 365.25);
  const hours = totalHours % 24;
  const minutes = totalMinutes % 60;
  const seconds = totalSeconds % 60;

  return { years, days, hours, minutes, seconds };
}

export default function AgeTimer() {
  const [age, setAge] = useState(getTimeDifference(new Date('2000-08-02T00:00:00')));

  useEffect(() => {
    const timer = setInterval(() => {
      setAge(getTimeDifference(new Date('2000-08-02T00:00:00')));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-xs md:text-sm font-mono">
      {'>>>'} Time since birth:
      <br />
      <span className="inline-block whitespace-nowrap">
      {'>>> '}
        <span className="pl-0">{`${age.years} Years,`}</span>
        <span className="pl-1">{`${age.days} Days`}</span>
        <br />
        {'>>> '}
        <span className="pl-0">{`${age.hours} Hours,`}</span>
        <span className="pl-1">{`${age.minutes} Minutes,`}</span>
        <span className="pl-1">{`${age.seconds} Seconds`}</span>
      </span>
    </div>
  );
}
