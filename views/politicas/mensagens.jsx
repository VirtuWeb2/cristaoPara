import React, { useEffect, useState } from "react";
import { db } from "../admin/dashboard/upload/firebase"; // ajuste conforme seu projeto
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import "./Mensagens.css"; // importando o CSS

const Mensagens = () => {
  const [mensagens, setMensagens] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMensagens = async () => {
      try {
        const q = query(collection(db, "contatos"), orderBy("createdAt", "desc"));
        const snapshot = await getDocs(q);
        const lista = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMensagens(lista);
      } catch (error) {
        console.error("Erro ao buscar mensagens:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMensagens();
  }, []);

  if (loading) return <p className="mensagens-loading">Carregando mensagens...</p>;

  return (
    <div className="mensagens-container">
      <h2>Mensagens Recebidas</h2>
      {mensagens.length === 0 ? (
        <p>Nenhuma mensagem encontrada.</p>
      ) : (
        <ul className="mensagens-list">
          {mensagens.map((msg) => (
            <li key={msg.id} className="mensagem-item">
              <p><strong>Nome:</strong> {msg.nome}</p>
              <p><strong>E-mail:</strong> {msg.email}</p>
              <p><strong>Mensagem:</strong> {msg.mensagem}</p>
              <p className="mensagem-data">
                {msg.createdAt?.toDate().toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Mensagens;
