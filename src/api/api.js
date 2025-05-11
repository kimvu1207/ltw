const API_BASE_URL = "http://localhost:8081/api";  

export async function getUserList() {
  const response = await fetch(`${API_BASE_URL}/user`);
  return response.json();
}

export async function getUserById(userId) {
  const response = await fetch(`${API_BASE_URL}/user/${userId}`);
  return response.json();
}

export async function getPhotosByUser(userId) {
  const response = await fetch(`${API_BASE_URL}/photo/photosOfUser/${userId}`);
  return response.json();
}
