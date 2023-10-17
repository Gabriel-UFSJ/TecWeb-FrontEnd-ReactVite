import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTestimonials = async () => {
    try {
      const response = await fetch('http://localhost:3000/depoimentos');
      if (!response.ok) {
        throw new Error('Não foi possível buscar os depoimentos.');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };

  // Função para buscar os testimonials e definir o estado
  const fetchTestimonialsData = async () => {
    try {
      const data = await fetchTestimonials();
      setTestimonials(data);
      setLoading(false);
    } catch (error) {
      console.error('Erro ao buscar testimonials:', error);
      setError('Ocorreu um erro ao buscar os testimonials.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonialsData();
  }, []);

  return (
    <div>
      <h2 className="text-center">Testimonials</h2>
      {loading ? (
        <p>Carregando...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        testimonials.map((testimonial) => (
          <Card key={testimonial.id} style={{ width: '18rem' }}>
            {/* Substitua 'src' pelo campo que contém a URL da imagem do testimonial */}
            <Card.Img variant="top" src={testimonial.imageSrc} />
            <Card.Body>
              <Card.Text>{testimonial.description}</Card.Text>
              <Card.Text>{testimonial.name}</Card.Text>
            </Card.Body>
          </Card>
        ))
      )}
    </div>
  );
}
