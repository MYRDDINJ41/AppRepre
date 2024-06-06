import { useState, useEffect } from "react";

export function useFetch (url) {
    const [info, setInfo] = useState(null);

    useEffect(() => {
      fetch(url)
        .then((res) =>  res.json())
        .then((info) => setInfo(info))
        .catch((error) => console.error("Este es el error", error)); // Manejo de errores dentro del catch
    }, []);

    return {info}
}