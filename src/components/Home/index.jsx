import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ErrorImg from '../../assets/error.png';



export function Home() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Função para buscar eventos
    const fetchEvents = async () => {
        try {
            const response = await fetch('http://localhost:3000/evento');
            if (!response.ok) {
                throw new Error('Não foi possível buscar os eventos.');
            }
            const data = await response.json();
            setEvents(data);
            setLoading(false);
        } catch (error) {
            console.error('Erro ao buscar eventos:', error);
            setError('Ocorreu um erro ao buscar os eventos.');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    console.log(events);

    return (
        <Carousel>
            {loading ? (
                <Carousel.Item>
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    <Carousel.Caption>
                        <p>Carregando...</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ) : error ? (
                <Carousel.Item>
                    <img
                        src={ErrorImg}
                        display="block!important"
                        className="mx-auto d-block"
                        width="75%"
                        alt={error}
                    />
                    <Carousel.Caption>
                        <p>{error}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ) : (
                events.map((event) => (
                    <Carousel.Item key={event._id}>
                        <img 
                        src='https://picsum.photos/800/400' 
                        alt={`Imagem do evento ${event.nome}`} 
                        display="block!important"
                        className="mx-auto d-block"
                        width="75%"/>
                        <Carousel.Caption>
                            <h3>{event.nome}</h3>
                            <p>{event.descricao}</p>
                            <p>{event.data}</p>
                            <p>{event.hora}</p>
                            <p>{event.local}</p>
                            <a href={`/eventos/${event.id}`} className='btn btn-primary'>Ver mais</a>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))
            )}
        </Carousel>
    );
}
