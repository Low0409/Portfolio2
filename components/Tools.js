import React from 'react'

const Tools = () => {
    return (
        <>
            <h1 className="flex justify-center mt-8 mb-5">触ったことがあるツール</h1>
            <table className="table-auto m-auto">
                <thead>
                    <tr>
                        <th className="px-4 py-2">ツール名</th>
                    </tr>
                </thead>
                <tbody>
                <tr className="bg-gray-100">
                        <td className="border px-4 py-2">Microsoft Office系</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">vscode</td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="border px-4 py-2">Github</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">WordPress</td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="border px-4 py-2">PhotoShop</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">Eclipse</td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="border px-4 py-2">adobe Animeter</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">slack</td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="border px-4 py-2">Discord</td>
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">XAMPP</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Tools
