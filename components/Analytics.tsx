export default function Analytics() {
  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-H9093VEY2L`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];

          function gtag() {
            dataLayer.push(arguments);
          }

          gtag('js', new Date());
          gtag('config', 'G-H9093VEY2L', {
            anonymize_ip: true,
            page_path: window.location.pathname
          });
        `,
        }}
      />
    </>
  );
}
