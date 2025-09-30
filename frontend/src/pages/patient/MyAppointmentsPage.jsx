import React, { useEffect, useMemo, useState } from "react";
import AppointmentCard from "../../components/Patient/AppointmentCard";

export default function MyAppointmentsPage() {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [query, setQuery] = useState("");
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);

  //lista de médicos (sem integração ao Banco de Dados)
  useEffect(() => {
    setAppointments([
      {
      id: 1,
      date: "2025-10-05",
      time: "10:00",
      name: "Dr. João Silva",
      specialty: "Cardiologia",
      crm: "123456-SP",
      status: "agendada",
    },
    {
      id: 2,
      date: "2025-09-10",
      time: "14:00",
      name: "Dra. Maria Oliveira",
      specialty: "Dermatologia",
      crm: "654321-RJ",
      status: "realizada",
    },
    {
      id: 3,
      date: "2025-10-10",
      time: "16:00",
      name: "Dr. Pedro Souza",
      specialty: "Ortopedia",
      crm: "987654-MG",
      status: "cancelada",
    },
  ]);
}, []);

  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  // formato da data em padrão BR
  function formatDateBR(isoDate) {
  const d = new Date(isoDate + "T00:00:00");
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}

//filtros de pesquisa
  const filtered = useMemo(() => {
    const list = appointments.filter((a) => {
      const apptDate = new Date(a.date + "T00:00:00");
      const isUpcoming = apptDate >= today && a.status !== "cancelada";
      const isHistory = apptDate < today || ["realizada", "cancelada"].includes(a.status);
      return activeTab === "upcoming" ? isUpcoming : isHistory;
    });

    if (!query.trim()) return list;

    const q = query.trim().toLowerCase();

    return list.filter((a) => {
      const nameMatch = a.name.toLowerCase().includes(q);
      const dateBR = formatDateBR(a.date);
      const dateMatch = dateBR.includes(q); // compara com dd/mm/yyyy
      return nameMatch || dateMatch;
    });
  }, [appointments, activeTab, query, today]);

  // cancelar consulta
  async function handleCancel(id) {
    if (!confirm("Tem certeza que deseja cancelar esta consulta?")) return;
    try {
      const res = await fetch(`/api/appointments/${id}/cancel`, { method: "PATCH" });
      if (!res.ok) throw new Error("Falha ao cancelar consulta");
      setAppointments((prev) => prev.map((a) => (a.id === id ? { ...a, status: "cancelada" } : a)));
    } catch (error) {
      console.error("Erro ao cancelar:", error);
      alert("Não foi possível cancelar a consulta.");
    }
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <header className="mb-6">
        <h1 className="text-2xl font-semibold">Minhas Consultas</h1>
        <p className="text-sm text-slate-500 mt-1">Veja suas próximas consultas e o histórico.</p>
      </header>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm p-4">
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2">
            <TabButton label="Próximas Consultas" active={activeTab === "upcoming"} onClick={() => setActiveTab("upcoming")} />
            <TabButton label="Histórico" active={activeTab === "history"} onClick={() => setActiveTab("history")} />
          </div>
          <input
            type="search"
            placeholder="Buscar por médico ou data"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border border-slate-300 rounded-md px-3 py-2 text-sm w-[300px] focus:ring-2 focus:ring-primary"
          />
        </div>

        {loading ? (
          <p className="text-center py-12">Carregando consultas...</p>
        ) : filtered.length === 0 ? (
          <EmptyState activeTab={activeTab} />
        ) : (
          <ul className="space-y-3">
            {filtered.map((appt) => (
              <li key={appt.id}>
                <AppointmentCard appointment={appt} onCancel={() => handleCancel(appt.id)} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function TabButton({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition ${active ? "bg-primary text-white" : "hover:bg-slate-100"}`}
    >
      {label}
    </button>
  );
}

function EmptyState({ activeTab }) {
  return (
    <div className="py-12 text-center text-slate-600">
      {activeTab === "upcoming" ? "Você não tem próximas consultas." : "Nenhum histórico disponível."}
    </div>
  );
}
