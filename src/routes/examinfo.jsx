import { DownloadFile } from "../components/files"; 

export default function ExamInfo() {
    return (
        <>
            <h2>考试信息</h2>
            <table>
                <thead>
                    <tr>
                        <th>场次</th>
                        <th>课程</th>
                        <th>考试日期</th>
                        <th>考试地点</th>
                        <th>考试范围（大概）</th>
                        <th>笔记</th>
                        <th>往年试卷</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>第一场</td>
                        <td>实变函数</td>
                        <td><div className="warning-red">6-22, 15:40-17:40</div></td>
                        <td>上院112</td>
                        <td>Lebesgue 测度论、积分论、微积分基本定理、Lp 空间理论</td>
                        <td><a href="https://github.com/Deferria/26-RealAnalysis">笔记链接</a></td>
                        <td>
                            <DownloadFile filename="RA-25.pdf" url="2025期末-戎锋.pdf" />
                            <br />
                            <DownloadFile filename="RA-23.pdf" url="2023期末-戎锋.pdf" />
                        </td>
                    </tr>
                    <tr>
                        <td>第二场</td>
                        <td>抽象代数</td>
                        <td><div className="warning-red">6-23, 08:00-10:00</div></td>
                        <td>中院213</td>
                        <td>群论 40%, 环论 40%, 域论 20% <br/> (gy自己说的)</td>
                        <td><a href="https://github.com/Deferria/08-AbstractAlgebra">笔记链接</a></td>
                        <td><div className="warning-green">待更新</div></td>
                    </tr>
                    <tr>
                        <td>第三场</td>
                        <td>数理统计</td>
                        <td><div className="warning-red">6-24, 15:40-17:40</div></td>
                        <td>下院115</td>
                        <td>矩估计、最大似然估计、一致最小方差无偏估计、区间估计、参数假设检验、似然比检验</td>
                        <td><a href="https://github.com/Deferria/62-MathematicalStatistics">笔记链接</a></td>
                        <td><div className="warning-green">待更新</div></td>
                    </tr>
                    <tr>
                        <td>第四场</td>
                        <td>泛函分析</td>
                        <td><div className="warning-red">6-26, 10:30-12:30</div></td>
                        <td>中院211</td>
                        <td>“考纲中的所有内容” <br /> (lsr自己说的)</td>
                        <td><a href="https://github.com/Deferria/46-FunctionalAnalysis">笔记链接</a></td>
                        <td>
                            <DownloadFile filename="FunctAnal-24.pdf" url="Func_final_exam_24-25_B.pdf" />
                            <br />
                            <DownloadFile filename="FunctAnal-22.pdf" url="Functional Analysis_Final_exam_2022.pdf" />
                        </td>
                    </tr>
                    <tr>
                        <td>第五场</td>
                        <td>ODE</td>
                        <td><div className="warning-red">6-26, 15:40-17:40</div></td>
                        <td>下院115</td>
                        <td>一阶线性 ODE、解的存在唯一性、线性方程组、高阶常系数线性 ODE、首次积分与一阶线性 PDE</td>
                        <td>
                            <DownloadFile filename="ODE_checklist.pdf" url="ODE_checklist.pdf" />
                        </td>
                        <td>
                            <DownloadFile filename="ODE_past_exam.pdf" url="23-24春常微分方程期末试卷.pdf" />
                            <br />
                            <h6>这是来自传承上的资料. </h6>
                        </td>
                    </tr>
                    <tr>
                        <td>第六场</td>
                        <td>数值分析</td>
                        <td><div className="warning-red">6-29, 10:30-12:30</div></td>
                        <td>上院215</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}