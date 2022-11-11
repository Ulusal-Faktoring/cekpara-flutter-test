import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <base href="/" />

        <meta charSet="UTF-8" />
        <meta content="IE=Edge" httpEquiv="X-UA-Compatible" />
        <meta name="description" content="A new Flutter project." />

        {/* <!-- iOS meta tags & icons --> */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="cekpara" />
        <link rel="apple-touch-icon" href="icons/Icon-192.png" />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/croppie/2.6.5/croppie.css"
        />
        <script
          defer
          src="https://cdnjs.cloudflare.com/ajax/libs/exif-js/2.3.0/exif.js"
        ></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/croppie/2.6.5/croppie.min.js"></script>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCdR74otB8oHqoEJq1jBbaOsMM6W3yY-G4"></script>
        <link rel="manifest" href="manifest.json" />
        <style
          dangerouslySetInnerHTML={{
            __html: `
          .croppie-container {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
        `,
          }}
        ></style>
      </Head>
      <body>
        <Main />
        <script
          dangerouslySetInnerHTML={{
            __html: `
        var serviceWorkerVersion = null;
        var scriptLoaded = false;
        function loadMainDartJs() {
          if (scriptLoaded) {
            return;
          }
          scriptLoaded = true;
          var scriptTag = document.createElement("script");
          scriptTag.src = "main.dart.js";
          scriptTag.type = "application/javascript";
          document.body.append(scriptTag);
        }

        loadMainDartJs();
        `,
          }}
        ></script>
        <NextScript />
      </body>
    </Html>
  );
}
