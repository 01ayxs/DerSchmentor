import type { ContactPayload } from "@/lib/contact";

const subject = "Neue Kontaktanfrage über DerSchmentor";

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };

    return entities[character] ?? character;
  });
}

export function createContactEmail(payload: ContactPayload) {
  const name = escapeHtml(payload.name.trim());
  const email = escapeHtml(payload.email.trim());
  const company = payload.company ? escapeHtml(payload.company.trim()) : "";
  const message = escapeHtml(payload.message.trim()).replace(/\r?\n/g, "<br />");

  const companyRow = company
    ? `<tr>
        <td style="padding:0 0 24px;">
          <p style="margin:0 0 7px;color:#86868b;font-size:12px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;">Unternehmen</p>
          <p style="margin:0;color:#1d1d1f;font-size:17px;line-height:1.5;">${company}</p>
        </td>
      </tr>`
    : "";

  const html = `<!doctype html>
<html lang="de">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${subject}</title>
  </head>
  <body style="margin:0;background:#f5f5f7;color:#1d1d1f;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f5f5f7;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:620px;background:#ffffff;border:1px solid #e5e5e7;border-radius:24px;overflow:hidden;">
            <tr>
              <td style="padding:42px 42px 28px;border-bottom:1px solid #ececee;">
                <p style="margin:0 0 14px;color:#86868b;font-size:12px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;">DerSchmentor</p>
                <h1 style="margin:0;color:#1d1d1f;font-size:32px;line-height:1.1;letter-spacing:-.035em;">Neue Kontaktanfrage</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:34px 42px 42px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                  <tr>
                    <td style="padding:0 0 24px;">
                      <p style="margin:0 0 7px;color:#86868b;font-size:12px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;">Name</p>
                      <p style="margin:0;color:#1d1d1f;font-size:17px;line-height:1.5;">${name}</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:0 0 24px;">
                      <p style="margin:0 0 7px;color:#86868b;font-size:12px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;">E-Mail</p>
                      <p style="margin:0;font-size:17px;line-height:1.5;"><a href="mailto:${email}" style="color:#1d1d1f;text-decoration:underline;">${email}</a></p>
                    </td>
                  </tr>
                  ${companyRow}
                  <tr>
                    <td style="padding-top:6px;">
                      <p style="margin:0 0 12px;color:#86868b;font-size:12px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;">Nachricht</p>
                      <div style="padding:22px 24px;background:#f5f5f7;border-radius:16px;color:#1d1d1f;font-size:16px;line-height:1.65;">${message}</div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  const text = [
    subject,
    "",
    `Name: ${payload.name.trim()}`,
    `E-Mail: ${payload.email.trim()}`,
    ...(payload.company ? [`Unternehmen: ${payload.company.trim()}`] : []),
    "",
    "Nachricht:",
    payload.message.trim(),
  ].join("\n");

  return { subject, html, text };
}
