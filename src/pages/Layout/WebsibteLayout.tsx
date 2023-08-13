
import { Outlet } from 'react-router-dom'
import '../../App.css'
import '../../index.css'


const WebsiteLayout = () => {
    return (
        <div className=''>
            <header className='h-[15%]'>
                <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 text-black">
                    <div className="flex  flex-wrap justify-between items-center mx-auto max-w-screen-xl">

                        <div className="flex items-center lg:order-2">
                            <a href="signin" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">LOG IN</a>
                            <a href="signup" className="text-white  bg-gray-600 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">sign up</a>
                            <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </div>

                        <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 text-black">
                                
                                <li>
                                    <a href="#" className=""></a>
                                </li>
                                <li>
                                    <a href="aboutus" className="hover:underline">VỀ CHÚN TÔI</a>
                                </li>
                                <li>
                                    <a href="/products" className="hover:underline">SẢN PHẨM</a>
                                </li>
                                <li>
                                    <a href="storepage" className="hover:underline">CỬA HÀNG</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">DỊCH VỤ</a>
                                </li>
                            </ul>
                        </div>
                        <a href="https://flowbite.com" className="flex items-center">
                            
                        </a>
                    </div>
                </nav>
            </header>

        
            <main className='h-[70%]'>
                <Outlet />
            </main>
            <footer className='mx-auto ml-10  p-10 h-[15%]'>
                <div className='grid grid-cols-4 '>
                    <div>
                        <h4>LIÊN HỆ</h4>
                        <ul>
                            <li>SUPPORT@SEESON.VN</li>
                            <li>Hotline</li>
                        </ul>
                    </div>
                    <div>
                        <h4>THÔNG TIN</h4>
                        <ul>
                            <li><a href="">Chính Sách Mua Hàng & Bảo Hành</a></li>
                            <li><a href="">Chính Sách Đổi Trả</a></li>
                            <li><a href="">hướng dẫn sử dụng</a></li>
                            <li><a href="">Điều Khoản</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>SOCIAL</h4>
                        <ul>
                            <li><a href="">Facebook</a></li>
                            <li><a href="">Instagram</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>ĐĂNG KÝ EMAIL</h4>
                        <ul>
                            <li>SUPPORT@SEESON.VN</li>
                            <li>Hotline</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default WebsiteLayout