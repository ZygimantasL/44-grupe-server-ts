import { server } from "./lib/server";

console.clear();

type App = {
    init: () => void;
}

const app ={} as App;

app.init = () =>{
    // susikurti reikiamus / trukstamus folderius ir failus.
    // atsinaujinti informacija.
    // duombaze:
    // - prisijungti
    // - pasiruosti struktura
    // - surasyti pradinius duomenis
    // paleisti serverio logika
    
    server.init();
    
}

//app.init();

export default app;
