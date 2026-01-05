import React, { useEffect, useState } from 'react';
import './WeatherBoxSimple.css';

const WeatherForecast = () => {
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const API_KEY = '4b2eba9183624b3fb0a164611251308'; 
  const city = 'Belém';
  const days = 3;
  const generateDates = () => {
    const hoje = new Date();
    return Array.from({ length: days }, (_, i) => {
      const d = new Date(hoje);
      d.setDate(hoje.getDate() + i);
      // Ajusta para meio-dia pra evitar problemas de fuso
      d.setHours(12, 0, 0, 0);
      return d;
    });
  };

  const dates = generateDates();

  useEffect(() => {
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=${days}&lang=pt`)
      .then(res => res.json())
      .then(data => {
        setForecast(data.forecast.forecastday);
        setLoading(false);
      })
      .catch(err => {
        console.error('Erro ao buscar previsão:', err);
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Carregando previsão...</p>;
  if (error) return <p>Erro ao carregar previsão do tempo.</p>;

  return (
    <div className='clima'>
      {forecast.map((dia, index) => {
        const label = index === 0 ? 'Hoje' : index === 1 ? 'Amanhã' : dates[index].toLocaleDateString('pt-BR', { weekday: 'long' });
        const dataFormatada = dates[index].toLocaleDateString('pt-BR', { day: 'numeric', month: 'long' });

        return (
          <div className='day' key={dia.date} >
            <strong>{label} - {dataFormatada}</strong>
            <img className='imgclima' src={`https:${dia.day.condition.icon}`} alt={dia.day.condition.text} />
            <div className='condition'>{dia.day.condition.text}</div>
            <div className='temp'>🌡️ Máx: {dia.day.maxtemp_c}°C | Mín: {dia.day.mintemp_c}°C</div>
          </div>
        );
      })}
    </div>
  );
};

export default WeatherForecast;

