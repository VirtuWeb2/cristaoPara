import { useState } from "react";
import { uploadToCloudinary } from "../../services/cloudinary";

export default function ImageUpload({ onUpload }) {
  const [loading, setLoading] = useState(false);

  async function handleChange(e) {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);

    try {
      const image = await uploadToCloudinary(file);
      onUpload(image); // devolve pro dashboard
    } catch (err) {
      alert("Erro ao enviar imagem");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleChange} />

      {loading && <p>Enviando imagem...</p>}
    </div>
  );
}
