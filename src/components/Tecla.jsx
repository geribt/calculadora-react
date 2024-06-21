import React from 'react';
function Tecla({funcionaEnviar}) { 
    const tecladoStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        width:'100%',
    };

    const botonStyle = (color) => ({
        color: 'white',
        backgroundColor: color,
        border: '1px solid black',
        fontSize: '24px',
        cursor: 'pointer',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        width: '100%',
    });

    const botones = [
        { label: '7', color: '#505050' }, { label: '8', color: '#505050' }, { label: '9', color: '#505050' }, { label: '/', color: '#ff9500' },
        { label: '4', color: '#505050' }, { label: '5', color: '#505050' }, { label: '6', color: '#505050' }, { label: '*', color: '#ff9500' },
        { label: '1', color: '#505050' }, { label: '2', color: '#505050' }, { label: '3', color: '#505050' }, { label: '-', color: '#ff9500' },
        { label: '0', color: '#505050' }, { label: 'C', color: '#d4d4d2' }, { label: '=', color: '#ff9500' }, { label: '+', color: '#ff9500' },
    ];

    return (
        <div style={tecladoStyle} className='col-6'>
            {botones.map(boton => (
                <button
                    key={boton.label}
                    style={botonStyle(boton.color)}
                    onClick={() => funcionaEnviar(boton.label)}>
                    {boton.label}
                </button>
            ))}
        </div>
    );
}

export default Tecla;