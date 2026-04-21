import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
} from "recharts";
import {
    BarChart3,
    Trophy,
    Layers,
    Activity
} from "lucide-react";
import "./Progress.css";

function Progress() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const storedUser = localStorage.getItem("user");
    const user = storedUser ? JSON.parse(storedUser) : null;

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!user?._id) {
                    setLoading(false);
                    return;
                }

                const res = await fetch(
                    `http://localhost:3000/api/progress/${user._id}`
                );
                const json = await res.json();

                const formatted = json
                    .filter(item => item?.analise?.nota > 0)
                    .map((item, index) => ({
                        nota: item.analise.nota,
                        nome: item.nomeArquivo || "Currículo",
                        date: item.data
                            ? new Date(item.data).toLocaleString("pt-BR", {
                                day: "2-digit",
                                month: "short",
                                hour: "2-digit",
                                minute: "2-digit"
                            }).replace(",", " •")
                            : `Análise ${index + 1}`
                    }));

                setData(formatted);
                setLoading(false);

            } catch (err) {
                console.error(err);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const total = data.length;

    const media = total
        ? data.reduce((acc, item) => acc + item.nota, 0) / total
        : 0;

    const melhor = total ? Math.max(...data.map(d => d.nota)) : 0;

    const getStatus = () => {
        if (media >= 70) return "Bom";
        if (media >= 50) return "Médio";
        return "Baixo";
    };

    const getStatusClass = () => {
        if (media >= 70) return "good";
        if (media >= 50) return "average";
        return "low";
    };

    return (
        <>
            <Navbar />

            <div className="progress-container">
                <h1>Meu Progresso</h1>

                {loading && <p>Carregando...</p>}
                {!loading && data.length === 0 && (
                    <div className="empty-state">
                        <p>Nenhuma análise encontrada</p>
                    </div>
                )}

                {!loading && data.length > 0 && (
                    <>
                        {/* CARDS */}
                        <div className="cards">

                            <div className="card">
                                <BarChart3 size={28} />
                                <span>Média</span>
                                <h2>{media.toFixed(1)}</h2>
                            </div>

                            <div className="card">
                                <Trophy size={28} />
                                <span>Melhor Nota</span>
                                <h2>{melhor}</h2>
                            </div>

                            <div className="card">
                                <Layers size={28} />
                                <span>Total</span>
                                <h2>{total}</h2>
                            </div>

                            <div className="card">
                                <Activity size={28} />
                                <span>Status</span>
                                <h2 className={`status ${getStatusClass()}`}>
                                    {getStatus()}
                                </h2>
                            </div>

                        </div>

                        {/* EVOLUÇÃO */}
                        <p className="evolution">
                            Evolução:{" "}
                            {data.length >= 2
                                ? data[data.length - 1].nota > data[0].nota
                                    ? "Melhora"
                                    : "Queda"
                                : "Estável"}
                        </p>

                        {/* GRÁFICO */}
                        <div className="chart-box">
                            <ResponsiveContainer width="100%" height={320}>
                                <LineChart
                                    data={data}
                                    margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
                                >

                                    <XAxis
                                        dataKey="date"
                                        stroke="#64748b"
                                        tick={{ fill: "#94a3b8", fontSize: 12 }}
                                    />

                                    <YAxis
                                        domain={[0, 100]}
                                        stroke="#64748b"
                                        tick={{ fill: "#94a3b8", fontSize: 12 }}
                                    />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: "#020617",
                                            border: "1px solid #334155",
                                            borderRadius: "10px",
                                            color: "#e2e8f0"
                                        }}
                                        labelStyle={{ color: "#94a3b8" }}
                                        itemStyle={{ color: "#3b82f6", fontWeight: "bold" }}
                                    />

                                    <Line
                                        type="natural"
                                        dataKey="nota"
                                        stroke="#3b82f6"
                                        strokeWidth={4}
                                        dot={{ r: 5 }}
                                        activeDot={{ r: 7 }}
                                    />

                                </LineChart>
                            </ResponsiveContainer>
                        </div>

                        {/* HISTÓRICO */}
                        <div className="history">
                            <h2>Histórico</h2>

                            {data.map((item, i) => (
                                <div key={i} className="history-item">
                                    <div className="history-info">
                                        <span className="file-name">{item.nome}</span>
                                        <small>{item.date}</small>
                                    </div>

                                    <strong className="nota">{item.nota}</strong>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>

            <Footer />
        </>
    );
}

export default Progress;