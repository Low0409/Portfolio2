import Image from "next/dist/client/image";

function Product(props) {
    const { name, img, width, height, about, time, people, role, text, tech } = props;
    return (
        <div className="bg-white rounded-lg shadow-2xl pb-8 border-2 border-gray-600">
            <h2 className="text-2xl font-bold text-center bg-black text-white py-2 mt-4">{name}</h2>
            <div className="container max-w-4xl m-auto px-4 mt-10">
                <Image
                    src={img}
                    alt={name}
                    width={width}
                    height={height}
                />
            </div>
            <div className="p-8">
                <p>【概要】{about}</p>
                <p>【開発期間】{time}</p>
                <p>【開発人数】{people}人</p>
                <p>【役割】{role}</p>
                <p>【詳細・開発秘話】{text}</p>
                <p>【使用した主な技術】:{tech}</p>
            </div>
        </div>
    );
}

export async function getServerSideProps(ctx) {


    return {
        props: {
            data: null
        }
    }
}

export default Product;