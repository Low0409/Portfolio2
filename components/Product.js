import Image from "next/dist/client/image";

function Product(props) {
    const { name, img, width, height, about, time, people, role, text, tech } = props;
    return (
        <div>

            <h2 className="text-2xl font-bold bg-gray-500 shadow-sm text-white p-3">・{name}</h2>
            <div className="container max-w-4xl m-auto px-4 mt-10">

                <Image
                    src={img}
                    alt={name}
                    width={width}
                    height={height}
                />
            </div>
            <p>【概要】{about}</p>
            <p>【開発期間】{time}</p>
            <p>【開発人数】{people}人</p>
            <p>【役割】{role}</p>
            <p>【詳細・開発秘話】{text}</p>
            <p>【使用した主な技術】:{tech}</p>

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