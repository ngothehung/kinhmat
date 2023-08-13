import React from 'react'

type Props = {}

const StorePage = (props: Props) => {
    return (
        <div className="text-[12px] max-w-7xl mx-auto pt-20"><h2 className="rich-text__heading rte h1">
            <span>HÀ NỘI, VIỆT NAM</span>
        </h2><div className="">
                <p className='pt-5'><strong>Hanoi IRL Flagship Store</strong></p>
                <p>44 Tôn Đức Thắng, Quận Đống Đa, Hà Nội </p>
                <p>Thứ Hai - Chủ Nhật </p>
                <p>9.00 AM - 10.00 PM</p>
            </div><div className="pt-5"><a href="/en/pages/cua-hang-hn" className="">KHÁM PHÁ</a></div><h2 className="rich-text__heading rte h1">
                <span className=''>HỒ CHÍ MINH, VIỆT NAM</span>
            </h2><div className="pt-5">
                <p><strong>Saigon IRL Flagship Store D3</strong></p><p>199 Điện Biên Phủ, Phường 6, Quận 3, Sài Gòn</p><p>Thứ Hai - Chủ Nhật</p><p>9.00 AM - 10.00PM</p>
            </div><div className="pt-5"><a href="/en/pages/cua-hang-hcm-d3" className=" button--underline">KHÁM PHÁ</a></div>
            <div className="pt-5">
                <p><strong>Saigon IRL Flagship Store D1</strong></p><p>92 Nam Kỳ Khởi Nghĩa, Phường Bến Nghé, Quận 1, Sài Gòn</p><p>Thứ Hai - Chủ Nhật</p><p>9.00 AM - 10.00PM</p>
            </div><div className="rich-text__buttons"><a href="/en/pages/cua-hang-hcm-d1" className=" button--underline">KHÁM PHÁ</a></div></div>
    )
}

export default StorePage