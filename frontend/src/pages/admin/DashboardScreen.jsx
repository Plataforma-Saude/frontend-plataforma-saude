import React, { useState } from 'react';
import { FaHeadphones } from 'react-icons/fa';
import DashboardTabContent from '../../components/Admin/DashboardTabContent/DashboardTabContent';
import MedicosTabContent from '../../components/Admin/MedicosTabContent/MedicosTabContent';
import AgendamentosTabContent from '../../components/Admin/AgendamentosTabContent/AgendamentosTabContent';
import PersonalizacaoTabContent from '../../components/Admin/PersonalizacaoTabContent/PersonalizacaoTabContent';

const tabs = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'medicos', label: 'Médicos' },
    { id: 'agendamentos', label: 'Agendamentos' },
    { id: 'personalizacao', label: 'Personalização' },
];

export default function DashboardScreen() {
    const [abaAtiva, setAbaAtiva] = useState('dashboard');

    return (
        <div className="w-full gap-8 mt-6 bg-white p-6 rounded-lg shadow-md">
            <div className="mb-8 flex justify-between items-center">
                <div>
                    <h2 className="text-2xl mb-2">Painel Administrativo</h2>
                    <p className="text-muted-foreground">Gerencie sua clínica e profissionais</p>
                </div>
                <button
                    className="flex items-center gap-2 border"
                >
                    <FaHeadphones className="h-4 w-4" />
                    <span>Suporte</span>
                </button>
            </div>

            <div>
                <div className="flex border-b w-fit">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setAbaAtiva(tab.id)}
                            className={`py-2 px-4 text-center font-medium ${abaAtiva === tab.id ? 'border-b-2 border-primary text-primary' : 'text-gray-500'}`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className="mt-6 p-4">
                    {abaAtiva === 'dashboard' && <DashboardTabContent />}
                    {abaAtiva === 'medicos' && <MedicosTabContent />}
                    {abaAtiva === 'agendamentos' && <AgendamentosTabContent />}
                    {abaAtiva === 'personalizacao' && <PersonalizacaoTabContent />}
                </div>
            </div>
        </div>
    );
}