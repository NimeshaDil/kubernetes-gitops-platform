const form = document.getElementById('feedbackForm');
const list = document.getElementById('feedbackList');

async function loadFeedback() {
  const res = await fetch('http://localhost:3000/feedback');
  const data = await res.json();
  list.innerHTML = '';
  data.forEach(f => {
    const li = document.createElement('li');
    li.textContent = `${f.name}: ${f.message}`;
    list.appendChild(li);
  });
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;
  await fetch('http://localhost:3000/feedback', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, message })
  });
  form.reset();
  loadFeedback();
});

loadFeedback();
