import { useNavigate } from "react-router-dom";

export default function RegisterSelectRole() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-6">
      <h1 className="text-xl font-bold text-primary-dark mb-6">Como você deseja se registrar?</h1>

      <div className="flex gap-4">
        <button
          onClick={() => navigate("/register-doctor")}
          className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition"
        >
          Sou Médico
        </button>

        <button
          onClick={() => navigate("/register-patient")}
          className="px-6 py-3 bg-secondary text-primary rounded-lg hover:bg-secondary/90 transition"
        >
          Sou Paciente
        </button>
      </div>
    </div>
  );
}
