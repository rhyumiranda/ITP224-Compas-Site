
export async function POST(request: Request) {

  const {email, password} = await request.json();

  const response = fetch("http://localhost/api/index.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
}