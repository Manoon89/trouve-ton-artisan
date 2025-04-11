// kill-port.js
const { exec } = require('child_process');

const PORT = process.env.PORT || 3000;

exec(`netstat -ano | findstr :${PORT}`, (err, stdout) => {
    if (err || !stdout) {
        console.log(`✅ Aucun processus ne bloque le port ${PORT}`);
        return;
    }

    const lines = stdout.trim().split('\n');
    const pids = new Set(
        lines.map(line => line.trim().split(/\s+/).pop())
    );

    pids.forEach(pid => {
        exec(`taskkill /PID ${pid} /F`, (errKill) => {
            if (errKill) {
                console.error(`❌ Erreur lors de la fermeture du PID ${pid} :`, errKill.message);
            } else {
                console.log(`✅ PID ${pid} tué avec succès`);
            }
        });
    });
});
