import Head from "next/head";

export default function Home() {
  // const [position, setPosition] = useState<GeolocationPosition>();
  // const [positionError, setPositionError] = useState<string | null>(null);
  //
  // useEffect(() => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((p) => {
  //       setPosition(p);
  //     });
  //   } else {
  //     setPositionError("Geolocation is not supported by this browser.");
  //   }
  // }, []);

  return (
    <>
      <Head>
        <title>🥊🇵🇦</title>
        <meta name="description" content="Panamá :(" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Panamá :(</h1>

      <button>Tengo problemas</button>
    </>
  );
}
