'use client'

import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";



const customIcon = new L.Icon({
    iconUrl: '/images/logos/marcadorMapa.png', // Caminho da sua imagem na pasta public
    className: 'rounded-xl',
    iconSize: [18, 24], // Tamanho do ícone
    iconAnchor: [10, 24], // Ponto de ancoragem (centro da base do ícone)
    popupAnchor: [0, -32], // Ponto de ancoragem do popup relativo ao ícone
});

export default function MapaLocalizaçãoSasso()
{
    return <MapContainer center={[-22.906516362979925, -43.111293683134946]} zoom={13} scrollWheelZoom={false}
        className="w-full h-32">
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-22.906516362979925, -43.111293683134946]} icon={customIcon}>
            <Popup className="w-32 h-auto">
                Sasso Centro de Dança
            </Popup>
        </Marker>
    </MapContainer>
}