import cron from 'node-cron';
import { pool } from './database.js';
import { alterarEstadoInstancia } from './oci-service.js';

console.log("🚀 Agendador OCI Online...");

// Verifica o banco a cada minuto
cron.schedule('* * * * *', async () => {
    console.log("⏱️ Verificando tarefas pendentes...");
    
    try {
        const [rows] = await pool.query(
            "SELECT * FROM agendamentos WHERE status = 'PENDENTE' AND horario_agendado <= NOW()"
        );

        for (const tarefa of rows) {
            try {
                console.log(`Executando ${tarefa.acao} na VM ${tarefa.instance_id}`);
                await alterarEstadoInstancia(tarefa.instance_id, tarefa.acao);
                
                await pool.query("UPDATE agendamentos SET status = 'EXECUTADO' WHERE id = ?", [tarefa.id]);
                console.log("✅ Sucesso!");
            } catch (err) {
                console.error("❌ Erro na OCI:", err.message);
                await pool.query("UPDATE agendamentos SET status = 'ERRO', mensagem_erro = ? WHERE id = ?", [err.message, tarefa.id]);
            }
        }
    } catch (error) {
        console.error("Erro no Banco de Dados:", error);
    }
});