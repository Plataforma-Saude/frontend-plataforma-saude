import { FaCalendar, FaClock } from 'react-icons/fa';

// Objeto que mapeia o status para as classes de estilo correspondentes
const statusStyles = {
    confirmed: 'bg-green-100 text-green-800',
    pending: 'bg-yellow-100 text-yellow-800',
    cancelled: 'bg-red-100 text-red-800',
    default: 'bg-gray-100 text-gray-800',
};

// Objeto que mapeia o status para o texto a ser exibido
const statusText = {
    confirmed: 'Confirmada',
    pending: 'Pendente',
    cancelled: 'Cancelada',
};

export default function AppointmentCard({ appointment }) {
    const { patient, doctor, specialty, date, time, status } = appointment;

    return (
        <div className={`flex items-center justify-between p-4 border rounded-lg bg-white ${status === 'cancelled' ? 'opacity-60' : ''}`}>
            <div className="space-y-1">
                <h4 className={`font-semibold ${status === 'cancelled' ? 'line-through' : ''}`}>{patient}</h4>
                <p className="text-sm text-gray-500">
                    {doctor} - {specialty}
                </p>
                <div className="flex items-center text-sm text-gray-500">
                    <FaCalendar className="h-4 w-4 mr-1.5" />
                    {new Date(date).toLocaleDateString('pt-BR')}
                    <FaClock className="h-4 w-4 ml-4 mr-1.5" />
                    {time}
                </div>
            </div>
            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${statusStyles[status] || statusStyles.default}`}>
                {statusText[status] || status}
            </span>
        </div>
    );
}