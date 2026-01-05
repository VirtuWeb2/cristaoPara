// import React, { useState } from "react";
// // import {db} from "../../firebase"; // Importa o Firestore
// import { db } from "../admin/dashboard/upload/firebase";
// import { collection, addDoc, Timestamp } from "firebase/firestore";
// import './contato.css';


// const Contato = () => {



//   const [formData, setFormData] = useState({
//     nome: "",
//     email: "",
//     mensagem: ""
//   });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       await addDoc(collection(db, "contatos"), {
//         ...formData,
//         createdAt: Timestamp.now()
//       });
//       alert("Mensagem enviada com sucesso!");
//       setFormData({ nome: "", email: "", mensagem: "" });
//     } catch (error) {
//       console.error("Erro ao enviar:", error);
//       alert("Erro ao enviar, tente novamente.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form className="form-contato" onSubmit={handleSubmit}>
//       <h2>Entre em Contato</h2>

//       <label>Nome:</label>
//       <input
//         type="text"
//         name="nome"
//         value={formData.nome}
//         onChange={handleChange}
//         required
//       />

//       <label>E-mail:</label>
//       <input
//         type="email"
//         name="email"
//         value={formData.email}
//         onChange={handleChange}
//         required
//       />

//       <label>Mensagem:</label>
//       <textarea
//         name="mensagem"
//         value={formData.mensagem}
//         onChange={handleChange}
//         rows="4"
//         required
//       />

//       <button type="submit" disabled={loading}>
//         {loading ? "Enviando..." : "Enviar"}
//       </button>
//     </form>
//   );
// };

// export default Contato;
import React, { useState } from "react";
import "./contato.css"

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Endereço de e-mail para onde enviar
    const destinatario = "contato@enoticiapara.com.br";
    

    // Assunto do e-mail
    const subject = `Mensagem de ${formData.nome}`;

    // Corpo do e-mail
    const body = `Nome: ${formData.nome}%0D%0AEmail: ${formData.email}%0D%0A%0D%0A${formData.mensagem}`;

    // Monta o link mailto
    const mailtoLink = `mailto:${destinatario}?subject=${encodeURIComponent(subject)}&body=${body}`;

    // Abre o cliente de e-mail
    window.location.href = mailtoLink;
  };

  return (
    <form className="form-contato" onSubmit={handleSubmit}>
      <h2>Entre em Contato</h2>

      <label>Nome:</label>
      <input
        type="text"
        name="nome"
        value={formData.nome}
        onChange={handleChange}
        required
      />

      <label>E-mail:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label>Mensagem:</label>
      <textarea
        name="mensagem"
        value={formData.mensagem}
        onChange={handleChange}
        rows="4"
        required
      />

      <button type="submit">Enviar</button>
    </form>
  );
};

export default Contato;
