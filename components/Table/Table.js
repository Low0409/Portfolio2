import React from 'react'
import List from './List'
const Table = () => {
    return (
        <div>
            <table className="table-auto m-auto">
                <thead>
                    <tr>
                        <th className="px-4 py-2">ツール名</th>
                    </tr>
                </thead>
                <tbody>

                    <List ToolName="Microsoft Office系" color="" />
                    <List ToolName="vscode" color="bg-gray-100" />
                    <List ToolName="GitHub" color="" />
                    <List ToolName="GitLab" color="" />
                    <List ToolName="WordPress" color="bg-gray-100" />
                    <List ToolName="Photoshop" color="" />
                    <List ToolName="Eclipse" color="bg-gray-100" />
                    <List ToolName="adobe Animate" color="" />
                    <List ToolName="slack" color="bg-gray-100" />
                    <List ToolName="Discord" color="" />
                    <List ToolName="XAMPP" color="bg-gray-100" />
                    <List ToolName="MAMP" color="" />
                </tbody>

            </table>
        </div>
    )
}

export default Table
