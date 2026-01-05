// import React, { useState } from "react";
// import { db } from "../admin/dashboard/upload/firebase";
// import { collection, addDoc, Timestamp } from "firebase/firestore";
// import "./Anuncie.css";

// const FormAnuncio = () => {
//   const [formData, setFormData] = useState({
//     nome: "",
//     email: "",
//     telefone: "",
//     empresa: "",
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
//       await addDoc(collection(db, "anuncios"), {
//         ...formData,
//         createdAt: Timestamp.now()
//       });
//       alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
//       setFormData({ nome: "", email: "", telefone: "", empresa: "", mensagem: "" });
//     } catch (error) {
//       console.error("Erro ao enviar:", error);
//       alert("Erro ao enviar, tente novamente.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form className="form-anuncio" onSubmit={handleSubmit}>
//       <h2>Quero Anunciar no Site</h2>

//       <label>Nome:</label>
//       <input type="text" name="nome" value={formData.nome} onChange={handleChange} required />

//       <label>E-mail:</label>
//       <input type="email" name="email" value={formData.email} onChange={handleChange} required />

//       <label>Telefone:</label>
//       <input type="text" name="telefone" value={formData.telefone} onChange={handleChange} required />

//       <label>Empresa:</label>
//       <input type="text" name="empresa" value={formData.empresa} onChange={handleChange} required />

//       <label>Mensagem:</label>
//       <textarea name="mensagem" value={formData.mensagem} onChange={handleChange} rows="4" required />

//       <button type="submit" disabled={loading}>
//         {loading ? "Enviando..." : "Enviar"}
//       </button>
//     </form>
//   );
// };

// export default FormAnuncio;

import React, { useState } from "react";
import "./Anuncie.css";

const FormAnuncio = () => {
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    email: "",
    telefone: "",
    mensagem: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // E-mail que vai receber a solicitação
    const destinatario = "contato@enoticiapara.com.br";

    // Assunto do e-mail
    const subject = `Proposta de Anúncio - ${formData.empresa || formData.nome}`;

    // Corpo do e-mail
    const body = 
`Nome: ${formData.nome}
Empresa: ${formData.empresa}
Email: ${formData.email}
Telefone: ${formData.telefone}

Mensagem:
${formData.mensagem}`;

    // Monta o link mailto
    const mailtoLink = `mailto:${destinatario}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Abre o cliente de e-mail
    window.location.href = mailtoLink;
  };

  return (
    <form className="form-anuncie" onSubmit={handleSubmit}>
      <h2>Anuncie Conosco</h2>
      <p className="descricao">
        Preencha o formulário abaixo para entrar em contato com nossa equipe de publicidade.
      </p>

      <label>Nome:</label>
      <input
        type="text"
        name="nome"
        value={formData.nome}
        onChange={handleChange}
        required
      />

      <label>Empresa:</label>
      <input
        type="text"
        name="empresa"
        value={formData.empresa}
        onChange={handleChange}
      />

      <label>E-mail:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label>Telefone:</label>
      <input
        type="tel"
        name="telefone"
        value={formData.telefone}
        onChange={handleChange}
        placeholder="(00) 00000-0000"
      />

      <label>Mensagem:</label>
      <textarea
        name="mensagem"
        value={formData.mensagem}
        onChange={handleChange}
        rows="5"
        required
      />

      <button type="submit">Enviar Solicitação</button>
    </form>
  );
};

export default FormAnuncio;
