interface TableProps {
    data: {
        productName: string;
        color: string;
        category: string;
        price: string;
    }[];
}

export default function Table({ data }: TableProps) {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                {/* ... table header ... */}
                <tbody>
                {data.map((item, index) => (
                    <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800'} dark:border-gray-700`}>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {item.productName}
                        </th>
                        <td className="px-6 py-4">
                            {item.color}
                        </td>
                        <td className="px-6 py-4">
                            {item.category}
                        </td>
                        <td className="px-6 py-4">
                            {item.price}
                        </td>
                        <td className="px-6 py-4">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
