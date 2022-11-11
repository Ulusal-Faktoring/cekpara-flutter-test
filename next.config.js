module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "/api/:path*",
        destination: "https://papi.cekpara.com",
      },
    ];
  };
  return {
    rewrites,
  };
};
