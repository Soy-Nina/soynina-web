exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const deploySecret = process.env.DEPLOY_SECRET;
  const githubToken = process.env.GITHUB_TOKEN;

  if (!githubToken) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'GITHUB_TOKEN no está configurado en Netlify.' }),
    };
  }

  let body;
  try {
    body = JSON.parse(event.body || '{}');
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Cuerpo inválido.' }) };
  }

  if (deploySecret && body.secret !== deploySecret) {
    return { statusCode: 401, body: JSON.stringify({ error: 'Contraseña incorrecta.' }) };
  }

  const response = await fetch('https://api.github.com/repos/Soy-Nina/soynina-web/merges', {
    method: 'POST',
    headers: {
      Authorization: `token ${githubToken}`,
      'Content-Type': 'application/json',
      Accept: 'application/vnd.github.v3+json',
      'User-Agent': 'soynina-deploy-function',
    },
    body: JSON.stringify({
      base: 'main',
      head: 'staging',
      commit_message: 'deploy: publicar contenido de staging a producción',
    }),
  });

  // 201 = merged, 204 = already up to date
  if (response.status === 201) {
    return {
      statusCode: 200,
      body: JSON.stringify({ status: 'deployed', message: '¡Publicado! El sitio se está actualizando.' }),
    };
  }
  if (response.status === 204) {
    return {
      statusCode: 200,
      body: JSON.stringify({ status: 'up_to_date', message: 'El sitio ya está al día. No hay cambios nuevos.' }),
    };
  }

  let errorData;
  try {
    errorData = await response.json();
  } catch {
    errorData = { message: 'Error desconocido.' };
  }

  return {
    statusCode: response.status,
    body: JSON.stringify({ error: errorData.message || 'Error al publicar.' }),
  };
};
