"use client";

import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: string;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<{ [key: string]: number }>({});
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const calculateTimeLeft = () => {
      try {
        const target = new Date(targetDate);
        
        // Validar se a data é válida
        if (isNaN(target.getTime())) {
          console.error("Data de destino inválida:", targetDate);
          return {};
        }
        
        const difference = target.getTime() - new Date().getTime();
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
      } catch (error) {
        console.error("Erro ao calcular tempo restante:", error);
        return {};
      }
    };
    
    // Calcular inicial
    setTimeLeft(calculateTimeLeft());
    
    // Configurar intervalo
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Limpar intervalo quando componente for desmontado
    return () => clearInterval(timer);
  }, [targetDate]);

  // Formatando a data para exibição
  const formatDisplayDate = (dateString: string): string => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });
    } catch (error) {
      return '30/05/2025'; // Data padrão caso haja erro de formatação
    }
  };

  if (!isMounted) {
    return (
      <div className="mt-8">
        <h3 className="text-2xl font-bold text-white mb-4">
          Tempo restante para garantir sua unidade!
        </h3>
        <div className="flex justify-center">
          <span>Carregando...</span>
        </div>
      </div>
    );
  }

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
      <p className="text-sm mb-4">Oferta válida até {formatDisplayDate(targetDate)}</p>
      <div className="flex justify-center">
        {timerComponents.length > 0 ? timerComponents : <span>Oferta Encerrada</span>}
      </div>
    </div>
  );
}
