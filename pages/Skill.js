import React from 'react'
import Tools from '../components/Tools'
import Container from '../components/container'
const Skill = () => {
    return (
        <>
            <Container>
                <h1 className="flex justify-center mb-5">いままでに触ったことがある技術</h1>
                <table className="table-auto m-auto">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">技術名</th>
                            <th className="px-4 py-2">理解度(正直)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2">HTML</td>
                            <td className="border px-4 py-2">🌟🌟🌟🌟🌟</td>
                        </tr>
                        <tr className="bg-gray-100">
                            <td className="border px-4 py-2">CSS</td>
                            <td className="border px-4 py-2">🌟🌟🌟🌟</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">JavaScript</td>
                            <td className="border px-4 py-2">🌟🌟🌟</td>
                        </tr>
                        <tr className="bg-gray-100">
                            <td className="border px-4 py-2">PHP</td>
                            <td className="border px-4 py-2">🌟🌟</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">GitHub</td>
                            <td className="border px-4 py-2">🌟🌟🌟</td>
                        </tr>
                        <tr className="bg-gray-100">
                            <td className="border px-4 py-2">TypeScript</td>
                            <td className="border px-4 py-2">🌟🌟</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">React</td>
                            <td className="border px-4 py-2">🌟🌟</td>
                        </tr>
                        <tr className="bg-gray-100">
                            <td className="border px-4 py-2">Next.js</td>
                            <td className="border px-4 py-2">🌟🌟</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Express</td>
                            <td className="border px-4 py-2">🌟🌟🌟</td>
                        </tr>
                        <tr className="bg-gray-100">
                            <td className="border px-4 py-2">WordPress</td>
                            <td className="border px-4 py-2">🌟🌟</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Linux</td>
                            <td className="border px-4 py-2">🌟🌟</td>
                        </tr>
                        <tr className="bg-gray-100">
                            <td className="border px-4 py-2">Java</td>
                            <td className="border px-4 py-2">🌟</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">MySQL</td>
                            <td className="border px-4 py-2">🌟🌟</td>
                        </tr>
                        <tr className="bg-gray-100">
                            <td className="border px-4 py-2">JQuery</td>
                            <td className="border px-4 py-2">🌟🌟🌟</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">bootstrap</td>
                            <td className="border px-4 py-2">🌟🌟🌟</td>
                        </tr>
                        <tr className="bg-gray-100">
                            <td className="border px-4 py-2">tailwind</td>
                            <td className="border px-4 py-2">🌟🌟</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">python</td>
                            <td className="border px-4 py-2">🌟</td>
                        </tr>
                        <tr className="bg-gray-100">
                            <td className="border px-4 py-2">Node.js</td>
                            <td className="border px-4 py-2">🌟🌟🌟</td>
                        </tr>
                    </tbody>
                </table>
                <Tools />
            </Container>

        </>
    )
}

export default Skill