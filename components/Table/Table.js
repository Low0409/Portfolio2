import React from 'react'
import List from './List'
import Container from '../container'
const Table = () => {
    return (
        <Container>
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
                    <List ToolName="Github" color="" />
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



        </Container>

    )
}

export default Table
