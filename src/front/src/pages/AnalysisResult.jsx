import { CheckCircle, AlertTriangle, Lightbulb, Copy, RefreshCw } from "lucide-react";
import Swal from "sweetalert2";

export default function AnalysisResult({ analise, onReset }) {
    const handleCopy = () => {
        const text = `Score ATS: ${analise.nota}/100\n\n✅ Pontos Fortes:\n- ${analise.pontosFortes.join('\n- ')}\n\n⚠️ Oportunidades de Melhoria:\n- ${analise.pontosFracos.join('\n- ')}\n\n💡 Sugestões:\n- ${analise.sugestoes.join('\n- ')}`;
        navigator.clipboard.writeText(text);
        Swal.fire({ icon: "success", title: "Copiado!", text: "Relatório copiado para a área de transferência.", timer: 2000, showConfirmButton: false });
    };

    const getScoreColor = (nota) => {
        if (nota >= 75) return "#00c896"; // Verde
        if (nota >= 50) return "#facc15"; // Amarelo
        return "#ef4444"; // Vermelho
    };

    return (
        <div className="resultado-container fade-in">
            <div className="resultado-header">
                <h2>Relatório de Empregabilidade</h2>
                <div className="action-buttons">
                    <button className="btn-icon" onClick={handleCopy} title="Copiar resultados"><Copy size={18} /> Copiar</button>
                    <button className="btn-icon outline" onClick={onReset} title="Analisar outro currículo"><RefreshCw size={18} /> Nova Análise</button>
                </div>
            </div>

            <div className="score-panel" style={{ borderColor: getScoreColor(analise?.nota) }}>
                <div className="score-circle" style={{ color: getScoreColor(analise?.nota) }}>
                    {analise?.nota ?? 0}
                </div>
                <div className="score-text">
                    <h3>Score ATS Geral</h3>
                    <p>{analise?.nota >= 75 ? "Seu currículo está altamente competitivo!" : "Seu currículo precisa de ajustes para passar nos filtros."}</p>
                </div>
            </div>

            <div className="feedback-grid">
                <div className="resultado-box border-green">
                    <h3><CheckCircle size={20} color="#00c896" /> Pontos Fortes</h3>
                    <ul className="list-green">
                        {analise?.pontosFortes?.length > 0 ? analise.pontosFortes.map((item, i) => <li key={i}>{item}</li>) : <li>Nenhum ponto forte encontrado</li>}
                    </ul>
                </div>

                <div className="resultado-box border-red">
                    <h3><AlertTriangle size={20} color="#ef4444" /> Pontos Fracos</h3>
                    <ul className="list-red">
                        {analise?.pontosFracos?.length > 0 ? analise.pontosFracos.map((item, i) => <li key={i}>{item}</li>) : <li>Nenhum ponto fraco encontrado</li>}
                    </ul>
                </div>

                <div className="resultado-box border-blue">
                    <h3><Lightbulb size={20} color="#3b82f6" /> Sugestões de Melhoria</h3>
                    <ul className="list-blue">
                        {analise?.sugestoes?.length > 0 ? analise.sugestoes.map((item, i) => <li key={i}>{item}</li>) : <li>Nenhuma sugestão disponível</li>}
                    </ul>
                </div>
            </div>
        </div>
    );
}