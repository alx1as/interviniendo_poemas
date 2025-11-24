const API = "http://127.0.0.1:5000/api";

export async function apiGet(path) {
  const res = await fetch(`${API}${path}`, {
    credentials: "include"
  });
  return res.json();
}

export async function apiPost(path, body) {
  const res = await fetch(`${API}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(body)
  });
  return res.json();
}

export async function apiDelete(path) {
  const res = await fetch(`${API}${path}`, {
    method: "DELETE",
    credentials: "include"
  });
  return res.json();
}
