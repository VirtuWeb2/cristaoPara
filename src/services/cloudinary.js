export async function uploadToCloudinary(file) {
  const formData = new FormData();

  formData.append("file", file);
  formData.append(
    "upload_preset",
    import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
  );

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${
      import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
    }/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  if (!response.ok) {
    throw new Error("Erro ao enviar imagem para o Cloudinary");
  }

  const data = await response.json();

  return {
    url: data.secure_url,
    public_id: data.public_id,
    width: data.width,
    height: data.height,
  };
}
