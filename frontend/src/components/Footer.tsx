const FooterPage = () => {
    const footerItems = [
        {
         name:'facebook',
         link:'https://www.facebook.com/juanpatrick.gallardo/',
         component: <svg fill="#ffb703" viewBox="-3.2 -3.2 38.40 38.40" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"><rect x="-3.2" y="-3.2" width="38.40" height="38.40" rx="1.92" fill="#023047" strokeWidth="0"></rect></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.512"></g><g id="SVGRepo_iconCarrier"><path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z"></path></g></svg>
        },
        {
         name: 'linkedin',
         link:'https://www.linkedin.com/in/patrick-gallardo-7b0537214/',
         component: <svg fill="#ffb703" viewBox="-192 -192 2304.00 2304.00" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"><rect x="-192" y="-192" width="2304.00" height="2304.00" rx="115.2" fill="#023047" strokeWidth="0"></rect></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M478.234 600.75V1920H.036V600.75h478.198Zm720.853-2.438v77.737c69.807-45.056 150.308-71.249 272.38-71.249 397.577 0 448.521 308.666 448.521 577.562v737.602h-480.6v-700.836c0-117.867-42.173-140.215-120.15-140.215-74.134 0-120.151 23.55-120.151 140.215v700.836h-480.6V598.312h480.6ZM239.099 0c131.925 0 239.099 107.294 239.099 239.099s-107.174 239.099-239.1 239.099C107.295 478.198 0 370.904 0 239.098 0 107.295 107.294 0 239.099 0Z" fillRule="evenodd"></path> </g></svg>
        },
        {
         name: 'github',
         link:'https://github.com/pat-gallardo',
         component: <svg fill="#ffb703" viewBox="-102.4 -102.4 1228.80 1228.80" xmlns="http://www.w3.org/2000/svg" className="icon" stroke="#ffb703"><g id="SVGRepo_bgCarrier" strokeWidth="0"><rect x="-102.4" y="-102.4" width="1228.80" height="1228.80" rx="61.44" fill="#023047" strokeWidth="0"></rect></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path> </g></svg>
        }
    ]

    return (
    <>
    <div id="footer-container" className="bg-[#001520] h-40">
        <div className="flex justify-center space-x-4 pt-10">
        {footerItems.map((item, index)=> (
            <a href={item.link} target="_blank" rel="noopener noreferrer"
             className="flex h-10" key={index}>{item.component}</a>
        ))}
        </div>
        <div className="flex justify-center pt-2">
            <div>&copy; 2024 Juan Patrick Gallardo&trade;.</div>
        </div>
        <div className="flex justify-center text-sm">
        <div>All rights reserved</div>
        </div>
    </div>
    </>
    )
}

export default FooterPage;