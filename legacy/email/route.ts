/* import { NextResponse } from "next/server";

interface responseProps {
  name: string;
  email: string;
  message: string;
  alunoDeEscola: boolean;
  sexo: string;
  valorTotal: number;
  valorAlterado: number;
  mes: string;
}

export async function POST(req: Request, res: any) {
  const {
    name,
    alunoDeEscola,
    sexo,
    valorTotal, 
    valorAlterado,
    mes,
    email,
  }: responseProps = await req.json();

  const PASSWORD = process.env.password;
  const EMAIL = process.env.email;
  const CLIENTID = process.env.idClientOAuth;
  const CLIENTPASSWORD = process.env.clientKeyOAuth;
  const REFRESHTOKEN = process.env.refreshTokenOAuth;

  let nodemailer = require("nodemailer");
  const { google } = require("googleapis");
  const OAuth2 = google.auth.OAuth2;

  const createTransporter = async () => {
    const oauth2Client = new OAuth2(
      CLIENTID,
      CLIENTPASSWORD,
      "https://developers.google.com/oauthplayground"
    );

    oauth2Client.setCredentials({
      refresh_token: REFRESHTOKEN,
    });

    console.log(oauth2Client);

    try {
      const accessToken: any = await new Promise((resolve, reject) => {
        oauth2Client.getAccessToken((err: Error | null, token: any) => {
          if (err) {
            reject("Failed to create access token :" + err);
          }
          console.log("accessToken: ", token);
          resolve(token);
        });
      });

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          type: "OAuth2",
          user: EMAIL,
          accessToken,
          clientId: CLIENTID,
          clientSecret: CLIENTPASSWORD,
          refreshToken: REFRESHTOKEN,
        },
        tls: {
          rejectUnauthorized: false,
        },
      });
      return transporter;
    } catch (error) {
      console.log("Create Transport Error: ", error);
    }
  };

  const sendEmail = async (emailOptions: any) => {
    try {
      let emailTransporter: any = await createTransporter();
      const response = await emailTransporter
        .sendMail(emailOptions)
        .catch((err: Error | null) =>
          console.log("Email Transport Err: ", err)
        );
      return response;
    } catch (error) {
      console.log("Email Transport Error: ", error);
    }
  };

  try {
    const emailResponse: any = await sendEmail({
      from:  EMAIL  ,
      to: email ,
      subject: `Errata: Mensalidade de ${mes}`,
      html: `  <div className="flex flex-col gap-2 text-start w-full">
      <p>Olá,</p>
      <p>Pedimos perdão. O último e-mail foi enviado com o mês errado.</p>
      <p>
        Segue o valor da mensalidade referente às aulas de dança no mês de
        ${mes}
        ${sexo === "f" ? "da aluna" : "do aluno"} ${name}.
      </p>
      <p className="uppercase">
        Total de ${mes}:R$ ${valorTotal}.
      </p>
      <p>Lembrando que o vencimento é no dia 10 de cada mês.</p>
      ${alunoDeEscola
          ? ""
          : `<p>Para pagamentos efetuados até o dia 5, o valor fica R$${valorAlterado ? valorAlterado : valorTotal - 15
          }.</p>`
        }
      <p>
        Seguem os dados para transferência:
        <br />
        Agência: 0001
        <br />
        Conta: 34783102-2
        <br />
        Nu Pagamentos S.A.
        <br />
        Sasso - Centro de Dança
        <br />
        CNPJ: 40.349.487/0001-37
        <br />
        <br />
        PIX: 40.349.487/0001-37
      </p>
      <p>
        Qualquer dúvida, por favor entre em contato atráves do email
        contato@sassodanca.com, ou
        <a target="_blank" href="https://www.instagram.com/sassodanca/">
          nosso instagram, sassodanca
        </a>
      </p>
      <p>Feliz 2024,</p>
      <p>Att,</p>
      <div>Sasso - Centro de Dança</div>
    </div>
    `,
    });
    console.log("Email enviado", emailResponse);
    return NextResponse.json(
      {
        message: "Email enviado",
      },
      {
        status: 200,
      }
    );
  } catch (error: any) {
    console.log("Send Email Error: ", error);
    throw 500;
  }
}
 */