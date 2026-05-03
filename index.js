export default {
  async fetch(request) {
    const url = new URL(request.url);

    const host = url.hostname;
    const parts = host.split('.');
    const subdomain = parts[0];

    // domínio principal (admin)
    if (host === "my88.net.br" || host === "www.my88.net.br") {
      return fetch(request);
    }

    // redireciona para Firebase com tenant
    const target = new URL("https://barbermodelo.web.app");

    target.pathname = url.pathname;
    target.searchParams.set("tenant", subdomain);

    return Response.redirect(target.toString(), 302);
  }
};
