import { server } from "./lib/server";
console.clear();
const app = {};
app.init = () => {
    // susikurti reikiamus / trukstamus folderius ir failus.
    // atsinaujinti informacija.
    // duombaze:
    // - prisijungti
    // - pasiruosti struktura
    // - surasyti pradinius duomenis
    // paleisti serverio logika
    server.init();
};
app.init();
export default app;
