import React from 'react';
import pulsar from '../App';
function Tecla(pulsar) {
    const tecladoStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '10px',
    };

    const botonStyle = (color) => ({
        color: 'white',
        backgroundColor: color,
        border: 'none',
        borderRadius: '50%',
        padding: '20px',
        fontSize: '24px',
        cursor: 'pointer',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
    });

    const botones = [
        { label: '7', color: '#505050' }, { label: '8', color: '#505050' }, { label: '9', color: '#505050' }, { label: '/', color: '#ff9500' },
        { label: '4', color: '#505050' }, { label: '5', color: '#505050' }, { label: '6', color: '#505050' }, { label: '*', color: '#ff9500' },
        { label: '1', color: '#505050' }, { label: '2', color: '#505050' }, { label: '3', color: '#505050' }, { label: '-', color: '#ff9500' },
        { label: '0', color: '#505050' }, { label: 'C', color: '#d4d4d2' }, { label: '=', color: '#ff9500' }, { label: '+', color: '#ff9500' },
    ];

    return (
        <div style={tecladoStyle}>
            {botones.map(boton => (
                <button
                    key={boton.label}
                    style={botonStyle(boton.color)}
                    onClick={() => pulsar(boton.label)}
                >
                    {boton.label}
                </button>
            ))}
        </div>
    );
}

export default Tecla;