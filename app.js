document.addEventListener('DOMContentLoaded', () => {
    const projectId = 'code_626132';

    // Exemplo: Carregar cursos em destaque na index.html
    if (document.getElementById('destaques')) {
        fetch(`http://localhost:8000/functions/${projectId}/list_courses`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ category: 'Destaque' })
        })
        .then(response => response.json())
        .then(data => {
            const destaques = document.getElementById('destaques');
            data.courses.forEach(curso => {
                const cursoDiv = document.createElement('div');
                cursoDiv.className = 'border p-4 rounded';
                cursoDiv.innerHTML = `
                    <h3 class="text-xl font-bold">${curso.title}</h3>
                    <p>${curso.description}</p>
                    <a href="detalhes_curso.html?course_id=${curso.id}" class="text-blue-500">Ver Detalhes</a>
                `;
                destaques.appendChild(cursoDiv);
            });
        });
    }

    // Outras interações com o backend podem ser adicionadas aqui
});