exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const githubToken = process.env.GITHUB_TOKEN;
  if (!githubToken) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'GITHUB_TOKEN no está configurado en Netlify.' }),
    };
  }

  // Validate the caller is an authenticated CMS user with push access
  const userToken = (event.headers['authorization'] || '').replace(/^Bearer\s+/i, '');
  if (!userToken) {
    return { statusCode: 401, body: JSON.stringify({ error: 'No autenticado. Inicia sesión en el CMS primero.' }) };
  }

  const repoCheck = await fetch('https://api.github.com/repos/Soy-Nina/soynina-web', {
    headers: {
      Authorization: `token ${userToken}`,
      Accept: 'application/vnd.github.v3+json',
      'User-Agent': 'soynina-deploy-function',
    },
  });

  if (!repoCheck.ok) {
    return { statusCode: 403, body: JSON.stringify({ error: 'Tu cuenta de GitHub no tiene acceso al repositorio.' }) };
  }

  const repoData = await repoCheck.json();
  if (!repoData.permissions?.push) {
    return { statusCode: 403, body: JSON.stringify({ error: 'Tu cuenta no tiene permisos de escritura en el repositorio.' }) };
  }

  // Perform the merge using the server-side token
  const merge = await fetch('https://api.github.com/repos/Soy-Nina/soynina-web/merges', {
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

  if (merge.status === 201) {
    return {
      statusCode: 200,
      body: JSON.stringify({ status: 'deployed', message: '¡Publicado! El sitio se está actualizando en Netlify.' }),
    };
  }
  if (merge.status === 204) {
    return {
      statusCode: 200,
      body: JSON.stringify({ status: 'up_to_date', message: 'El sitio ya está al día. No hay cambios nuevos.' }),
    };
  }

  let errorData;
  try { errorData = await merge.json(); } catch { errorData = {}; }

  return {
    statusCode: merge.status,
    body: JSON.stringify({ error: errorData.message || 'Error al publicar. Intenta de nuevo.' }),
  };
};
