import Person2Icon from "@mui/icons-material/Person2";
import styles from "./DoctorCard.module.css";
import { FaStar } from "react-icons/fa";
import { useState, useEffect } from "react";

function DoctorCard({ doctor }) {
  //Doctor é um objeto que eu passei por props (está no app.jsx)

  const [isFavorite, setIsFavorite] = useState(false);

  //Função para pegar os favoritos e usar no toggle e ver se está no local storage
  const getFavorites = () => {
    //pega todos os valores do local storage, da key doctorFavorites
    const favorites = localStorage.getItem("doctorFavorites");
  /*Como o local storage salva tudo como uma string gigante, preciso converter para um array de objetos, o que faz essa conversão é o JSON.parse
  Verifico se encontrou algo. Se econtrou, retorna o que achar. Se não, um array vazio.*/
    return favorites ? JSON.parse(favorites) : [];
  };

  // Atualiza o estado do favorito ao montar o componente
  useEffect(() => {
    const favorites = getFavorites(); //buscar os favoritos no local storage
    const isFavorite = favorites.some((fav) => fav.id === doctor.id)
    setIsFavorite(isFavorite);
  }, [doctor.id]);

  // Adiciona ou remove dos favoritos
  const toggleFavorite = () => {
    let favorites = getFavorites();

    if (favorites.some((fav) => fav.id === doctor.id)) {
      // Remove dos favoritos
      favorites = favorites.filter((fav) => fav.id !== doctor.id);
      setIsFavorite(false);
    } else {
      // Adiciona aos favoritos
      favorites.push(doctor);
      setIsFavorite(true);
    }

    localStorage.setItem("doctorFavorites", JSON.stringify(favorites));
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.star}>
          <button
            onClick={toggleFavorite}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <FaStar color={isFavorite ? "gold" : "gray"} />
          </button>
        </span>
      </div>

      <div className={styles.avatar}>
        {doctor.photo ? (
          <img src={doctor.photo} alt={doctor.name} />
        ) : (
          <Person2Icon style={{ fontSize: 90 }} />
        )}
      </div>

      <div className={styles.info}>
        <h2>{doctor.name}</h2>
        <p className={styles.specialty}>{doctor.specialty}</p>
        <p className={styles.crm}>CRM: {doctor.crm}</p>
      </div>
    </div>
  );
}

export default DoctorCard;
