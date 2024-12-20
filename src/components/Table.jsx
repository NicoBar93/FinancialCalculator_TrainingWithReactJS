import { formatter } from '../util/investment';

export default function Table({newData}) {
    return ( newData.length > 0 ? 
        <table>
            <tbody className='textAlign'>
                <tr>
                    <th className='space-between customBg'>Year</th>
                    <th className='space-between customBg'>Investment Value</th>
                    <th className='space-between customBg'>Interest (Year)</th>
                    <th className='space-between customBg'>Total Interest</th>
                    <th className='space-between customBg'>Invested Capital</th>
                </tr>
                {newData.map((row) => (
                    <tr key={`${row.year}, ${row.annualInvestment}`}>
                        <td key={row.year}>{row.year}</td>
                        <td key={row.valueEndOfrow}>{formatter.format(row.valueEndOfYear)}</td>
                        <td key={`${row.interest}+interest`}>{formatter.format(row.interest)}</td>
                        <td key={row.totalInterest}>{formatter.format(row.totalInterest)}</td>
                        <td key={row.investmentValue}>{formatter.format(row.totalInvestment)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        :
        <p className="center">No data to show</p>
    )
}