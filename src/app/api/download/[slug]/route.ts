const apkSources: Record<string, { url: string; filename: string }> = {
  farmora: {
    url: "https://github.com/Magatijoel9620/farmora-downloads/releases/latest/download/farmora.apk",
    filename: "farmora.apk",
  },
  "invoice-easy": {
    url: "https://github.com/Magatijoel9620/invoiceeasy-downloads/releases/latest/download/invoice-easy.apk",
    filename: "invoice-easy.apk",
  },
  "landlord-ledger": {
    url: "https://github.com/Magatijoel9620/landlord-ledger-downloads/releases/latest/download/landlord-ledger.apk",
    filename: "landlord-ledger.apk",
  },
};

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const source = apkSources[slug];

  if (!source) {
    return new Response("App not found.", { status: 404 });
  }

  const upstream = await fetch(source.url, { cache: "no-store" });
  if (!upstream.ok || !upstream.body) {
    return new Response("The app download is temporarily unavailable.", {
      status: 502,
    });
  }

  return new Response(upstream.body, {
    headers: {
      "Cache-Control": "private, no-store",
      "Content-Disposition": `attachment; filename="${source.filename}"`,
      "Content-Type": "application/vnd.android.package-archive",
    },
  });
}
