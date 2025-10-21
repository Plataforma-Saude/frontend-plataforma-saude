import React, { useEffect, useState } from "react";
import api from "../../../api/axiosConfig";
import DoctorCardAdmin from "../../DoctorCardAdmin/DoctorCardAdmin";
import CloseIcon from "../../CloseIcon/CloseIcon";
import SearchableSelect from "../../SearchableSelect/SearchableSelect";

const especialidades = [
  "Cardiologia",
  "Dermatologia",
  "Endocrinologia",
  "Ginecologia",
  "Neurologia",
  "Oftalmologia",
  "Ortopedia",
  "Pediatria",
  "Psiquiatria",
  "Urologia",
  "Clinico Geral",
];

export default function MedicosTabContent() {
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [medicos, setMedicos] = useState([]);
  const [editingMedico, setEditingMedico] = useState(null);
  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    telefone: "",
    crm: "",
    especialidade: "",
  });
  const [editFormData, setEditFormData] = useState({
    id: "",
    nome: "",
    sobrenome: "",
    email: "",
    cpf: "",
    dataNascimento: "",
    dataCadastro: "",
    telefone: "",
    celular: "",
    cep: "",
    rua: "",
    cidade: "",
    estado: "",
    senha: "",
    especialidade: "",
    crm: "",
    foto: "",
  });

  
  useEffect(() => {
    fetchMedicos();
  }, []);

  const fetchMedicos = async () => {
    try {
      const response = await api.get("/medicos");
      setMedicos(response.data);
    } catch (error) {
      console.error("Erro ao buscar médicos:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const openEditModal = (medico) => {
    setEditingMedico(medico);
    setEditFormData({
      id: medico.id,
      nome: medico.nome || "",
      sobrenome: medico.sobrenome || "",
      email: medico.email || "",
      cpf: medico.cpf || "",
      dataNascimento: medico.dataNascimento || "",
      dataCadastro: medico.dataCadastro || "",
      telefone: medico.telefone || "",
      celular: medico.celular || "",
      cep: medico.cep || "",
      rua: medico.rua || "",
      cidade: medico.cidade || "",
      estado: medico.estado || "",
      senha: "",
      especialidade: medico.especialidade || "",
      crm: medico.crm || "",
      foto: medico.foto || "",
    });
    setShowEditModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await api.post("/medicos", formData);
      console.log("Médico criado com sucesso:", response.data);

      await fetchMedicos();

      setFormData({
        nome: "",
        sobrenome: "",
        email: "",
        telefone: "",
        crm: "",
        especialidade: "",
      });
      setShowModal(false);

      alert("Médico adicionado com sucesso!");
    } catch (error) {
      console.error("Erro ao criar médico:", error);
      alert("Erro ao adicionar médico. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await api.put(
        `/medicos/${editFormData.id}`,
        editFormData
      );
      console.log("Médico atualizado com sucesso:", response.data);

      await fetchMedicos();

      setShowEditModal(false);
      setEditingMedico(null);

      alert("Médico atualizado com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar médico:", error);
      alert("Erro ao atualizar médico. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  // função para remover médico
  const handleRemoveMedico = async (id) => {
    if (!window.confirm("Tem certeza que deseja excluir este médico?")) return;

    try {
      await api.delete(`/medicos/${id}`);
      setMedicos((prev) => prev.filter((m) => m.id !== id));
      alert("Médico removido com sucesso!");
    } catch (error) {
      console.error("Erro ao remover médico:", error);
      alert("Erro ao excluir médico. Tente novamente.");
    }
  };

  return (
    <div className="space-y-6">
      {/* Cabeçalho com botão */}
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">Gerenciar Médicos</h3>
        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary-dark transition-colors cursor-pointer"
        >
          Adicionar Novo Médico
        </button>
      </div>

      {/* Modal de Criação */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 bg-opacity-5 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md mx-auto">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Adicionar Novo Médico</h2>
                <CloseIcon onClick={() => setShowModal(false)} />
              </div>
              <p className="text-gray-600 mt-1">
                Preencha as informações do profissional
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome *
                </label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  placeholder="Nome "
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sobrenome *
                </label>
                <input
                  type="text"
                  name="sobrenome"
                  value={formData.sobrenome}
                  onChange={handleInputChange}
                  placeholder="Sobrenome"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <SearchableSelect
                  label="Especialidade *"
                  name="especialidade"
                  value={formData.especialidade}
                  onChange={handleInputChange}
                  options={especialidades}
                  placeholder="Selecione a especialidade"
                  searchPlaceholder="Buscar especialidade..."
                  required
                  labelClassName="block text-sm font-medium text-gray-700 mb-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="doutor@clinica.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone *
                </label>
                <input
                  type="tel"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleInputChange}
                  placeholder="(11) 99999-9999"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  CRM *
                </label>
                <input
                  type="text"
                  name="crm"
                  value={formData.crm}
                  onChange={handleInputChange}
                  placeholder="123456"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                >
                  {loading ? "Adicionando..." : "Adicionar Médico"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal de Edição */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black/40 bg-opacity-5 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl mx-auto max-h-[90vh] overflow-y-auto">
            <div className="px-6 py-4 border-b border-gray-200 sticky top-0 bg-white">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Editar Médico</h2>
                <CloseIcon onClick={() => setShowEditModal(false)} />
              </div>
            </div>

            <form onSubmit={handleEditSubmit} className="p-6 space-y-6">
              {/* Dados Básicos */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                  Dados Básicos
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ID
                    </label>
                    <input
                      type="text"
                      value={editFormData.id}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100"
                      disabled
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      name="nome"
                      value={editFormData.nome}
                      onChange={handleEditInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sobrenome
                    </label>
                    <input
                      type="text"
                      name="sobrenome"
                      value={editFormData.sobrenome}
                      onChange={handleEditInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={editFormData.email}
                      onChange={handleEditInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      CPF
                    </label>
                    <input
                      type="text"
                      name="cpf"
                      value={editFormData.cpf}
                      onChange={handleEditInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Data de Nascimento
                    </label>
                    <input
                      type="date"
                      name="dataNascimento"
                      value={editFormData.dataNascimento}
                      onChange={handleEditInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Data de Cadastro
                    </label>
                    <input
                      type="text"
                      value={editFormData.dataCadastro}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100"
                      disabled
                    />
                  </div>
                </div>
              </div>

              {/* Contato */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                  Contato
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      name="telefone"
                      value={editFormData.telefone}
                      onChange={handleEditInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Celular
                    </label>
                    <input
                      type="tel"
                      name="celular"
                      value={editFormData.celular}
                      onChange={handleEditInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Endereço */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                  Endereço
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      CEP
                    </label>
                    <input
                      type="text"
                      name="cep"
                      value={editFormData.cep}
                      onChange={handleEditInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Rua
                    </label>
                    <input
                      type="text"
                      name="rua"
                      value={editFormData.rua}
                      onChange={handleEditInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Estado
                    </label>
                    <input
                      type="text"
                      name="estado"
                      value={editFormData.estado}
                      onChange={handleEditInputChange}
                      placeholder="Estado"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Cidade
                    </label>
                    <input
                      type="text"
                      name="cidade"
                      value={editFormData.cidade}
                      onChange={handleEditInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Dados Profissionais */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                  Dados Profissionais
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Senha
                    </label>
                    <input
                      type="password"
                      name="senha"
                      value={editFormData.senha}
                      onChange={handleEditInputChange}
                      placeholder="Deixe em branco para manter a senha atual"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <SearchableSelect
                      label="Especialidade *"
                      name="especialidade"
                      value={editFormData.especialidade}
                      onChange={handleEditInputChange}
                      options={especialidades}
                      placeholder="Selecione a especialidade"
                      searchPlaceholder="Buscar especialidade..."
                      required
                      labelClassName="block text-sm font-medium text-gray-700 mb-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      CRM *
                    </label>
                    <input
                      type="text"
                      name="crm"
                      value={editFormData.crm}
                      onChange={handleEditInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Foto
                    </label>
                    <input
                      type="text"
                      name="foto"
                      value={editFormData.foto}
                      onChange={handleEditInputChange}
                      placeholder="URL da foto"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Botões */}
              <div className="flex justify-end gap-4 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => setShowEditModal(false)}
                  className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                >
                  {loading ? "Salvando..." : "Salvar Alterações"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Lista de Médicos */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="px-6 py-4 border-b border-gray-200">
          <h4 className="text-lg font-semibold">Lista de Médicos</h4>
        </div>
        <div className="p-6">
          {medicos.length === 0 ? (
            <p className="text-gray-500 text-center py-8">
              Nenhum médico cadastrado ainda.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {medicos.map((medico) => (
                <DoctorCardAdmin
                  medico={medico}
                  openEditModal={openEditModal}
                  handleRemoveMedico={handleRemoveMedico}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
