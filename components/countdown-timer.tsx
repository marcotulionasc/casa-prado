"use client";

import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: string;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: { [key: string]: number } = {};

    if (difference > 0) {
      timeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<{ [key: string]: number }>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timerComponents = Object.keys(timeLeft).map((interval) => (
    <div key={interval} className="flex flex-col items-center mx-2">
      <div className="text-3xl font-bold">{timeLeft[interval]}</div>
      <div className="uppercase text-sm">{interval}</div>
    </div>
  ));

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold text-white mb-4">
        Tempo restante para garantir sua unidade!
      </h3>
      <div className="flex justify-center">
        {timerComponents.length > 0 ? timerComponents : <span>Oferta Encerrada</span>}
      </div>
    </div>
  );
}
