const EMPTY_FORMS_FILENAME = 'forms.v1.json';
const EMPTY_FORMS_BODY = JSON.stringify({
  schemaVersion: '1.0.0',
  hosts: {},
});
const EMPTY_MANIFEST_BODY = JSON.stringify({
  maps: {
    forms: {
      v1: {
        filename: EMPTY_FORMS_FILENAME,
        cid: 'sha256:nodewarden-empty-fill-assist-v1',
      },
    },
  },
});

function fillAssistJsonResponse(body: string): Response {
  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}

export function handleFillAssistManifest(): Response {
  return fillAssistJsonResponse(EMPTY_MANIFEST_BODY);
}

export function handleFillAssistForms(filename: string): Response {
  if (String(filename || '').trim() !== EMPTY_FORMS_FILENAME) {
    return new Response('Not found', { status: 404 });
  }
  return fillAssistJsonResponse(EMPTY_FORMS_BODY);
}
